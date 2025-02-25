import React, { Suspense } from 'react'
import Image from 'next/image';
import Filter from '../component/Filter';
import ProductList from '../component/ProductList';
import { wixClientServer } from '@/lib/wixClientServer';
const Listpage = async ({searchParams}:{searchParams:any}) => {

const wixClient = await wixClientServer()

  const cat = await wixClient.collections.getCollectionBySlug(searchParams.cat || "all-products");
  
  const categoryID=process.env["FEATURED_PRODUCTS_CATEGORY_ID"];
  console.log("page ~ catgeoryID:",categoryID)
  return (
    <div  className="  px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* COMPAIGN */}
      <div className=" hidden bg-pink-50 px-4 sm:flex justify-between h-64">
      <div className="w-2/3 flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">Grab upto 50% off on<br /> Selected Products</h1>
      <button className="rounded-3xl bg-[#F35C7A] text-white w-max py-3 px-5 text-sm ">Buy Now</button>
        </div>
        <div className="relative w-1/3 ">
          <Image src="/compaign/man.png" alt="Campaign Image" fill className="object-contain" />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">{cat?.collection?.name} for you!</h1>
      <Suspense fallback={"loading..."}>
      <ProductList categoryId= { cat.collection?._id || "categoryID!"} 
      searchParams={searchParams} />
      </Suspense>
    </div>
  )
}

export default Listpage

