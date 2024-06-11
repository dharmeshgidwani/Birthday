import React from 'react'
import Link from 'next/link'
import Confetti from '@/Components/Confetti'

const page = () => {

  return (
    <div className='bg-pink-200 min-h-screen w-full p-5 flex flex-col justify-center items-center'>
      <Confetti />
      <h1 className='uppercase text-red-500 text-6xl md:text-9xl lg:text-10xl mb-5 text-center'>
        babezz ka birthday
      </h1>
      {/* <button className='bg-white text-pink-500 rounded-full shadow-md hover:bg-gray-100 p-3 md:p-4 lg:p-5 text-sm md:text-base lg:text-lg'>
        Click here
      </button> */}
      <Link className=' bg-white text-pink-500 rounded-full shadow-md hover:bg-gray-100 p-3 md:p-4 lg:p-5 text-sm md:text-base lg:text-lg' href="/MorePage">Here</Link>
    </div>
  )
}

export default page