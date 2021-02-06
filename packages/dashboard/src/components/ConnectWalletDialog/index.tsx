import { DialogContent, experimentalStyled as styled } from '@material-ui/core'
import { MaskDialog } from '@dimensiondev/maskbook-theme/dist/src/Components/Dialogs'
import { ConnectActionList, ConnectActionListItem } from '../ConnectActionList'
import { MetaMaskIcon, PolkaDotIcon, WalletIcon } from '../ConnectActionList/icons'

export function ConnectWalletDialog() {
    return (
        <MaskDialog open title="Connect Wallet" onClose={() => {}} DialogProps={{ maxWidth: false, open: true }}>
            <DialogContentContainer>
                <ConnectActionList>
                    <ConnectActionListItem title="MetaMask" icon={<MetaMaskIcon />} onClick={() => {}} />
                    <ConnectActionListItem title="Connect Wallet" icon={<WalletIcon />} onClick={() => {}} />
                    <ConnectActionListItem title="PolkaDot Wallet" icon={<PolkaDotIcon />} onClick={() => {}} />
                </ConnectActionList>
            </DialogContentContainer>
        </MaskDialog>
    )
}

const DialogContentContainer = styled(DialogContent)(() => ({
    [`&.MuiDialogContent-root`]: {
        padding: '45px 80px 84px',
    },
}))
