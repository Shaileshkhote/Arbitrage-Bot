import axios from 'axios'
import { useState, useEffect } from 'react'
import {BigNumber} from "bignumber.js"

function toFixed(x) {
    if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split('e-')[1]);
      if (e) {
          x *= Math.pow(10,e-1);
          x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
      }
    } else {
      var e = parseInt(x.toString().split('+')[1]);
      if (e > 20) {
          e -= 20;
          x /= Math.pow(10,e);
          x += (new Array(e+1)).join('0');
      }
    }
    return x;
  }
  

export default function useOpenOcean(
  srcChainID,
  srcAddress,
  destAddress,
  amount,
  srcDecimals
) {
  const [pricedata1, setpricedata1] = useState('0')
  const URL = 'https://api.1inch.io/v4.0'


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

    try{
    const { data } = await axios.get(
      `${URL}/${srcChainID}/quote?fromTokenAddress=${srcAddress}&toTokenAddress=${destAddress}` +
        `&amount=${toFixed(amount*(Math.pow(10, (srcDecimals))))}`,
    )



    setpricedata1(data.toTokenAmount / Math.pow(10, (data.toToken.decimals)))
    console.log('priceOC', pricedata1)
    }
    catch(error){
        setpricedata1('0')
    }
  }
  return [pricedata1,setpricedata1]
}
