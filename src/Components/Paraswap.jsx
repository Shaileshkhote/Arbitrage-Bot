import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import sendToBot from '../utils/sendToBot'

export default function Paraswap(props) {
  const [fetchedData, setFetchedData] = useState([])
  const [textColor, settextColor] = useState('white')
  const [pricedata, setpricedata] = useState()
  const [bgColor, setbgColor] = useState('bg-gradient-to-r from-blue-900 to-blue-500e')
  var fetchdata
  var priceArb

  const URL = 'https://apiv5.paraswap.io'

  useEffect(() => {
    const interval = setInterval(() => {
      getPrice()

    }, 3000)

    return () => clearInterval(interval)
  }, [pricedata, fetchedData])

  const getPrice = async () => {
    
    const { data } = await axios.get(
      `${URL}/prices/?srcToken=${props.propsData.srcAddress}&destToken=${props.propsData.destAddress}` +
        `&amount=${props.propsData.amount}&srcDecimals=${props.propsData.srcDecimals}&destDecimals` +
        `=${props.propsData.destDecimals}&side=SELL&network=${props.propsData.network}`,
      {
        headers: {
          partner: 'arbsk-bot',
        },
      },
    )

    fetchdata = data.priceRoute.destAmount
    console.log('Dest Amount', fetchdata)
    getPrice2()
  }

  const getPrice2 = async () => {
    const { data } = await axios.get(
        `${URL}/prices/?srcToken=${props.propsData.srcAddress2}&destToken=${props.propsData.destAddress2}` +
        `&amount=${fetchdata}&srcDecimals=${props.propsData.srcDecimals2}&destDecimals` +
        `=${props.propsData.destDecimals2}&side=SELL&network=${props.propsData.destNetwork}`,
      {
        headers: {
          partner: 'arbsk-bot',
        },
      },
    )
    console.log(data.priceRoute.destAmount / 1e18)
    setpricedata(parseFloat(data.priceRoute.destAmount / 1e18))

    console.log('price return', pricedata)
  }
  priceArb = parseFloat(pricedata - parseFloat(props.propsData.amount / 1e18)).toFixed(5)*(-1)
  console.log({ priceArb })

  const countColor = () => {
    if (priceArb < 0)  { settextColor('red'); setbgColor('bg-gradient-to-r from-red-200 to-red-600');}
    else if (priceArb > 0) { settextColor("green"); setbgColor('bg-gradient-to-r from-green-200 via-green-400 to-green-500');}
    else if (priceArb === 0)  settextColor("white");

};

useEffect(()=>{
    countColor()
    console.log({textColor})

})

// bot Conditon
useEffect(() => {
  if (priceArb > 50) {
    console.warn("send to bot")
    sendToBot(
      priceArb,
      props.propsData.srcSymbol,
      props.propsData.destSymbol,
      props.propsData.srcChain,
      props.propsData.destChain,
      "1inch"
    );
  }
}, [priceArb])
// bot condition over


  return (
    <>
      <div className="grid grid-cols-3 gap-3 my-1">
        <div>
          {' '}
          <div className={` text-white max-w-xs my-auto mx-auto ${bgColor} p-4 py-5 px-5 rounded-xl `}>
            <div className="flex flex-row basis-1/4">
              <div>
                <p className="text-sm font-bold"> {props.propsData.srcSymbol} Arbitrage </p>
                <p style={{ color:textColor}} className="text-sm"> {priceArb} </p>
                <p style={{ color:textColor}} className="text-sm"> {priceArb<0?('loss'):('profit')} </p>
                
              </div>
              <div className="flex items-center ">
                <div className="p-5 bg-gray-200 bg-opacity-40 rounded-full"></div>
                <div className="p-5 bg-gray-200 bg-opacity-30 rounded-full -ml-4"></div>
              </div>
            </div>
            <div className="flex justify-between mt-5 w-40 ">
              <div>
                <h3 className="text-xs font-bold"> Side </h3>
                <p className="text-xs">  {props.propsData.srcSymbol}=  {props.propsData.destSymbol}</p>
              </div>
              <div>
                <h3 className="text-xs font-bold"> Chain </h3>
                <p className="text-xs"> BSC,ETH </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
