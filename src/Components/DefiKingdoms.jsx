import React from 'react'
import * as dfk from '@defikingdoms/sdk'
import { ethers } from 'ethers'
import useSDK from '../hooks/useSDKHarmony'
import use1inch from '../hooks/use1inch'
import useBgColor from '../hooks/useBgColor'
import Skeleton from '@mui/material/Skeleton'
import { useState } from 'react'

const providersURL = {
  harmony: new ethers.providers.JsonRpcProvider('https://api.harmony.one'),
}

export function DfkSdk(props) {
  const [textColor, settextColor] = useState('white')
  var priceArb = 0
  const [sdkPrice, setsdkPrice] = useSDK(
    props.propsData.srcAddress,
    props.propsData.destAddress,
    props.propsData.amount,
    props.propsData.srcDecimals,
    props.propsData.destDecimals,
  )

  const [pricedata2, setpricedata2] = use1inch(
    props.propsData.network,
    props.propsData.srcAddress2,
    props.propsData.destAddress2,
    sdkPrice,
    props.propsData.srcDecimals2,
  )

  if (pricedata2 != 0) {
    priceArb = parseFloat(
      pricedata2 - parseFloat(props.propsData.amount),
    ).toFixed(5)
  }

  const [bgColor, setbgColor] = useBgColor(priceArb)

  console.log('sdkPrice', sdkPrice)
  console.log('Harmony Price Data', pricedata2)

  return (
    <>
      <div className="grid grid-cols-3 gap-3 my-1">
        <div>
          {' '}
          <div
            className={` text-white max-w-xs my-auto mx-auto ${bgColor} p-4 py-5 px-5 rounded-xl `}
          >
            <div className="flex flex-row basis-1/2">
              <div>
                <p className="text-sm font-bold">
                  {' '}
                  {props.propsData.srcSymbol} Arbitrage{' '}
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

export function DfkSdkVice(props) {
  const [textColor, settextColor] = useState('white')
  var priceArb = 0
  const [pricedata2, setpricedata2] = use1inch(
    props.propsData.network,
    props.propsData.srcAddress2,
    props.propsData.destAddress2,
    props.propsData.amount,
    props.propsData.srcDecimals2,
  )

  const [sdkPrice, setsdkPrice] = useSDK(
    props.propsData.srcAddress,
    props.propsData.destAddress,
    parseInt(pricedata2),
    props.propsData.srcDecimals,
    props.propsData.destDecimals,
  )

  if (sdkPrice != 0) {
    priceArb = parseFloat(
      sdkPrice - (props.propsData.amount),
    ).toFixed(5)
  }

  const [bgColor, setbgColor] = useBgColor(priceArb)

  console.log('sdkPrice', sdkPrice)
  console.log('Harmony Price Data', pricedata2)

  return (
    <>
      <div className="grid grid-cols-3 gap-3 my-1">
        <div>
          {' '}
          <div
            className={` text-white max-w-xs my-auto mx-auto ${bgColor} p-4 py-5 px-5 rounded-xl `}
          >
            <div className="flex flex-row basis-1/2">
              <div>
                <p className="text-sm font-bold">
                  {' '}
                  {props.propsData.srcSymbol} Arbitrage{' '}
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
