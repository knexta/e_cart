import React, { useEffect, useState } from "react";
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
  const [search, setSearch] = useState<string | undefined>("");
  const [show, setshow] = useState(false);
  const [display, setdisplay] = useState(false);
  const [display1, setdisplay1] = useState(false);
  const navigate = useNavigate();
  const productRes = useQuery<Data>(getProducts, {
    variables: {
      name: search,
    },
  });
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
      <div className="header-properties flex align-center p-[1px] sm:p-[15px] justify-evenly items-center">
        <div className="block sm:hidden p-5 ">
          <button
            className="ml-auto text-orange-500 hover:text-orange-600"
            onClick={handleclick}
          >
            <FontAwesomeIcon
              icon={faBars}
              color="#ffffff"
              className="text-3xl"
            />
          </button>
        </div>
        <p className="font-bold text-white text-3xl "><span className="border-4 border-white border-solid px-3 rounded-full">E</span>-CART</p>
        <div className="hidden sm:block w-1/2">
          <Search search={search} setSearch={setSearch} />
        </div>
        <div className="hidden sm:block">
          <div className="flex align-center gap-4">
            <button
              className="text-xl text-white hover:text-black"
              onClick={() => navigate("/home")}
            >
              Home
            </button>
            <div className="dropdown">
              <button className=" text-xl text-white hover:text-black">
                Pages <FontAwesomeIcon icon={faCaretDown} />
              </button>
              <div className="dropdown-content mt-2">
                <button className="p-[5px] border-b-2 border-whitesmoke hover:bg-black hover:text-white">
                  About Us
                </button>
                <button className="p-[5px] border-b-2 border-whitesmoke hover:bg-black hover:text-white">
                  Contact
                </button>
                <button className="p-[5px] border-b-2 border-whitesmoke hover:bg-black hover:text-white">
                  Terms and conditions
                </button>
                <button className="p-[5px] border-b-2 border-whitesmoke hover:bg-black hover:text-white">
                  FAQ
                </button>
              </div>
            </div>
            <div className="dropdown1">
              <button className="text-xl text-white hover:text-black">
                Shop <FontAwesomeIcon icon={faCaretDown} />
              </button>
              <div className=" dropdown-content1 mt-2">
                <button className="p-[5px] border-b-2 border-whitesmoke hover:bg-black hover:text-white" onClick={() => navigate("/home")}>
                  Shop
                </button>
                <button className="p-[5px] border-b-2 border-whitesmoke hover:bg-black hover:text-white" onClick={() => navigate("/whishlist")}>
                  Whislist
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex align-center gap-2">
          <button
            className="ml-auto wishlist-properties hover:text-white"
            onClick={() => navigate("/whishlist")}
          >
            <FontAwesomeIcon
              icon={faHeart}
              // color="#ed7133"
              className="text-3xl"
            />
          </button>
          <button
            className="text-white hover:text-black"
            onClick={() => navigate("/cart")}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              // color="#ed7133"
              className="text-3xl"
            />
          </button>
        </div>
      </div>
      {show ? (
        <div className="header-properties pb-10">
          <Search search={search} setSearch={setSearch} />
          <div>
            <div className="flex flex-col gap-4 ml-[15px] ">
              <div>
                <button
                  className="text-xl text-white hover:text-black"
                  onClick={() => navigate("/home")}
                >
                  Home
                </button>
              </div>
              <div>
                <button
                  className=" text-xl text-white hover:text-black"
                  onClick={handledis1}
                >
                  Pages <FontAwesomeIcon icon={faCaretDown} />
                </button>
                {display ? (
                  <div className="flex flex-col gap-4 ml-[15px]">
                    <button className="text-white text-left pt-4 ">
                      About Us
                    </button>
                    <button className="text-white text-left">
                      Contact
                    </button>
                    <button className="text-white text-left">
                      Terms and conditions
                    </button>
                    <button className="text-white text-left">
                      FAQ
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                <button
                  className="text-xl text-white hover:text-black "
                  onClick={handledis2}
                >
                  Shop <FontAwesomeIcon icon={faCaretDown} />
                </button>
                {display1 ? (
                  <div className="flex flex-col gap-4 ml-[15px]">
                    <button className="text-white text-left pt-4" onClick={() => navigate("/home")}>
                      Shop
                    </button>
                    <button className="text-white text-left" onClick={() => navigate("/whishlist")}>
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
