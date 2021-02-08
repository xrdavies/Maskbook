import { memo } from 'react'
import { experimentalStyled as styled } from '@material-ui/core'
import { WalletQRCodeContainer } from '../WalletQRCodeContainer'

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Tip = styled('div')`
    text-align: center;
    color: #7b8192;
    font-size: 16px;
    margin-bottom: 40px;
`

export const WalletConnect = memo(() => {
    return (
        <Container>
            <Tip>Scan QR code with a WalletConnect-compatible wallet</Tip>
            <WalletQRCodeContainer width={330} height={330} borderWidth={15} borderHeight={2} />
        </Container>
    )
})
