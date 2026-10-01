# Cloud development handoff

Use repository paoloresteghini/yankee-institute. Version 2 (Connecticut Edition) is the active prototype. Versions 1 and 3 are comparison concepts. Continue Version 2 from its current implementation, preserving the mission, four core commitments, global Issues navigation, larger Latest supporting stories, compact sticky work stack and email-only signup.

## Runtime and checks

Vanilla HTML, CSS and JavaScript. No package installation or build step. Python 3 and Node.js are sufficient for the existing checks:

```sh
python3 version-2/check.py
python3 version-2/check-navigation.py
node --check version-2/script.js
```

For a preview, create a temporary directory containing only symlinks to index.html, assets, content and the three version folders. Run Python's http.server against that directory on port 8769, binding 0.0.0.0 in the cloud. Open /version-2/index.html through the environment preview. Do not expose the repository root or private context directories.

## Current status and boundaries

Local layout checks passed at ten widths from 320 to 1920px. All 22 content pieces and 24 original navigation destinations remain intact. Visual review is still in progress. Newsletter receipt, native browser/reduced-motion checks, fresh performance measurement and retired CSS cleanup remain open. Do not describe these as completed.

Private project records and detailed audits remain in the original local workspace. Create an ignored TASKS.md current-work tracker in a fresh clone and explicitly record missing private history. No WordPress write, provider configuration, production release or deployment automation is authorized by this development migration. No credentials are needed to preview or run these checks.
