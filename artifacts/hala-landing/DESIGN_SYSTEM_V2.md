# Hala design direction v2

Reference studied: https://easyconfirm.net/ (27 September 2026). The reference uses a floating navigation bar, a centered hero with generous white space, product visuals in short feature sections, one dark problem section, and a compact closing call to action. This document records the structure adapted for Hala; it does not import the reference brand or content.

## Identity

| Role | Value | Used in |
| --- | --- | --- |
| Ink | #18162D | Main text and dark section |
| Brand indigo | #362976 | Emphasis and controls |
| Deep indigo | #2D2669 | Navigation action |
| Brand orange | #F15A24 | Primary action and small highlights |
| Quiet surface | #F7F6FC | Alternating sections |
| Border | #E4E3F0 | Product panels and separators |

The logo is src/assets/hala-logo.svg, extracted from the live Hala site. The v2 preview uses **Alexandria** at weights 400–700, following the chosen EasyConfirm type style; it is loaded by src/pages/hala-design-v2.css. The existing Hala site uses IBM Plex Sans Arabic, but v2 keeps Hala's own logo and colors.

The content container is capped at 1200px. The mobile preview is composed first at 390px: shorter hero copy, a focused dashboard crop, a 300px operational storyboard, touch-sized stage controls, and a fixed signup action after the hero. The process storyboard and fixed action use mobile base rules and expand on wider screens. The remaining v2 sections retain their existing responsive rules.

## Layout and components

- A floating pill navigation bar leads to a centered headline and a real Hala dashboard image. The hero uses stronger side grids, indigo and orange dot fields, and four operational icon tiles around the copy; two are retained on small screens.
- A provisional logo row shows sample commerce brands for layout review only. It is explicitly labeled as provisional until Hala approves its actual partner list.
- Three product panels show orders, products, and finance screenshots from src/assets/dashboards/.
- The previous static process section is replaced by an interactive five-stage operational storyboard: stock, order confirmation, preparation and packing, shipping and delivery, and collection and settlement. Five accessible buttons switch between distinct scenes. Actual Hala dashboard screenshots anchor stock, orders, and finance; small CSS illustrations show packing and delivery. Each scene depicts an action specific to that stage.
- One dark section groups operational problems with interactive tabs. Each tab switches the screenshot and explanation.
- Signup is the primary action in the hero, interactive route, feature follow-up, closing panel, and fixed signup button. The fixed action appears when the hero leaves the viewport. Booking a call remains the secondary path in the header, route, and closing panel.
- The closing action sits on a light branded surface. No borrowed pricing, customer counts, or testimonials are included.

## Motion

- Section content enters with a short fade and upward movement through Enter in src/pages/HalaDesignV2.tsx.
- The hero dashboard enters once. A thin branded SVG path draws from left to right in 2.3 seconds; indigo and orange background auras drift on 19-second and 16-second cycles. The operational icon tiles float gently.
- Product images lift slightly on hover, while the three feature icons move up by 3px on staggered six-second cycles.
- The storyboard transitions between stages with short horizontal movement. Within a stage, inventory cards arrive, confirmation advances, a shipping label lands on the parcel, the delivery vehicle moves along the route, or settlement appears. Reduced-motion settings suppress these animations.
- The closing panel shifts its soft color wash across an 18-second cycle.
- The problem panel fades between tab selections.
- prefers-reduced-motion: reduce disables CSS motion, and Framer Motion entrances respect useReducedMotion.

## Current route

/concept renders HalaDesignV2 from src/App.tsx. The previous ConceptLanding.tsx and concept.css remain in the repository but are not routed.


