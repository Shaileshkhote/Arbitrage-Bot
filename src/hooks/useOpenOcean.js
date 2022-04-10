import axios from 'axios'
import { useState, useEffect } from 'react'
export default function useOpenOcean(
  srcChain,
  srcAddress,
  destAddress,
  amount,
) {
  const [pricedata1, setpricedata1] = useState('0')
  const URL = 'https://open-api.openocean.finance/v3'


  useEffect(() => {
      try{
    const interval = setInterval(() => {
      getPrice()
    }, 5000)

    return () => clearInterval(interval)
}
catch(error){
    console.log("Value Undefined");
}
  }, [amount,pricedata1])



  const getPrice = async () => {
    const { data } = await axios.get(
      `${URL}/${srcChain}/quote?inTokenAddress=${srcAddress}&outTokenAddress=${destAddress}` +
        `&amount=${amount}&gasPrice=5&slippage=100`,
      {
        headers: {
          partner: 'arbsk-bot',
        },
      },
    )

    setpricedata1(data.data.outAmount / Math.pow(10, (data.data.outToken.decimals)))
    console.log('priceOC', pricedata1)
  }
  return [pricedata1,setpricedata1]
}
