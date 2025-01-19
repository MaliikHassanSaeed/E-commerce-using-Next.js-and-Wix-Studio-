// "use client"

import React, { Suspense, useContext, useEffect } from 'react'
import Slider from './component/Slider'
import ProductList from './component/ProductList'
import CategoryList from './component/CategoryList'
import { WixClientContext } from '@/context/wixContext'
import { useWixClient } from '@/hooks/useWixClient'
import { wixClientServer } from '@/lib/wixClientServer'

const page = async () => {

//   const wixClient = useWixClient()

//   useEffect(()=>{

  
//   const getProducts=async ()=>{

      
//       console.log(process.env.NEXT_PUBLIC_WIX_CLIENT_ID,"env variable")
//       const res = await wixClient.products.queryProducts().find();
      
//       console.log(res)
      
   
      
 

    

//   };

//   getProducts();
// },[wixClient])


// const wixClient= await wixClientServer()

// const res = await wixClient.products.queryProducts().find();
// console.log(res)

  return (
    <div className="">
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className='text-2xl'>Featured Products</h1>
      <Suspense fallback={"loading"}>
      <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}limit={4} />
      </Suspense>
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








