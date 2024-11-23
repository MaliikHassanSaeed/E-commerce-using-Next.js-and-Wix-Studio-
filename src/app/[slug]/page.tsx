import React from 'react'
import Image from 'next/image';
import Productimages from '../component/Productimages';
import CustomizeProduct from '../component/CustomizeProduct';
import Add from '../component/Add';

const page = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <Productimages />
      </div>
      
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
<h1 className="text-4xl font-medium">Product Name</h1>
<p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis at, amet, mollitia ratione quos architecto quae labore numquam odio porro quidem illum dolorem voluptates cumque dolore! Quam fuga dolores in.</p>
      <div className="h-[2px] bg-gray-100"/>
      <div className="flex items-center gap-4">
        <h3 className="text-xl text-gray-500 line-through">$59</h3>
        <h2 className="font-medium text-2xl">$49</h2>
      </div>
      <div className="h-[2px] bg-gray-100"/>
      <CustomizeProduct />
      <Add />
      <div className="h-[2px] bg-gray-100"/>
        <div className="text-sm">
            <h4 className="font-medium mb-4">Title</h4>
            <p>Lorem ipsum d  olor sit amet consectetur, adipisicing elit. Adipisci aliquid reprehenderit ratione corporis aperiam consequuntur rem a, quam at dicta vero inventore earum illum maxime praesentium totam saepe officiis minima.</p>
        </div>
        <div className="text-sm">
            <h4 className="font-medium mb-4">Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci aliquid reprehenderit ratione corporis aperiam consequuntur rem a, quam at dicta vero inventore earum illum maxime praesentium totam saepe officiis minima.</p>
        </div>
        <div className="text-sm">
            <h4 className="font-medium mb-4">Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci aliquid reprehenderit ratione corporis aperiam consequuntur rem a, quam at dicta vero inventore earum illum maxime praesentium totam saepe officiis minima.</p>
        </div>
      </div>
    </div>
  )
}

export default page
