import * as dfk from '@defikingdoms/sdk'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'

export default function useSDK(
  inToken,
  outToken,
  amount,
  decimals,
  outdecimals,
) {
  const providersURL = {
    harmony: new ethers.providers.JsonRpcProvider('https://api.harmony.one'),
  }
  const [sdkPrice, setsdkPrice] = useState(0)

  useEffect(() => {
    calcSDK()
    
  }, [sdkPrice, amount])

  const calcSDK = async () => {
    const inTkn = new dfk.Token(dfk.ChainId.HARMONY_MAINNET, inToken, decimals)
    const outTkn = new dfk.Token(
      dfk.ChainId.HARMONY_MAINNET,
      outToken,
      outdecimals,
    )

    const pairINOUT = await dfk.Fetcher.fetchPairData(
      inTkn,
      outTkn,
      providersURL.harmony,
    )

    const route = new dfk.Route([pairINOUT], outTkn)

    const trade = new dfk.Trade(
      route,
      new dfk.TokenAmount(outTkn, amount * decimals),
      dfk.TradeType.EXACT_INPUT,
    )
    setsdkPrice(trade.executionPrice.toSignificant(6) * amount)

    console.log("Token Amount",amount * decimals)
  }

  return [sdkPrice, setsdkPrice]
}
