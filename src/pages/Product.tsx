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
  }, [user, error, navigate]);
  if (loading) {
    <div className="flex items-center justify-center h-[70vh]">
      <Spinner />
    </div>;
  }

  // console.log(typeof data, data);
  const product = data?.getProduct;
  // console.log(product);
  //   console.log(typeof data);
  const handleAdd = () => {
    setquantity(quantity + 1);
  };
  const handleSub = () => {
    if(quantity>0){
      setquantity(quantity - 1);
    }else{
      setquantity(0)
    }
    
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
    // console.log(quantity, user, id);
    Addtocart({
      variables: {
        quantity: quantity,
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
            <div className="flex flex-wrap p-[20px]">
              <div
                key={product.id}
                className="sm:w-[100%] md:w-[40%] bg-white border-white shadow-sm shadow-gray-100"
              >
                <img
                  src={product.image}
                  alt={product.productName}
                  className="max-h-[500px] h-[100%]"
                />
              </div>
              <div className="ml-5 sm:w-[100%] md:w-[55%] pl-[10px]">
                <div className="flex w-[100%] justify-between">
                  <h1 className="text-3xl font-bold">{product.productName}</h1>
                 
                </div>
                <h2 className="text-2xl text-properties font-bold pt-[7px] m-[10px]">
                  Rs.{product.price}/- &nbsp;
                  <span className="text-properties1 text-lg line-through">
                    ₹{product.price + product.discountPrice}
                  </span>
                </h2>
                <h3 className="text-2xl font-bold mt-[20px]">Highlights</h3>
                <ul className="list-disc text-xl list-inside m-[10px]">
                  {product?.overview?.map((data: string) => {
                    return <li>{data}</li>;
                  })}
                </ul>
                <h3 className="text-2xl font-bold mt-[20px]">Description</h3>
                <table className="shadow-lg m-[10px] mb-10">
                  <tbody>
                    {product?.description?.map((prod) => {
                      return (
                        <tr>
                          <td className="p-1 pl-4 pr-10 border-b bg-gray-800 font-semibold ">
                            {prod[0]}
                          </td>
                          <td className="p-1 pl-4 pr-10 text-properties border-b bg-gray-800">
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
                      className="text-2xl font-bold border border-gray-400 w-[35px] rounded-full m-[5px]"
                      onClick={handleSub}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      className="border font-semibold text-center text-3xl border-gray-400 w-[50px]"
                      readOnly
                    />
                    <button
                      className="text-2xl font-bold border border-gray-400 w-[35px] rounded-full m-[5px]"
                      onClick={handleAdd}
                    >
                      +
                    </button>
                      
                  </div>
                  <button
                    onClick={() => handleClick1(product.id)}
                    className="ml-5 auth mr-5 cart"
                  >
                    Add to cart
                  </button>
                  <button className="font-bold border-2 p-2 border-black cart" onClick={() => handleClick(product.id)}>
                    Add to wishlist
                    <FontAwesomeIcon
                      icon={faHeart}
                      // color="#ed7133"
                      className="ml-2 text-2xl text-rose-500"
                    />{" "}
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
