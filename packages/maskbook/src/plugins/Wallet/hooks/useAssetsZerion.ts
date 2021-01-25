import { useAsync, useAsyncRetry } from 'react-use'
import { currentWalletConnectSourceSettings } from '../../../settings/settings'
import { useValueRef } from '../../../utils/hooks/useValueRef'
import { useAccount } from '../../../web3/hooks/useAccount'
import { useChainId } from '../../../web3/hooks/useChainState'
import { ChainId } from '../../../web3/types'
import { getAssetsList } from '../apis/zerion'
import { TransactionProvider } from '../types'

export function useAssetsZerion() {
    const provider = useValueRef(currentWalletConnectSourceSettings)
    const account = useAccount()
    const chainId = useChainId()

    return useAsync(async () => {
        if (chainId !== ChainId.Mainnet) return []
        if (provider !== TransactionProvider.ZERION) return []
        return await getAssetsList(account)
    }, [chainId, provider, account])
}
