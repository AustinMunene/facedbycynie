# FacedByCynie

Faced by Cynie is a modern, elegant portfolio website for a professional makeup artist. The site highlights services, showcases past work, and provides an easy way for clients to get in touch — all wrapped in a clean, mobile-first design.

## Storage Migration (2025)

### What Changed

This codebase has been migrated from Supabase to a client-side storage solution:

- **Removed**: Supabase client, database, storage, and authentication
- **Replaced with**: 
  - localStorage for data persistence (blog posts, portfolio items)
  - localStorage-based authentication
  - Imgur as a read-only image CDN

### Image Handling

- Images are now served from Imgur (read-only CDN)
- All images use the `SafeImage` component with automatic fallback to placeholder images
- Image URLs should be full Imgur URLs or local asset paths

### Data Storage

- Blog posts and portfolio items are stored in browser localStorage
- Data persists across sessions but is browser-specific
- Default data is loaded from `src/data/blog.ts` and `src/data/portfolio.ts` on first load

### Authentication

- Admin authentication uses localStorage (simple email-based check)
- Session expires after 7 days
- Admin email: `admin@facedby.cynie`

### Future Migration

This is a temporary solution. To switch to a different provider:

1. **Images**: Update image URLs in data files to use the new CDN
2. **Storage**: Replace `src/utils/localStorage.ts` with your backend API
3. **Auth**: Replace `src/utils/localStorage.ts` auth functions with your auth provider

The codebase is structured to make this migration straightforward - all data access goes through centralized utilities.
