import { useAsync } from "react-use"
import { PassThrough } from "stream"

 //const ZERION_API = 'wss://api-v4.zerion.io/socket.io/?api_token=Zerion.oSQAHALTonDN9HYZiYSX5k6vnm4GZNcM&EIO=3&transport=websocket'
 const ZERION_API = "wss://zerion-api-v4-agent.r2d2.to/socket.io/"

interface ZerionMeta {
    address: string
    addresses: string[]
    asset_codes: string[]
    currency: string
    status: string
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

interface ZerionAssets {
    asset: ZerionAsset
    quantity: string
}

interface AssetsMsg {
    meta: ZerionMeta
    payload: {
        assets: ZerionAssets[]
    }
}

const subscribe = (path: string, account: string, scope: string[]) => {
    const d =  JSON.stringify([
        "subscribe", {
            payload: {
                address: account,
                currency: "usd",
                portfolio_fields: "all",
            },
            scope: scope,
        }
    ])

    return `${path},${d}`
}

const get = (path: string, account: string, scope: string[]) => {
    const d = JSON.stringify([
        "get", {
            payload: {
                address: account,
                currency: "usd",
                ransactions_limit: 30,
                transactions_offset: 30,
            },
            scope: scope,
        }
    ])

    return `${path},${d}`
}


const API_TOKEN = "Zerion.oSQAHALTonDN9HYZiYSX5k6vnm4GZNcM"
const ACCOUNT="0x934b510d4c9103e6a87aef13b816fb080286d649"

const WebsocketClient = (api_token: string) => {
    return new Promise<WebSocket>((resolve, reject) => {
        try {
            const params = new URLSearchParams()
            params.append('api_token', api_token)
            params.append("EIO", "3")
            params.append("transport", "websocket")
          const client = new WebSocket(`${ZERION_API}?${params.toString()}`);
          return resolve(client)
        } catch (error) {
          return reject(error)
        }
      })
  }

function GetZerionMessage<T>(api_token: string, account: string, path: string, message_type: string) {
    return new Promise<{data: T}>((resolve, reject) => {
        WebsocketClient(api_token).then((client) => {
            const scope: string[] = []
            scope.push(message_type)

            client.onopen = () => {
                const params = new URLSearchParams()
                params.append('api_token', api_token)
                client.send(`40/${path}?${params.toString()}`)
                client.send(subscribe(`42/${path}`, account, scope))
            }

            client.onerror =(ev) => {
                console.log('connect error:', ev)
            }
            client.onclose = () => {
                console.log('connect close')
            }
            client.onmessage = (ev) => {
                if (typeof ev.data !== 'string') {
                    return
                }
                if (!ev.data.startsWith(`42/${path}`)) {
                    return
                }
                try {
                    const jsonData = JSON.parse(ev.data.slice(`42/${path},`.length))
                    if (jsonData[0] === `received ${path} ${message_type}`) {
                        resolve({data: jsonData[1]})
                    }
                } catch (error) {
                    console.log(error)
                    reject(error)
                }
            }

        }).catch(error => reject(error))
    })
}

function GetZerionAssets(api_token: string, account: string) {

        GetZerionMessage<AssetsMsg>(api_token, account, "address", "assets").then((data) => {
            console.log(data)
        })
 }



export  function getTransactionList() {

    GetZerionAssets(API_TOKEN, ACCOUNT)
   return []
}
