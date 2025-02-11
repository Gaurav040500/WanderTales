import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <div className='flex justify-around items-center m-4'>
      {/* Logo Section */}
      <div className='relative h-[100px] w-[100px]'>
        <Image src='/assets/logo/logo.png' alt='logo' layout='fill' objectFit='contain' />
      </div>

      {/* Navbar Links */}
      <div className='flex justify-around items-center '>
        <div className='text-lg m-8 text-gray-700 cursor-pointer hover:text-black transition-colors'>Explore</div>
        <div className='text-lg m-8 text-gray-700 cursor-pointer hover:text-black transition-colors'>Stories</div>
        <div className='text-lg m-8 bg-black text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-800'>
          <button>Share Your Story</button>
        </div>
        <div className='text-lg text-gray-700 cursor-pointer hover:text-black transition-colors m-8'>Signin</div>
      </div>
    </div>
  )
}

export default Navbar
