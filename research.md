# Yankee Institute: homepage research and creative brief

Stage 1, October 1, 2026. Approved by Paolo with the Stage 2 amendments below. Build Connecticut Edition first and stop after its screenshots for quality feedback.

## Editorial premise

Make Yankee a publication people return to when Connecticut policy changes, with the research institution visible through its evidence, authors and useful resources. The homepage should help someone find a consequential story in seconds and follow its policy context without knowing Yankee's internal program names.

The institution has a stated free-market and limited-government perspective. Credibility should come from transparent attribution, clear distinctions between analysis and research, and accessible source material. Do not imply ideological neutrality, invent impact figures or turn advocacy claims into established facts.

## 1. Yankee research

### Method and limits

Reviewed the live homepage, About, staff, Policy Research, Public Resources, Take Action, testimony, events and podcast pages, plus the individual bodies and visible metadata of 22 pieces. Browser inspection checked the rendered homepage, navigation and computed type. Public HTML captures are retained locally in `sources/research/`; they are excluded from Git. Findings describe October 1, 2026, not a complete content or integration audit.

The public WordPress REST endpoint returned 403, so the content set was verified against article HTML instead. Podcast RSS access also failed; no current episode count or measured podcast cadence is claimed. Browser inspection covered desktop reference layouts, not their full accessibility or performance.

### What Yankee publishes

| Content | Observed evidence | Homepage implication |
|---|---|---|
| Timely reporting and analysis | Dated, attributed articles on employment, fiscal decisions, union activity, education and taxes. The Hartford Portfolio series provides recurring commentary. | Give the newest coverage its own chronological lane, with dates and bylines. |
| Research reports and briefs | The research landing page separates reports from briefs. The May 2026 pension/endowment piece introduces a Reason Foundation collaboration; the January energy piece introduces coalition research. | Show report title, publication date, institutional partnership and a direct reading path. Do not present a report announcement as the entire report. |
| Policy agenda | The June 2026 Public Policy Toolkit explains five policy pillars and links downloadable material. | Keep an enduring agenda accessible beside current reporting. |
| Legislative testimony and tracking | A dedicated testimony archive includes named bills and authors. Take Action links a 2026 VoterVoice bill tracker and lists supported, monitored and opposed proposals. | Connect coverage to testimony and the tracker. Label the external destination and verify legislative status before calling a bill active. |
| Podcast and video | Y CT Matters describes conversations hosted by Carol Platt Liebau, with listening platforms and an embedded episode area. The homepage links Yankee's YouTube channel. | Offer a visible Listen & watch route; use verified episodes before featuring an episode title. Avoid autoplay and loading players into the opening screen. |
| Events | The events index reported no upcoming events. Its latest past event was the March 26, 2026 Capitol Insiders' Breakfast. | Use a conditional event slot or past-event archive. Do not invent an upcoming event to fill a module. |
| Public tools | Resources include union contracts, the Wheel of Taxes, Connecticut Can Work and the Sunlight Project, which refers users to state transparency data. | Preserve a tools route, especially for journalists, residents and legislative staff. |
| Institutional and media material | Staff, board, press resources, press releases and external media appearances have separate destinations. | Keep these reachable without making institutional news compete with the main editorial lead. |

