import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsbyId } from "../graphql/Queries";
import { oneData, oneProduct, Product } from "../types/ProductTypes";
import { useQuery } from "@apollo/client";
import Spinner from "../utils/Spinner";
import { idparams } from "../types/ProductTypes";
import Card from "../components/Card";

const Products = () => {
  const { id } = useParams<idparams>();
  const [quantity, setquantity] = useState(0);
  const Id = Number(id);
  const { loading, error, data } = useQuery<oneData>(getProductsbyId, {
    variables: { id: Id },
  });
  if (loading) return <Spinner />;
  if (error) return <h1>`Error! ${error.message}`</h1>;
  console.log(typeof data, data);
  const product = data?.getProduct;
  console.log(product);
  //   console.log(typeof data);
  const handleAdd = () => {
    setquantity(quantity + 1);
  };
  const handleSub = () => {
    setquantity(quantity - 1);
  };
  return (
    <div>
      {product?.map((product: oneProduct) => {
        return (
          <>
            <div className="flex flex-wrap p-[15px]">
              <div
                key={product.id}
                className="sm:w-[100%] md:w-[30%] bg-white shadow-sm shadow-gray-100"
              >
                <img src={product.image} alt={product.productName} />
              </div>
              <div className="sm:w-[100%] md:w-[70%] pl-[10px]">
                <h1 className="text-3xl ">{product.productName}</h1>
                <h2 className="text-2xl text-black  p-[10px] m-[10px]">
                  ₹{product.price}
                  <span className=" line-through text-gray-400 indent-2">
                    ₹{product.price + product.discountPrice}
                  </span>
                </h2>
                <h3 className="text-3xl text-gray-400 m-[10px]">Highlights</h3>
                <ul className="list-disc text-2xl list-inside m-[10px]">
                  {product?.overview?.map((data: string) => {
                    return <li>{data}</li>;
                  })}
                </ul>
                <h3 className="text-3xl text-gray-400">Description</h3>
                <table className="table-auto   border-collapse md:w-3/4 sm:w-[100%] m-[10px]">
                  <tbody>
                    {product?.description?.map((prod) => {
                      return (
                        <tr>
                          <td className="border border-black bg-gray-300 text-2xl ">
                            {prod[0]}
                          </td>
                          <td className="border border-black bg-gray-200 text-2xl ">
                            {prod[1]}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
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
                      value={quantity}
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
                  <button className="border bg-orange-500 text-white text-2xl p-[10px] rounded-full">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl ml-[20px] font-bold">Similiar product</h3>
              <div className="grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1 justify-items-center mt-4 gap-4 p-[20px]">
                {product?.similarProducts?.map((prod: Product) => {
                  return <Card product={prod} />;
                })}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Products;
