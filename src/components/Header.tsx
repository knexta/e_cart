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
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const productRes = useQuery<Data>(getProducts);
  const [show, setshow] = useState(false);
  const [display, setdisplay] = useState(false);
  const [display1, setdisplay1] = useState(false);
  const navigate = useNavigate();
  const handleclick = () => {
    setshow(!show);
  };

  useEffect(() => {
    productData(productRes);
  }, [productRes]);
  const handledis1 = () => {
    setdisplay(!display);
  };
  const handledis2 = () => {
    setdisplay1(!display1);
  };
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
            <button
              className="text-xl text-orange-500 hover:text-orange-600"
              onClick={() => navigate("/home")}
            >
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
        </div>
        <div className="flex align-center gap-2">
          <button
            className="ml-auto text-orange-500 hover:text-orange-600"
            onClick={() => navigate("/whishlist")}
          >
            <FontAwesomeIcon
              icon={faHeart}
              // color="#ed7133"
              className="text-3xl"
            />
          </button>
          <button
            className="text-orange-500 hover:text-orange-600"
            onClick={() => navigate("/cart")}
          >
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
            <div className="flex flex-col  gap-4   ml-[15px] ">
              <div>
                <button
                  className="text-xl text-orange-500 hover:text-orange-600"
                  onClick={() => navigate("/home")}
                >
                  Home
                </button>
              </div>
              <div>
                <button
                  className=" text-2xl text-orange-500 "
                  onClick={handledis1}
                >
                  Pages <FontAwesomeIcon icon={faCaretDown} />
                </button>
                {display ? (
                  <div className="flex flex-col gap-4   ml-[15px]">
                    <button className="text-xl text-orange-500 text-left p-[5px] ">
                      About Us
                    </button>
                    <button className="text-xl text-orange-500 text-left p-[5px] ">
                      Contact
                    </button>
                    <button className="text-xl text-orange-500 text-left p-[5px] ">
                      Terms and conditions
                    </button>
                    <button className="text-xl text-orange-500 text-left p-[5px] ">
                      FAQ
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                <button
                  className="text-2xl text-orange-500 "
                  onClick={handledis2}
                >
                  Shop <FontAwesomeIcon icon={faCaretDown} />
                </button>
                {display1 ? (
                  <div className="flex flex-col  gap-4   ml-[15px]">
                    <button className="text-xl text-orange-500 text-left p-[5px] ">
                      Shop
                    </button>
                    <button className="text-xl text-orange-500 text-left p-[5px] ">
                      Whislist
                    </button>
                  </div>
                ) : (
                  ""
                )}
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
