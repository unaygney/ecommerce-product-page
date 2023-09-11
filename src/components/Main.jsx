import React from "react";
import { Products } from "./constants";

//Images
import Product1 from "../assets/image-product-1.jpg";
import Product2 from "../assets/image-product-2.jpg";
import Product3 from "../assets/image-product-3.jpg";
import Product4 from "../assets/image-product-4.jpg";
import Product1Thumbnail from "../assets/image-product-1-thumbnail.jpg";
import Product2Thumbnail from "../assets/image-product-2-thumbnail.jpg";
import Product3Thumbnail from "../assets/image-product-3-thumbnail.jpg";
import Product4Thumbnail from "../assets/image-product-4-thumbnail.jpg";
import Minus from '../assets/Minus.svg'
import Plus from '../assets/icon-plus.svg'

const productImage = [
  Product1Thumbnail,
  Product2Thumbnail,
  Product3Thumbnail,
  Product4Thumbnail,
];

function Main() {

  return (
    <main className="container mx-auto flex-1  md:mt-14 flex gap-[125px]   justify-center ">
      <div className="flex flex-col gap-8 mt-4 md:mt-0">
        <div className="w-[445px] h-[445px] rounded-2xl overflow-hidden cursor-pointer">
          {" "}
          <img src={Product1} alt="product image" />
        </div>
        <div className="flex gap-8">
          {productImage.map((image, idx) => (
            <div
              key={idx}
              className="w-[88px] h-[88px] rounded-2xl overflow-hidden cursor-pointer transition delay-75 duration-75 ease-in-out hover:opacity-50"
            >
              <img key={idx} src={image} alt="product image thumbnail" />
            </div>
          ))}
        </div>
      </div>

      <div className=" flex flex-col pr-4">
        <h4 className="text-[#FF7E1B] text-[13px] font-bold mt-12 uppercase mb-7">
          Sneaker Company
        </h4>
        <h3 className="text-[#1D2026] text-[44px] font-bold mb-8  leading-[48px] w-[18ch]  ">
          {Products.productTitle}
        </h3>
        <p className="text-[#69707D] text-[16px] font-normal leading-[26px] w-[50ch] mb-8">
          {Products.productDescription}
        </p>
        <div className="flex gap-4 items-center">
          <p className="font-bold text-[28px] text-[#1D2026]  ">
            {" "}
            ${Products.price.newPrice.toFixed(2)}
          </p>
          <p className="text-[#FF7E1B] flex items-center justify-center w-[51px] h-[27px] bg-[#FFEEE2] rounded-md">
            50%
          </p>
        </div>
        <p className="text-[#B6BCC8] text-sm font-bold leading-7 line-through mb-8 ">
          ${Products.price.oldPrice.toFixed(2)}
        </p>

        <div className="flex gap-4">
          <div className="w-[157px] h-[56px] bg-[#F7F8FD] flex items-center px-4  justify-between">
            <button><img src={Minus} alt="previous button" /></button>
            <p className="">0</p>
            <button><img src={Plus} alt="next button" /></button>
          </div>
          <button className="w-[272px] h-[56px] bg-[#FF7E1B] shadow-md text-white font-bold rounded-xl transition delay-75 duration-75 ease-in-out hover:opacity-70">Add to Card</button>
        </div>
      </div>
    </main>
  );
}

export default Main;
