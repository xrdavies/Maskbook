import { experimentalStyled as styled, Tabs, Tab } from '@material-ui/core'
import React, { useState } from 'react'
import { RefreshIcon } from './icons'

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 568px;
`

const Refresh = styled('div')`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin: 16px 0;
    font-size: 14px;
    line-height: 20px;
    color: #1c68f3;
    cursor: pointer;
`

export function CreateWallet() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <Container>
            <Tabs
                value={activeTab}
                onChange={(event: React.SyntheticEvent, newValue: number) => setActiveTab(newValue)}>
                <Tab label="Mnemonic" />
                <Tab label="JSON File" />
                <Tab label="Private Key" />
            </Tabs>
            <Refresh>
                <RefreshIcon />
                <span>Refresh</span>
            </Refresh>
        </Container>
    )
}
