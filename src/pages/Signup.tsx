import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signup } from "../graphql/Mutation";

const Signup: React.FC = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [mobile, setmobile] = useState("");
  const navigate = useNavigate();

  const [Signup] = useMutation(signup, {
    onCompleted: (Signup) => {
      // const user = Signup.data?.createUser;

      toast("User Registered successfully");
      navigate("/");
    },
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(typeof email, typeof password, typeof name, typeof mobile);
    Signup({
      variables: {
        name: name,
        email: email,
        password: password,
        mobile: parseFloat(mobile),
      },
    });
    // i
  };
  return (
    <div className="form-container sign-up-container ">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1 className="font-bold m-0 text-2xl text-center pt-10">Create Account</h1>
        <p className="text-center mb-5">
          use your email for registration
        </p>
        <div className="flex flex-col pl-10">
          <label htmlFor="username" className="font-bold text-xs text-properties">USER NAME</label>
          <input
            className="p-[8px] border my-[5px] w-[90%] text-sm mb-3"
            id="username"
            type="text"
            value={name}
            placeholder="Enter your User Name"
            required
            onChange={(e) => setname(e.target.value)}
          />
          <label htmlFor="email" className=" font-bold text-xs text-properties">EMAIL</label>
          <input
            className="p-[8px] border my-[5px] w-[90%] text-sm mb-3"
            type="email"
            id="email"
            value={email}
            placeholder="Enter your Email"
            required
            onChange={(e) => setemail(e.target.value)}
          />
          <label htmlFor="password" className="font-bold text-xs text-properties">PASSWORD</label>
          <input
            className="p-[8px] border my-[5px] w-[90%] text-sm mb-3"
            type="password"
            id="password"
            value={password}
            placeholder="Enter your Password"
            required
            onChange={(e) => setpassword(e.target.value)}
          />
          <label htmlFor="mobile" className="font-bold text-xs text-properties">MOBILE NUMBER</label>
          <input
            className="p-[8px] border my-[5px] w-[90%] text-sm mb-3"
            type="tel"
            id="mobile"
            value={mobile}
            placeholder="Enter mobile number"
            required
            onChange={(e) => setmobile(e.target.value)}
          />
        </div>
        <div className=" mt-3 text-center">
        <button type="submit" className="auth">
          Sign Up
        </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
