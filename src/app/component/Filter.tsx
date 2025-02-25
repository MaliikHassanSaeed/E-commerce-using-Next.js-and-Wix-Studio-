"use client"
import { usePathname,useRouter ,useSearchParams } from 'next/navigation'
// import { useRouter } from 'next/router'
import React from 'react'
 

const Filter = () => {

const pathname= usePathname()
const searchParams = useSearchParams()
const {replace}= useRouter()

const  handleFilterChange=(e:React.ChangeEvent<HTMLSelectElement | HTMLInputElement >)=>{
   const {name,value} =e.target;
   const params = new URLSearchParams(searchParams)
   params.set(name,value)
   replace(`${pathname}?${params.toString()}`)
}

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
       <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]" 
       onChange={handleFilterChange}
       >
        <option value="">Type</option>
        <option value="Physical">Physical</option>
        <option value="Digital">Digital</option>
       </select>
       <input type="text" name="min" placeholder="min price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" 
       onChange={handleFilterChange}
       />
       <input type="text" name="max" placeholder="max price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" 
       onChange={handleFilterChange}
       />

       <select name="Brand" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] "
       onChange={handleFilterChange}
       >
        <option value="">Brand</option>
        <option value="Tecno">Tecno</option>
        <option value="Infinix">Infinix</option>
        <option value="SAMSUNG">SAMSUNG</option>
        <option value="Oppo">Oppo</option>
        <option value="Xiaomi">Xiaomi</option>
        <option value="Vivo">Vivo</option>
       </select>


       <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
       onChange={handleFilterChange}
       >
        <option >All filters</option>
       </select>
      </div>
      <div className="">
        <select name="sort" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400" 
        onChange={handleFilterChange}
        >
         <option>Sort By</option>
         <option value="asc price">Price(Low to high)</option>
         <option value="desc price">Price(High to low)</option>
         <option value="asc lastUpdated">Newest</option>
         <option value="desc lastUpdated">Oldest</option>

        </select>
      </div>
    </div>
  )
}

export default Filter
