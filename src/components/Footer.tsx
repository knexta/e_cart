import React from "react";
import norton from "../assets/norton.png";
import McAfee from "../assets/McAfee.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="header-properties">
      <div className="flex flex-auto flex-wrap xl:justify-center  p-[15px] w-[100%] ">
        <div className="  md:w-[100%] lg:w-[50%] xl:w-[60%] p-[15px] flex flex-row flex-wrap">
          <div className="xl:w-[50%] md:w-[100%]">
          <p className="font-bold text-white text-3xl ml-3 mb-6"><span className="border-4 border-white border-solid px-3 rounded-full">E</span>-CART</p>
            <div className="text-2xl text-white p-[15px]">
              <p>Got a question ? Call us 24/7</p>
              <h4 className="text-red-500 text-3xl font-bold cursor-pointer">1400 765 908</h4>
            </div>
          </div>
          <div className="address xl:w-[40%] md:w-[100%]">
            <h2 className="text-lg text-white pb-[15px]">
              <span className="font-bold ">Ecart</span>,#01, 1st Floor, Concorde
              Silicon Valley Neeladri Road, Doddathogur Village, Begur Hobli,
              Electronic City, Phase 1, Bengaluru, Karnataka – 560 100
            </h2>
            <button className="border text-xl bg-orange-500 hover:bg-orange-600 xs:p-[40px] sm:p-[40px] md:p-[10px] rounded-xl text-white">
              <FontAwesomeIcon
                className="text-2xl p-[2px]"
                icon={faLocationDot}
              />
              View On Map
            </button>
          </div>
        </div>
        <div className=" md:w-[100%] lg:w-[50%] xl:w-[20%] p-[15px]">
          <div>
            <h3 className="text-2xl text-white font-bold p-[15px]">
              Secure Payments
            </h3>
          </div>
          <div>
            <h5 className="p-[15px] text-white text-xl">Secured by</h5>
            <div className="flex gap-4">
              <img src={norton} alt="norton" />

              <img src={McAfee} alt="norton" />
            </div>
          </div>
        </div>
        <div className="sm:w-[100%] pl-10 md:w-[45%] xl:w-[20%] p-[15px]">
          <h3 className="text-2xl text-white mb-[20px]">Pages</h3>
          <div className="flex flex-col ">
            <button className="pb-[5px] text-white hover:text-black text-left active:text-black">
              About Us
            </button>
            <button className="pb-[5px] text-white hover:text-black text-left active:text-black" onClick={() => navigate("/home")}>
              Home
            </button>
            <button className="pb-[5px] text-white hover:text-black text-left active:text-black">
              Contact Us
            </button>
          </div>
        </div>
        {/* <div className="card-4 sm:w-[100%] md:w-[45%] xl:w-[23%] p-[15px] ">
          <h3 className="text-2xl text-blue-600 mb-[20px]"> Quick Links</h3>
          <div className="flex flex-col">
            <button className="text-white hover:text-blue-600  text-lg text-left active:text-blue-700 pb-[5px]">
              Support
            </button>
            <button className="text-white hover:text-blue-600  text-lg text-left active:text-blue-700 pb-[5px]">
              Center
            </button>
            <button className="text-white hover:text-blue-600  text-lg text-left active:text-blue-700 pb-[5px]">
              Term & Conditions
            </button>
            <button className="text-white hover:text-blue-600  text-lg text-left active:text-blue-700 pb-[5px]">
              Shipping
            </button>
            <button className="text-white hover:text-blue-600  text-lg text-left active:text-blue-700 pb-[5px]">
              Privacy
            </button>
            <button className="text-white hover:text-blue-600  text-lg text-left active:text-blue-700 pb-[5px]">
              Policy
            </button>
            <button className="text-white hover:text-blue-600  text-lg text-left active:text-blue-700 pb-[5px]">
              Help
            </button>
            <button className="text-white hover:text-blue-600  text-lg text-left active:text-blue-700 pb-[5px]">
              Products
            </button>
            <button className="text-white hover:text-blue-600  text-lg text-left active:text-blue-700 pb-[5px]">
              Return
            </button>
            <button className="text-white hover:text-blue-600  text-lg text-left active:text-blue-700 pb-[5px]">
              FAQS
            </button>
          </div>
        </div> */}
      </div>
      <div className="ml-8 text-white bg-white-700 flex item-center">
        <p className="text-md text-gray-200 p-[15px]">
          &copy;2022 E-Cart. All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
