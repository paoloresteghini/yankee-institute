---
name: Yankee Institute
description: Existing Yankee identity baseline and redesign guidance, pending visual approval
colors:
  yankee-blue: "oklch(0.39009 0.09591 246.829)"
  blue-hover: "oklch(0.31739 0.07214 244.591)"
  gold: "oklch(0.75683 0.07544 79.162)"
  secondary-blue: "oklch(0.59086 0.07259 228.822)"
  body-ink: "oklch(0.32109 0.00000 89.876)"
  legacy-background: "oklch(0.96856 0.01308 82.402)"
  legacy-light: "oklch(0.97303 0.00823 91.482)"
  alternate-surface: "oklch(0.96497 0.00587 239.820)"
  reverse-text: "oklch(1.00000 0.00000 89.876)"
typography:
  heading:
    fontFamily: "Hanken Grotesk"
  body:
    fontFamily: "Gentium Plus"
rounded:
  legacy-button: "25px"
---

# Yankee Institute design foundation

## Overview

This document captures Yankee's own existing identity and gives the redesign a grounded starting point. It is not a completed component system or approved visual concept. The frontmatter colors are converted from explicit CSS variables in the September 30 homepage archive; they record the source palette, not proof that every token is applied consistently on every page.

The source is `sources/brand/homepage-root-tokens.css`. Font variables declare Hanken Grotesk for headings and Gentium Plus for body copy. Homepage-specific rules also explicitly use Hanken Grotesk. Other font families occur in builder assets, so rendered typography still needs a page-by-page check. Do not infer branding from the proposal deck's Inter and JetBrains Mono assets.

Working scene: a Connecticut reader follows an article link on a phone during the day, then looks for related policy information; an editor later updates the same material at a desk. Readability, orientation and timely content are the priorities. Proposed creative direction: a clear public-policy resource with an active editorial front page. This is a proposal for review, not a new organizational tagline.

The next design pass should test the existing palette and type pairing in real homepage, article and archive compositions. Retain source identity until a change is explicitly chosen. No local application or new page implementation exists yet, so live variant configuration is deferred.

## Colors

### Existing identity

- **Yankee blue** is declared for the theme accent, headings and subheadings. It anchors the identity.
- **Blue hover** is the declared darker accent state.
- **Gold** is the declared secondary accent and text accent. Treat it as emphasis, not automatically as accessible text on a pale surface.
- **Secondary blue** is declared for secondary text, borders and links. Existing assignments require contrast testing before reuse.
- **Body ink** is the declared primary text color.
- **Reverse text** supports dark backgrounds.
- **Legacy background** and **legacy light** are existing warm surfaces. They are documented because they occur in Yankee's source, not because a warm neutral is a default design choice.
- **Alternate surface** is the existing pale blue section background.

### Redesign application

Proposed strategy: use blue to carry identity, keep long reading surfaces quiet, and reserve gold for deliberate emphasis. The proportion of colored surfaces remains to be tested in concepts. Do not randomly generate a replacement palette for an existing brand.

Verify each actual text/background pair: at least 4.5:1 for ordinary text and 3:1 for qualifying large text. Link visibility must not rely on hue alone. Existing token names do not establish compliant contrast. Use the OKLCH frontmatter as the extracted reference; retain original hex values only in the source evidence file.

## Typography

Existing heading family: Hanken Grotesk. Existing body family: Gentium Plus. These are explicit source declarations and outrank generic font recommendations. Loading, weights and computed use remain to be verified before implementation.

Proposed reading rules: body copy at a comfortable fluid size, line height around 1.5-1.7, and paragraph measure of 65-75 characters. Keep headline hierarchy distinct without oversized branding displacing timely content. No final font-size, weight or spacing scale is established yet; do not represent provisional choices as extracted tokens.

Use balanced headings and natural paragraph wrapping. Apply character-based width limits to the text element itself. Test real long policy headlines at phone and tablet widths. Do not add a monospace metadata family without a specific content need.

## Elevation

No consistent shadow system was established from the inspected source. Do not invent shadow tokens and describe them as current branding.

Proposed approach: flat reading surfaces, clear spacing and restrained separators. Reserve elevation for overlays and interactive states where it communicates structure. Avoid decorative glass panels and nested cards.

## Components

### Identity and navigation

