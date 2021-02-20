import { memo } from 'react'
import { Button, experimentalStyled as styled, Typography } from '@material-ui/core'
import { SuccessIcon } from '@dimensiondev/icons'

export interface CreateSuccessfully {
    onUnlock(): void
}

export const CreateSuccessfully = memo((props: CreateSuccessfully) => {
    const { onUnlock } = props

    return (
        <Container>
            <SuccessIcon />
            <SuccessTitle>Success</SuccessTitle>
            <SuccessTips>You have created your wallet successfully</SuccessTips>
            <UnlockButton onClick={onUnlock}>Unlock Wallet</UnlockButton>
        </Container>
    )
})

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SuccessTitle = styled(Typography)(
    ({ theme }) => `
    font-size: 24px;
    color: #77E085;
    font-weight: 500;
    margin: ${theme.spacing(2)} 0px;
`,
)

const SuccessTips = styled(Typography)(
    ({ theme }) => `
    font-size:14px;
    color: #5E5A7D;
`,
)

const UnlockButton = styled(Button)(
    ({ theme }) => `
    width: 124px;
    height: 32px;
    border-radius: 6px;
    margin-top: ${theme.spacing(7)}
`,
)
