import React from 'react'
import HeaderItems from './HeaderItems'
import {HomeIcon,BadgeCheckIcon,CollectionIcon,LightningBoltIcon,SearchIcon,UserIcon} from '@heroicons/react/outline'


export default function Header() {
  return (
      <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
    <div className="flex felx-grow justify-evenly max-w-2xl">
        <HeaderItems Name="Home" Icon={HomeIcon} />
        <HeaderItems Name="Trending" Icon={BadgeCheckIcon} />
        <HeaderItems Name="Verified" Icon={CollectionIcon} />
        <HeaderItems Name="Collections" Icon={LightningBoltIcon} />
        <HeaderItems Name="Search" Icon={SearchIcon} />
        <HeaderItems Name="Account" Icon={UserIcon} />
       

    </div>
    <p className="font-semibold"> Arbitrage Bot </p>
    </header>
  )
}
