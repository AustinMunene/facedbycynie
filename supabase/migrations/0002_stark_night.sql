-- Create admin user role
CREATE ROLE admin;

-- Grant necessary permissions to admin role
GRANT USAGE ON SCHEMA public TO admin;
GRANT ALL ON ALL TABLES IN SCHEMA public TO admin;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO admin;

-- Enable Row Level Security
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Create policy for admin access
CREATE POLICY "Admin users have full access"
  ON auth.users
  FOR ALL
  TO admin
  USING (auth.uid() IN (
    SELECT id FROM auth.users WHERE email = 'admin@facedby.cynie'
  ));