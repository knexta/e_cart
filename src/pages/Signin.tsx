// import { useMutation } from "@apollo/client";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../graphql/Mutation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Signin: React.FC = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  //   const [Login, loading, data] = useMutation();
  const [Login] = useMutation(login, {
    onCompleted: (Login) => {
      if (Login) {
        // console.log(Login?.login);
        const user = Login?.login;
        // localStorage.setItem("user", user);
        localStorage.setItem("name", user.name);
        localStorage.setItem("userId", user.id);
        localStorage.setItem("email", user.email);
        localStorage.setItem("mobile", user.mobile);
        // isLoggedIn(true);
        navigate("/home");
      }
    },
    onError: (error) => {
      toast(error.message);
    },
  });

  // const { loading, error, data } = useReactiveVar<productQueryRes>(userDetail);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(email, password);
    Login({
      variables: {
        email: email,
        password: password,
      },
    });
    // if (data !== undefined) {
    //   console.log(data);
    //   const user = JSON.stringify(data);
    //   localStorage.setItem("USER", user);
    //   navigate("/home");
    // }
  };

  return (
    <div className="form-container sign-in-container flex flex-col justify-center items-center">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3 className="text-center font-bold text-2xl mb-10">Login your account <br/> for shopping</h3>
        <div className="pl-5">
          <label htmlFor="email" className="pl-4 font-bold text-xs text-properties">EMAIL</label>
          <input
            id="email"
            className="p-[5px] w-[90%] ml-[15px] border my-[10px]"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter your Email"
            required
          />
          <label htmlFor="password" className="pl-4 font-bold text-xs text-properties">PASSWORD</label>
          <input
            id="password"
            className="p-[5px] w-[90%] ml-[15px] border my-[10px]"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter your Password"
            required
          />
        </div>
        <div className="text-center mt-5">
        <button type="submit" className="auth">
          Sign In
        </button>
        </div>
        
      </form>
      <button
        className="mt-2"
        onClick={() => navigate("/forgotpassword")}
      >
        Forgot password?
      </button>
    </div>
  );
};

export default Signin;
