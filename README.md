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

## Approved design and prototypes

Connecticut Edition (version-2) is the selected design style. The homepage and About prototype share Source Serif 4, Manrope, photography, navy and restrained gold. The root preview opens the selected homepage; About links to version-2/about/index.html. An additional About composition is available at version-2/about-alternative/index.html for comparison, preserving the original. Other homepage variants have been retired at Paolo’s request. Their tracked source remains recoverable from Git history.

Research and content/content.json preserve the original public-source research. Private screenshots and review notes remain excluded. These vanilla prototypes precede Elementor implementation and are not a WordPress deployment.

## Public review demo

The existing GitHub Pages demo remains at https://paoloresteghini.github.io/yankee-institute/. Local changes require a deliberate publication refresh; files deleted locally may still exist in the previously published demo. Publish only the intended public files, never private records or backups.
