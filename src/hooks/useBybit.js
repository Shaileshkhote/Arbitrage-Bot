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
  

export default function useBybit(
tokenSymbol,
amount,
side
) {
  const [pricedata, setpricedata] = useState('0')
  const URL = 'https://cors-anywhere.herokuapp.com/https://api.bybit.com/'


  useEffect(() => {
      try{
    const interval = setInterval(() => {
      getPrice()
    }, 10000)

    return () => clearInterval(interval)
}
catch(error){
    console.log("Value Undefined");
}
  }, [amount,pricedata])



  const getPrice = async () => {

    try{
    const { data } = await axios.get(
      `${URL}/spot/quote/v1/depth/merged`,{params:{
          symbol:tokenSymbol,
          scale:1,
          limit:10
      }, headers: {'Origin': 'https://heruko.com'}}
    )
    console.log("data",data)



if(side=="buy"){
    var count = 0;
    if(count<40){
        
    }
    setpricedata(data.result.bids)
}
if(side=="sell"){
    setpricedata(data.result.asks)
}
 
console.log(pricedata)

    }
    catch(error){
        setpricedata('0')
    }
  }
  return [pricedata,setpricedata]
}
