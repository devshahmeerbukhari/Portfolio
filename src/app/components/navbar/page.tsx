import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='flex justify-around text-gray-400 p-7 mx-[200px]'>
        <div className='hover:text-white'>
                <Link href="/#" scroll={false}>
                    Shahmeer Bukahri
                </Link>
        </div>
        <nav>
            <ul className='flex flex-row justify-around min-w-[500px]'>
                <li className='hover:text-white'>
                    <Link href="/components/about" scroll={false}>
                        About
                    </Link>
                </li>
                <li className='hover:text-white'>
                    <Link href="/components/work" scroll={false}>
                        Work
                    </Link>
                </li>
                <li className='hover:text-white'>
                    <Link href="/#" scroll={false}>
                        Services
                    </Link>
                </li>
                <li className='hover:text-white'>
                    <Link href="/components/contact" scroll={false}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
        <div>
            <button className='border border-whites px-5 py-1 rounded-3xl hover:text-white'>Let&apos;s Connect</button>
        </div>
    </div>
  )
}

export default Navbar