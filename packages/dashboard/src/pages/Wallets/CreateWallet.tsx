import { experimentalStyled as styled, Tab } from '@material-ui/core'
import { ButtonGroupTabList } from '@dimensiondev/maskbook-theme/src/Components/ButtonGroupTab'
import React, { useState } from 'react'
import { TabContext } from '@material-ui/lab'
import { RefreshIcon } from './icons'
import { MnemonicGenerator } from '../../components/Mnemonic'

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 584px;
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

const MnemonicGeneratorContainer = styled('div')`
    padding: 30px 41px;
    background-color: #f9fafa;
    border-radius: 8px;
`

const walletTabs = ['Mnemonic', 'JSON File', 'Private Key']

export function CreateWallet() {
    const [activeTab, setActiveTab] = useState(walletTabs[0])

    return (
        <Container>
            <TabContext value={walletTabs.includes(activeTab) ? activeTab : walletTabs[0]}>
                <ButtonGroupTabList onChange={(e, v) => setActiveTab(v)} aria-label="Create Wallet Tabs" fullWidth>
                    {walletTabs.map((x) => (
                        <Tab key={x} value={x} label={x} />
                    ))}
                </ButtonGroupTabList>
            </TabContext>
            <Refresh>
                <RefreshIcon />
                <span>Refresh</span>
            </Refresh>
            <MnemonicGeneratorContainer>
                <MnemonicGenerator dataSource={[...Array(12).keys()].map((i) => String(i))} />
            </MnemonicGeneratorContainer>
        </Container>
    )
}
