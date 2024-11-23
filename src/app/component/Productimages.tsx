"use client"
import React, { useState } from 'react'
import Image from 'next/image';
const images = [
    { id: 1, 
    url: "/TECNO-CAMON-30-1-750x375.jpg"
},
{ id: 2, 
    url: "/16-pro-max.jpg"
},
{ id: 3, 
    url: "/16-pro-max.jpg"
},
{ id: 4, 
    url: "/16-pro-max.jpg"
}
]
const Productimages = () => {
    const[index,setIndex]=useState(0)
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image src={images[index].url} alt="" fill sizes="30vw" className="object-cover rounded-md"></Image>
      </div>
      <div className="flex justify-between gap-4 mt-8 ">
      {images.map((img,i)=>(
        <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" 
        key={img.id} onClick={()=>setIndex(i)}>
         <Image
         src={img.url}
         alt=""
         fill
         sizes="30vw"
         className="object-cover rounded-md"></Image>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Productimages
