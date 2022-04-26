import React from "react";
import logo from "../assets/logo.svg";
import norton from "../assets/norton.png";
import McAfee from "../assets/McAfee.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-auto flex-wrap xl:justify-center  p-[15px] w-[100%] ">
        <div className="card-1  md:w-[100%] lg:w-[50%] xl:w-[23%] p-[15px] ">
          <div>
            <img src={logo} alt="" className="image h-[100px] w-[100px] " />
          </div>
          <div className="text-2xl text-white p-[15px]">
            <p>Got a question ? Call us 24/7</p>
            <h4 className="text-red-500 text-3xl font-bold">1400 765 908</h4>
          </div>
          <div className="address">
            <h2 className="text-xl text-white pb-[15px]">
              <span className="font-bold ">Ecart</span>,#01, 1st Floor, Concorde
              Silicon Valley Neeladri Road, Doddathogur Village, Begur Hobli,
              Electronic City, Phase 1, Bengaluru, Karnataka – 560 100
            </h2>
            <button className="border text-2xl bg-orange-500 hover:bg-orange-600 xs:p-[15px] sm:p-[15px] md:p-[10px] rounded-xl text-white">
              <FontAwesomeIcon
                className="text-2xl p-[2px]"
                icon={faLocationDot}
              />
              View On Map
            </button>
          </div>
        </div>
        <div className="card-2  md:w-[100%] lg:w-[50%] xl:w-[23%] p-[15px]">
          <div>
            <h5 className="text-xl text-blue-600">We Using</h5>
            <h3 className="text-2xl text-blue-400 font-bold p-[15px]">
              Secure Payments
            </h3>
          </div>
          <div>
            <h5 className="p-[15px] text-blue-400 text-xl">Secured by</h5>
            <div className="flex gap-4">
              <img src={norton} alt="norton" />

              <img src={McAfee} alt="norton" />
            </div>
          </div>
        </div>
        <div className="card-3 sm:w-[100%] md:w-[45%] xl:w-[23%] p-[15px]">
          <h3 className="text-2xl text-blue-600 mb-[20px]">Pages</h3>
          <div className="flex flex-col ">
            <button className="pb-[5px] text-white hover:text-blue-600 text-left  text-lg active:text-blue-700">
              About Us
            </button>
            <button className="pb-[5px] text-white hover:text-blue-600 text-left  text-lg active:text-blue-700">
              Home
            </button>
            <button className="pb-[5px] text-white hover:text-blue-600 text-left  text-lg active:text-blue-700">
              Contact Us
            </button>
          </div>
        </div>
        <div className="card-4 sm:w-[100%] md:w-[45%] xl:w-[23%] p-[15px] ">
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
        </div>
      </div>
      <div className="indent-56 text-white bg-white-700 flex item-center">
        <p className="text -lg sm:text-2xl p-[15px]">
          &copy;2022 E-Cart. All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;