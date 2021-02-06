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
            <ListItemIcon>{icon}</ListItemIcon>
        </Container>
    )
}

const Container = styled(ListItem)`
    border: 1px solid #f3f3f4;
    border-radius: 8px;
`

const Dot = styled('div')`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #a6a9b6;
    margin-right: 16px;
`
