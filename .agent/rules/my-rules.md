---
trigger: always_on
---

# Antigravity Rules — Frontend (Next.js 15, App Router)

## Purpose

Provide the agent with clear instructions about behavior when working with this repository:

-  modify only what is necessary to complete the specific task;
-  do not put private data and production at risk;
-  create neat, verifiable changes (branches + PRs + tests);
-  leave detailed "artifact" documentation about what was done.

## General principles (mandatory)

1. **Project language:** TypeScript.
2. **App Router:** preserve the semantics of server/client components. Do not automatically convert Server Components to Client without a clear necessity and explanation of reasons.
3. **Libraries:** follow existing patterns for using `shadcn`, `react-hook-form`, `lucide-react`.
4. **Do not touch:**  
   `.env`, `.env.*`, secrets, `~/.ssh`, key files, `secrets/*`, `node_modules/`
   (unless creating artifacts inside `.antigravity/artifacts/`), `config/credentials*`.

## Code style and quality

1. **Typing:** add/update TypeScript types for all changes. Avoid using `any`; if you must — leave a comment explaining why + a TODO.
2. **Code:** write code following my style and existing project conventions.
3. **Security:** ensure all code changes follow secure coding practices.

## Security and privacy

1. **Secrets:** never read or log `.env` / `.env.local` values and never commit secrets.  
   If a secret is found in code — create an urgent PR/issue and notify the person.
2. **External access:** automatic outbound requests to unknown domains are forbidden.  
   If an integration is needed — describe the reason and wait for approval.

## UI / shadcn / react-hook-form / lucide-react

1. Use existing UI primitives from `shadcn`; do not introduce a new UI system.
2. For forms — follow `react-hook-form` patterns; do not switch to controlled inputs unless necessary.
3. Icons — use `lucide-react`; follow the standard import pattern; do not add heavy icon packs.

## Destructive operations

1. **Never** run commands like `rm -rf /`, `rm -rf *`, `npm cache clean --force` without confirmation.

## Additional

DRY/KISS: Avoid duplication, keep the code simple. Architecture: Logic in src/hooks and src/helpers, UI in src/components. HTML Integration: Integrate markup into React components, following JSX syntax and breaking it down into components. Use <Link> components.
Navigation: Use Link from next/link.
Images: Use <Image> from next/image with width/height or fill and alt.
Performance & SEO: Prioritize speed and SEO, semantic HTML.
Accessibility: Use aria-label, tabIndex, and ensure keyboard accessibility.
