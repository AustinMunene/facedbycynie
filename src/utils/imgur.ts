/**
 * Imgur utility for handling image URLs
 * 
 * This is a temporary read-only CDN solution.
 * Images should be referenced via full Imgur URLs.
 */

/**
 * Normalizes an image URL to ensure it's a valid Imgur URL or returns as-is
 * @param url - The image URL (can be Imgur, Supabase, or any other URL)
 * @returns The normalized URL
 */
export function normalizeImageUrl(url: string): string {
  if (!url) return '';
  
  // If it's already a full URL (http/https), return as-is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // If it's a relative path, assume it's a local asset
  if (url.startsWith('/')) {
    return url;
  }
  
  // For any other case, return as-is (might be a data URL or other format)
  return url;
}

/**
 * Checks if a URL is an Imgur URL
 */
export function isImgurUrl(url: string): boolean {
  return url.includes('imgur.com') || url.includes('i.imgur.com');
}

/**
 * Checks if a URL is a Supabase URL (for migration purposes)
 */
export function isSupabaseUrl(url: string): boolean {
  return url.includes('supabase.co');
}

