import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsbyId } from "../graphql/Queries";
import { addToCart, addToWishlist } from "../graphql/Mutation";
import { oneData, oneProduct, Product } from "../types/ProductTypes";
import { useQuery, useMutation } from "@apollo/client";
import Spinner from "../utils/Spinner";
import { idparams } from "../types/ProductTypes";
import Card from "../components/Card";
import { toast } from "react-toastify";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Products = () => {
  const { id } = useParams<idparams>();
  const navigate = useNavigate();
  const [quantity, setquantity] = useState(0);
  const Id = Number(id);
  const user = localStorage.getItem("userId");

  const { loading, error, data } = useQuery<oneData>(getProductsbyId, {
    variables: { id: Id },
  });
  const [Addtowishlist] = useMutation(addToWishlist, {
    onCompleted: (Addtowishlist) => {
      if (Addtowishlist) {
        toast("Product added to wishlist");
      }
    },
    onError: (error) => {
      toast(error.message);
      navigate("/");
    },
  });
  const [Addtocart] = useMutation(addToCart, {
    onCompleted: (Addtocart) => {
      if (Addtocart) {
        toast("Product added to Cart");
      }
    },
    onError: (error) => {
      toast(error.message);
      navigate("/");
    },
  });
  useEffect(() => {
    if (error) {
      toast(error.message);
      navigate("/");
    }
    if (!user) {
      navigate("/");
    }
  }, [user, error]);
  if (loading) return <Spinner />;

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
  const handleClick = (id: number) => {
    Addtowishlist({
      variables: {
        userId: Number(user),
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
                <div className="flex w-[100%] justify-between">
                  <h1 className="text-3xl ">{product.productName}</h1>
                  <button onClick={() => handleClick(product.id)}>
                    <FontAwesomeIcon
                      icon={faHeart}
                      // color="#ed7133"
                      className="text-3xl text-rose-500"
                    />{" "}
                  </button>
                </div>
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
                  <button
                    onClick={() => handleClick1(product.id)}
                    className="border bg-orange-500 text-white text-2xl p-[10px] rounded-full"
                  >
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
