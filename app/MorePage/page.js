import Confetti from '@/Components/Confetti'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='bg-pink-200 min-h-screen w-full p-5 flex flex-col'>
      <Confetti />
      <ul className='list-disc text-2xl mb-10'>
        <li><Link href="/2023">2023</Link></li>
        <li><Link href="/2024">2024</Link></li>
      </ul>
      <div className='flex flex-wrap gap-4 justify-center'>
        <div className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] bg-green-100'>
          <img className='w-full h-full object-cover' src="../images/47293.JPG" alt="Hey" />
        </div>
        <div className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] bg-green-100'>
          <img className='w-full h-full object-cover' src="../images/47308.JPG" alt="Hey" />
        </div>
        <div className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] bg-green-100'>
          <img className='w-full h-full object-cover' src="../images/47678.JPG" alt="Hey" />
        </div>
        <div className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] bg-green-100'>
          <img className='w-full h-full object-cover' src="../images/52931.JPG" alt="Hey" />
        </div>
      </div>
    </div>
  )
}

export default Page