The archived header references Yankee's white SVG logo for dark backgrounds. Preserve the actual mark and proportions; visually inspect asset variants before placing them. The presence of a filename does not establish clear-space rules or approval for altered artwork.

The existing navigation mixes issue topics, formats and programs. Redesign the grouping around reader intent after sitemap approval. Include a clear mobile navigation pattern, keyboard operation and a visible search entry. Avoid copying the current mega-menu complexity merely to preserve the brand.

### Content and archives

Homepage features should show genuine current articles, research, campaigns and events with clear dates and labels. Use real Yankee imagery and inspect each image before choosing a crop. Graphics containing text need different treatment from photography.

Article templates should make title, attribution, publication date, reading content and related resources easy to identify. Archives need clear topic/format context, usable pagination and honest empty states. A grid is appropriate only when it improves scanning; avoid repeating identical icon cards throughout the site.

### Actions and forms

The source declares a 25px button radius; this is historical evidence, not a required redesign shape. A newsletter control also uses an explicit pill override, so the old system is not fully consistent. New button shape, padding and state tokens remain to be resolved in the first approved component pass.

Use meaningful action labels. Confirm the relative priority of newsletter signup, events, donations and other actions before assigning a universal primary CTA. Preserve integration behavior through the migration. Provide labels, clear errors, keyboard focus and adequate touch targets.

### Responsive behavior and motion

Build content-first layouts that reflow without hidden content or overlapping section boundaries. Validate phone, tablet and desktop, including long headings and menus. Keep default content visible. Use reduced-motion alternatives for any animation and favor purposeful interaction feedback over repeated entrance effects.

## Do's and Don'ts

- Do use Yankee-specific source assets, content and token evidence.
- Do distinguish historical observations, proposed direction and approved decisions.
- Do validate contrast, responsive behavior and rendered typography before declaring a component ready.
- Do preserve attribution, important URLs and access to public resources.
- Do not import another client's fonts, palette, audience, membership structure or homepage decisions.
- Do not reproduce confusing topic/format/program navigation or a static-looking homepage simply because they exist today.
- Do not replace substantive policy content with generic campaign or software marketing layouts.
- Do not present a hypothetical component scale, new slogan or inferred personality as client-approved.

## October 1 prototype feedback

The reviewer rejected the initial editorial directions and supplied Empower Mississippi. Current review candidates use a clearer institutional welcome, bold readable sans type, generous spacing and prominent visitor actions. Open Connecticut uses Figtree and people-focused photography; Connecticut Forward uses a blue Hartford panorama, Syne only for the brand headline and Manrope for reading. These are local concept revisions, not approved WordPress templates. The assigned headlines and 22-piece comparison set remain unchanged.

## Edition prototype consistency system, October 1

Current local Version 2 choices, separate from the source-brand record above and not production template approval. Source Serif 4 weight 600 serves brand and section headings; Manrope serves article titles, navigation, body and forms. Preserve this pairing.

Shared CSS roles: body 16px, metadata 14px, form/control values 16px; section headings clamp 32-48px, major narrative headings clamp 38-56px. Hero maximum 96px. Newsletter scene keeps its intentional display exception. Lead/support story hierarchy remains distinct. Standalone controls minimum 44px; primary buttons 48-52px. At narrow widths, show an accessible search icon and navigation icon instead of shrinking text; email form stacks below 420px.

Palette roles: navy #102d43, cool paper #f3f5f5, muted #4b626f, gold #e6c682, work surface #e6eef1 and white cards. Form boundary uses muted, rather than the light decorative separator. Focus color #b47b14 retains verified solid-background contrast. Shared field/photo/pill radius roles are 8px, 14-16px and 30px. Main page sections, header and hero retain straight edges. Prototype has no dark-mode switch.

Shared reading/interaction block at the end of Version 2 CSS is authoritative for these roles. Retired editorial spread CSS remains pending a separate cleanup; avoid claiming the entire file is consolidated.

## Connecticut Together alternative, October 1

Paolo delegated a second welcoming homepage and retired the earlier rejected concepts. Version 2 remains the first option. Version 1 now uses the same Manrope/Source Serif 4 pairing with a people-and-place opening, mission statement, single interactive commitment feature, photographic research landscape, three updates, policy toolkit and direct newsletter form. Existing global navigation and footer are retained. Green accent #305d55 has 6.33:1 contrast on the pale blue background and 7.44:1 on white. No new font or library.

