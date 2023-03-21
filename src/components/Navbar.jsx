import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import desertsPrana from '../assets/desertsPrana.png';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  
  return (
    <div className="flex w-full justify-between items-center h-21 px-4 absolute z-10 text-white">
      <div className="divlogo">
      <img src={desertsPrana} alt="Deserts Prana" onClick={handleNav} className={logo ? "hidden" : "block"} />
      </div>
      <ul className="hidden md:flex">
        <li><Link to ="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/accommodation">Accommodation</Link></li>
        <li><Link to="/therapies">Therapies</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="" size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={40} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <img src={logo} alt="Deserts Prana" />
          <li className="border-b">Home</li>
          {/* <li className="border-b"><link to="/about">About</link></li> */}
          <li className="border-b">About</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
          <div className="flex flex-col">
            <button className="my-6">Contact</button>
            <button>Therapies</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
