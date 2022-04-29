import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../types/ProductTypes";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@apollo/client";
import { addToCart, addToWishlist } from "../graphql/Mutation";
import { toast } from "react-toastify";

const Card: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();

  const [Addtowishlist] = useMutation(addToWishlist, {
    onCompleted: (Addtowishlist) => {
      if (Addtowishlist) {
        toast("Product added to wishlist");
      }
    },
  });
  const userId = localStorage.getItem("userId");
  // console.log(userId);

  const handleClick = (id: number) => {
    Addtowishlist({
      variables: {
        userId: Number(userId),
        productId: Number(id),
      },
    });
  };
  return (
    <div
      className="card w-[280px] h-[450px] rounded-xl flex flex-col gap-2 justify-center items-center bg-white shadow-md shadow-gray-400"
      key={product.id}
    >
      <div className="p-[10px] relative">
        <button
          className="text-right w-full"
          onClick={() => handleClick(product.id)}
        >
          <FontAwesomeIcon
            icon={faHeart}
            // color="#ed7133"
            className="text-3xl text-rose-500"
          />{" "}
        </button>
        <img
          src={product.image}
          alt={product.productName}
          height="130px"
          width="230px"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl text-black text-center">{product.productName}</p>
        <p className="text-2xl text-black text-center p-[10px]">
          <span className=" line-through">
            ${product.price + product.discountPrice}
          </span>
          &nbsp; ${product.price}
        </p>
        <button
          className="text-2xl p-[5px] bg-orange-500 text-black border border-black rounded-md"
          onClick={() => {
            navigate(`/product/${product.id}`);
          }}
        >
          View product
        </button>
      </div>
    </div>
  );
};

export default Card;
