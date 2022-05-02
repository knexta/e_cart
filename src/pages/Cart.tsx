import { useQuery, useMutation } from "@apollo/client";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCart } from "../graphql/Queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { removeCartItem } from "../graphql/Mutation";
import { toast } from "react-toastify";
function Cart() {
  const user = localStorage.getItem("userId");
  const { data } = useQuery(getCart, {
    variables: {
      userId: Number(user),
    }
  });
  const navigate = useNavigate();

  const handleAdd = () => {

  };
  const handleSub = () => {

  };

  const [DeleteCartItem] = useMutation(removeCartItem, {
    onCompleted: (DeleteCart) => {
      if (DeleteCart) {
        toast("Product removed from Cart");
      }
    },
    refetchQueries: [getCart],
  });

  const handleClick = (id: number) => {
    DeleteCartItem({ variables: { id: Number(id) } });
  }

  useEffect(() => {
    if (!user) {
      navigate("/");
    }

  }, [user, navigate]);
  return (
    <div>
      <div className="bg-white p-20">
        <h1 className="text-center text-3xl font-bold">Cart List</h1>
        <div>
          {data?.getCart.map((eachItem: any) => (
            <div className="flex flex-row justify-between w-11/12 h-48 shadow-lg m-5 p-5 flex" key={eachItem.id}>

              <div className="flex cursor-pointer" onClick={() => {
                navigate(`/product/${eachItem.productId}`);
              }}>
                <img src={eachItem.productDetails[0].image} alt={eachItem.productDetails[0].productName} className="pl-5 w-36 h-36" />
                <p className="text-bold pt-12 font-bold pl-10">{eachItem.productDetails[0].productName}</p>
              </div> 
              <div className="pt-10 ">
                <div>
                  <button
                    className="text-2xl border font-bold border-gray-400 w-[35px] rounded-full m-[5px]"
                    onClick={handleSub}
                    >
                      -
                   
                  </button>
                  <input
                    type="text"
                    value={eachItem.quantity}
                    className="border text-center font-semibold text-3xl border-gray-400 w-[50px]"
                    readOnly
                  />
                  <button
                    className="text-2xl border font-bold border-gray-400 w-[35px] rounded-full m-[5px]"
                    onClick={handleAdd}
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faXmark} className="pr-8 pt-14 text-left cursor-pointer" onClick={() => handleClick(eachItem.id)} />
              </div>

            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;





