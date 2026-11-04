# Brand UI development

- Work in the canonical `C:\codekg\scienceproject\zerowall-dsh-plugin-brand-ui` checkout on `main`. Do not create duplicate `-check`, `-iconfix`, or persistent worktree directories. Inspect and preserve local changes before pulling; use fast-forward pulls and normal pushes.
- Use public DSH brand slots and reversible theme overrides. Desktop startup, native window and taskbar icons, installation, and updates remain owned by the desktop repository.
- Run `npm ci --no-audit --no-fund`, `npm run check`, and `npm run test:package` for implementation changes. Review and commit rebuilt `lib/` artifacts with source changes because Git installs do not run lifecycle scripts. Never commit credentials or local diagnostics.
- Test consumers and profiles in temporary or ignored output locations, not extra source checkouts. Verify that disabling the plugin releases its slots and theme overrides.
- The desktop pins a tested Git commit. Plugin pushes do not update that pin automatically. Follow the shared [development and migration guide](https://github.com/ccfwwm/zerowallscience-newui/blob/main/docs/developer/zerowall/README.zh.md) for integration and packaging.
