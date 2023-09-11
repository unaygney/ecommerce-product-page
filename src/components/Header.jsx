import React, { useState } from "react";
import { Items } from "./constants";
//Icons
import Logo from "../assets/logo.svg";
import HamburgerBtn from "../assets/Hamburger.svg";
import Basket from "../assets/Basket.svg";
import ProfilePic from "../assets/image-avatar.png";
import Close from "../assets/Close.svg";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isCardActive, setIsCardActive] = useState(false);

  console.log(isCardActive);
  return (
    <header className="container mx-auto flex items-center md:h-[110px] h-[68px] border-b-2 z-10 border-slate-300">
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
        className={`bg-white flex flex-col gap-10 absolute p-5 top-0 left-0 bottom-0 z-30 w-[70%] ${
          isActive ? "" : "hidden"
        } `}
      >
        <button>
          <img
            src={Close}
            onClick={() => setIsActive(!isActive)}
            alt="close button"
          />
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
      <div className="flex ml-auto sm:gap-11 gap-8 flex-shrink-0  relative">
        <button
          className="cursor-pointer  "
          onClick={() => setIsCardActive(!isCardActive)}
        >
          <img src={Basket} alt="basket image " />
        </button>
        {/* Item Card */}
        {isCardActive && (
          <div className="absolute right-1 top-20 w-[300px] sm:w-[360px] h-[256px] rounded-xl bg-white shadow-2xl flex flex-col ">
            <div className="h-[67px] border-b-2 border-gray-200 p-6">
              <h4 className="font-bold ">Card</h4>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <p className="font-bold text-sm text-[#69707D] ">Your cart is empty.</p>
            </div>


          </div>
        )}

        <div className="w-[50px] h-[50px] cursor-pointer flex-shrink-0 hover:border-orange-500 rounded-full hover:border-2">
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
