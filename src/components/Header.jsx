import React, {useState} from "react";

//Icons
import Logo from "../assets/logo.svg";
import HamburgerBtn from "../assets/Hamburger.svg";
import Basket from "../assets/Basket.svg";
import ProfilePic from "../assets/image-avatar.png";
import Close from "../assets/Close.svg";

import { Items } from "./constants";

function Header() {
  const [isActive , setIsActive] = useState(false)
  console.log(isActive)
  return (
    <header className="container mx-auto flex items-center md:h-[110px] h-[68px] border-b-2 border-slate-300">
      <div className="flex md:hidden align-center m-4">
        <button onClick={() => setIsActive(!isActive)} className="flex-shrink-0">
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
              <a className="hover:border-b-4  border-orange-500 pb-11" href="#">{item.linkName}</a>
            </li>
          ))}
        </ul>
      </nav>


      {/* Hamburger Menu for Mobile */}
      {/* Overlay */}
      <div className={` fixed top-0 left-0 right-0 bottom-0 bg-black opacity-40 ${isActive ? "" : "hidden"}  ` } ></div>
      <nav className={`bg-white flex flex-col gap-10 absolute p-5 top-0 left-0 bottom-0 z-50 w-[70%] ${isActive ? "" : "hidden"} `} >
   
        <button>
          <img src={Close} onClick={() => setIsActive(!isActive)} alt="close button" />
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
      <div className="flex ml-auto sm:gap-11 gap-8 flex-shrink-0 md:-z-10">
        <button className="cursor-pointer  relative ">
          <div className=" bg-orange-500 absolute top-0 -right-3  items-center justify-center text-white rounded-[6.5px] text-xs font-bold py-1 px-1.5 hidden "></div>
          <img src={Basket} alt="basket image " />
        </button>

        <div className="w-[50px] h-[50px] cursor-pointer flex-shrink-0">
          <img
            className="hover:border-orange-500 hover:border-2 rounded-full"
            src={ProfilePic}
            alt="profile picture"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
