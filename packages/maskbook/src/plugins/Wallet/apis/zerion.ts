//const ZERION_API = 'wss://api-v4.zerion.io/socket.io/?api_token=Zerion.oSQAHALTonDN9HYZiYSX5k6vnm4GZNcM&EIO=3&transport=websocket'
const ZERION_API = 'wss://zerion-api-v4-agent.r2d2.to/socket.io/'
const API_TOKEN = 'Zerion.oSQAHALTonDN9HYZiYSX5k6vnm4GZNcM'

interface ZerionMeta {
    address: string
    addresses: string[]
    asset_codes?: string[]
    currency: string
    status: string

    transactions_limit?: number
    transactions_offset?: number
    transactions_search_query?: string | null
}
interface ZerionAsset {
    asset_code: string
    decimals: number
    icon_url: string
    is_displayable: boolean
    name: string
    price: string
    symbol: string
}

interface ZerionTransacton {
    address_from: string
    address_to: string
    block_number: number
    changes: ZerionAsset[]
    contract: string | null
    direction: string | null
    fee: { value: string; price: string } | null
    hash: string
    id: string
    meta: {}
    mined_at: number
    nonce: number
    protocol: string | null
    status: string
    type: string
}

export interface TransactionMsg {
    meta: ZerionMeta
    payload: {
        transactions: ZerionTransacton[]
    }
}

const subscribe = (path: string, account: string, limit = 30, offset = 0) => {
    const d = JSON.stringify([
        'subscribe',
        {
            payload: {
                address: account,
                currency: 'usd',
                transactions_limit: limit,
                transactions_offset: offset,
            },
            scope: ['transactions'],
        },
    ])

    return `${path},${d}`
}

const get = (path: string, account: string, limit: number, offset: number) => {
    const d = JSON.stringify([
        'get',
        {
            payload: {
                address: account,
                currency: 'usd',
                ransactions_limit: limit,
                transactions_offset: offset,
            },
            scope: ['transactions'],
        },
    ])

    return `${path},${d}`
}

const WebsocketClient = (api_token: string) => {
    return new Promise<WebSocket>((resolve, reject) => {
        try {
            const params = new URLSearchParams()
            params.append('api_token', api_token)
            params.append('EIO', '3')
            params.append('transport', 'websocket')
            const client = new WebSocket(`${ZERION_API}?${params.toString()}`)
            return resolve(client)
        } catch (error) {
            return reject(error)
        }
    })
}

const GetTransactions = (api_token: string, account: string, limit = 30, offset = 0) => {
    return new Promise<TransactionMsg>((resolve, reject) => {
        const message_type = 'transactions'
        WebsocketClient(api_token)
            .then((client) => {
                const scope: string[] = []
                scope.push(message_type)
                client.onopen = () => {
                    const params = new URLSearchParams()
                    params.append('api_token', api_token)
                    client.send(`40/address?${params.toString()}`)
                    client.send(subscribe('42/address', account, limit, offset))
                }
                client.onmessage = (ev) => {
                    if (typeof ev.data !== 'string') {
                        return
                    }
                    if (!ev.data.startsWith(`42/address`)) {
                        return
                    }
                    try {
                        const jsonData = JSON.parse(ev.data.slice(`42/address,`.length))
                        if (jsonData[0] === `received address ${message_type}`) {
                            resolve(jsonData[1])
                        }
                    } catch (error) {
                        console.log(error)
                        reject(error)
                    }
                }
            })
            .catch((error) => reject(error))
    })
}

export async function GetTransactionList(address: string, limit: number, offset: number) {
    return await GetTransactions(API_TOKEN, address, limit, offset)
}
