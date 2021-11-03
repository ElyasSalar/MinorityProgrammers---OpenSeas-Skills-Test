import * as Web3 from 'web3'
import { OpenSeaPort, Network, OpenSeaAPI } from 'opensea-js'

// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')

export const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main
})

export const api = new OpenSeaAPI('https://api.opensea.io');