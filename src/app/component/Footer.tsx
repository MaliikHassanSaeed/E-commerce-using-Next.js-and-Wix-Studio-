import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide cursor-pointer">MMZ</div>
          </Link>
          <p>Mahi Chowk Tandlianwala District Faisalabad</p>
          <span className="font-semibold">hello@mmz.dev</span>
          <span className="font-semibold">+92 312 0782382</span>
          <div className="flex gap-6">
            <Image src="/social media/facebook.png" alt="Facebook" width={30} height={30} />
            <Image src="/social media/insta.png" alt="Instagram" width={30} height={30} />
            <Image src="/social media/linkedin.png" alt="LinkedIn" width={30} height={30} />
            <Image src="/social media/youtube.png" alt="YouTube" width={30} height={30} />
          </div>
        </div>
        
        {/* CENTER */}
        <div className="hidden lg:flex w-full lg:w-1/2 justify-evenly gap-10">
          <div className="flex flex-col">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <br></br>
            <br></br>
            <div className="flex flex-col gap-6">
              <Link href="/">My Account</Link>
              <Link href="/">Contact Us</Link>
              <Link href="/">About Us</Link>
              <Link href="/">Blog</Link>
              <Link href="/">FAQs</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-lg">COLLECTION</h1>
            <br></br>
            <br></br>
            <div className="flex flex-col gap-6">
              <Link href="/">Apple</Link>
              <Link href="/">Samsung</Link>
              <Link href="/">Xiaomi</Link>
              <Link href="/">Tecno</Link>
              <Link href="/">Oppo</Link>
              <Link href="/">Airpods</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-lg">POLICIES</h1>
            <br></br>
            <br></br>
            <div className="flex flex-col gap-6">
              <Link href="/">Shipping & Cancellation Policy</Link>
              <Link href="/">Return Policy</Link>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms & Conditions</Link>
              <Link href="/">Customer Service</Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>Be the first to get the latest news about trends, promotions, and much more!</p>
          <div className="flex">
            <input type="text" placeholder="Email address" className="p-4 w-3/4 border border-gray-300 rounded-l-md" />
            <button className="w-1/4 bg-[#F35C7A] text-white rounded-r-md">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-around">
            <Image src="/payment/alfalah.png" alt="Alfalah" width={40} height={20} />
            <Image src="/payment/paypal.png" alt="Paypal" width={40} height={20} />
            <Image src="/payment/swyft.png" alt="Swyft" width={40} height={20} />
            <Image src="/payment/visa.png" alt="Visa" width={40} height={20} />
            <Image src="/payment/mastercard.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className=""> &copy; 2024 MMZ. All rights reserved.</div>
        <div className="flex flex-col gap-8 md:flex-row">
        <div className="">
        <span className="text-gray-500 mr-4">Language</span>
        <span className="font-medium">Pakistan! English</span>
        </div>
        <div className="">
        <span className="text-gray-500 mr-4">Currency</span>
        <span className="font-medium">Pkr</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