Sources: [homepage](https://www.yankeeinstitute.org/), [Policy Research](https://www.yankeeinstitute.org/policy-research/), [testimony](https://www.yankeeinstitute.org/category/public-testimony/), [Take Action](https://www.yankeeinstitute.org/take-action/), [Public Resources](https://www.yankeeinstitute.org/public-resources/), [Y CT Matters](https://www.yankeeinstitute.org/y-ct-matters/), [events](https://www.yankeeinstitute.org/events/).

### Publishing and authors

The visible September stream has eight pieces dated September 7, 8, 9, 11, 18, 23, 25 and 29. That is roughly two pieces per week in this observed month, with uneven spacing, not a commitment to a daily schedule. Seven are by Meghan Portfolio and one by Frank Ricci. The broader collected set also includes Andrew Fowler, Jack DeOliveira and the institutional byline Yankee Staff. Research operates on a slower cycle than the news stream; it should not disappear merely because it is several months old.

The [staff page](https://www.yankeeinstitute.org/yankee-institute-staff/) identifies Portfolio as Manager of Research and Analysis and Ricci as Fellow for Labor & Special Initiatives. DeOliveira identifies himself as Director of Policy in his February testimony. Fowler's collected article has his visible byline; no current staff title is inferred from that. Carol Platt Liebau is identified as president and podcast host. Report landing-page attribution must remain separate from the underlying study author: the May announcement is by Yankee Staff, while its body credits Mariana Trujillo as study author.

### Actual policy areas and positions

The [About page](https://www.yankeeinstitute.org/about/) establishes a free-market, limited-government agenda: economic growth, affordability, taxpayer fairness, opportunity and a more balanced relationship between citizens and government workers. These are the foundation for proposed copy, not an invented mission.

The [2026 toolkit](https://www.yankeeinstitute.org/2026/06/29/yankee-institutes-2026-public-policy-toolkit/) supplies the most useful current organizing frame:

| Policy pillar | Position evidenced in current material |
|---|---|
| Fiscal stability | Preserve budget discipline, transparency and sustainable finances. The pension/endowment report and September credit analysis argue for maintaining fiscal guardrails and reducing pension debt. |
| Local control and home rule | Preserve municipal discretion. The SB 151 testimony objects to reduced local flexibility and unclear fiscal and operational consequences. This is not evidence for an unrestricted statewide housing deregulation position. |
| Energy affordability and reliability | Favor dependable, affordable supply. The January coalition study advocates nuclear and natural gas alternatives; Take Action supports studying advanced nuclear workforce needs. |
| Educational access and opportunity | Expand family options. June and September articles argue for participation in the federal scholarship tax credit with safeguards. |
| Government labor-management | Seek transparent, sustainable public-sector agreements and enforce union financial disclosure obligations. September coverage examines payroll, telework and pension accountability. |

Taxes, jobs, government accountability and pensions connect these pillars. Existing navigation also includes Campus First, a distinct education/free-expression collection, and State Unions, a tag-based route. Preserve their content and access pending a fuller inventory. None of these findings authorizes deleting campaigns or categories.

### Current navigation and discovery failures

The header mixes subject navigation (Issues), formats (Research), a broad News label, institutional pages, a named editorial series (Hartford Portfolio), a campaign (Build the Future), and two action buttons. Nested paths include nine issue routes, research/resources, four media/testimony routes, staff and board. The organizing rules change from item to item.

The opening screen is largely a skyline welcome banner with toolkit and alert/grassroots links. A lead story and the newest reporting are not visible in that initial desktop view. Below it, Latest Releases combines a May report, a September article and an April media appearance. The chronological feed comes after core values and mission copy. Its All/Economy/Education/Energy/Labor/Taxes tabs reuse stories across topic panels; those panels are not all simultaneously visible. A topic-first reader can browse, but must first pass substantial institutional material.

Other problems are more specific:

- Public testimony is nested under News, while the bill tracker is on Take Action. Readers must know two routes to connect an issue with legislative work.
- The search icon is visible in the header, but it lacks a visible text label. The newsletter form sits in the footer and requests first name, last name, email and ZIP. Policy alerts in the hero are a separate proposition, not an obvious replacement for a general newsletter.
- The research page's report list reaches into 2025, and the visible brief list includes 2023 material. Dates and a deliberate distinction between enduring research and latest news would clarify this, rather than treating all older work as stale.
- Authors are credited on articles, but the header offers staff rather than a dedicated author discovery path.
- Current issues lack a clearly dated editorial selection explaining what deserves attention now. A legislative action link alone does not provide that context.

These are observed structural problems and design judgments. Search quality, newsletter delivery and bill tracker functionality were not exercised in this read-only study.

### Brand worth retaining

The white Yankee emblem and wordmark on a dark blue header are recognizable. Preserve the actual artwork, proportions and clear space. Hartford photography provides a valuable sense of place; replace the washed-out treatment with intentional, properly credited imagery rather than abandoning Connecticut specificity.

Live source tokens define navy `#0a4875`, secondary blue `#4c86a0`, gold `#caab79`, warm surfaces `#f9f4eb` and `#f8f6f0`, and pale blue `#f0f4f7`. Browser computed styles confirmed Hanken Grotesk for the principal heading and Gentium Plus for body text; story tiles also use Poppins. The mixed families and overrides create inconsistency. Retain navy, restrained gold and the recognizable logo as identity anchors; the three proposed type systems below are explorations requiring approval.

### Likely audiences, hypotheses to validate

| Audience | Likely job | Useful proof or route |
|---|---|---|
| Legislators and staff | Understand a proposal and locate testimony or research quickly. | Bill identifier, publication date, report, testimony and tracker. |
| Journalists | Find context, original analysis and someone who can discuss it. | Attributed articles, sources, author archive and press contact route. |
| Engaged Connecticut residents | Understand implications for work, family costs and local services. | Clear deks, topics, contextual reading and policy alerts. |
| Donors | Assess purpose, quality and continued relevance. | Real research, people behind it, institutional information and support path. |
| Businesses and allied organizations | Follow relevant policy and use practical material. | Toolkit, topic dossier, public tools and events. |

These are audience hypotheses inferred from Yankee's published work and stated purpose, not measured visitor segments. No traffic statistics or conversion claims are used as homepage copy.

## 2. Eight reference sites

These are selected for discrete lessons, not ideological alignment or permission to copy their branding. Each was reviewed through its public page and desktop browser layout on October 1. Some images loaded slowly; City Journal's story area remained in a loading state, so its lesson is limited to verified navigation.

| Reference and category | Specific lesson |
|---|---|
| [City Journal](https://www.city-journal.org/), policy editorial publication | Search, Topics, Podcasts, Contributors and Support sit in an explicitly publication-oriented navigation. Learn its separation of editorial discovery from institutional identity, without adopting its visual branding. |
| [Brookings](https://www.brookings.edu/), think tank | A utility band gives experts, events and media their own routes while a second band exposes topics. The opening lead and supporting stories show authors and dates, making expertise visible at discovery time. |
| [Niskanen Center](https://www.niskanencenter.org/), policy organization | Recent Analysis and Featured Analysis are separate editorial promises; individual pieces carry both format and subject labels. This is a useful model for preventing a new commentary item from displacing a consequential study. |
| [The Atlantic, world edition](https://www.theatlantic.com/world/), editorial/news publication | Latest and Newsletters remain explicit header choices, while a large central lead and narrower supporting lanes create unequal reading priorities. Learn the visible distinction between a lead and a list, rather than copying the masthead or subscription model. |
| [Works in Progress](https://worksinprogress.co/), digital magazine | Topics and Issues form a compact discovery bar; its illustrated feature and colored title panel make a specific story feel commissioned. Borrow the story-level art direction and prominent author/dek relationship, while keeping Yankee's latest stream visible much earlier. |
| [Noema](https://www.noemamag.com/), institutional digital magazine | A spare header keeps search available, and the feature pairs a large headline with an equally intentional image. Editors' picks and archive selections create a life for substantial pieces beyond their publication week. |
| [ProPublica](https://www.propublica.org/), nonprofit newsroom | Its reporting-on strip exposes ongoing investigations. Borrow the persistent issue trail, with support visible beside the masthead. |
| [charity: water](https://www.charitywater.org/), nonprofit | Its beneficiary photography, clear giving route and project-proof map connect support to concrete work. For Yankee, link support to actual research and civic resources; do not import its donation allocation claims or beneficiary metrics. |

## 3. Shared real content

[content/content.json](content/content.json) contains 22 verified pieces, dated January 13 through September 29, 2026: 17 analyses, two research-report landing pages, two testimonies and one toolkit. This is the full visible September stream plus selected current-year context, not the 22 latest items across the entire site. All records have a title, visible author, date, topic, URL and original summary. There are no placeholder pieces.

Titles preserve source wording; source em dashes in two titles are normalized to colons for the project's punctuation rule. Whitespace is normalized. Topic and format labels are proposed editorial metadata, kept separate from source categories. Summaries describe the author's argument and are not independent verification of every policy claim. All source URLs were retrieved, and dates were checked against visible bylines and URL dates.

**Comparison lock:** all versions use lead `yi-001`, latest supporting pieces `yi-002` through `yi-005`, major research `yi-018` and `yi-022`, and toolkit `yi-015`. Each exposes the entire collection through its reading/discovery path. No version gets better headlines, a different lead or invented statistics. Photography can be cropped differently from the same shared licensed pool, with clear illustrative captions where it does not depict the reported event.

| ID | Piece | Author | Date | Format |
|---|---|---|---|---|
| yi-001 | [Connecticut’s Labor Market Is Sending Two Very Different Signals](https://www.yankeeinstitute.org/2026/09/29/connecticuts-labor-market-is-sending-two-very-different-signals/) | Meghan Portfolio | 2026-09-29 | analysis |
| yi-002 | [Connecticut Has a Shot at a Credit Upgrade: If Lawmakers Don’t Blow It](https://www.yankeeinstitute.org/2026/09/25/connecticut-has-a-shot-at-a-credit-upgrade-if-lawmakers-dont-blow-it/) | Meghan Portfolio | 2026-09-25 | analysis |
| yi-003 | [Nation’s Largest Teachers Union Wants Connecticut Shut Out of Federal Scholarship Program](https://www.yankeeinstitute.org/2026/09/23/nations-largest-teachers-union-wants-connecticut-shut-out-of-federal-scholarship-program/) | Meghan Portfolio | 2026-09-23 | analysis |
| yi-004 | [In Connecticut, Betraying the Public Doesn’t Always Cost You Your Pension](https://www.yankeeinstitute.org/2026/09/18/in-connecticut-betraying-the-public-doesnt-always-cost-you-your-pension/) | Meghan Portfolio | 2026-09-18 | analysis |
| yi-005 | [The AFL-CIO Has Big Plans for a ‘Third-Term Ned’](https://www.yankeeinstitute.org/2026/09/11/the-afl-cio-has-big-plans-for-a-third-term-ned/) | Meghan Portfolio | 2026-09-11 | analysis |
| yi-006 | [UConn Union Gets a Seat on Telework Appeals Panel](https://www.yankeeinstitute.org/2026/09/09/uconn-union-gets-a-seat-on-telework-appeals-panel/) | Meghan Portfolio | 2026-09-09 | analysis |
| yi-007 | [Court Victory Vindicates Union Members and Exposes Years of Government Neglect](https://www.yankeeinstitute.org/2026/09/08/court-victory-vindicates-union-members-and-exposes-years-of-government-neglect/) | Frank Ricci | 2026-09-08 | analysis |
| yi-008 | [Labor Day Look: Connecticut Added Just 716 Full-Time State Workers Since 2019: Yet Monthly Payroll Jumped 34%](https://www.yankeeinstitute.org/2026/09/07/labor-day-look-connecticut-added-just-716-full-time-state-workers-since-2019-yet-monthly-payroll-jumped-34/) | Meghan Portfolio | 2026-09-07 | analysis |
| yi-009 | [A Record Jobs Number Masks a Weaker Labor Market](https://www.yankeeinstitute.org/2026/08/24/a-record-jobs-number-hides-a-weaker-labor-market/) | Meghan Portfolio | 2026-08-24 | analysis |
| yi-010 | [The Credits Keep Rolling: Connecticut Expands Hollywood Subsidy While Audit Problems Persist](https://www.yankeeinstitute.org/2026/08/12/the-credits-keep-rolling-connecticuts-hollywood-subsidy-survives-another-bad-audit/) | Meghan Portfolio | 2026-08-12 | analysis |
| yi-011 | [Lamont Touts Minimum Wage Hike Days Before Democratic Primary](https://www.yankeeinstitute.org/2026/08/05/lamont-touts-minimum-wage-hike-days-before-democratic-primary/) | Meghan Portfolio | 2026-08-05 | analysis |
| yi-012 | [Beyond the Classroom: What Connecticut’s Teachers Union Focused on in Denver](https://www.yankeeinstitute.org/2026/07/21/beyond-the-classroom-what-connecticuts-teachers-union-focused-on-in-denver/) | Meghan Portfolio | 2026-07-21 | analysis |
| yi-013 | [The Endorsement Is Done. The Next SEBAC Fight Has Already Started](https://www.yankeeinstitute.org/2026/07/20/the-endorsement-is-done-the-next-sebac-fight-has-already-started/) | Meghan Portfolio | 2026-07-20 | analysis |
| yi-014 | [From Closed Doors to Door to Door: How Connecticut Labor Turns Endorsements into Political Power](https://www.yankeeinstitute.org/2026/07/16/38842/) | Meghan Portfolio | 2026-07-16 | analysis |
| yi-015 | [Yankee Institute’s 2026 Public Policy Toolkit](https://www.yankeeinstitute.org/2026/06/29/yankee-institutes-2026-public-policy-toolkit/) | Yankee Staff | 2026-06-29 | policy-toolkit |
| yi-016 | [Government Payrolls Kept Connecticut’s May Job Numbers Positive](https://www.yankeeinstitute.org/2026/06/25/government-payrolls-kept-connecticuts-may-job-numbers-positive/) | Meghan Portfolio | 2026-06-25 | analysis |
| yi-017 | [Connecticut Students Would Lose Scholarships. Public Schools Would Gain Nothing](https://www.yankeeinstitute.org/2026/06/24/connecticut-students-would-lose-scholarships-public-schools-would-gain-nothing/) | Meghan Portfolio | 2026-06-24 | analysis |
| yi-018 | [Connecticut Endowment Proposal Raises Pension Costs and Undermines Fiscal Guardrails](https://www.yankeeinstitute.org/2026/05/08/connecticut-endowment-proposal-raises-pension-costs-and-undermines-fiscal-guardrails/) | Yankee Staff | 2026-05-08 | research-report |
| yi-019 | [New Rankings Reinforce Connecticut’s Decades-Long Affordability Problem](https://www.yankeeinstitute.org/2026/04/22/new-rankings-reinforce-connecticuts-decades-long-affordability-problem/) | Andrew Fowler | 2026-04-22 | analysis |
| yi-020 | [Testimony in Opposition to SB 101](https://www.yankeeinstitute.org/2026/03/10/testimony-in-opposition-to-sb-101/) | Jack DeOliveira | 2026-03-10 | testimony |
| yi-021 | [Testimony in Opposition to SB 151](https://www.yankeeinstitute.org/2026/02/17/testimony-in-opposition-to-sb-151/) | Jack DeOliveira | 2026-02-17 | testimony |
| yi-022 | [Alternatives to New England’s Energy Affordability Crisis](https://www.yankeeinstitute.org/2026/01/13/alternatives-to-new-englands-energy-affordability-crisis/) | Yankee Staff | 2026-01-13 | research-report |

## 4. Proposed information architecture

### Primary navigation

| Label | Destination and purpose |
|---|---|
| Latest | Dated chronological stream, with format filters and Hartford Portfolio as a named series. Immediately answers what changed. |
| Research | Major reports, shorter briefs and the toolkit, with topic/year filters and direct report access. Separates depth from freshness. |
| Topics | Reader-facing subject index linking reporting, research, testimony and tools around one subject. |
| In Hartford | Dated issue dossiers, testimony, bill tracker and policy alerts. Explains the legislative context before offering action. |
| Authors | Contributor archive and individual work, distinct from staff/board information. Makes expertise and attribution discoverable. |

### Utility navigation

**Search, Newsletter, Support Yankee** are persistently available. **About, Events, Listen & watch, For media** live in the utility menu and footer. Support Yankee leads to donation options; its destination must visibly say Donate. On mobile, Search and Newsletter stay in the compact fixed header while Menu exposes the primary destinations and Support.

A topic index should initially use six proposed reader labels: **Taxes & state finances, Economy & jobs, Government & labor, Energy & affordability, Education & opportunity, Local communities**. Pensions remain a named subtopic of state finances; union transparency is available under government/labor; Campus First remains a named collection under education. This consolidates overlapping entry points without erasing existing taxonomies or URLs. Labels and mappings require editorial approval.

In Hartford is not a renamed dump of current News. A dossier connects a short context statement, dated analysis, underlying research, testimony and the external tracker where relevant. Initial proposed collections are fiscal guardrails/pension costs, scholarship access, and government labor accountability, using the verified set. Collection headings are new editorial packaging, not fabricated article titles. Bill status and action availability need a live check before publication.

Keep Build the Future under Support/About as an identifiable existing campaign. Keep Public Resources within Research and relevant topic dossiers, with a direct footer Tools link. Retain old destinations pending an approved redirect plan. No migration or retirement is authorized by this brief.

### Editorial operating rules

- Latest is sorted by actual publication date. Important now is selected, dated and reviewed by an editor. Never silently equate the two.
- A report can stay prominent through a related dossier; display its original date and format.
- A story's author, date and subject remain visible in all versions. Label testimony and institutional research explicitly.
- Empty events or media slots lead to their real archives; they never create filler.
- Prototype search searches the shared collection and identifies that boundary. Prototype topic and author links must produce useful local results. Reading links go to source articles. Newsletter/donation paths can use established destinations; no simulated subscription success or payment form.

## 5. Ten candidate homepage headlines

These are proposed brand copy, not quotations or approved institutional promises.

| Candidate | Rationale |
|---|---|
| **A freer Connecticut. A stronger future.** | Connects Yankee's limited-government outlook to the prosperity it seeks. |
| **Make Connecticut a place to build a life.** | Gives affordability and opportunity a human, long-term purpose. |
| **Put Connecticut's future in its people's hands.** | Expresses agency and limited government without an institutional greeting. |
| **Connecticut should reward ambition.** | Places work, enterprise and upward opportunity at the center. |
| **More opportunity. Less standing in the way.** | Frames reform around barriers people and businesses experience. |
| **A Connecticut worth staying for.** | Speaks to affordability, retention and the possibility of a future at home. |
| **Let Connecticut's potential get to work.** | Connects the state's strengths with Yankee's employment and business agenda. |
| **Stronger communities start with greater freedom.** | Links freedom with local autonomy and shared prosperity. |
| **A better deal for Connecticut's taxpayers.** | Makes fairness and fiscal accountability the central promise. |
| **Keep Connecticut open to possibility.** | Offers an optimistic direction grounded in opportunity and choice. |

## 6. Three creative directions

Each brief is a design proposal. Named fonts, colors, layouts and motion are subject to approval. All preserve the existing logo and the comparison lock. The brand headline establishes the institution's point of view; the lead article remains a separate, clearly attributed editorial item.

### Concept 1: The Public Ledger

**Idea and mood.** A Connecticut editorial desk: precise, alert and quietly formidable. The defining device is a continuous reading ledger with a broad lead and a compact chronology, rather than a newspaper imitation made from equal columns. It feels useful on the morning of a legislative decision. Favor evidence and reading speed over spectacle.

**Type and palette.** Newsreader variable supplies substantial, readable story headlines and occasional deks; Public Sans supplies navigation, dates and body copy. Proposed scale: brand line 44-56px, lead 38-48px, supporting headlines 20-24px, text 17-18px. Navy `#0a4875`, white `#ffffff`, ink `#162b38`, pale blue `#f0f4f7`, restrained gold `#caab79`. Gold marks selected research or rules, not small text on white. No rounded card kit, simulated paper aging or decorative data labels.

**Grid and opening.** A compact identity line carries **A freer Connecticut. A stronger future.** Below it, a 12-column desk allocates eight columns to the lead and four to Latest. The lead itself pairs an expansive photograph with its headline/dek in a staggered horizontal composition. Four supporting newest pieces sit in dated rows, not image cards. Search and Topics are exposed in the header. Design the complete opening composition within roughly 720px at a 1440px-wide desktop, and verify against the actual viewport during Stage 2.

```text
Logo   Latest  Research  Topics  In Hartford  Authors   Search  Newsletter  Support
Brand line
[ lead photograph | headline + dek, 8 columns ] [ four dated latest rows, 4 ]
[ important-now context + related reading ]     [ research entry + report link ]
[ topic ledger: reporting / research / testimony ]
```

**Hierarchy and discovery.** Chronology is the first organizing rule. Below the opening, three issue-ledger rows connect a live editorial concern with its most useful research and testimony. Wider story entries interrupt the ledger only when warranted by imagery; author names open their collected work. The major reports have full-width title/dek treatment and visible dates, not tiny PDF covers. Newsletter appears as an editorial subscription strip alongside the reading list; support remains in navigation and a concise institutional footer.

**Navigation and responsive design.** Desktop uses a visible horizontal primary nav and a compact Topics disclosure. At 768px the lead occupies five of eight columns and Latest three, with shortened utility labels. At 375px: compact persistent Search/Newsletter/Menu, two-line brand statement, lead headline and a shallow photograph, then dated Latest rows beginning within one scroll. Topic entries become two-column text lists, not a long sequence of cards. No horizontally scrolling news ticker.

**Motion.** Crisp editorial feedback: 120ms for link/focus feedback, 180ms for topic disclosure, 300ms for opening the search panel, with `cubic-bezier(.2,.7,.2,1)`. A single 420ms opening image translation of 12px establishes the lead; content text is present from first paint. Issue expansion changes only transform/opacity on its reveal surface, leaving layout to native flow. No repeated entrance animation on every story. Reduced motion uses immediate panels and explicit selected/focus states with no spatial travel. Any overlay traps focus, closes on Escape and returns focus to its trigger.

**Photography and trade-off.** Use a Hartford working-day panorama or a verified Connecticut workplace scene, captioned as illustrative where appropriate. Keep the photo large enough to establish place without obscuring text. This direction is strongest for frequent readers and journalists; its compact supporting lane offers less emotional immersion than the magazine. Its distinctiveness must come from the asymmetric ledger and meaningful cross-format connections, not generic hairline broadsheet decoration.

### Concept 2: The Connecticut Edition

**Idea and mood.** A regional magazine about the place policy is meant to serve. Open like a photographic gatefold: Connecticut feels inhabited, varied and worth investing in. This is expansive and humane, with editorial tension between a picture of daily life and reporting about the decisions that shape it. It must still function as a timely publication, not a scenic tourism page.

**Type and palette.** Bodoni Moda supplies sharply contrasted, large editorial display; Manrope supplies compact story lists, navigation and reading copy. Proposed scale: brand line 58-78px on desktop, lead 30-38px, latest 19-22px, text 18px. Lake blue `#164e70`, pale sky `#e7f2f8`, white `#ffffff`, deep ink `#142b38`, muted gold `#caab79`. Use broad cool color fields and photographic color rather than cream-and-terracotta magazine defaults. Keep the logo on an uncluttered contrasting surface.

**Grid and opening.** **Make Connecticut a place to build a life.** runs across the seam of a five-column photo and four-column lead-story area, with a three-column newest-story rail. The photograph is physically large; readable text sits on solid fields rather than over a busy face or skyline. Four newest supporting stories stay visible in the rail from first paint. The headline is part of the gatefold, not a separate full-height hero before content.

```text
Logo                       Topics   Search   Newsletter   Support   Menu
[ Connecticut photograph, 5 ] [ brand line + lead, 4 ] [ Latest, four pieces, 3 ]
         [ caption + place ]  [ reading path into the issue ]
[ wide visual essay field | related analysis | major research ]
     [ next issue shifts alignment; author and reading links in its margin ]
```

**Hierarchy and discovery.** After the opening, the page becomes a sequence of uneven editorial spreads around three current concerns, using the same collection as the other concepts. A workplace spread links job-market analysis; an education spread connects scholarship coverage; a civic spread connects fiscal reporting and the pension study. Research enters each spread as a substantial reading proposition, not a service feature. A persistent issue index provides jumps to those spreads. Authors appear as named voices next to their work. Newsletter has a dedicated margin invitation inside a spread, with a full signup path; support sits beside a short, sourced account of Yankee's purpose.

**Navigation and responsive design.** Desktop exposes Topics plus search/newsletter/support, while a full-screen contents menu reveals the five primary destinations, utility links and named collections. This is a magazine contents page, not the ledger's horizontal nav. At 768px use a five/three split for image/lead and move all four latest headlines into an immediately adjacent horizontal reading band with no carousel. At 375px combine a small masthead, 34-40px brand line, compact lead text and a roughly 180px photo; Latest starts by approximately 620px from the page top. Subsequent spreads are deliberately recropped and reordered, with prose preceding secondary images. Search and Newsletter remain fixed header choices.

**Motion.** Spacious, photographic movement: 180ms controls, 360ms menu, 700ms image-window reveal, `cubic-bezier(.16,1,.3,1)`. Overflow windows can reveal an image through a translated inner layer, never animated clip-path. IntersectionObserver triggers one bounded 24px image movement when a spread arrives; captions stay still. A sticky issue index changes its selected state as sections enter, using IO, without scroll listeners or forced scrolling. Do not delay the LCP photo or hide headline text for an entrance. Reduced motion shows the whole image immediately, keeps the static issue index and uses direct state changes. Keyboard users get the same destinations without hover-dependent discovery.

**Photography and trade-off.** Look for daylight Hartford streets, Connecticut small businesses, New Haven or coastal communities, and people at work or with family. Stage 2 uses downloaded Unsplash/Pexels originals with location verification and credits; stock people are not represented as article subjects. If no suitable image exists, use an art-directed visual with a visible shot-description label. This direction provides the richest sense of Connecticut and aspiration, but demands careful image selection, cropping and compression. It must not sacrifice the latest rail to a tall photographic opener.

### Concept 3: The Policy Room

**Idea and mood.** An open research room organized around reader questions. The homepage is a useful, three-pane publication interface: subject index, current reading and evidence shelf. It feels contemporary, rigorous and exploratory without pretending to be a real-time data terminal. The memorable feature is the relationship between a selected topic and its reporting, research and testimony.

**Type and palette.** Barlow Condensed supplies compact, forceful headlines and the brand statement; IBM Plex Sans supplies body text, metadata and interface labels. Proposed scale: brand line 46-62px, lead 34-44px, supporting text 20-22px, body 17-18px. Deep navy `#103c5a`, blue `#0a4875`, white `#ffffff`, ice `#edf4f8`, muted gold `#caab79`. A dark subject rail and bright reading plane create the dominant contrast. Avoid neon accents, glass effects, fake KPI widgets and decorative monospace numbers.

**Grid and opening.** **Put Connecticut's future in its people's hands.** lives at the top of the subject rail. On desktop, use a 240px left rail, a flexible central reading plane and a roughly 330px right shelf, within a 1440px composition with comfortable gutters. The center shows the same lead `yi-001`; four supporting latest pieces occupy the right shelf. Topics are visible on the left and Search is a clearly labeled control above the reading plane. A wide contextual photograph anchors the central lead, with a separate caption. The opening is a spatial reading room, not a hero plus dashboard cards.

```text
[ Logo / brand line ] [ Search / selected subject / reading controls ] [ Newsletter / Support ]
[ visible topic index ] [ lead story + wide contextual photo ]        [ four Latest pieces ]
[ primary nav         ] [ issue context + related analysis ]         [ research / testimony ]
[ stays available     ] [ author links and full collection ]         [ tools / toolkit      ]
```

**Hierarchy and discovery.** Freshness stays visible even while someone explores a topic. Selecting a topic filters a lower reading collection and changes the evidence shelf; it does not remove the fixed lead/latest comparison content. A Research/Testimony/Analysis selector lets readers choose depth or format within that collection, and author links apply a named author filter. All 22 records have a direct source link. Selected filters remain understandable as text, with result counts calculated from the real dataset and a Clear filters action. Never fabricate policy scores, polling results or bill progress. Major research has room for a real summary and publication date; the toolkit is a persistent shelf entry.

**Navigation and responsive design.** Primary destinations run vertically in the rail, alongside a persistent topic index. At 768px use a compact topic strip above a center/right two-pane composition; the expanded subject menu preserves the reading-room model. At 375px provide a fixed Search/Newsletter/Menu header, a compact brand line, the lead, and Latest within one scroll. The evidence shelf becomes an inline disclosure after the newest pieces, with visible Research and Testimony controls. Topic/format filters are wrapped buttons or native controls, never an overflow-only chip carousel. Content remains a usable reading list without interaction; DOM order follows reading order, not the desktop pane positions.

**Motion.** Quick, directional state changes: 140ms controls, 220ms filtered-result fade, 320ms evidence-panel slide, `cubic-bezier(.22,.8,.3,1)`. Crossfade result groups with opacity and a maximum 8px translation; do not animate container height or leave an empty pane while results load. An aria-live status announces the actual filtered count. The side menu transforms into view with focus trapping; inline evidence disclosures do not trap focus. Reduced motion changes content immediately and announces the same results, preserving orientation through selected labels and headings. No parallax or automatic pane rotation.

**Photography and trade-off.** Use one substantial, documentary Connecticut photograph in the lead and larger contextual images at deliberate breaks in the reading collection. The interface should feel like a place to read, not a text-only directory. This direction is strongest for researchers and returning readers pursuing a question; it is less leisurely than the magazine and requires the clearest interaction labels. Limit the interface to topic, format and author discovery so it does not become a complicated application.

## 7. Comparison and Stage 2 review contract

| Dimension | Public Ledger | Connecticut Edition | Policy Room |
|---|---|---|---|
| Primary behavior | Scan a chronological editorial desk. | Follow visual issue spreads through Connecticut. | Explore a topic and its evidence. |
| Type character | Reading serif with civic sans. | High-contrast display with geometric sans. | Condensed headlines with technical humanist sans. |
| Spatial system | Asymmetric lead plus dated ledger. | Gatefold and uneven photographic spreads. | Persistent index, reading plane and evidence shelf. |
| Nav | Visible horizontal primary nav. | Compact masthead and full contents overlay. | Vertical primary nav and subject rail. |
| Motion | Crisp disclosure and editorial feedback. | Slow photographic reveal and issue orientation. | Fast filter and panel transitions. |
| Main risk | Density can overwhelm occasional visitors. | Imagery can crowd out news and cost performance. | Controls can obscure the simple act of reading. |

All concepts must be checked at 375, 768 and 1440px before they are considered complete. Desktop review should use at least 1440 x 900 and a shorter 1440 x 768 viewport: the lead, four supporting newest pieces, Search and Topics must be visible without scrolling. At 375 x 812, Latest must begin within one viewport-height of scrolling. Search and Newsletter remain available throughout the page.

All versions expose new coverage, current issue context, major research, topics, authors, newsletter and donation paths. Stage 2 will verify real keyboard navigation, focus return/trapping where appropriate, AA contrast, no hover-only controls, responsive image dimensions, lazy secondary imagery and no text/image layout shift. Use two local font families per concept with only necessary weights, compressed responsive photographs, and no opening-screen third-party players. LCP below 2.5 seconds is a target to measure under documented conditions, not a result claimed by this brief.

Implement only transform/opacity animation using native CSS and IntersectionObserver where needed. Each concept gets a full reduced-motion experience that retains discovery and selection feedback. Build and critique one version at a time, take the required screenshots, fix observed failures, then move to the next. The overview will record strengths and material trade-offs.

**Approval boundary:** review the IA, headline choices and three directions before any prototype code. Stage 1 is complete when this report and its verified shared JSON pass the content checks. Stage 2 is waiting for Paolo's feedback and approval.


## October 1 approval amendments: revised motion plans

These user-approved amendments supersede the original motion restraint and Concept 2 opening-screen constraint. Headline assignments remain unchanged. Animation may use clip-path/masks in addition to transform/opacity. No layout-property animation, scroll hijacking or scroll listeners. Use IntersectionObserver or native CSS scroll timelines with a static fallback.

### Public Ledger: the opening of the record

A signature 900ms lead-photo aperture expands from a narrow vertical slice to the full image, with a 1050ms bounded image scale from 1.08 to 1. The actual headline lines rise through overflow masks over 650ms, staggered by 90ms. Use cubic-bezier(.16,1,.3,1). Once per visit, the image reveal establishes editorial drama without delaying readable metadata. Issue-ledger selections use a 420ms directional wipe across the selected evidence surface, paired with a 220ms text crossfade. Reduced motion shows full imagery and all text immediately; selected-state borders and labels retain the editorial sequence.

### Connecticut Edition: the Connecticut gatefold

The full-bleed opening photograph reveals through a 1100ms inset aperture, with a 1400ms scale settling from 1.07 to 1. The assigned brand headline reveals one complete line at a time through overflow masks over 850ms, staggered 110ms, using cubic-bezier(.16,1,.3,1). Neither the image download nor critical text waits for JavaScript. A small place caption holds still. Below, large issue photographs reveal with alternating 900ms inset masks; IO triggers once and bounded CSS scroll-timeline parallax moves inner photography by at most 32px where supported. Layout never animates. A contents overlay uses a 450ms translated sheet and a 500ms staggered link entrance. Reduced motion presents photographs, full headline and contents immediately, preserves the issue index and selected states, and eliminates spatial travel and automatic masking. Latest begins within half a viewport of desktop scrolling and one viewport on mobile; the opening lead sits in the hero’s lower reading shelf.

### Policy Room: evidence comes into focus

Replace Barlow Condensed with **Syne**, paired with IBM Plex Sans. Syne’s broad, sculptural forms and distinctive terminals make the room feel like a designed civic reading space rather than a condensed news feed. Use it for short institutional and section headings; real long article titles remain readable in Plex Sans. Its broad shapes require restrained line length, not forced compression. A 1000ms contextual-photo reveal assembles the reading space from three adjacent masked windows; section labels arrive over 600ms without splitting accessible text into separate words. Photography breaks may use at most 28px of native scroll-timeline parallax with static fallback. Topic selection uses a 480ms evidence-plane wipe and 220ms results crossfade, with actual result announcements. Reduced motion leaves all windows open, the image static and filter changes immediate.

Build order: Connecticut Edition only in this pass. Review at 375, 768 and 1440px, fix issues, deliver screenshots and stop. Public Ledger and Policy Room remain unbuilt until Paolo’s quality feedback.

## October 1 review revision: Edition readability

Paolo found the initial display type difficult to read. Connecticut Edition now uses Source Serif 4 at weight 600 for large brand and section headings, paired with Manrope at weight 600 for article headlines. Summaries are 15px with generous leading, and bylines are strengthened. This supersedes the original Bodoni Moda pairing for Concept 2. The chosen headline, layout and motion remain in place.

## October 1: remaining builds authorized

Paolo requested Public Ledger and Policy Room after disliking Edition. Build and self-review Ledger completely before starting Room. Keep the comparison lock and revised motion plans; readability feedback applies to both. Newsreader uses sturdy reading weights, and Syne stays on short display headings while Plex Sans carries long policy headlines.

## October 1: visual direction correction

Paolo rejected the initial Public Ledger and explicitly referenced https://empowerms.org/. Inspected its live desktop homepage: substantial Figtree 800 headings, generous space, a split brand hero with human photography, softer image corners and clear actions. This visual feedback supersedes the original broadsheet and technical-room art direction. Retain Yankee positions, assigned headlines and shared content, while adopting approachable sans type and clearer institutional hierarchy. Do not copy Empower content, mission or policy pillars.

### Revised direction and motion assignments

Concept 1, now Open Connecticut: light blue institutional opening, sturdy Figtree, family photography with a Hartford inset and rounded primary actions. A 900ms aperture opens the lead photograph, settling its crop over 1050ms. Issue changes retain the 420ms evidence wipe. Phone preserves persistent search/newsletter and puts reporting directly after the compact introduction.

Concept 3, now Connecticut Forward: confident blue opening and gold actions, Hartford assembled through three 1050ms photographic apertures staggered by 120ms. Syne is confined to the large assigned brand headline; Manrope carries policy reading. Replace the technical sidebar with visitor navigation and six subject paths. Topic evidence enters over 480ms; contextual photography retains an 850ms visibility mask and at most 28px native parallax. Complete static imagery and selected-topic cues remain under reduced motion.

These revisions supersede the initial Ledger and Room art directions following the reviewer's explicit Empower reference. Headlines and shared content remain fixed. Three-width self-reviews are complete; visual approval remains pending.

## October 1: imagery and Version 3 font feedback

Paolo found all concepts too boring and insufficiently photographic, and disliked Version 3's font. Enriched all three with photographic latest/research content; Version 1 adds a full-width Norwalk chapter and issue imagery, Version 3 adds full-bleed Hartford, photographic topic tiles and contextual research. Replaced Syne with Figtree for the Version 3 headline. Shared content and assigned headlines unchanged. Three-width review and new rich-v screenshots complete; visual approval pending. Current mobile lab LCP 2702/2627/2928ms, CLS 0, accessibility 100, single provisional runs. Image loading optimized, but the 2500ms target remains unmet. No WordPress changes.
