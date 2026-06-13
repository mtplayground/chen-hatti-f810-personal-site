# chen-hatti-f810-personal-site

Academic personal website built with Next.js, React, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 20 or newer
- npm

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

The development server listens on `0.0.0.0:8080`. Open `http://localhost:8080` in a browser.

## Production Build

```bash
npm run build
npm run start
```

`npm run start` also listens on `0.0.0.0:8080`.

## Edit Site Content

Most profile and collection content lives in [data/config.ts](data/config.ts):

- Profile, hero, biography, CV link, and social links: `siteContent.profile`
- Navigation: `siteContent.nav`
- Home and list-page collections: `news`, `education`, `awards`, `publications`, `blogs`, `experience`, `teaching`, and `services`
- Image paths and alt text are stored on each `ImageAsset`

Shared content types are defined in [data/types.ts](data/types.ts). Static assets referenced by the config are served from [public/assets](public/assets).

## Useful Checks

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```

## Smoke Test Checklist

After `npm run build`, run the app and click through:

- `/`
- `/news`
- `/education`
- `/awards`
- `/publications`
- `/blog`
- `/research`
- `/experience`
- `/teaching`

Confirm each page loads, header navigation works, home "View all" links reach the matching list pages, and the layout remains usable on mobile and desktop widths.
