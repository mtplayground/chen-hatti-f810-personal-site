# chen-hatti-f810-personal-site

## What This Project Is

`chen-hatti-f810-personal-site` is a static academic personal website built with Next.js App Router, React, TypeScript, and Tailwind CSS. It is intended for a researcher/academic profile and is driven entirely by local typed content configuration.

## What It Does

- Renders a compact, responsive homepage for an academic profile.
- Uses a three-zone hero with a left profile avatar, center identity/about/social/CV content, and right hero image.
- Uses a repo-bundled `public/assets/profile-photo.png` white smiling dog image for the profile avatar.
- Shows homepage news as simple single-line rows: date on the left, title on the right, with thin dividers between entries.
- Shows full education and awards lists in a compact two-column homepage section.
- Shows selected publications as separate cards, one publication per card, with thumbnail, paper details, and PDF/Code/BibTeX links.
- Shows experience and teaching in a compact two-column section: experience timeline on the left, teaching course list with book icons on the right.
- Shows services in a compact three-column card grouped by Chair & Committee, Journal Reviewer, and Conference Reviewer.
- Shows blogs as a compact timeline-style list and renders the blog section last on the homepage.
- Provides full list/overview pages for `/news`, `/education`, `/awards`, `/publications`, `/blog`, `/research`, `/experience`, and `/teaching`.
- Supports light/dark themes with `next-themes`, system theme detection, and a header theme toggle.

## Content Model

- Site content is edited in `data/config.ts`.
- Shared content types live in `data/types.ts`.
- Main content collections are `profile`, `nav`, `news`, `education`, `awards`, `publications`, `blogs`, `experience`, `teaching`, and `services`.
- Static assets referenced by config are served from `public/assets`; the CV is served from `public/cv.pdf`.
- Image paths, alt text, and dimensions are defined on each `ImageAsset` in config.

## Architecture And Conventions

- App Router pages live under `app/`.
- Reusable layout components live under `components/layout/`.
- Homepage sections live under `components/sections/`.
- Shared primitives live under `components/ui/`.
- Tailwind theme tokens are centralized in `tailwind.config.ts` under the `academic` color palette.
- The visual style is intentionally compact: smaller base typography, stepped-down homepage headings, tighter section copy, light card borders, small card radius, restrained shadows, and thin dividers.
- The header uses a large name on the left, horizontal nav on the right, a short blue active underline, external CV icon, and retained theme toggle.
- The footer uses left copyright, centered social icons, and right tagline: `Built with ❤️ and research.`
- Links and buttons have visible focus states; motion respects `prefers-reduced-motion`.
- The app currently has no database, auth flow, upload flow, or object-storage integration.

## Run And Verify

- Install: `npm install`
- Develop: `npm run dev` on `0.0.0.0:8080`
- Build: `npm run build`
- Serve build: `npm run start` on `0.0.0.0:8080`
- Useful checks: `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm run build`

## Smoke-Tested Routes

The site should be checked across:

- `/`
- `/news`
- `/education`
- `/awards`
- `/publications`
- `/blog`
- `/research`
- `/experience`
- `/teaching`
