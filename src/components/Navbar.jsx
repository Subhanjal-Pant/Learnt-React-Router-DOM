/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex w-full bg-slate-700 border-2 border-black justify-between'>
        <span className='m-2 text-white font-bold text-xl'>iTask</span>


        <nav className='p-2'>
            <ul className='flex gap-5 mx-2 font-bold text-lg text-white'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar