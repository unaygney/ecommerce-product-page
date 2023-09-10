import React from "react";
import Logo from "../assets/logo.svg";
import HamburgerBtn from "../assets/Hamburger.svg";
import Basket from "../assets/Basket.svg";
import ProfilePic from "../assets/image-avatar.png";

import { Items } from "./constants";
function Header() {
  return (
    <header className="container mx-auto flex items-center h-[110px] border-b-2">
      <div className="flex md:hidden align-center m-4">
        <button className="flex-shrink-0">
          <img src={HamburgerBtn} alt="Burger Button" />
        </button>
      </div>

      <a href="#" className="mr-10 sm:mr-12 flex-shrink-0">
        <img src={Logo} alt="logo" />
      </a>

      <ul className="md:flex gap-9 hidden  ">
        {Items.map((item) => (
          <li key={item.id}>
            <a href="#">{item.linkName}</a>
          </li>
        ))}
      </ul>

      <div className="flex ml-auto sm:gap-11  gap-8 flex-shrink-0">
        <button className="cursor-pointer">
          <img src={Basket} alt="" />
        </button>

        <div className="w-[50px] h-[50px] cursor-pointer flex-shrink-0">
          <img className="border-0 hover:border-2 border-solid border-orange-500 rounded-full" src={ProfilePic} alt="profile picture"  />
        </div>
      </div>
    </header>
  );
}

export default Header;
