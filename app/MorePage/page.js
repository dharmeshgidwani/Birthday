"use client"; // Add this at the top of your file

import Confetti from '@/components/Confetti'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  const images = [
    '47293.JPG', '47308.JPG', '47678.JPG', '52931.JPG', 
    '62404.JPG', '80624.JPG', '86927.JPG', '89236.JPG', 
    '95726.JPG', '1000017202.JPG', '1000018413.JPG', 
    '1000014958.JPG.JPG'
  ];

  return (
    <div className='bg-pink-200 min-h-screen w-full p-5 flex flex-col relative pb-20'>
      <marquee className='absolute top-0 left-0 w-full p-2 bg-pink-300 text-center text-5xl uppercase text-white'>
        Love you babezz💛 Motaa Aaluuu🥔 Motuu billii😽 football⚽️ tarbuuuzz🍉 shark macchii🦈 fatsoooo
      </marquee>
      <Confetti />
      <ul className='list-disc text-2xl p-10 m-5'>
        <li><Link href="/2023">Click Here for 2023</Link></li>
        <li><Link href="/2024">Click Here for 2024</Link></li>
      </ul>
      <div className='flex flex-wrap gap-4 justify-center'>
        {images.map((img, index) => (
          <div className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] bg-green-100'>
            <img className='w-full h-full object-cover' src={`../images/${img}`} alt="Hey" />
          </div>
        ))}
      </div>
      <marquee className='absolute bottom-0 left-0 w-full p-2 bg-pink-300 text-center text-5xl uppercase text-white'>
        Love you babezz💛 Motaa Aaluuu🥔 Motuu billii😽 football⚽️ tarbuuuzz🍉 shark macchii🦈 fatsoooo
      </marquee>
    </div>
  )
}

export default Page
