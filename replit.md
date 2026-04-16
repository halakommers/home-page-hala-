# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

### هلا كوميرس Landing Page (`artifacts/hala-landing`)
- **Type**: react-vite, frontend-only (no backend)
- **Preview path**: `/` (root)
- **Language**: Arabic RTL
- **Brand**: Deep purple (#2D2669) + burnt orange (#E85D1F)
- **Font**: Cairo (Arabic) + Inter (English/numbers)
- **Sections**: 13 sections — Navbar, Hero, Trust Bar, Why Hala, Services Grid (6), For Whom (5 audiences), Order Journey timeline (6 steps), Stats, Growth Support, Testimonials, FAQ (9 items), Final CTA, Footer
- **Stack**: React, Vite, Tailwind CSS, Framer Motion, Radix UI accordion, lucide-react, react-icons

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
