/*
  # Add video support to portfolio

  1. Changes
    - Add video_url column to portfolio table
    - Add video_thumbnail_url column for video previews
    - Add is_video flag to distinguish between images and videos

  2. Security
    - Maintain existing RLS policies
*/

ALTER TABLE portfolio
ADD COLUMN IF NOT EXISTS video_url text,
ADD COLUMN IF NOT EXISTS video_thumbnail_url text,
ADD COLUMN IF NOT EXISTS is_video boolean DEFAULT false;

-- Update the search index if it exists
CREATE INDEX IF NOT EXISTS idx_portfolio_videos ON portfolio (is_video);