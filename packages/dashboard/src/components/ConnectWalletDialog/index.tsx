import { ConnectActionList, ConnectActionListItem } from '../ConnectActionList'
import { MetaMaskIcon, PolkaDotIcon, WalletIcon } from '../ConnectActionList/icons'
import { memo } from 'react'

export enum ConnectWalletTargets {
    MetaMask,
    Connect,
    PolkaDot,
}
export interface ConnectWalletListProps {
    onConnect(target: ConnectWalletTargets): void
}
export const ConnectWalletList = memo(({ onConnect }: ConnectWalletListProps) => {
    return (
        <ConnectActionList>
            <ConnectActionListItem
                title="MetaMask"
                icon={<MetaMaskIcon />}
                onClick={() => onConnect(ConnectWalletTargets.MetaMask)}
            />
            <ConnectActionListItem
                title="Connect Wallet"
                icon={<WalletIcon />}
                onClick={() => onConnect(ConnectWalletTargets.Connect)}
            />
            <ConnectActionListItem
                title="PolkaDot Wallet"
                icon={<PolkaDotIcon />}
                onClick={() => onConnect(ConnectWalletTargets.PolkaDot)}
            />
        </ConnectActionList>
    )
})
