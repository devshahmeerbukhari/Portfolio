import React from 'react'
import { client } from '@/sanity/lib/client'

function Work() {
  return (
    <div className='flex flex-col items-center mt-44 min-h-[90vh]'>
      <p className='uppercase text-gray-400'>What i have done so far</p>
      <h1 className='text-6xl font-bold mt-1'>Work Experience.</h1>
    </div>
  )
}

export default Work
