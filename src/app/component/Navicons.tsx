"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import CartModal from './CartModal';
import { useWixClient } from '@/hooks/useWixClient';
import Cookies from "js-cookie"


const Navicons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const router=useRouter()
  const pathName = usePathname()

  const wixClient= useWixClient()
  const isLoggedIn =   wixClient.auth.loggedIn()

  // TEMPORARY
  // const isLoggedIn= false

  const  handlleProfile =()=>{
if (!isLoggedIn){
  router.push("/login")

}else{
  setIsProfileOpen((prev)=>!prev);
     }
}

  // AUTH WITH WIX MANAGED AUTH

//   const wixClient = useWixClient()

//  const login = async ()=>{
//   const loginRequestData = wixClient.auth.generateOAuthData(
//     "http://localhost:3000"
//   );
  
//   console.log(loginRequestData)

//   localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData))
//   const {authUrl} = await wixClient.auth.getAuthUrl(loginRequestData)
//   window.location.href = authUrl
//  }

console.log(pathName)

const handleLogout = async()=>{
  setIsLoading(true)
  Cookies.remove("refreshToken")
  const { logoutUrl } = await wixClient.auth.logout(window.location.href);
  setIsLoading(false)
  setIsProfileOpen(false)
  router.push(logoutUrl)
}

  return (
    <div className='flex items-center gap-4 xl:gap-6 relative'>
      <Image src="/profile.png" alt="" width={40} height={40} className="cursor-pointer" 
      onClick={handlleProfile}></Image>
      {/*  onClick={login} */}
      {isProfileOpen && <div className="absolute p-4 rounded-md top-12 bg-white left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
        <Link href="/">Profile</Link>
        <div className='mt-2 cursor-pointer' onClick={handleLogout}>{isLoading ? "Logging out":"Logout"}</div>
      </div>
        }
      <Image src="/notification (1).png" alt="" width={30} height={30} className="cursor-pointer"></Image>
     <div className='relative cursor-pointer'>
      <Image src="/cart.png" alt="" width={30} height={30}  onClick={() => setIsCartOpen((prev)=>!prev)}></Image>
     <div className='absolute -top-4 -right-4 w-6 h-6 bg-[#F35C7A] rounded-full text-white text-sm flex items-center justify-center'>2</div>
      </div>
     {isCartOpen && <CartModal />}
    </div>
  )
}

export default Navicons
