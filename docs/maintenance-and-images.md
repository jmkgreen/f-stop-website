# Maintenance and Image Hosting Guide

This document explains how to update the F-Stop website and how image hosting works.

## 1. Day-to-day content updates

Most updates are in these files:

- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/pages/meetings.astro`
- `src/pages/gallery.astro`
- `src/pages/contact.astro`

Recommended update process:

1. Pull latest changes from `main`.
2. Create a branch for your update.
3. Edit text and image references.
4. Run `npm run build`.
5. Open a PR and merge after review.

For small urgent updates, still run `npm run build` before pushing.

## 2. Where images should live

Use two classes of images:

1. Web images (in this repository)
2. Original/full-resolution images (external storage)

### Web images (in repo)

Store only web-ready assets in `public/images/`.

Typical target sizes:

- Hero images: around 1800 to 2400 px wide
- Gallery card images: around 1200 px wide
- Thumbnails: around 600 to 800 px wide

Use modern formats where practical:

- First choice: AVIF or WebP
- Fallback: JPEG

Keep each file as small as quality allows.

### Originals (external)

Store originals outside Git to avoid repository bloat and slow deployments.

Preferred path for this project:

- Cloudflare R2 bucket for storage
- Public custom domain or R2 public URL for access

## 3. Cloudflare R2 setup for full-resolution images

One-time setup:

1. In Cloudflare dashboard, open **R2** and create a bucket (for example `f-stop-originals`).
2. Upload original/high-resolution photos.
3. Enable controlled public access for only the paths you want to share.
4. Optionally configure a custom domain such as `images.fstopcameraclub.org`.
5. Decide folder conventions, for example:
   - `originals/2026/club-night/filename.jpg`
   - `originals/2026/photo-walk/filename.jpg`

## 4. How gallery images should link

Use web images from `public/images/` for page display.

If you want users to access full-resolution versions, link each displayed image to its R2 URL.

Example pattern:

- Display: `/images/gallery-01.webp`
- Full-resolution link target: `https://images.fstopcameraclub.org/originals/2026/photo-walk/gallery-01.jpg`

This gives a fast site while still offering high-quality downloads when needed.

## 5. Naming and accessibility rules

Always:

- use lowercase hyphenated filenames
- keep names descriptive (for example `chatteris-sunrise-river.webp`)
- provide meaningful `alt` text for content images
- use empty `alt=""` only for decorative images

## 6. Publishing updates

Choose one hosting path.

### A) GitHub Pages

- Deployment is automated via `.github/workflows/deploy-pages.yml`.
- Push/merge to `main` to deploy.

### B) Cloudflare Pages

One-time project settings:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `24`

After setup, each push to the configured branch triggers a deployment.

## 7. Quick checklist before merge

1. Text is updated and proofread.
2. Image filenames match references.
3. `alt` text is meaningful.
4. `npm run build` passes.
5. PR is reviewed and merged.