# AI Functions Guide for This Project

## Purpose

This guide explains how to use AI as a practical assistant in this Next.js portfolio.
The focus is not generic AI theory. The focus is what AI should do in this codebase, where it should do it, and how to validate results.

## Project Context

- Framework: Next.js 16 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS + global design tokens
- Internationalization: next-intl with en-US and pt-BR
- Page model: one main page composed of section components

## Core AI Functions in This Project

### 1) Content generation and refinement

Use AI to draft and improve portfolio copy with clear outcomes and metrics.

Primary targets:
- `app/locales/en-US.json`
- `app/locales/pt-BR.json`

Good AI tasks:
- Rewrite weak descriptions into impact-focused text
- Improve consistency of tone across all sections
- Keep section labels short and scannable

### 2) Translation parity and localization support

Use AI to keep en-US and pt-BR aligned in meaning and structure.

Primary targets:
- `app/locales/en-US.json`
- `app/locales/pt-BR.json`
- `i18n/routing.ts`
- `i18n/request.ts`

Good AI tasks:
- Compare keys between locale files and report missing keys
- Keep translations natural instead of literal
- Validate locale naming and fallback behavior

### 3) Section-level UI iteration

Use AI to improve each section without breaking component boundaries.

Primary targets:
- `app/[lang]/page.tsx`
- `app/components/Hero.tsx`
- `app/components/Capabilities.tsx`
- `app/components/FeaturedWork.tsx`
- `app/components/Skills.tsx`
- `app/components/Certifications.tsx`
- `app/components/HowIWork.tsx`
- `app/components/Contact.tsx`

Good AI tasks:
- Propose visual hierarchy improvements
- Improve CTA wording and placement
- Refine spacing and rhythm across sections
- Keep interactions smooth and purposeful

### 4) Motion and interaction tuning

Use AI to improve motion for clarity, not decoration.

Primary targets:
- `app/components/Hero.tsx`
- `app/components/ScrollProgress.tsx`

Good AI tasks:
- Reduce excessive motion for better readability
- Keep animation timing consistent
- Suggest accessible motion fallbacks

### 5) Accessibility and semantic review

Use AI to find common accessibility issues and suggest direct fixes.

Primary targets:
- All files in `app/components/`
- `app/[lang]/page.tsx`

Good AI tasks:
- Check heading order and semantic structure
- Verify button and link labeling
- Catch low-contrast combinations in classes/tokens
- Flag keyboard navigation risks

### 6) Metadata and discoverability improvements

Use AI to keep metadata meaningful and aligned with page content.

Primary targets:
- `app/[lang]/layout.tsx`
- `app/locales/en-US.json`
- `app/locales/pt-BR.json`

Good AI tasks:
- Improve title and description quality
- Suggest keyword improvements based on content
- Keep Open Graph text aligned with brand message

### 7) Quality checks and regression prevention

Use AI to review changes before merge.

Primary checks:
- `npm run lint`
- `npm run build`

Good AI tasks:
- Explain lint errors with minimal fixes
- Identify likely regressions after refactors
- Generate focused manual test checklists

## High-Value Prompt Templates

### Content update

"Update the hero and contact copy in `app/locales/en-US.json` to sound more senior and outcome-driven. Keep current key names and return only modified JSON blocks."

### Translation parity

"Compare `app/locales/en-US.json` and `app/locales/pt-BR.json`. List missing keys, mismatched structures, and terminology inconsistencies."

### UI enhancement

"Improve the visual hierarchy in `app/components/Hero.tsx` without changing the section order in `app/[lang]/page.tsx`. Keep existing translation keys."

### Accessibility pass

"Review all files in `app/components/` for semantic and accessibility issues. Provide a prioritized list of fixes and patch-ready suggestions."

### Pre-merge review

"Given this diff, identify behavior regressions, i18n risks, and performance concerns. Prioritize issues by severity and include exact file paths."

## Operating Rules for AI in This Repo

- Preserve existing file structure and section composition
- Keep locale keys stable unless a migration is explicitly planned
- Prefer minimal, targeted edits instead of broad rewrites
- Validate with lint and build after code changes
- Do not invent project capabilities that are not present in code

## Definition of Done for AI-Assisted Changes

A change is complete only when:

1. The requested behavior or content is updated
2. Locale files remain consistent across languages
3. Lint and build pass
4. No section-level regressions are introduced
5. The final diff is small, readable, and intentional
