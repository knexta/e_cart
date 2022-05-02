import { useReactiveVar } from "@apollo/client";
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { productData } from "../cache";
import { Product, productQueryRes } from "../types/ProductTypes";
import Spinner from "../utils/Spinner";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home: React.FC = () => {
  const user = localStorage.getItem("userId");
  const { loading, error, data } = useReactiveVar<productQueryRes>(productData);
  // console.log(!user, error);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast(error.message);
      navigate("/");
    }
    if (!user) {
      navigate("/");
    }
  }, [user, error, navigate]);

  // const { loading, error, data } = useQuery<Data>(getProducts);
  // const navigate = useNavigate();
  const [products, setproducts] = useState<Product[]>();
  const [Active, setActive] = useState(0);

  function getProducts() {
    setActive(0);
    return setproducts(data?.getAllProducts);
  }
  useEffect(getProducts, [data]);
  const allProduct = data?.getAllProducts;
  if (loading) {
    <div className="flex items-center justify-center h-[50vh]">
      <Spinner />
    </div>;
  }
  if (error) {
    toast(error.message);
  }
  // console.log(products);
  const handleclick = () => {
    setActive(1);
    const desktop = allProduct?.filter(
      (product) => product.category === "Desktops"
    );
    setproducts(desktop);
  };
  const handleclick1 = () => {
    setActive(2);
    const Laptop = allProduct?.filter(
      (product) => product.category === "Laptops"
    );
    setproducts(Laptop);
  };
  const handleclick2 = () => {
    setActive(3);
    const monitor = allProduct?.filter(
      (product) => product.category === "monitors"
    );
    setproducts(monitor);
  };
  const handleclick3 = () => {
    setActive(4);
    const tv = allProduct?.filter((product) => product.category === "Tv");
    setproducts(tv);
  };
  const handleclick4 = () => {
    setActive(5);
    const tab = allProduct?.filter((product) => product.category === "Tab");
    setproducts(tab);
  };

  return (
    <div>
      <h1 className="text-4xl mt-10 font-bold ml-[20px]">Categories</h1>
      <div className="flex flex-row flex wrap gap-3 ml-[20px] mt-8">
        <button
          className="text-2xl active:text-blue-500 border-b-4"
          style={{ borderBottomColor: Active === 0 ? "#2479e1" : "white",  color: Active===0? "#2479e1": "black"}}
          // active={active === "All"}
          onClick={() => getProducts()}
        >
          All
        </button>
        <button
          className="text-2xl active:text-blue-500 border-b-4 "
          style={{ borderBottomColor: Active === 1 ? "#2479e1" : "white", color: Active===1? "#2479e1": "black" }}
          onClick={handleclick}
        >
          Desktops
        </button>
        <button
          className="text-2xl active:text-blue-500 border-b-4"
          style={{ borderBottomColor: Active === 2 ? "#2479e1" : "white", color: Active===2? "#2479e1": "black" }}
          onClick={handleclick1}
        >
          Laptops
        </button>
        <button
          className="text-2xl active:text-blue-500 border-b-4"
          style={{ borderBottomColor: Active === 3 ? "#2479e1" : "white", color: Active===3? "#2479e1": "black" }}
          onClick={handleclick2}
        >
          monitors
        </button>
        <button
          className="text-2xl active:text-blue-500 border-b-4"
          style={{ borderBottomColor: Active === 4 ? "#2479e1" : "white", color: Active===4? "#2479e1": "black" }}
          onClick={handleclick3}
        >
          Tv
        </button>
        <button
          className="text-2xl active:text-blue-500 border-b-4"
          style={{ borderBottomColor: Active === 5 ? "#2479e1" : "white", color: Active===5? "#2479e1": "black" }}
          onClick={handleclick4}
        >
          Tab
        </button>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1 justify-items-center mt-4 gap-4 p-[20px]">
        {products?.map((product: Product) => {
          return <Card product={product} />;
        })}
      </div>
    </div>
  );
};

export default Home;
