import { useReactiveVar } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { productData } from "../cache";
import { Data, Product, productQueryRes } from "../types/ProductTypes";
import Spinner from "../utils/Spinner";

// type setproducts{

// }
const Home: React.FC = () => {
  // const { loading, error, data } = useQuery<Data>(getProducts);
  const { loading, error, data } = useReactiveVar<productQueryRes>(productData);
  const navigate = useNavigate();
  const [products, setproducts] = useState<Product[]>();
  function getProducts() {
    return setproducts(data?.getAllProducts);
  }
  useEffect(getProducts, [data]);
  if (loading) return <Spinner />;
  if (error) return <h1>`Error! ${error.message}`</h1>;
  console.log(products);
  const handleclick = () => {
    getProducts();
    const desktop = products?.filter(
      (product) => product.category === "Desktops"
    );
    setproducts(desktop);
  };
  const handleclick1 = () => {
    getProducts();
    const Laptop = products?.filter(
      (product) => product.category === "Laptops"
    );
    setproducts(Laptop);
  };
  const handleclick2 = () => {
    getProducts();
    const monitor = products?.filter(
      (product) => product.category === "monitors"
    );
    setproducts(monitor);
  };
  const handleclick3 = () => {
    getProducts();
    const tv = products?.filter((product) => product.category === "Tv");
    setproducts(tv);
  };
  const handleclick4 = () => {
    getProducts();
    const tab = products?.filter((product) => product.category === "Tab");
    setproducts(tab);
  };
  // const handleclick5 = () => {
  //   getProducts();
  //   const desktop = products?.filter(
  //     (product) => product.category === "Laptops"
  //   );
  //   console.log(desktop);
  // };
  return (
    <div>
      <h1 className="text-2xl font bold ml-[20px]">Categories</h1>
      <div className="flex flex-row flex wrap gap-3 ml-[15px]">
        <button
          className="text-xl active:text-orange-500"
          onClick={() => getProducts()}
        >
          All
        </button>
        <button
          className="text-xl active:text-orange-500"
          onClick={handleclick}
        >
          Desktops
        </button>
        <button
          className="text-xl active:text-orange-500"
          onClick={handleclick1}
        >
          Laptops
        </button>
        <button
          className="text-xl active:text-orange-500"
          onClick={handleclick2}
        >
          monitors
        </button>
        <button
          className="text-xl active:text-orange-500"
          onClick={handleclick3}
        >
          Tv
        </button>
        <button
          className="text-xl active:text-orange-500"
          onClick={handleclick4}
        >
          Tab
        </button>
        <button
          className="text-xl active:text-orange-500"
          // onClick={handleclick5}
        >
          Office Appliance
        </button>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1 justify-items-center mt-4 gap-4 p-[20px]">
        {products.map((product: Product) => {
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
                <p className="text-2xl text-black text-center">
                  {product.productName}
                </p>
                <p className="text-2xl text-black text-center p-[10px]">
                  <span className=" line-through">
                    ${product.price + product.discountPrice}
                  </span>
                  &nbsp; ${product.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
