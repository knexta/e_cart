import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCart } from "../graphql/Queries";

function Cart() {
  const { data } = useQuery(getCart);
  const navigate = useNavigate();
  // console.log(data);
  const user = localStorage.getItem("userId");

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);
  return (
    <div>
      <div className="bg-white">
        <h1 className="text-3xl text-orange-600">Cart</h1>
      </div>
    </div>
  );
}

export default Cart;
