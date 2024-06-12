import React from 'react'
import Link from 'next/link'
import Confetti from '@/Components/Confetti'
import { motion } from 'framer-motion'

const page = () => {

  return (
    <>
      <div className='bg-pink-200 min-h-screen w-full p-5 flex flex-col justify-center items-center'>
      <marquee className='absolute top-0 left-0 w-full p-2 bg-pink-300 text-center text-5xl uppercase text-white'>
         <h1>Love you babezz💛 Motaa Aaluuu🥔 Motuu billii😽 football⚽️ tarbuuuzz🍉 shark macchii🦈 fatsoooo</h1>
        </marquee>
        <Confetti />
        <h1 className='uppercase text-red-500 text-6xl md:text-9xl lg:text-10xl mb-5 text-center'>
          babezz ka birthday
        </h1>
        {/* <button className='bg-white text-pink-500 rounded-full shadow-md hover:bg-gray-100 p-3 md:p-4 lg:p-5 text-sm md:text-base lg:text-lg'>
          Click here
        </button> */}
        <Link className=' bg-white text-pink-500 rounded-full shadow-md hover:bg-gray-100 p-3 md:p-4 lg:p-5 text-sm md:text-base lg:text-lg' href="/MorePage">Click Here</Link>
        <marquee className='absolute bottom-0 left-0 w-full p-2 bg-pink-300 text-center text-5xl uppercase text-white'>
         <h1>Love you babezz💛 Motaa Aaluuu🥔 Motuu billii😽 football⚽️ tarbuuuzz🍉 shark macchii🦈 fatsoooo</h1>
        </marquee>
      </div>
    </>
    
  )
}

export default page