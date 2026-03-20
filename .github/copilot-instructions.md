# Copilot Instructions — F-Stop Camera Club Website

## Project overview
This repository contains a lightweight Astro-based static website for **F-Stop Camera Club**, a local photography group based in **Chatteris, Cambridgeshire, UK**.

The website should be:
- static and low-maintenance
- fast-loading
- accessible
- image-led
- easy to deploy to GitHub Pages or Cloudflare Pages
- easy for a developer to extend without introducing unnecessary complexity

## Technical direction
- Use **Astro** as the site framework
- Prefer **static output**
- Prefer **plain CSS** or a very small amount of scoped component styling
- Avoid React, Vue, Svelte, or other client frameworks unless there is a clear need
- Avoid server-side features, databases, authentication, and CMS integrations unless explicitly requested
- Minimize JavaScript and use progressive enhancement only where needed

## Project goals
Copilot should help produce a site that:
- presents the club clearly
- showcases photography attractively
- works well on mobile and desktop
- is easy to maintain in a public GitHub repository
- keeps hosting and deployment simple

## UX and design principles
- Keep the UI clean, calm, and photography-first
- Prioritize readability and simple navigation over novelty
- Use generous whitespace
- Use a restrained colour palette
- Let imagery be the main visual focus
- Avoid clutter, carousels, popups, autoplay, or intrusive animation

## Accessibility requirements
Aim for WCAG 2.1 AA standards where practical.

Always:
- use semantic HTML
- include one clear `h1` per page
- preserve heading hierarchy
- ensure keyboard accessibility
- provide visible focus states
- include meaningful alt text for content images
- use empty alt text for purely decorative images
- maintain sufficient colour contrast
- avoid relying only on colour to communicate meaning

## Performance requirements
This is especially important because the site is photography-focused.

Always:
- optimise images for web delivery
- prefer modern formats where appropriate
- avoid shipping oversized images
- use responsive images where practical
- keep client-side JavaScript minimal
- avoid large dependencies for simple tasks

## Image guidance
This repository should contain only images needed by the website.

Do:
- include web-ready images only
- use descriptive lowercase hyphenated filenames
- keep image dimensions appropriate to their display use
- use separate variants for hero, card, and thumbnail usage where appropriate

Do not:
- store original camera files
- store bulk archives of high-resolution images
- commit large unused assets
- assume Git LFS is part of the workflow unless explicitly introduced later

## Content structure
Prefer simple content structures that are easy to maintain.

Use:
- Astro pages and layouts
- reusable Astro components
- straightforward content collections or simple data files only when helpful

Avoid:
- over-engineering content models
- introducing unnecessary abstraction for a very small site

## Code style
- Prefer small, readable files
- Prefer explicit code over clever code
- Reuse layouts and components where it improves consistency
- Keep naming clear and predictable
- Follow existing project patterns once established
- Add comments only where intent is not obvious

## Styling guidance
- Start with a simple global stylesheet
- Use CSS custom properties for colours, spacing, and typography
- Build responsive layouts with modern CSS
- Avoid heavy styling frameworks unless explicitly requested
- Maintain a polished but understated visual design

## Suggested site sections
The initial site will likely include:
- Home
- About
- Meetings
- Gallery
- Contact or Join

These pages should be implemented in a way that keeps future edits simple.

## Deployment expectations
The project should be suitable for:
- GitHub Actions builds
- GitHub Pages deployment
- Cloudflare Pages deployment

Prefer configuration and code that works cleanly with static hosting.

## When generating code
Copilot should:
- default to Astro components and layouts
- keep the solution lightweight
- avoid unnecessary dependencies
- preserve accessibility and performance
- prefer static content over dynamic logic
- avoid introducing build complexity without a strong reason

## Non-goals
This project is not intended to be:
- a complex web application
- a social platform
- a photo management system
- a CMS-heavy site
- an SPA by default

## Summary
Build a lightweight, image-led Astro site that is elegant, accessible, static, and easy to maintain.