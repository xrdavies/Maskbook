import { ListItem, ListItemIcon, ListItemText, experimentalStyled as styled } from '@material-ui/core'

export interface ConnectActionListItemProps {
    title: string
    icon: React.ReactNode
    onClick(): void
}

export function ConnectActionListItem(props: ConnectActionListItemProps) {
    const { title, icon, onClick } = props
    return (
        <Container button onClick={onClick}>
            <Dot />
            <ListItemText primary={title} />
            <Icon>{icon}</Icon>
        </Container>
    )
}

const Icon = styled(ListItemIcon)`
    font-size: 48px;
`

const Container = styled(ListItem)`
    /* TODO: avoid hardcoded color */
    border: 1px solid #f3f3f4;
    /* TODO: avoid hardcoded shape */
    border-radius: 8px;
`

const Dot = styled('div')`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    /* TODO: avoid hardcoded color */
    background-color: #a6a9b6;
    /* TODO: avoid hardcoded spacing */
    margin-right: 16px;
`
