import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'AGS',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      592: '0x555d672A69338753B9f2091a7085c5d1A60459f3',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'AGS/WASTR',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      592: '0x2f6C10062647EB0CF044601fDbC031dcE0710b73',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'USDT/WASTR',
    lpAddresses: {
      97: '',
      592: '0x624eD15D9BEd02f905f41e6E4190f0Af9caf2151',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wbnb,
  },
  // {
  //   pid: 3,
  //   lpSymbol: 'USDT/USDC',
  //   lpAddresses: {
  //     97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
  //     592: '0xD72A602C714ae36D990dc835eA5F96Ef87657D5e',
  //   },
  //   token: serializedTokens.usdt,
  //   quoteToken: serializedTokens.usdc,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'BUSD/USDC',
  //   lpAddresses: {
  //     97: '',
  //     592: '0xeee106Aa8a0DE519E8Eb21C66A5c2275b46b3F4d',
  //   },
  //   token: serializedTokens.busd,
  //   quoteToken: serializedTokens.usdc,
  // },
  // {
  //   pid: 5,
  //   lpSymbol: 'DAI/USDC',
  //   lpAddresses: {
  //     97: '',
  //     592: '0x996D73aC8F97cf15BD476b77CB92ce47cA0E71Fe',
  //   },
  //   token: serializedTokens.dai,
  //   quoteToken: serializedTokens.usdc,
  // },
  // {
  //   pid: 6,
  //   lpSymbol: 'WETH/WASTR',
  //   lpAddresses: {
  //     97: '',
  //     592: '0x87988EbDE7E661F44eB3a586C5E0cEAB533a2d9C',
  //   },
  //   token: serializedTokens.eth,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 7,
  //   lpSymbol: 'USDC/WASTR',
  //   lpAddresses: {
  //     97: '',
  //     592: '0xBB1290c1829007F440C771b37718FAbf309cd527',
  //   },
  //   token: serializedTokens.usdc,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 8,
  //   lpSymbol: 'WBTC/WASTR',
  //   lpAddresses: {
  //     97: '',
  //     592: '0x61a49Ba86E168cD25cA795b07B0A93236BB25127',
  //   },
  //   token: serializedTokens.btcb,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 9,
  //   lpSymbol: 'BNB/WASTR',
  //   lpAddresses: {
  //     97: '',
  //     592: '0x92127ec0EbEF8B30378D757bbE8dCE18210B848B',
  //   },
  //   token: serializedTokens.BNB,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 10,
  //   lpSymbol: 'MATIC/WASTR',
  //   lpAddresses: {
  //     97: '',
  //     592: '0xCA59df939290421047876C917789afdB68D5D6f1',
  //   },
  //   token: serializedTokens.matic,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 11,
  //   lpSymbol: 'WSDN/WASTR',
  //   lpAddresses: {
  //     97: '',
  //     592: '0xCcEFDDfF4808F3e1e0340e19e43f1E9Fd088b3F2',
  //   },
  //   token: serializedTokens.wsdn,
  //   quoteToken: serializedTokens.wbnb,
  // }
]
export default farms
