import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getCart } from "../graphql/Queries";

function Cart() {
  const user = localStorage.getItem("userId");
  const { error, data } = useQuery(getCart, {
    variables: {
      userId: Number(user),
    },
  });
  const navigate = useNavigate();
  console.log(data?.getCart);

  const handleAdd = () => {};
  const handleSub = () => {};

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    if (error) {
      toast(error.message);
      navigate("/");
    }
  }, [user, error, navigate]);
  return (
    <div>
      <div className="bg-white p-20">
        <h1 className="text-center text-4xl text-orange-500 font-medium">
          Cart List
        </h1>
        <div>
          {data?.getCart.map((eachItem: any) => (
            <div
              className="w-11/12 h-48 shadow-lg m-5 p-5 flex"
              key={eachItem.id}
            >
              <img
                src={eachItem.productDetails[0].image}
                alt={eachItem.productDetails[0].productName}
                className="pl-5 w-36 h-36"
              />
              <div>
                <p>{eachItem.productDetails[0].productName}</p>
              </div>
              <div className="flex">
                <div>
                  <button
                    className="text-2xl border border-gray-400 w-[35px] rounded-full m-[5px]"
                    onClick={handleAdd}
                  >
                    +
                  </button>
                  <input
                    type="text"
                    value={eachItem.quantity}
                    className="border text-center text-3xl border-gray-400 w-[50px]"
                    readOnly
                  />
                  <button
                    className="text-2xl border border-gray-400 w-[35px] rounded-full m-[5px]"
                    onClick={handleSub}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
