# chen-hatti-f810-personal-site

## What This Project Is

`chen-hatti-f810-personal-site` is an academic personal website built with Next.js, React, TypeScript, and Tailwind CSS. It is a static-content site driven by local TypeScript config, intended for a researcher or academic profile.

## What It Does

- Renders a complete home page with hero, about, news, education and awards, selected publications, blog, experience and teaching, and services sections.
- Provides full list pages for `/news`, `/education`, `/awards`, `/publications`, `/blog`, `/research`, `/experience`, and `/teaching`.
- Includes shared list-page structure with a heading and back-to-home link.
- Supports light/dark themes using `next-themes`, system theme detection, and a header theme toggle.
- Uses responsive layouts that collapse cleanly to single-column mobile views.

## Content Model

- Site content is edited in `data/config.ts`.
- Shared content types live in `data/types.ts`.
- Main content collections are `profile`, `nav`, `news`, `education`, `awards`, `publications`, `blogs`, `experience`, `teaching`, and `services`.
- Static image assets referenced by config are served from `public/assets`.
- Image paths and alt text are defined on each `ImageAsset`.

## Architecture And Conventions

- App Router pages live under `app/`.
- Reusable layout components live under `components/layout/`.
- Home page sections live under `components/sections/`.
- Shared primitives live under `components/ui/`.
- Tailwind theme tokens are centralized in `tailwind.config.ts` under the `academic` color palette.
- Cards use the shared `Card` component for consistent borders, surfaces, hover motion, and shadows.
- Links and buttons have visible focus states; motion respects `prefers-reduced-motion`.
- The app currently has no database, auth flow, upload flow, or object-storage integration.

## Run And Verify

- Install: `npm install`
- Develop: `npm run dev` on `0.0.0.0:8080`
- Build: `npm run build`
- Serve build: `npm run start` on `0.0.0.0:8080`
- Useful checks: `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm run build`

## Smoke-Tested Routes

The merged site has been production-built and click-tested across:

- `/`
- `/news`
- `/education`
- `/awards`
- `/publications`
- `/blog`
- `/research`
- `/experience`
- `/teaching`
