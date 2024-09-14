import React from 'react'
import { Button } from '@/components/ui/button'
function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
        <h1 className='font-extrabold text-[50px] text-center mt-16'>
            Discover Your Path with The Destined One  <span className='text-[#ff914d]'>"Your Journey Awaits"</span>
        </h1>
        <p className='text-xl text-gray-500 text-center'>At Pro_Travel, we believe that every journey is a chance to discover something extraordinary. Our mission is to help you uncover the world’s hidden wonders and embark on adventures that resonate with your passions.</p>
        <Button classname='w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800'>LET'S GO</Button>
    
    </div>
  )
}

export default Hero