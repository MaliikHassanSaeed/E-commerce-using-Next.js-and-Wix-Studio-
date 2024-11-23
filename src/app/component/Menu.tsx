"use client"
import Link from 'next/link';
import React, { useState } from 'react'

import Image from 'next/image'
const Menu = () => {
    const [open,setopen] = useState(false)
  return (
    <div>
      <Image src="/menu.png"alt="" width={50} height={50} className="cursor-pointer" onClick={()=>setopen(prev=>!prev)}/>
      {
        open && (
            <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8  text-xl z -10">
              <Link href="">Homepage</Link>
              <Link href="">Shop</Link>
              <Link href="">Deals</Link>
              <Link href="">Logout</Link>
              <Link href="">cart[1]</Link>
                </div>
        )
      }
    </div>
  )
}

export default Menu