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
    <div className="form-container sign-up-container flex flex-col justify-center items-center">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1 className="font-bold m-0 text-2xl">Create Account</h1>
        <span className="text-xl text-xenter">
          use your email for registration
        </span>
        <div className="flex flex-col items-center">
          <input
            className="text-2xl p-[10px] border my-[5px] w-[100%]"
            type="text"
            value={name}
            placeholder="Enter your User Name"
            required
            onChange={(e) => setname(e.target.value)}
          />
          <input
            className="text-2xl p-[10px] border my-[5px] w-[100%]"
            type="email"
            value={email}
            placeholder="Enter your Email"
            required
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            className="text-2xl p-[10px] border my-[5px] w-[100%]"
            type="password"
            value={password}
            placeholder="Enter your Password"
            required
            onChange={(e) => setpassword(e.target.value)}
          />
          <input
            className="text-2xl p-[10px] border my-[5px] w-[100%]"
            type="tel"
            value={mobile}
            placeholder="Enter mobile number...."
            required
            onChange={(e) => setmobile(e.target.value)}
          />
        </div>
        <button type="submit" className="auth">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
