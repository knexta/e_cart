import React, { useState } from "react";

const Forgotpassword: React.FC = () => {
  const [email, setemail] = useState("");
  const handlesubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center  min-h-[100vh] ">
      {/* <div className=" rounded-sm w-[768px] shadow-lg max-w-[100%] min-h-[480px] bg-gray-200"> */}
      <div className="container flex w-[100%]">
        <div className="w-[50%] flex flex-col justify-center items-center">
          <form onSubmit={(e) => handlesubmit(e)}>
            <h1 className="text-3xl text-center">Forgot Password</h1>
            <input
              name="email"
              className="text-2xl p-[5px] w-[95%] ml-[15px]  border my-[10px]"
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
            <button
              className="text-xl ml-[20px] rounded-md border border-1 border-pink-200 px-[12px] py-[5px] active:scale-90 bg-[#ff416c]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-[50%] bg-[#ff416c] flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl m-0">Hello, Friend!</h1>
          <p className="font-semibold text-center text-lg tracking-widest leading-5 mt-[20px] ml-0 mb-[30px]">
            Forgot password? Dont't worry
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
