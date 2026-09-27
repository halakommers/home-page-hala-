# Hala design direction v2

Reference studied: https://easyconfirm.net/ (27 September 2026). The reference uses a floating navigation bar, a centered hero with generous white space, product visuals in short feature sections, one dark problem section, and a compact closing call to action. This document records the structure adapted for Hala; it does not import the reference brand, content, or font.

## Identity

| Role | Value | Used in |
| --- | --- | --- |
| Ink | #18162D | Main text and dark section |
| Brand indigo | #362976 | Emphasis and controls |
| Deep indigo | #2D2669 | Navigation action |
| Brand orange | #F15A24 | Primary action and small highlights |
| Quiet surface | #F7F6FC | Alternating sections |
| Border | #E4E3F0 | Product panels and separators |

The logo is src/assets/hala-logo.svg, extracted from the live Hala site. The font is **IBM Plex Sans Arabic**, already used by Hala and loaded by src/index.css. The reference site's Alexandria font is excluded.

The content container is capped at 1200px. Desktop sections use 110px vertical padding, and the smallest layout uses 78px. Product panels use 24px corners; primary actions use pill corners. Layout breakpoints are 1000px, 760px, and 520px.

## Layout and components

- A floating pill navigation bar leads to a centered headline and a real Hala dashboard image.
- Three product panels show orders, products, and finance screenshots from src/assets/dashboards/.
- The process section uses a connected vertical route for sourcing, storage, orders, delivery, and collection.
- One dark section groups operational problems with interactive tabs. Each tab switches the screenshot and explanation.
- The closing action sits on a light branded surface. No borrowed pricing, customer counts, or testimonials are included.

## Motion

- Section content enters with a short fade and upward movement through Enter in src/pages/HalaDesignV2.tsx.
- The hero dashboard enters once; the two operational labels float gently.
- The problem panel fades between tab selections.
- prefers-reduced-motion: reduce disables CSS motion, and Framer Motion entrances respect useReducedMotion.

## Current route

/concept renders HalaDesignV2 from src/App.tsx. The previous ConceptLanding.tsx and concept.css remain in the repository but are not routed.

