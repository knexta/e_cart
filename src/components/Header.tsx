import React from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";

const Header: React.FC = () => {
  return (
    <div className="bg-black flex p-[15px] justify-evenly">
      <img src={logo} alt="" className=" h-[100px] w-[100px]" />
      <Search />
      <div className="flex align-center gap-4">
        <button className="text-2xl text-orange-500 hover:text-orange-600">
          Home
        </button>
        <div className="dropdown">
          <button className=" text-2xl text-orange-500 ">
            Pages <FontAwesomeIcon icon={faCaretDown} />
          </button>

          <div className=" dropdown-content ">
            <button className="text-lg p-[5px] border-b-2 border-whitesmoke">
              About Us
            </button>
            <button className="text-lg p-[5px] border-b-2 border-whitesmoke">
              Contact
            </button>
            <button className="text-lg p-[5px] border-b-2 border-whitesmoke">
              Terms and conditions
            </button>
            <button className="text-lg p-[5px] border-b-2 border-whitesmoke">
              FAQ
            </button>
          </div>
        </div>
        <div className="dropdown1">
          <button className="text-2xl text-orange-500 ">
            Shop <FontAwesomeIcon icon={faCaretDown} />
          </button>
          <div className=" dropdown-content1 ">
            <button className="text-lg p-[5px] border-b-2 border-whitesmoke">
              Shop
            </button>
            <button className="text-lg p-[5px] border-b-2 border-whitesmoke">
              Whislist
            </button>
          </div>
        </div>
      </div>
      <div className="flex align-center gap-2">
        <button className="ml-auto text-orange-500 hover:text-orange-600">
          <FontAwesomeIcon
            icon={faHeart}
            // color="#ed7133"
            className="text-4xl"
          />
        </button>
        <button className="text-orange-500 hover:text-orange-600">
          <FontAwesomeIcon
            icon={faCartShopping}
            // color="#ed7133"
            className=" text-4xl"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
