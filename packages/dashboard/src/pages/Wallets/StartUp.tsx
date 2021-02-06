import { experimentalStyled as styled } from '@material-ui/core/styles'
import { StartupActionList, StartupActionListItem } from '../../components/StartupActionList'
import { ImportIcon, LinkIcon, WalletIcon } from './icons'

export const Container = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
`

export function StartUp() {
    return (
        <Container>
            <StartupActionList>
                <StartupActionListItem
                    icon={<WalletIcon />}
                    title="Create A New Wallet"
                    description="Mask network supports Eth and Polka networks "
                    action="create"
                    onClick={() => {}}
                />
                <StartupActionListItem
                    icon={<ImportIcon />}
                    title="Import the ETH or Polka wallet"
                    description="Mask network supports Private Key、JSON.File and Mnemonic words."
                    action="Import"
                    onClick={() => {}}
                />
                <StartupActionListItem
                    icon={<LinkIcon />}
                    title="Connect plug-in Wallet"
                    description="Mask network supports Metamask、Connect Wallet"
                    action="Connect"
                    onClick={() => {}}
                />
            </StartupActionList>
        </Container>
    )
}
