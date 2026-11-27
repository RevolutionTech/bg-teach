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
.claude/skills/create-teach-notes/  Workflow and style guide for new teach notes
.github/workflows/     CI (typecheck, lint, build) and deploy to S3
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

There are no automated tests. CI runs `pnpm typecheck`, `pnpm lint`, and `pnpm build`. Run all three before you push.
