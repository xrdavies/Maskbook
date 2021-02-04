import { story } from '@dimensiondev/maskbook-storybook-shared'
import { WalletStartupPage as C } from '../src/pages/Wallets'
const { meta, of } = story(C)

export default meta({ title: 'Pages/Wallet/Start up'})

export const WalletStartupPage = of({
    children: C
})
