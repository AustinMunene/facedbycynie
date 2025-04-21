/*
  # Admin Dashboard Enhancement

  1. New Tables
    - `admin_settings`
      - `id` (uuid, primary key)
      - `key` (text, unique)
      - `value` (jsonb)
      - `updated_at` (timestamp)
      - `updated_by` (uuid)

  2. Security
    - Enable RLS on `admin_settings`
    - Add policies for admin access
*/

-- Create admin settings table
CREATE TABLE IF NOT EXISTS admin_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value jsonb NOT NULL,
  updated_at timestamptz DEFAULT now(),
  updated_by uuid REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE admin_settings ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Admin users can read settings"
  ON admin_settings
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM admin_users
    WHERE admin_users.user_id = auth.uid()
  ));

CREATE POLICY "Admin users can modify settings"
  ON admin_settings
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM admin_users
    WHERE admin_users.user_id = auth.uid()
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM admin_users
    WHERE admin_users.user_id = auth.uid()
  ));

-- Function to update admin settings
CREATE OR REPLACE FUNCTION update_admin_setting(
  setting_key text,
  setting_value jsonb
) RETURNS admin_settings AS $$
DECLARE
  result admin_settings;
BEGIN
  INSERT INTO admin_settings (key, value, updated_by)
  VALUES (setting_key, setting_value, auth.uid())
  ON CONFLICT (key) DO UPDATE
  SET 
    value = EXCLUDED.value,
    updated_at = now(),
    updated_by = EXCLUDED.updated_by
  RETURNING * INTO result;
  
  RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;