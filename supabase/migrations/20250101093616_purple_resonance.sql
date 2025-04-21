/*
  # Blog Management System

  1. Tables
    - blog_posts table updates for better image handling and content management
  
  2. Functions
    - Function to manage blog posts
    - Function to handle image storage
  
  3. Policies
    - Updated policies for admin access
*/

-- Add image handling columns
ALTER TABLE blog_posts
ADD COLUMN IF NOT EXISTS image_aspect_ratio numeric DEFAULT 1.0,
ADD COLUMN IF NOT EXISTS image_focal_point jsonb DEFAULT '{"x": 0.5, "y": 0.5}';

-- Function to update blog posts
CREATE OR REPLACE FUNCTION update_blog_post(
  post_id uuid,
  post_data jsonb
) RETURNS blog_posts AS $$
DECLARE
  result blog_posts;
BEGIN
  UPDATE blog_posts
  SET
    title = COALESCE((post_data->>'title')::text, title),
    excerpt = COALESCE((post_data->>'excerpt')::text, excerpt),
    content = COALESCE((post_data->>'content')::text, content),
    image_url = COALESCE((post_data->>'image_url')::text, image_url),
    category = COALESCE((post_data->>'category')::text, category),
    updated_at = now()
  WHERE id = post_id
  RETURNING * INTO result;
  
  RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to handle image storage
CREATE OR REPLACE FUNCTION handle_blog_image_upload()
RETURNS trigger AS $$
BEGIN
  IF NEW.image_url IS NOT NULL AND NEW.image_url != OLD.image_url THEN
    -- Add image processing logic here if needed
    NEW.updated_at = now();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for image handling
CREATE TRIGGER blog_image_upload_trigger
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION handle_blog_image_upload();