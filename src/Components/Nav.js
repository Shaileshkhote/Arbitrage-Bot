import React from 'react'
import navItems from '../config/navItems'

export default function Nav() {
  return (
    <nav>
      <div className="flex  px-10 sm:px-20 text-2xl whitespace-nowrap space-x-20 sm:space-x-10 overflow-x-scroll scrollbar-hide">
        {Object.entries(navItems).map(([key, { title }]) => (
          <h5 className=" last:pr-24 text-lg cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 ">{title}</h5>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from [#06202A] h-10 w-1/12" />
    </nav>
  )
}
