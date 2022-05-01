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
  console.log(data?.getCart);
  
  const handleAdd = () => {
    
  };
  const handleSub = () => {
    
  };

  const [DeleteCartItem] = useMutation(removeCartItem, {
    onCompleted: (DeleteCart) => {
      if (DeleteCart) {
        toast("Product removed from wishlist");
      }
    },
    refetchQueries: [getCart],
  });

  const handleClick = (id: number) =>{
    DeleteCartItem({ variables: { id: Number(id) } });
  }

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);
  return (
    <div>
      <div className="bg-white p-20">
        <h1 className="text-center text-4xl text-orange-500 font-medium">Cart List</h1>
        <div>
          {data?.getCart.map((eachItem:any) => (
            <div className="w-11/12 h-48 shadow-lg m-5 p-5 flex" key={eachItem.id}>
              
              <img src={eachItem.productDetails[0].image} alt={eachItem.productDetails[0].productName} className="pl-5 w-36 h-36"/>
              <div className="flex flex-row justify-around">
              <div>
                <p className="text-bold pt-12 font-bold pl-4">{eachItem.productDetails[0].productName}</p>
              </div>
              <div className="flex pt-10">
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
                <div>
                  <FontAwesomeIcon icon={faXmark} className="pt-14 text-left cursor-pointer" onClick={()=> handleClick(eachItem.id)} />
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
