"use client"

import React, { useContext, useEffect } from 'react'
import Slider from './component/Slider'
import ProductList from './component/ProductList'
import CategoryList from './component/CategoryList'
import { WixClientContext } from '@/context/wixContext'
import { useWixClient } from '@/hooks/useWixClient'

const page = () => {

  const wixClient = useWixClient()

  useEffect(()=>{

  
  const getProducts=async ()=>{
  const res = await wixClient.products.queryProducts().find();

    console.log(res)
  };

  getProducts();
},[wixClient])

  return (
    <div className="">
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className='text-2xl'>Featured Products</h1>
      <ProductList />
    </div>
    <div className="mt-24 ">
      <h1 className='text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12'>Catagories</h1>
      <CategoryList/>
    </div>
    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className='text-2xl'>New Products</h1>
      <ProductList />
    </div>
    </div>
  )
}

export default page








