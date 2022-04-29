import { useQuery, useMutation } from "@apollo/client";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getWhishlist } from "../graphql/Queries";
import { whishlist } from "../types/ProductTypes";
import Spinner from "../utils/Spinner";
import { addToCart } from "../graphql/Mutation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { removeWishlist } from "../graphql/Mutation";

const WishList: React.FC = () => {
  const user = localStorage.getItem("userId");
  const { loading, error, data } = useQuery<whishlist>(getWhishlist, {
    variables: {
      userId: Number(user),
    },
  });
  const [Addtocart] = useMutation(addToCart, {
    onCompleted: (Addtocart) => {
      if (Addtocart) {
        toast("Product added to Cart");
      }
    },
  });
  const [Delwishlist] = useMutation(removeWishlist, {
    onCompleted: (Delwishlist) => {
      if (Delwishlist) {
        toast("Product removed from wishlist");
      }
    },
    refetchQueries: [getWhishlist],
  });
  const navigate = useNavigate();
  const Whishlist = data?.getWishList;
  console.log(Whishlist);
  // if (error) return <div>{error.message}</div>;

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

  const handleclick = (id: number) => {
    console.log(id);
    Delwishlist({ variables: { id: Number(id) } });
  };
  const handleClick1 = (id: number) => {
    Addtocart({
      variables: {
        userId: Number(user),
        productId: Number(id),
      },
    });
  };
  return data ? (
    <div className="p-[10px]">
      <h1 className="text-3xl font-semibold uppercase text-center text-orange-500">
        Whishlist
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1 justify-items-center mt-4 gap-4 p-[20px]">
        {data?.getWishList?.map((prod) => {
          return (
            <div
              className="card w-[280px] h-[450px] rounded-xl flex flex-col gap-2 justify-center items-center bg-white shadow-md shadow-gray-400"
              key={prod.id}
            >
              {prod?.productDetails.map((product) => {
                return (
                  <>
                    <div className="p-[10px] relative">
                      <button
                        className="text-right w-full"
                        onClick={() => handleClick1(product.id)}
                      >
                        <FontAwesomeIcon
                          icon={faCartShopping}
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
                      <p className="text-2xl text-black text-center">
                        {product.productName}
                      </p>
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
                  </>
                );
              })}
              <button
                className="text-2xl p-[5px] bg-orange-500 text-black border border-black rounded-md"
                onClick={() => handleclick(prod.id)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="flex h-[700px] items-center justify-center">
      <h1 className="text-4xl font-semibold">No items in the Whishlist</h1>
    </div>
  );
};

export default WishList;
