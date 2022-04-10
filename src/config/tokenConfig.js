const tokenData = {
  ethToken: {
    srcSymbol: 'ETH',
    destSymbol: 'USDT',
    srcAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    destAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    amount: '1000000000000000000',
    srcDecimals: '18',
    destDecimals: '18',
    srcDecimals2: '18',
    destDecimals2: '18',
    destAddress2: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    srcAddress2: '0x55d398326f99059fF775485246999027B3197955',
    network: '1',
    destNetwork: '56',
  },

  gmxToken: {
    srcSymbol: 'USDT',
    destSymbol: 'GMX',
    srcAddress: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    destAddress: '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a',
    amount: '10000',
    srcDecimals: '6',
    destDecimals: '18',
    srcDecimals2: '18',
    destDecimals2: '6',
    srcAddress2: '0x62edc0692BD897D2295872a9FFCac5425011c661',
    destAddress2: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
    network: '42161',
    destNetwork: '43114',
    srcChain: 'arbitrum',
    destChain: 'avax',
  },

  gmxTokenVice: {
    srcSymbol: 'GMX',
    destSymbol: 'USDT',
    srcAddress: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
    destAddress: '0x62edc0692BD897D2295872a9FFCac5425011c661',
    amount: '10000',
    srcDecimals: '6',
    destDecimals: '18',
    srcDecimals2: '18',
    destDecimals2: '6',
    srcAddress2: '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a',
    destAddress2: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    network: '43114',
    destNetwork: '42161',
    srcChain: 'avax',
    destChain: 'arbitrum',
  },

  jewelToken: {
    srcSymbol: 'JEWEL',
    destSymbol: 'USDC',
    srcAddress: '0x72Cb10C6bfA5624dD07Ef608027E366bd690048F',
    destAddress: '0x985458E523dB3d53125813eD68c274899e9DfAb4',
    amount: '10000',
    srcDecimals: '18',
    destDecimals: '6',
    srcDecimals2: '18',
    destDecimals2: '6',
    srcAddress2: '0x4f60a160D8C2DDdaAfe16FCC57566dB84D674BD6',
    destAddress2: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
    network: '43114',
    destNetwork: '42161',
    srcChain: 'harmony',
    destChain: 'avax',
  },
  jewelTokenVice: {
    srcSymbol: 'USDC',
    destSymbol: 'JEWEL',
    srcAddress: '0x72Cb10C6bfA5624dD07Ef608027E366bd690048F',
    destAddress: '0x985458E523dB3d53125813eD68c274899e9DfAb4',
    amount: '10000',
    srcDecimals: '18',
    destDecimals: '6',
    srcDecimals2: '6',
    destDecimals2: '18',
    srcAddress2: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
    destAddress2: '0x4f60a160D8C2DDdaAfe16FCC57566dB84D674BD6',
    network: '43114',
    destNetwork: '42161',
    srcChain: 'harmony',
    destChain: 'avax',
  },
  qiDao: {
    srcSymbol: 'USDT',
    destSymbol: 'QI',
    srcAddress: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    destAddress: '0x580A84C73811E1839F75d86d75d88cCa0c241fF4',
    amount: '10000',
    srcDecimals: '6',
    destDecimals: '18',
    srcDecimals2: '18',
    destDecimals2: '6',
    srcAddress2: '0xA56F9A54880afBc30CF29bB66d2D9ADCdcaEaDD6',
    destAddress2: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
    network: '137',
    destNetwork: '43114',
    srcChain: 'polygon',
    destChain: 'avax',
  }

}

export default tokenData