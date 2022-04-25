import { Token, ChainId } from '@pancakeswap/sdk'
import tokens, { mainnetTokens } from './tokens'
import farms from './farms'
import { Ifo } from './types'

const cakeBnbLpToken = new Token(ChainId.MAINNET, farms[1].lpAddresses[ChainId.MAINNET], 18, farms[1].lpSymbol)
const WASTR_USDT = new Token(ChainId.MAINNET, farms[2].lpAddresses[ChainId.MAINNET], 18, farms[2].lpSymbol)

const ifos: Ifo[] = [
  {
    id: 'AGS-1',
    address: '0x196b433A903e73070B8eaE05daf72c91780eC265',
    isActive: true,
    name: 'AGS Token Sale',
    poolBasic: {
      saleAmount: '1,000,000 AGS',
      raiseAmount: '$2,100,000',
      cakeToBurn: '$2,100,000',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '5,000,000 AGS',
      raiseAmount: '$500,000',
      raiseAmountInCurrency: '2,500,000',
      cakeToBurn: '$0',
      distributionRatio: 1,
    },
    currency: mainnetTokens.wbnb,
    token: tokens.cake,
    releaseBlockNumber: 1651417200,
    campaignId: '0',
    articleUrl: 'https://altergrimace.medium.com/ags-finance-amm-dex-on-astar-network-8b1295e5b170',
    tokenOfferingPrice: 0.1,
    version: 2,
    startTime: 1651244400,
    endTime: 1651417200,
  },
]

export default ifos
