/*
  # Create services and portfolio tables

  1. New Tables
    - `services`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `price` (text)
      - `category` (text)
      - `duration` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `portfolio`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `category` (text)
      - `image_url` (text)
      - `before_image` (text, nullable)
      - `products` (text[], nullable)
      - `testimonial` (jsonb, nullable)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Services Table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  price text NOT NULL,
  category text NOT NULL,
  duration text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read services"
  ON services FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can modify services"
  ON services
  USING (auth.role() = 'authenticated');

-- Portfolio Table
CREATE TABLE IF NOT EXISTS portfolio (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  before_image text,
  products text[],
  testimonial jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read portfolio"
  ON portfolio FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can modify portfolio"
  ON portfolio
  USING (auth.role() = 'authenticated');