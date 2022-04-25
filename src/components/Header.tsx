import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import { useQuery } from "@apollo/client";
import { getProducts } from "../graphql/Queries";
import { productData } from "../cache";
import { Data } from "../types/ProductTypes";

const Header: React.FC = () => {
  const productRes = useQuery<Data>(getProducts);
  const [show, setshow] = useState(false);
  const handleclick = () => {
    setshow(!show);
  };

  useEffect(() => {
    productData(productRes);
  }, [productRes]);

  return (
    <>
      <div className="bg-black flex align-center p-[1px] sm:p-[15px] justify-evenly items-center">
        <div className="block sm:hidden">
          <button
            className="ml-auto text-orange-500 hover:text-orange-600"
            onClick={handleclick}
          >
            <FontAwesomeIcon
              icon={faBars}
              // color="#ed7133"
              className="text-3xl"
            />
          </button>
        </div>
        <img src={logo} alt="" className=" h-[80px] w-[80px] " />
        <div className="hidden sm:block w-1/2">
          <Search />
        </div>
        <div className="hidden sm:block">
          <div className="flex align-center gap-4    ">
            <button className="text-xl text-orange-500 hover:text-orange-600">
              Home
            </button>
            <div className="dropdown">
              <button className=" text-xl text-orange-500  ">
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
              <button className="text-xl text-orange-500 ">
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
        </div>
        <div className="flex align-center gap-2">
          <button className="ml-auto text-orange-500 hover:text-orange-600">
            <FontAwesomeIcon
              icon={faHeart}
              // color="#ed7133"
              className="text-3xl"
            />
          </button>
          <button className="text-orange-500 hover:text-orange-600">
            <FontAwesomeIcon
              icon={faCartShopping}
              // color="#ed7133"
              className=" text-3xl"
            />
          </button>
        </div>
      </div>
      {show ? (
        <div className="bg-gray-900">
          <Search />
          <div>
            <div className="flex flex-cols align-center gap-4    ">
              <button className="text-xl text-orange-500 hover:text-orange-600">
                Home
              </button>
              <hr />
              <div className="dropdown">
                <button className=" text-xl text-orange-500 ">
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
                <button className="text-xl text-orange-500 ">
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
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
