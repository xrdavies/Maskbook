import { story } from '@dimensiondev/maskbook-storybook-shared'
import { ConnectWalletDialog as C } from '../src/components/ConnectWalletDialog'
const { meta, of } = story(C)

export default meta({ title: 'Pages/Wallet/Connect Wallet' })

export const ConnectWallet = of({})
