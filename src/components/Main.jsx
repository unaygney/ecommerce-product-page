import React, { useState, useEffect } from "react";
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
import Minus from "../assets/Minus.svg";
import Plus from "../assets/icon-plus.svg";
import Next from "../assets/icon-next.svg";
import Previous from "../assets/icon-previous.svg";
import Close from "../assets/Close.svg";

const productImage = [
  Product1Thumbnail,
  Product2Thumbnail,
  Product3Thumbnail,
  Product4Thumbnail,
];

const Product = {
  0: Product1,
  1: Product2,
  2: Product3,
  3: Product4,
};

function Main({ setItemNumber }) {
  const [number, setNumber] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isDektop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1028); // Örnek bir mobil sınır
    };

    // Başlangıçta boyutu kontrol edin ve yeniden boyutlandırma işlemcisini ekleyin
    handleResize();
    window.addEventListener("resize", handleResize);

    // Temizleme işlemcisini kaldırın
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isActive, isDektop]);

  const setPrevNumber = () => {
    if (number > 0) {
      setNumber((prev) => prev - 1);
    }
  };

  const incrementSelectedImage = () => {
    setSelectedImage((prevSelectedImage) => {
      if (prevSelectedImage < 3) {
        return prevSelectedImage + 1;
      } else {
        return 0;
      }
    });
  };

  const decrementSelectedImage = () => {
    setSelectedImage((prevSelectedImage) => {
      if (prevSelectedImage > 0) {
        return prevSelectedImage - 1;
      } else {
        return 3;
      }
    });
  };

  return (
    <>
      <main className="lg:container w-full flex-col items-center lg:items-start lg:flex-row lg:mx-auto flex-1  mt-14 flex md:gap-[30px] lg:gap-[125px]   justify-center ">
        <div className="flex flex-col gap-8 mdmt-4 md:mt-0">
          <div className="lg:w-[445px] lg:h-[445px] w-full h-[375px]    lg:rounded-2xl overflow-hidden cursor-pointer relative">
            <button
              onClick={decrementSelectedImage}
              className="absolute bg-white w-10 h-10 rounded-full inline-flex items-center justify-center top-[50%] translate-y-[-50%] lg:hidden   left-0-0 "
            >
              <img src={Previous} alt="" />
            </button>
            <img
              className="object-cover w-full h-full "
              src={Product[selectedImage]}
              alt="product image"
              onClick={() => setIsActive(!isActive)}
            />
            <button
              onClick={incrementSelectedImage}
              className="absolute bg-white w-10 h-10 rounded-full inline-flex items-center justify-center top-[50%] translate-y-[-50%] lg:hidden   right-0 "
            >
              <img src={Next} alt="" />
            </button>
          </div>
          <div className="gap-8 hidden lg:flex">
            {productImage.map((image, idx) => (
              <div
                key={idx}
                className="w-[88px] h-[88px] rounded-2xl overflow-hidden cursor-pointer transition delay-75 duration-75 ease-in-out hover:opacity-50"
                onClick={() => setSelectedImage(idx)}
              >
                <img key={idx} src={image} alt="product image thumbnail" />
              </div>
            ))}
          </div>
        </div>

        <div className=" flex lg:flex-2 flex-col  pr-4 p-6">
          <h4 className="text-[#FF7E1B] text-[13px] font-bold mt-12 uppercase mb-7">
            Sneaker Company
          </h4>
          <h3 className="text-[#1D2026] text-[44px] font-bold mb-8  leading-[48px] lg:w-[18ch]  ">
            {Products.productTitle}
          </h3>
          <p className="text-[#69707D] text-[16px] font-normal leading-[26px] lg:w-[50ch] mb-8">
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

          <div className="flex flex-col gap-4">
            <div className="w-full  h-14 lg:w-[157px] lg:h-[56px] bg-[#F7F8FD] flex items-center px-4  justify-between">
              <button onClick={setPrevNumber}>
                <img src={Minus} alt="previous button" />
              </button>
              <p className="">{number}</p>
              <button onClick={() => setNumber((prev) => prev + 1)}>
                <img src={Plus} alt="next button" />
              </button>
            </div>
            <button
              onClick={() => setItemNumber(number)}
              className="w-[272px] h-[56px] bg-[#FF7E1B] shadow-md text-white font-bold rounded-xl transition delay-75 duration-75 ease-in-out hover:opacity-70"
            >
              Add to Card
            </button>
          </div>
        </div>

        {/* Overlay */}
        <div
          className={`fixed top-0 right-0 left-0  w-full h-full bg-black bg-opacity-90 z-10 flex-col  items-center justify-center gap-10  ${
            isActive && isDektop ? "flex" : "hidden"
          } `}
        >
          <div className="w-[550px] h-[550px] relative   opacity-1">
            <button
              onClick={() => setIsActive(!isActive)}
              className=" w-6 h-6 absolute right-0 -top-7"
            >
              <img src={Close} className="w-full h-full" alt="" />
            </button>
            <button
              onClick={decrementSelectedImage}
              className="absolute bg-white w-14 h-14 rounded-full inline-flex items-center justify-center top-[50%] translate-y-[-50%] -left-5 "
            >
              <img src={Previous} alt="" />
            </button>
            <img src={Product[selectedImage]} alt="" />

            <button
              onClick={incrementSelectedImage}
              className="absolute bg-white w-14 h-14 rounded-full inline-flex items-center justify-center top-[50%] translate-y-[-50%]   -right-5 "
            >
              <img src={Next} alt="" />
            </button>
          </div>
          <div className="w-[550px] flex justify-center gap-8">
            {productImage.map((image, idx) => (
              <div
                key={idx}
                className="w-[88px] h-[88px] rounded-2xl overflow-hidden cursor-pointer transition delay-75 duration-75 ease-in-out hover:opacity-50 hover:border-2 border-[]"
                onClick={() => setSelectedImage(idx)}
              >
                <img key={idx} src={image} alt="product image thumbnail" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
