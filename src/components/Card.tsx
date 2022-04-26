import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../types/ProductTypes";

const Card: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card w-[280px] h-[380px] rounded-xl flex flex-col gap-2 items-center bg-white shadow-md shadow-gray-400"
      key={product.id}
      onClick={() => {
        navigate(`/product/${product.id}`);
      }}
    >
      <div className="p-[10px] relative">
        <img
          src={product.image}
          alt={product.productName}
          height="130px"
          width="230px"
        />
        {/* <button></button> */}
      </div>
      <div>
        <p className="text-2xl text-black text-center">{product.productName}</p>
        <p className="text-2xl text-black text-center p-[10px]">
          <span className=" line-through">
            ${product.price + product.discountPrice}
          </span>
          &nbsp; ${product.price}
        </p>
      </div>
    </div>
  );
};

export default Card;
