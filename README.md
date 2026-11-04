# ZeroWall Science Brand UI for DSH

This preview DSH plugin applies the ZeroWall Science accent color, replaces the sidebar brand mark and name, and supplies the conversation hero mark. It works with DSH `0.2.2-alpha.2` through the `0.2.x` line and is maintained independently from the desktop repository.

The plugin only uses the public sidebar and conversation slots and theme token override service. Desktop window chrome, the startup screen, app icon, installer, shortcuts, and update flow belong to the desktop application and are not changed by this plugin.

## Install

In DSH, open **Settings → Plugins → Install from Git** and enter:

```text
https://github.com/ccfwwm/zerowall-dsh-plugin-brand-ui
```

Restart DSH after installation. Disable or uninstall the plugin from the same Plugins screen to restore the default DSH brand and theme.

The plugin is also listed by the ZeroWall Science preview Discover index when that index is configured.

## Permissions and network use

The plugin requests no account credentials and makes no network requests. It registers three brand slots with priority `-100`, ahead of the default occupants, and one reversible theme-token override. DSH removes these registrations when the plugin is disabled or uninstalled.

## Development

Use the canonical `C:\codekg\scienceproject\zerowall-dsh-plugin-brand-ui` checkout on `main`; keep one active source directory per plugin. See the shared [ZeroWall development, migration, packaging, and testing guide](https://github.com/ccfwwm/zerowallscience-newui/blob/main/docs/developer/zerowall/README.zh.md) and [AGENTS.md](AGENTS.md).

Requires Node.js 24.9 or later and npm.

```sh
npm ci
npm run check
npm pack
```

Git installs consume committed `lib/` artifacts without executing package lifecycle scripts. Run `npm run check` before packing or committing those artifacts. CI verifies that rebuilding leaves `lib/` unchanged. The tarball includes generated declarations for both public entry points.

## Distribution and compatibility

The package declares DSH `>=0.2.2-alpha.2 <0.3.0-0`. It requires the DSH Cordis runtime, sidebar and conversation brand slots, renderer, and theme service at the matching release. DSH Discover indexes pin a Git commit before installation. ZeroWall's signed resource catalog is a separate channel: it verifies a signed catalog, immutable archive digest, and desktop/DSH compatibility before activation. The current `0.1.0-preview.3` release is intended for preview-channel validation; stable promotion requires a ZeroWall signing key and a successful clean-profile install test.
