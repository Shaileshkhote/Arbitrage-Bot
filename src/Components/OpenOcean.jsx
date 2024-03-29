import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import useOpenOcean from '../hooks/useOpenOcean'
import useBgColor from '../hooks/useBgColor'
import Skeleton from '@mui/material/Skeleton'
import sendToBot from '../utils/sendToBot'


export default function Opencean
(props) {
  const [textColor, settextColor] = useState('white')

  var priceArb=0


  const [pricedata1, setpricedata1] = useOpenOcean(
    props.propsData.srcChain,
    props.propsData.srcAddress,
    props.propsData.destAddress,
    props.propsData.amount,
  )

  console.log('priceOC', pricedata1)

  const [pricedata2, setpricedata2] = useOpenOcean(
    props.propsData.destChain,
    props.propsData.srcAddress2,
    props.propsData.destAddress2,
    pricedata1,
  )
    if(pricedata2!=0 ){
  priceArb = parseFloat(pricedata2 - parseFloat(props.propsData.amount)).toFixed(
    5,
  )
}

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

  const [bgColor, setbgColor] = useBgColor(priceArb)
  return (
    <>
      <div className="flex my-1 ">
        <div>
          {' '}
          <div
            className={` text-white w-60 h-50 my-auto mx-auto ${bgColor} p-4 py-5 px-5 rounded-xl w-full `}
          >
            <div className="flex flex-row basis-1/2">
              <div>
                <p className="text-sm font-bold">
                  {' '}
                  {props.propsData.srcSymbol} Arb{' '}
                </p>
                <p style={{ color: textColor }} className="text-sm">
                  {' '}
                  {priceArb === 0 ? <Skeleton variant="text" /> : priceArb}{' '}
                </p>
                <p style={{ color: textColor }} className="text-sm">
                  {' '}
                  {priceArb ? (
                    priceArb < 0 ? (
                      'loss'
                    ) : (
                      'profit'
                    )
                  ) : (
                    <Skeleton variant="text" />
                  )}{' '}
                </p>
              </div>
              <div className="pl-8 flex items-center ">
                <div className="p-5 bg-gray-200 bg-opacity-40 rounded-full"></div>
                <div className="p-5 bg-gray-200 bg-opacity-30 rounded-full -ml-4"></div>
              </div>
            </div>
            <div className="flex justify-between mt-5 w-40 ">
              <div>
                <h3 className="text-xs font-bold"> Side </h3>
                <p className="text-xs">
                  {' '}
                  {props.propsData.srcSymbol}= {props.propsData.destSymbol}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold"> Chain </h3>
                <p className="text-xs">
                  {' '}
                  {props.propsData.srcChain},{props.propsData.destChain}{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
