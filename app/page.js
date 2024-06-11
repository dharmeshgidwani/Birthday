import React from 'react'
import Link from 'next/link'
import HomePage from '@/Components/HomePage.js'

const page = () => {

  return (
    <div className='bg-pink-200 min-h-screen w-full p-5 flex flex-col justify-center items-center'>
      <HomePage />
      
    </div>
  )
}

export default page