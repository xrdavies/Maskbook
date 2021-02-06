import { experimentalStyled as styled, listItemClasses } from '@material-ui/core'

export const ConnectActionList = styled('ul')(() => ({
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    padding: 0,
    width: 520,
    [`& .${listItemClasses.root}`]: {
        marginBottom: '0.75em',
    },
}))

export * from './ConnectActionListItem'
