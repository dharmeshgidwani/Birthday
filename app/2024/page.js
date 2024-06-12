import React from 'react'
import Confetti from "@/Components/Confetti";

const page = () => {
  return (
    <div className='bg-pink-200 min-h-screen w-full p-5 flex flex-col justify-center items-center'>
        <marquee className='absolute top-0 left-0 w-full p-2 bg-pink-300 text-center text-5xl uppercase text-white'>
         <h1>Love you babezz💛 Motaa Aaluuu🥔 Motuu billii😽 football⚽️ tarbuuuzz🍉 shark macchii🦈 fatsoooo</h1>
        </marquee>
        <Confetti/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore, vero assumenda unde nihil amet mollitia voluptates quisquam omnis numquam soluta vel quo id dolores quos, doloremque voluptatem dolore dignissimos.</p>
      <marquee className='absolute bottom-0 left-0 w-full p-2 bg-pink-300 text-center text-5xl uppercase text-white'>
         <h1>Love you babezz💛 Motaa Aaluuu🥔 Motuu billii😽 football⚽️ tarbuuuzz🍉 shark macchii🦈 fatsoooo</h1>
        </marquee>
    </div>
  )
}

export default page