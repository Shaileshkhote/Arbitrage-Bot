import React from 'react'

export default function HeaderItems({Icon,Name}) {
  return (
    <div className=" flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white ">
        <Icon className="h-6 mb-1 group-hover:animate-bounce"/>
        <p className="tracking-widest opacity-0 group-hover:opacity-100 ">{Name}</p>
        
    </div>
  )
}
