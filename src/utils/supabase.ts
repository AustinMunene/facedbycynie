import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export function getPublicImageUrl(path: string): string {
  // Remove any existing query parameters and tokens
  const cleanPath = path.split('?')[0];
  
  // Extract the bucket and file path
  const matches = cleanPath.match(/storage\/v1\/object\/public\/([^/]+)\/(.+)/);
  if (!matches) return path;
  
  const [, bucket, filePath] = matches;
  
  // Construct the public URL
  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${filePath}`;
} 