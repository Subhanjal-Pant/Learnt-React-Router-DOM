// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();


  return (
    <div className='flex flex-row justify-between p-2 bg-emerald-700 text-white'>
        <div>
            <h1 className='font-bold text-2xl px-4'>Sheryians Coding School</h1>
        </div>
      <nav>
        <ul className='flex gap-6'>
          <li onClick={()=>navigate('/Home')} className='cursor-pointer text-lg list-none'>Home</li>
          <li onClick={()=>navigate('/Contact')} className='cursor-pointer text-lg list-none'>Contact</li>
          <li onClick={()=>navigate('/About')} className='cursor-pointer text-lg list-none'>About</li>
          <li onClick={()=>navigate('/Product')} className='cursor-pointer text-lg list-none'>Product</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
