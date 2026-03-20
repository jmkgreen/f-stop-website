# F-Stop Camera Club Website

A lightweight static website for **F-Stop Camera Club**, a local photography group based in **Chatteris, Cambridgeshire**.

This project uses **Astro** to keep the site fast, simple, and easy to maintain. It is suitable for static hosting on **GitHub Pages** and **Cloudflare Pages**.

## Project goals

The site is intended to be:

- simple and low-maintenance
- visually strong and image-led
- accessible and responsive
- easy to edit in a public GitHub repository
- suitable for automated deployment

## Tech stack

- [Astro](https://astro.build/) for the static site
- HTML and CSS for structure and styling
- GitHub Actions for CI/CD
- GitHub Pages or Cloudflare Pages for hosting

## Getting started

### Prerequisites

- Node.js 24 LTS (recommended)
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build locally

```bash
npm run build
```

## Updating website content

Most edits are simple text/image changes in Astro page files:

- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/pages/meetings.astro`
- `src/pages/gallery.astro`
- `src/pages/contact.astro`

Suggested update flow:

1. Create a feature branch from `main`.
2. Edit the relevant page(s) and/or image references.
3. Run `npm run build` to confirm the site still builds.
4. Open a pull request to `main`.
5. Merge after review.

If you are making a quick urgent update and working directly on the default flow, at minimum run `npm run build` before push.

## Deploying

### GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that deploys on push to `main`.

One-time setup:

1. In GitHub repository settings, go to **Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main` and confirm workflow success in **Actions**.

### Cloudflare Pages

Cloudflare Pages is also supported and is a good fit for this project.

One-time setup:

1. In Cloudflare dashboard, go to **Workers & Pages** and create a new Pages project.
2. Connect this GitHub repository.
3. Use these build settings:
	- Build command: `npm run build`
	- Build output directory: `dist`
	- Node version: `24`
4. Save and deploy.

After setup, every push to the configured branch triggers a deployment.

## Image handling strategy

The site uses a two-tier image strategy:

- **In repo**: optimized web images used by pages (fast loading, small files).
- **External storage**: full-resolution originals, hosted outside the repo.

This keeps the repository lightweight and deployment fast.

For the full process (including Cloudflare R2 guidance), see:

- [docs/maintenance-and-images.md](docs/maintenance-and-images.md)

## Notes for maintainers

- Keep filenames lowercase and hyphenated.
- Update meaningful `alt` text whenever images change.
- Avoid committing camera originals or very large source image archives.