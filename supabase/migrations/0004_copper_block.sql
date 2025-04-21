/*
  # Blog Management System

  1. Schema Updates
    - Add full-text search capabilities
    - Add published status
    - Add metadata fields

  2. Security
    - Enable RLS
    - Add policies for authenticated users
*/

-- Enable full-text search
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS search_vector tsvector 
GENERATED ALWAYS AS (
  to_tsvector('english', coalesce(title, '') || ' ' || coalesce(excerpt, '') || ' ' || coalesce(content, ''))
) STORED;

CREATE INDEX IF NOT EXISTS blog_posts_search_idx ON blog_posts USING GIN (search_vector);

-- Add published status and metadata
ALTER TABLE blog_posts 
  ADD COLUMN IF NOT EXISTS is_published boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS published_at timestamptz,
  ADD COLUMN IF NOT EXISTS meta_description text,
  ADD COLUMN IF NOT EXISTS meta_keywords text[];

-- Update RLS policies
CREATE POLICY "Public users can read published posts"
  ON blog_posts
  FOR SELECT
  USING (is_published = true);

CREATE POLICY "Authenticated users can manage posts"
  ON blog_posts
  USING (auth.role() = 'authenticated');