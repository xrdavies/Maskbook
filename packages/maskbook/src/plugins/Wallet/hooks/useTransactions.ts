import { currentWalletConnectSourceSettings } from '../../../settings/settings'
import { useValueRef } from '../../../utils/hooks/useValueRef'
import { useAccount } from '../../../web3/hooks/useAccount'
import { useChainId } from '../../../web3/hooks/useChainState'
import { ChainId } from '../../../web3/types'
import { getTransactionList } from '../apis'
import type { TransactionProvider } from '../types'

export function useTransactions() {
    const provider = useValueRef(currentWalletConnectSourceSettings)
    const account = useAccount()
    const chainId = useChainId()

    if (chainId !== ChainId.Mainnet) return []

    return getTransactionList(provider, account)
}
