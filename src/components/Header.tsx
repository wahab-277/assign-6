import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import icons from '../../public/icon.png'
import logo from '../../public/Logo.png'


const  Head = () => {
  return (


    <div className='main flex-row justify-between bg-white'>

     <Image src={logo} alt='logo'></Image>

 
      <ul className='flex row-span-1 text-slate-100 font-inter'>
      <input type="text" name='search' placeholder='Search'/>
    
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/contact"><li>Contact us</li></Link>
        <Link href="/blog"><li>Blog</li></Link>
        <Link href="/favourite"><li><Image src={icons}alt='icons'></Image></li></Link>
        {/* <Link href="/cart"><li></li></Link>
        <Link href="/profile"><li></li></Link> */}
      </ul>
    </div>
    
  )
}

export default  Head;
