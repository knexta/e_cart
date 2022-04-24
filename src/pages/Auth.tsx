import React from "react";

const Auth: React.FC = () => {
  return (
    <div className="flex justify-center items-center  min-h-[100vh]">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1 className="font-bold m-0 text-2xl">Create Account</h1>
            <span className="text-lg">or use your email for registration</span>
            <input
              className="text-2xl p-[10px] w-1/2"
              type="text"
              placeholder="Name"
            />
            <input
              className="text-2xl p-[10px] w-1/2"
              type="email"
              placeholder="Email"
            />
            <input
              className="text-2xl p-[10px] w-1/2"
              type="password"
              placeholder="Password"
            />
            {/* for all button tail wind css
      rounded-3xl border-1 border-solid border-red-400 bg-red-300 textwhite text-xs font-bold px-[12px] py-[45px] tracking-wide uppercase  */}
            <button className=" auth">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1 className="font-bold m-0 text-2xl">Sign in</h1>
            <h3 className="text-lg">use your account for shopping</h3>
            <input
              className="text-2xl p-[5px] w-[75%]"
              type="email"
              placeholder="Email"
            />
            <input
              className="text-2xl p-[5px] w-[75%]"
              type="password"
              placeholder="Password"
            />
            <br />
            <a className="text-xs mx-[15px] my=0 no-underline" href="sample">
              Forgot password?
            </a>
            <button className=" auth">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="font-bold m-0">Welcome Back!</h1>
              <p className="font-thin text-sm tracking-widest leading-5 mt-[20px] ml-0 mb-[30px]">
                To keep connected with us please login with your personal info
              </p>
              <button className=" ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="font-bold m-0">Hello, Friend!</h1>
              <p className="font-thin text-sm tracking-widest leading-5 mt-[20px] ml-0 mb-[30px]">
                Enter your personal details and start journey with us
              </p>
              <button className=" ghost" id="signUp">
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
