# Portfolio

A one-page developer portfolio built with Next.js 16, React 19, and Tailwind CSS 4.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS 4 + custom CSS class system |
| Language | TypeScript 5 (strict) |
| Fonts | Geist Sans + Geist Mono via `next/font/google` |

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # run ESLint
```

## Project Structure

```
app/
  globals.css    # design tokens + shared utility classes
  layout.tsx     # root shell, metadata, font loading
  page.tsx       # one-page portfolio (hero, about, work, principles, contact)
public/          # static assets (add images, favicon, og-image here)
```

## Customization

### Content — `app/page.tsx`

All copy lives in typed data arrays at the top of the file:

- `focusAreas` — short strings shown as pills in the hero
- `featuredProjects` — `{ name, type, summary, impact }` objects for the work section
- `workingPrinciples` — `{ title, description }` objects for the principles section
- `nextSteps` — strings listed in the contact section

### Design tokens — `app/globals.css`

Colors, spacing, and typography are defined as CSS custom properties on `:root`.
Key tokens to change for a different palette:

```css
--background: #f4ecdf;   /* page background */
--foreground: #1d1711;   /* primary text */
--accent:     #b55b39;   /* CTA / highlight color */
```

Dark mode overrides live in `@media (prefers-color-scheme: dark)`.

### Metadata — `app/layout.tsx`

Update the exported `metadata` object — title, description, keywords, and Open Graph fields.
