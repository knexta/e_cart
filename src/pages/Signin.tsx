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
      console.log(error);
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
        <h1 className="text-center font-bold m-0 text-2xl">Sign in</h1>
        <h3 className="text-center text-xl">use your account for shopping</h3>
        <div className="flex flex-col items-center">
          <input
            className="text-2xl p-[5px] w-[100%] ml-[15px] border my-[10px]"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter your Email"
            required
          />
          <input
            className="text-2xl p-[5px] w-[100%] ml-[15px]  border my-[10px]"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter your Password"
            required
          />
        </div>

        <button type="submit" className=" auth">
          Sign In
        </button>
      </form>
      <button
        className=" mx-[15px] my=0 text-2xl"
        onClick={() => navigate("/forgotpassword")}
      >
        Forgot password?
      </button>
    </div>
  );
};

export default Signin;
