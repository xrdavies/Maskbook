import { experimentalStyled as styled, Tabs, Tab } from '@material-ui/core'
import { ButtonGroupTabList } from '@dimensiondev/maskbook-theme/src/Components/ButtonGroupTab'
import React, { useState } from 'react'
import { TabContext } from '@material-ui/lab'

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

const walletTabs = ['Mnemonic', 'JSON File', 'Private Key']

export function CreateWallet() {
    const [activeTab, setActiveTab] = useState(walletTabs[0])

    return (
        <Container>
            <TabContext value={walletTabs.includes(activeTab) ? activeTab : walletTabs[0]}>
                <ButtonGroupTabList onChange={(e, v) => setActiveTab(v)} aria-label="Create Wallet Tabs">
                    {walletTabs.map((x) => (
                        <Tab key={x} value={x} label={x} />
                    ))}
                </ButtonGroupTabList>
            </TabContext>
        </Container>
    )
}
