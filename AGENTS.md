# AGENTS.md

## Project Overview

BG Teach is a website with notes for teaching board games. Each teach is a short Markdown checklist for a person who knows the game and explains it to new players.

The site is a single-page app built with Vite, React, React Router, Tailwind CSS, and TypeScript. It renders the notes with `react-markdown` and `remark-gfm`. It deploys as static files to AWS S3.

## Repo Structure

```
src/
  index.tsx            App entry point
  App.tsx              Routes: "/" and "/teach/:teachId"
  TableOfContents.tsx  List of all teaches
  Teach.tsx            One teach, rendered from Markdown
  NotFound.tsx
  molecules/           Small shared UI components
  teaches/
    <teach-id>.md      Teach notes for one game
    teaches.ts         Registry of all teaches
    bgg.json           BGG ID and thumbnail URL for each teach, written by `pnpm bgg:update`
scripts/               Node scripts, such as the BGG thumbnail update
public/                Logo and favicons
.claude/skills/create-teach-notes/  Workflow and style guide for new teach notes
e2e/                   Playwright end-to-end tests
.github/workflows/     CI (typecheck, lint, build, end-to-end tests) and deploy to S3
terraform/             AWS hosting infrastructure
```

To add a teach, follow [the create-teach-notes skill](.claude/skills/create-teach-notes/SKILL.md). Each entry in `teaches.ts` must have a `teachId` that matches its Markdown file name, and a `title` that matches the `#` heading in that file.

## Key Commands

Use Node from `.nvmrc` and pnpm.

| Command | Purpose |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm start` | Start the dev server |
| `pnpm build` | Build the site into `dist/` |
| `pnpm preview` | Serve the built site |
| `pnpm typecheck` | Check types with `tsc` |
| `pnpm lint` | Check lint and formatting with Biome |
| `pnpm lint:fix` | Fix lint and formatting issues |
| `pnpm clean` | Delete `dist/` |
| `pnpm test:e2e` | Build the site and run the Playwright end-to-end tests |
| `pnpm test:e2e:ui` | Run the end-to-end tests in Playwright's UI mode |
| `pnpm bgg:update` | Find BGG IDs for new teaches and fetch thumbnail URLs for teaches that have none in `bgg.json`. Add `--refresh` to fetch every thumbnail URL again |

`pnpm bgg:update` needs a BoardGameGeek XML API token. Copy `.env.example` to `.env` and set `BGG_API_TOKEN`. The site loads thumbnails from BGG's image CDN, so the build and CI do not need the token.

Before you run the end-to-end tests for the first time, install the browser with `pnpm exec playwright install chromium`.

CI runs `pnpm typecheck`, `pnpm lint`, `pnpm build`, and `pnpm test:e2e`. Run all four before you push.

## Tests

End-to-end tests are in `e2e/` and run against the production build. They use the `calico`, `cartographers`, and `cafe-baras` teaches as fixtures, and `calico` must have a thumbnail URL in `bgg.json`. If you remove or rename one of these teaches, update the tests.

Find elements by `data-testid`. Add a test ID to a new element that a test uses. The fixture in `e2e/fixtures.ts` serves a stub image for every BGG thumbnail, so the tests do not depend on BoardGameGeek.
