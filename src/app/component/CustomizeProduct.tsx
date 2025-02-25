"use client"
import { products } from '@wix/stores'
import React, { useEffect, useState } from 'react'
import Add from './Add';

const CustomizeProduct = ({productId, variants, productOptions}:{
  productId:string,
  variants:products.Variant[],
  productOptions:products.ProductOption[]
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});

  const[selectedVariant, setSelectedVariant] = useState<products.Variant>()

  useEffect(()=>{
const variant = variants.find(v=>{
 const variantChoices = v.choices;
 if(!variantChoices) return false;
 return Object.entries(selectedOptions).every(([key,value])=>variantChoices[key]===value)
})
setSelectedVariant(variant)
  },[selectedOptions,variants])

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions(prev => ({ ...prev, [optionType]: choice }));
  };

  console.log("Variants:", variants);
  console.log("Selected Options:", selectedOptions);

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      return Object.entries(choices).every(([key, value]) => {
        return variantChoices[key] === value;
      }) && (variant.stock?.inStock ?? false) && ((variant.stock?.quantity ?? 1) > 0);
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => {
        const optionName = option.name ?? "";

        return (
          <div className="flex flex-col gap-4" key={optionName}>
            <h4 className="font-medium">Choose a {optionName}</h4>
            <ul className="flex items-center gap-3">
              {option.choices?.map((choice) => {
                const choiceDescription = choice.description ?? "";
                const disabled = !isVariantInStock({ ...selectedOptions, [optionName]: choiceDescription });
                const selected = selectedOptions[optionName] === choiceDescription;
                const clickHandler = !disabled ? () => handleOptionSelect(optionName, choiceDescription) : undefined;

                return optionName === "Color" ? (
                  <li
                    key={choiceDescription}
                    className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                    style={{ backgroundColor: choice.value, cursor: disabled ? "not-allowed" : "pointer" }}
                    onClick={clickHandler}
                  >
                    {selected && <div className="absolute w-10 h-10 rounded-full ring-2 ring-blue-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
                    {disabled && <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
                  </li>
                ) : (
                  <li
                    key={choiceDescription}
                    className={`ring-1 ring-[#F35C7A] text-[#F35C7A] rounded-md py-1 px-4 text-sm cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={clickHandler}
                  >
                    {choiceDescription}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <Add productId={productId} 
      variantId={selectedVariant?._id || "0000000-00000-0-000000-00000000000"}
       stockNumber={selectedVariant?.stock?.quantity || 0}/>
    </div>
  );
};

export default CustomizeProduct;
