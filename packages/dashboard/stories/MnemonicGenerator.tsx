import { story } from '@dimensiondev/maskbook-storybook-shared'
import { MnemonicGenerator as C } from '../src/components/Mnemonic'

const { meta, of } = story(C)

export default meta({
    title: 'Components/Mnemonic Generator',
    argTypes: { dataSource: { name: 'dataSource', type: { required: true } } },
})

export const MnemonicGenerator = of({
    args: {
        dataSource: [...Array(12).keys()].map((i) => String(i)),
    },
})
