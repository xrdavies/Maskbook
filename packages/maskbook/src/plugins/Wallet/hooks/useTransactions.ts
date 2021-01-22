import { useAsync, useAsyncRetry } from 'react-use'
import { currentWalletConnectSourceSettings } from '../../../settings/settings'
import { useValueRef } from '../../../utils/hooks/useValueRef'
import { useAccount } from '../../../web3/hooks/useAccount'
import { useChainId } from '../../../web3/hooks/useChainState'
import { ChainId } from '../../../web3/types'
import { getTransactionList } from '../apis'

export function useTransactions(limit = 30, offset = 0) {
    const provider = useValueRef(currentWalletConnectSourceSettings)
    const account = useAccount()
    const chainId = useChainId()

    return useAsync(async () => {
        if (chainId !== ChainId.Mainnet) return []
        return await getTransactionList(provider, account, limit, offset)
    }, [chainId, provider, account])
}
