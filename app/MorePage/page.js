import Confetti from '@/Components/Confetti'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='bg-pink-200 min-h-screen w-full p-5 flex flex-col'>
        <ul className='list-disc'>
          <li><Link href="/2023">2023</Link></li>
          <li><Link href="/2024">2024</Link></li>
        </ul>
    </div>
  )
}

export default page