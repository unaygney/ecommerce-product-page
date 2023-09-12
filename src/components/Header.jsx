import React, { useState, useRef, useEffect } from "react";
import { Items } from "./constants";

//Icons
import Logo from "../assets/logo.svg";
import HamburgerBtn from "../assets/Hamburger.svg";
import Basket from "../assets/Basket.svg";
import ProfilePic from "../assets/image-avatar.png";
import Close from "../assets/Close.svg";
import CardPicture from "../assets/image-product-1-thumbnail.jpg";
import TrashSvg from "../assets/Trash.svg";

function Header({ itemNumber, setItemNumber }) {
  const [isActive, setIsActive] = useState(false);
  const [isCardActive, setIsCardActive] = useState(false);
  const navRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsActive(false);
      }

      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsCardActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="container mx-auto flex items-center h-[68px] md:h-[110px]  border-b-2 z-10 border-slate-300">
      <div className="flex md:hidden align-center m-4">
        <button
          onClick={() => setIsActive(!isActive)}
          className="flex-shrink-0"
        >
          <img src={HamburgerBtn} alt="Burger Button" />
        </button>
      </div>

      <a href="#" className="mr-10 sm:mr-12 flex-shrink-0">
        <img src={Logo} alt="logo" />
      </a>

      {/*Navbar Menu for Desktop*/}
      <nav>
        <ul className="md:flex gap-9 hidden  ">
          {Items.map((item) => (
            <li key={item.id}>
              <a className="hover:border-b-4  border-orange-500 pb-11" href="#">
                {item.linkName}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay */}
      {/* Hamburger Menu for Mobile */}
      <div
        className={` fixed top-0 left-0 right-0 bottom-0 bg-black opacity-40 z-20 ${
          isActive ? "" : "hidden"
        }  `}
      ></div>
      <nav
        ref={navRef}
        className={`bg-white flex flex-col gap-10 absolute p-5 top-0 left-0 bottom-0 z-30 w-[70%] ${
          isActive ? "" : "hidden"
        } `}
      >
        <button onClick={() => setIsActive(!isActive)}>
          <img src={Close} alt="close button" />
        </button>
        <ul className=" flex flex-col gap-5">
          {Items.map((item) => (
            <li key={item.id}>
              <a className="font-bold text-[16px] text-slate-900 " href="#">
                {item.linkName}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* basket */}
      <div
        ref={cardRef}
        className="flex ml-auto sm:gap-11 gap-8 flex-shrink-0  relative"
      >
        <button
          className="cursor-pointer relative   "
          onClick={() => setIsCardActive(!isCardActive)}
        >
          {itemNumber ? (
            <div className="absolute -right-2 top-0 bg-[#FF7E1B] text-white px-[6px] py-[2px] rounded-xl ">
              {itemNumber}
            </div>
          ) : (
            ""
          )}
          <img src={Basket} alt="basket image " />
        </button>
        {/* Item Card */}
        {isCardActive && (
          <div className="absolute right-1 top-20 w-[300px] sm:w-[360px] h-[256px] rounded-xl bg-white shadow-2xl flex flex-col ">
            <div className="h-[67px] border-b-2 border-gray-200 p-6">
              <h4 className="font-bold ">Card</h4>
            </div>

            {itemNumber ? (
              <>
                <div className="flex-1 flex flex-col items-center gap-6 p-6">
                  <div className="flex gap-4">
                    <img
                      className="w-[50px] h-[50px] rounded-[10px]"
                      src={CardPicture}
                      alt="product image"
                    />
                    <div className="flex flex-col">
                      <p className="text-[#69707D] text-sm ">
                        Fall Limited Edition Sneakers
                      </p>
                      <p className="text-[#69707D] text-sm ">
                        $125.00 x {itemNumber}{" "}
                        <span className="font-bold text-[#1D2026]">
                          ${itemNumber * 125}.00{" "}
                        </span>
                      </p>
                    </div>
                    <button onClick={() => setItemNumber(0)}>
                      <img src={TrashSvg} alt="clear button" />
                    </button>
                  </div>

                  <button className="w-full bg-[#FF7E1B] py-5 rounded-xl text-white font-bold ">
                    Checkout
                  </button>
                </div>
              </>
            ) : (
              <div className="flex-1  flex items-center justify-center">
                <p className="font-bold text-sm text-[#69707D] ">
                  Your cart is empty.
                </p>
              </div>
            )}
          </div>
        )}

        <div className="lg:w-[50px] lg:h-[50px] w-6 h-6 cursor-pointer flex-shrink-0 hover:border-orange-500 rounded-full hover:border-2">
          <img
            className=" rounded-full"
            src={ProfilePic}
            alt="profile picture"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
