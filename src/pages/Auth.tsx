import React, { useRef } from "react";
import Signin from "./Signin";
import Signup from "./Signup";

const Auth: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.classList.add("right-panel-active");
  };
  const handleClick1 = () => {
    ref.current?.classList.remove("right-panel-active");
  };

  return (
    <div className="flex justify-center items-center  min-h-[100vh]">
      <div ref={ref} className="container" id="container">
        <Signup />
        <Signin />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="font-bold text-xl m-0">Welcome Back!</h1>
              <p className="font-semibold text-lg tracking-widest leading-5 mt-[20px] ml-0 mb-[30px]">
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={handleClick1}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="font-bold text-xl m-0">Hello, Friend!</h1>
              <p className="font-semibold text-lg tracking-widest leading-5 mt-[20px] ml-0 mb-[30px]">
                Enter your personal details and start journey with us
              </p>
              <button
                className="text-xl ghost"
                id="signUp"
                onClick={handleClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
