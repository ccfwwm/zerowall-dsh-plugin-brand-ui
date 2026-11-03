import type { Context as ClientContext } from '@deepseek-ai/cordis'
import type {} from '@deepseek-ai/dsh-client-ui-renderer/client'
import type {} from '@deepseek-ai/dsh-client-ui-sidebar/client'
import type { ThemeTokenOverrides } from '@deepseek-ai/dsh-client-ui-theme/client'
import type { SidebarBrandMarkOwnerProps } from '@deepseek-ai/dsh-client-ui-sidebar/client'
import mark from './assets/zerowall-mark.png'

const PACKAGE_ID = '@zerowall/dsh-plugin-brand-ui'
const BRAND_TOKENS: ThemeTokenOverrides = {
  '--dsw-alias-brand-primary-new-colorprimary-new-color': {
    light: '#276f62',
    dark: '#75c7b3',
  },
}

export const inject = ['slots', 'theme']

function BrandMark({ size }: SidebarBrandMarkOwnerProps) {
  return <img src={mark} width={size} height={size} alt="" aria-hidden="true" />
}

function BrandName() {
  return <span>ZeroWall Science</span>
}

export function apply(ctx: ClientContext): void {
  ctx.effect(() => ctx.theme.overrideTokens(PACKAGE_ID, BRAND_TOKENS), 'ZeroWall brand theme')
  ctx.slots.inject('sidebar.brand.mark', () =>
    ctx.slots.inject('sidebar.brand.name', function* () {
      yield ctx.slots.register({ name: 'sidebar.brand.mark', priority: 100 }, BrandMark)
      yield ctx.slots.register({ name: 'sidebar.brand.name', priority: 100 }, BrandName)
    }))
}
