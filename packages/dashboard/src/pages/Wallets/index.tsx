import { Button, experimentalStyled as styled, Typography } from '@material-ui/core'
import { PageFrame } from '../../components/DashboardFrame'
import { StartupActionList, StartupActionListItem } from '../../components/StartupActionList'
import { CloudDownload, CloudUpload, Restore } from '@material-ui/icons'

export default function Wallets() {
    return (
        <PageFrame title="Wallets" primaryAction={<Button>Create a new wallet</Button>}>
            <Typography>Hi</Typography>
        </PageFrame>
    )
}

export const Container = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
`

export function WalletStartupPage() {
    return (
        <Container>
            <StartupActionList>
                <StartupActionListItem
                    icon={<CloudUpload />}
                    title="Create A New Wallet"
                    description="Mask network supports Eth and Polka networks "
                    action="create"
                    onClick={() => {}}
                />
                <StartupActionListItem
                    icon={<CloudDownload />}
                    title="Import the ETH or Polka wallet"
                    description="Mask network supports Private Key、JSON.File and Mnemonic words."
                    action="Import"
                    onClick={() => {}}
                />
                <StartupActionListItem
                    icon={<Restore />}
                    title="Connect plug-in Wallet"
                    description="Mask network supports Metamask、Connect Wallet"
                    action="Connect"
                    onClick={() => {}}
                />
            </StartupActionList>
        </Container>
    )
}
