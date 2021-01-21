import { currentWalletConnectSourceSettings } from "../../../settings/settings";
import { useValueRef } from "../../../utils/hooks/useValueRef";
import { unreachable } from "../../../utils/utils";
import { useAccount } from "../../../web3/hooks/useAccount";
import { useChainId } from "../../../web3/hooks/useChainState";
import { ChainId } from "../../../web3/types";
import { TransactionProvider } from "../types";

import * as debank from "./debank"
import * as zerion from "./zerion"

export function getTransactionList(provider: TransactionProvider, address:string, limit=30, offset=0) {

    if (provider === TransactionProvider.ZERION) {
        return zerion.GetTransactionList(address, limit, offset)
    }
    if (provider === TransactionProvider.DEBANK) {
        return debank.getTransactionList(address)
    }

    return unreachable(provider)
}
