import { useQuery } from "@apollo/client";
import React from "react";
import { getProducts } from "../graphql/Queries";

interface Data {
  getAllProducts: GetAllProducts;
}
interface GetAllProducts {
  id: number;
  productName: string;
  price: string;
  category: string;
  discountPrice: string;
  description: string;
  overview: string;
  stocks: string;
}

const Home: React.FC = () => {
  //   const { error, loading, data } = useQuery<Data>(getProducts);
  //   if (loading) return "Loading...";
  //   if (error) return `Error! ${error.message}`;
  return (
    <div>
      {/* {data?.getAllProducts.map((product) => {
        return <h1>{product.productName}</h1>;
      })} */}
    </div>
  );
};

export default Home;
