import React from 'react'

const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
       <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] ">
        <option value="">Type</option>
        <option value="Physical">Physical</option>
        <option value="Digital">Digital</option>
       </select>
       <input type="text" name="min" placeholder="min price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" />
       <input type="text" name="max" placeholder="max price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" />

       <select name="Brand" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] ">
        <option value="">Brand</option>
        <option value="Tecno">Tecno</option>
        <option value="Infinix">Infinix</option>
        <option value="SAMSUNG">SAMSUNG</option>
        <option value="Oppo">Oppo</option>
        <option value="Xiaomi">Xiaomi</option>
        <option value="Vivo">Vivo</option>
       </select>


       <select name="Price" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] ">
        <option value="">Price</option>
        <option value="Physical"></option>
        <option value="Digital">Digital</option>
       </select>

       <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] ">
        <option value="">Type</option>
        <option value="Physical">Physical</option>
        <option value="Digital">Digital</option>
       </select>

       <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] ">
        <option value="">Type</option>
        <option value="Physical">Physical</option>
        <option value="Digital">Digital</option>
       </select>

       <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] ">
        <option value="">Type</option>
        <option value="Physical">Physical</option>
        <option value="Digital">Digital</option>
       </select>
      </div>
      <div className="">
        <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400" >
         <option>Sort BY</option>
         <option value="">Price(Low to high)</option>
         <option value="">Price(High to low)</option>
         <option value="">Newest</option>
         <option value="">Oldest</option>

        </select>
      </div>
    </div>
  )
}

export default Filter
