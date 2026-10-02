# Yankee Institute

Redesign of the existing WordPress website, with Elementor replacing the current Themify presentation layer. Empower Mississippi is the engagement reference. This is a full redesign, not Policy Circle's narrower homepage refinement.

## Start here

- [AGENTS.md](AGENTS.md): working rules, task maintenance and environment boundaries.
- [PRODUCT.md](PRODUCT.md): audience, purpose and project scope.
- [DESIGN.md](DESIGN.md): design brief and validation requirements.
- [MEMORY.md](MEMORY.md): private engagement context and current status (local only).
- [TASKS.md](TASKS.md): private delivery tracker (local only).
- [Source register](memory/sources.md) and [decisions](memory/decisions.md): provenance and decisions (local only).

## Repository and environments

Remote: `git@github.com:paoloresteghini/yankee-institute.git`.

This repository begins with documentation. No WordPress installation, staging connection, deployment automation or application build is configured. The live website is https://yankeeinstitute.org/. Staging host, access and release workflow remain to be confirmed. Repository initialization does not authorize website changes or publishing.

Keep custom themes, plugins and reviewed helper scripts in Git when introduced. Preserve database-backed Elementor templates and settings through documented exports and verified backups. Do not commit WordPress core, credentials, uploads or database dumps.

## Private local context

Following the Policy Circle setup, `MEMORY.md`, `TASKS.md`, `memory/`, `sources/`, `audits/`, `backups/` and `skill-observations/` are ignored. They will not exist in a fresh clone. Recover them from the original workspace or authorized source records; never infer historical completion. The September 30 proposal, agreement and audit evidence are retained locally with a checksum manifest.

Use `design/` for future review concepts. Serve only the intended public preview directory, never the repository root. A review demo, staging build and production release are distinct deliverables.

## Homepage concept research

[Stage 1 research and creative brief](research.md) contains the live-site study, eight references, proposed navigation, ten headlines and three creative directions. [Shared content](content/content.json) contains 22 verified Yankee pieces. Stage 2 vanilla prototypes are built for local review. Open index.html through the public preview to compare the current Connecticut Edition (version-2) with Connecticut Together (version-1) and Connecticut Possibilities (version-3), two welcoming, mission-led alternatives using the same fonts. The earlier rejected concepts are retired. Review evidence is retained privately; client visual approval is pending. These review concepts precede the separately approved WordPress implementation.

Contained comparisons: version-4 constrains Version 1’s post-banner content to a centered column; version-5 does the same for Version 3. Banners and backgrounds remain full width. Both reuse their source CSS/JS and preserve source content. The comparison overview links all five options.

## Public concept review

[View the homepage concepts](https://paoloresteghini.github.io/yankee-institute/). Published from the gh-pages branch using only index.html, assets, content and version-1 through version-5. Private project records and review notes are excluded. Publication is a design review demo, not a WordPress release. Future edits on main require a deliberate preview refresh.