The new opening is intentionally institutional rather than journalistic. Latest is lower in the page, reflecting the revised mission-first brief. The hero photographs join through a bounded mask/transform entrance; contextual research photography has native CSS view-timeline drift where supported. Reduced motion restores static complete images and keeps commitment selection visible. Header and page sections remain square; imagery and buttons retain restrained rounding.

## Connecticut Possibilities alternative, October 1

Version 3 is a new third option, not the retired Connecticut Forward. It retains Manrope and Source Serif 4, the site-wide navigation, local photography, actual source content and email-only signup. A centered welcome and staggered people/place/coast photo band introduce a mixed commitment mosaic with two photographic anchors and two concise policy panels. An offset research note, photographic update list and simple direct signup complete the composition. Mission and commitments lead, so Latest is intentionally further down.

The photo band gathers through a staggered 950ms mask, transform and opacity entrance, using the existing ease. Reduced motion presents all photographs fully visible and static, with normal focus and direct links intact. No scroll hijacking, layout animation or additional dependency. Phone uses a centered family photograph with place/coast glimpses, single-column commitments and full-width form controls. Tablet uses alternating photographic and text panels.

Version 3 hero refinement: warm cream-to-blue gradient with faint static contour lines adds texture to the approved composition. No external asset or animation added. Header, hero geometry, copy and photographs are retained.

## Contained comparisons, October 1

Versions 4 and 5 preserve Versions 1 and 3 as direct comparisons. Corrected October 2 after Paolo clarified that container means post-banner content, not a visibly boxed page. Banner, header and every section background remain full width. Only post-banner content and footer contents receive centered gutters with a 1200px content cap. Existing responsive gutters win at smaller sizes. No outer canvas, body width limit, border or shadow. No new content, fonts, motion or JS behavior.

October 2: Version 3 green accent removed at Paolo’s request. Hero and newsletter headings use the established navy, as do faint contour lines. Gradient ends in a cool blue neutral. Version 5 inherits the same palette change from shared Version 3 CSS. Version 1 remains unchanged.

## Selected Edition and About extension, October 2

Connecticut Edition (Version 2) is now the selected style. The preceding alternatives and extracted frontmatter are historical records: Hanken Grotesk, Gentium Plus and the legacy palette describe the original WordPress site, while the selected prototype uses Source Serif 4, Manrope and the Edition roles documented above. Preserve the existing CSS as the authority for this extension. The root preview opens Version 2, whose current homepage hero reads Affordable. Livable. Workable. Other homepage variations are retired from active preview files and recoverable through private backups and Git history. Selection approves the direction; final page review, Elementor translation and publication are separate outcomes.

About inherits the global header, footer, navigation disclosures and native search dialog. Its page-local mission, staff, board and contact links sit below the opening, separate from global destinations. A pale-blue split opening pairs mission copy with New Haven photography and an overlapping New London coastal photograph. White mission, staff and contact sections alternate with a navy purpose band and a quiet cool board surface. Sections remain full width with straight edges; inner reading layouts cap at 1440px and inherit shared fluid gutters. Photography and the president feature use restrained rounding (16px), the inset president portrait uses 12px, and the navy primary action retains the existing pill shape (30px). Flat surfaces, spacing and separators establish depth without new shadows.

Source Serif 4 (600) carries About headings and person names; Manrope carries paragraphs, role labels, links and controls. The opening heading scales from 48px to 72px with 1.04 line height; section headings use the existing 38-56px range at 1.08. Body paragraphs use 18px at 1.75, reducing to 17px below 1000px. Introductory mission text is 26px, reducing to 23px on phones; roles remain 14px. Opening copy is limited to 46ch, with other long copy bounded within the reading columns. These are observed About applications, not replacements for the shared homepage hierarchy.

The president receives one prominent portrait feature. Six other staff members use a three-column portrait directory with native details/summary biographies, becoming two columns below 1000px and retaining two compact columns on phones. Names and roles remain visible when biographies are closed. Summaries have a minimum 48px target and visible keyboard focus. The board uses a two-column text directory rather than repeating staff cards. Below 600px, opening, mission, purpose, president, board and contact layouts stack; the board directory becomes one column and inner gutters use 22px. Inherited header and footer retain their existing responsive behavior.

