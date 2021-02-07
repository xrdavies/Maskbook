import {
    Alert,
    Button,
    Collapse,
    createStyles,
    experimentalStyled as styled,
    FilledInput,
    IconButton,
    Tab,
} from '@material-ui/core'
import { ButtonGroupTabList } from '@dimensiondev/maskbook-theme'
import React, { useState } from 'react'
import { TabContext, TabPanel } from '@material-ui/lab'
import { RefreshIcon } from './icons'
import { MnemonicReveal } from '../../components/Mnemonic'
import { Close as CloseIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ButtonGroupTabContainer = styled('div')`
    width: 582px;
`

const Refresh = styled('div')`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 584px;
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

const ControlContainer = styled('div')`
    margin-top: 50px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    width: 584px;
`

const AlertContainer = styled('div')`
    width: 676px;
    margin-top: 59px;
    color: #afc3e1;
`

const useTabPanelStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 0,
        },
    }),
)

const usePrivateKeyTextStyles = makeStyles(() =>
    createStyles({
        root: {
            width: 582,
            height: 182,
            marginTop: 25,
        },
    }),
)

const walletTabs = ['Mnemonic', 'JSON File', 'Private Key']

export function CreateWallet() {
    const tabClasses = useTabPanelStyles()
    const privateKeyTextClasses = usePrivateKeyTextStyles()
    const [activeTab, setActiveTab] = useState(walletTabs[0])
    const [openAlert, setOpenAlert] = useState(true)
    return (
        <>
            <Container>
                <TabContext value={walletTabs.includes(activeTab) ? activeTab : walletTabs[0]}>
                    <ButtonGroupTabContainer>
                        <ButtonGroupTabList
                            onChange={(e, v) => setActiveTab(v)}
                            aria-label="Create Wallet Tabs"
                            fullWidth>
                            {walletTabs.map((x) => (
                                <Tab key={x} value={x} label={x} />
                            ))}
                        </ButtonGroupTabList>
                    </ButtonGroupTabContainer>
                    <TabPanel key="Mnemonic" value="Mnemonic" classes={tabClasses}>
                        <Refresh>
                            <RefreshIcon />
                            <span>Refresh</span>
                        </Refresh>
                        <MnemonicGeneratorContainer>
                            <MnemonicReveal words={[...Array(12).keys()].map((i) => String(i))} />
                        </MnemonicGeneratorContainer>
                    </TabPanel>
                    <TabPanel key="Private Key" value="Private Key" classes={tabClasses}>
                        {/* Private Key Input need be a component */}
                        <FilledInput classes={privateKeyTextClasses} />
                    </TabPanel>
                </TabContext>

                <ControlContainer>
                    <Button color="secondary">Remember that later</Button>
                    <Button color="primary">Verification</Button>
                </ControlContainer>
                <AlertContainer>
                    <Collapse in={openAlert}>
                        <Alert
                            severity="info"
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => setOpenAlert(false)}>
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }>
                            Mask Network is a free, open-source, client-side interface. Mask Network allows you to
                            interact directly with the blockchain, while you remain in full control of your keys and
                            funds.Please think about this carefully. YOU are the one who is in control. Mask Network is
                            not a bank or exchange. We don't hold your keys, your funds, or your information. This means
                            we can't access accounts, recover keys, reset passwords, or reverse transactions.
                        </Alert>
                    </Collapse>
                </AlertContainer>
            </Container>
        </>
    )
}
