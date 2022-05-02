import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../types/ProductTypes";
import { useMutation } from "@apollo/client";
import { addToWishlist } from "../graphql/Mutation";
import { toast } from "react-toastify";
import { addToCart } from "../graphql/Mutation";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Card: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("userId");
  const [Addtowishlist] = useMutation(addToWishlist, {
    onCompleted: (Addtowishlist) => {
      if (Addtowishlist) {
        toast("Product added to wishlist");
      }
    },
    onError: (error) => {
      if (error.message === "Not authenticated") {
        toast("Session Expired");
        navigate("/");
      }
    },
  });
  const [Addtocart] = useMutation(addToCart, {
    onCompleted: (Addtocart) => {
      if (Addtocart) {
        toast("Product added to Cart");
      }
    },
    onError: (error) => {
      if (error.message === "Not authenticated") {
        toast("Session Expired");
        navigate("/");
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
  const handleClick1 = (id: number) => {
    Addtocart({
      variables: {
        userId: Number(user),
        productId: Number(id),
      },
    });
  };
  return (
    <div
      className="card w-[280px] h-[370px] rounded-xl flex flex-col gap-2 justify-center items-center bg-white shadow-md shadow-gray-400 relative"
      // onClick={() => {
      //   navigate(`/product/${product.id}`);
      // }}
      key={product.id}
    >
      <div className="cardhide">
        <div className="p-[10px] relative">
          <img
            src={product.image}
            alt={product.productName}
            height="100px"
            width="200px"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl font-bold text-black text-center">
            {product.productName}
          </p>
          <p className="text-2xl text-properties font-bold text-center p-[10px]">
            ₹{product.price}
            &nbsp;
            <span className="text-properties1 text-lg line-through">
              ₹{product.price + product.discountPrice}
            </span>
          </p>
        </div>
      </div>
      <div className="btn absolute top-[35%] hidden">
        <button className=" w-[33%]" onClick={() => handleClick(product.id)}>
          <FontAwesomeIcon
            icon={faHeart}
            // color="#ed7133"
            className="text-5xl text-[#2479e1]"
          />{" "}
        </button>
        <button
          className="w-[33%]"
          onClick={() => {
            navigate(`/product/${product.id}`);
          }}
        >
          <FontAwesomeIcon
            icon={faInfoCircle}
            // color="#ed7133"
            className="text-5xl text-[#2479e1]"
          />
        </button>
        <button className=" w-[33%]" onClick={() => handleClick1(product.id)}>
          <FontAwesomeIcon
            icon={faCartShopping}
            // color="#ed7133"
            className="text-5xl text-[#2479e1]"
          />{" "}
        </button>
      </div>
    </div>
  );
};

export default Card;