The tall opening photograph reveals through a CSS aperture (900ms, cubic-bezier(.16,1,.3,1)). Reduced motion removes the animation and clipping to show the complete static composition. Native disclosures require no custom animation or additional library. Primary actions are at least 52px high and local navigation links at least 44px. Keep full biography destinations and image provenance with the prototype; no design documentation establishes integrated forms, a WordPress release or a refreshed GitHub Pages publication.

## About alternative composition, October 2

Historical composition, superseded by the continuous illustrated story below after Paolo rejected its similarity to the homepage and repeated section treatment.

The additional About at `version-2/about-alternative/` is a comparison inside the selected Edition style. The original About remains available. It inherits Edition typography, colors, global navigation, search and footer, then overrides the original About layout. This records a page composition, not a new brand system or approval to replace the original.

A full-width Norwalk photograph opens the page with a navy gradient behind white copy. On desktop the mission headline sits low on the left, while the introduction and gold team action occupy the right. The banner retains straight edges; the white section index follows it. The mission uses an asymmetrical two-column reading layout with a larger serif lead. The practical-purpose chapter uses the existing pale-blue work surface and Hartford photography. Inner content keeps the inherited fluid gutters and 1440px cap.

The president occupies the left column beside six horizontal portrait and biography rows. Her portrait stays visible with a sticky offset (120px) on larger screens. Names and roles stay visible when native biography disclosures close. The board becomes an open three-column text directory, reducing to two columns below 1000px and one below 600px. Contact adds a New London coastal photograph. Portraits and supporting photography retain restrained rounding (14-16px); sections remain flat, without new shadows.

Below 600px the opening copy, mission, president, board and contact stack with 22px gutters. Staff rows retain compact portraits beside copy; purpose copy precedes its photograph. The hero heading is 48px on phones and scales to 76px on desktop; the mission lead scales from 28px to 38px. Existing Source Serif 4 and Manrope roles remain authoritative. The panorama reveals through a 900ms aperture and slight scale entrance using the existing easing. Reduced motion removes clipping, animation and scaling, and makes the president static.

Local comparison review recorded SHIP after complete hero and full-page captures at 375px, 768px and 1440px, with copy parity, keyboard disclosures/search and no horizontal overflow checked. Browser coverage and performance limits are in `audits/about-alternative-2026-10-02/review.md`. Client selection, review-demo publication, Elementor implementation and production release remain separate outcomes. The legacy frontmatter and design sidecar are not refreshed by this composition note.

## About continuous illustrated story, October 2

The current `version-2/about-alternative/` presents one continuous reading composition on white. Edition identity and shared interactions carry consistency; the About page's narrative determines its rhythm. The original About remains a separate comparison. This follows the recorded feedback and OPEN observation 7, rather than establishing a new global layout rule.

A quiet breadcrumb leads into a left-aligned serif mission headline and lower-right introduction, followed by staggered Norwalk and New London coastal photographs. There is no full-bleed photo banner, colored chapter band or section index strip. A bounded reading spine (65ch) carries mission copy with the independence statement in a quieter margin note. Hartford photography sits inline beside practical aims, leading directly into the people directory. Shared fluid gutters and the 1440px content cap remain.

The president stays beside six horizontal portrait and native biography rows, with a sticky offset (120px) on larger screens. The quiet board area uses a two-column text directory beside its introduction, separated by a fine line on white. Contact follows on white with coastal photography. Source Serif 4 and Manrope retain their Edition roles; navy remains the reading ink. Supporting photographs keep rounded corners (16px), staff portraits use 14px, and the story body adds no shadow. Shared navigation keeps its existing overlay treatment.

Below 600px the title and introduction stack, while the opening photographs retain their staggered two-column arrangement. Mission, independence note, practical aims, president, board and contact become one reading column with 22px gutters. Staff rows retain portraits beside their text. The heading is 48px on phones and scales to 76px on desktop. The Norwalk photograph uses a 900ms aperture and slight vertical entrance; reduced motion restores the complete static photograph and makes the president static.

This replaces the earlier alternative's composition while retaining its factual content, seven staff, eight board members and existing destinations. Removing the section index also removes its four navigation labels. Review evidence and limits are recorded in `audits/about-story-2026-10-02/`. Historical token and inherited-navigation detector warnings are advisory, not a clean design-system certification. Prototype review, client selection, demo publication, Elementor implementation and production release remain separate outcomes; this note preserves the historical frontmatter and sidecar.
