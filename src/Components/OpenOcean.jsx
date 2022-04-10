import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import useOpenOcean from '../hooks/useOpenOcean'
import useBgColor from '../hooks/useBgColor'

export default function Opencean
(props) {
  const [textColor, settextColor] = useState('white')

  var priceArb


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

  priceArb = parseFloat(pricedata2 - parseFloat(props.propsData.amount)).toFixed(
    5,
  )
  const [bgColor, setbgColor] = useBgColor(priceArb)
  return (
    <>
      <div className="grid grid-cols-3 gap-3 my-1 ">
        <div>
          {' '}
          <div
            className={`text-white max-w-xs my-auto mx-auto p-4 py-5 px-5 rounded-xl ${ bgColor} `}
          >
            <div className="flex flex-row basis-1/4">
              <div>
                <h1>{priceArb < 0 ? '💩' : '😍'}</h1>
                <p className="text-sm font-bold">
                  {' '}
                  {props.propsData.srcSymbol} Arbitrage
                </p>
                <p style={{ color: textColor }} className="text-sm">
                  {' '}
                  {priceArb}{' '}
                </p>
                <p style={{ color: textColor }} className="text-sm">
                  {' '}
                  {priceArb < 0 ? 'loss' : 'profit'}{' '}
                </p>
              </div>
              <div className="flex items-center ">
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
