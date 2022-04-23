import { useQuery } from "@apollo/client";
import React from "react";
import { getProducts } from "../graphql/Queries";
import Spinner from "../components/Spinner";

interface Data {
  getAllProducts: Product[];
}
interface Product {
  id: number;
  productName: string;
  price: string;
  category: string;
  discountPrice: string;
  image: string;
  description: string | null;
  overview: string | null;
  stocks: string;
}

const Home: React.FC = () => {
  const { loading, error, data } = useQuery<Data>(getProducts);
  if (loading) return <Spinner />;
  if (error) return <h1>`Error! ${error.message}`</h1>;
  console.log(data);
  //   const products = data?.getAllProducts;
  //   console.log(products);
  return (
    <div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1 justify-items-center mt-4 gap-4 p-[20px]">
        {data?.getAllProducts.map((product: Product) => {
          return (
            <div
              className="card w-[300px] h-[300px] border-2 flex flex-col gap-2 items-center "
              key={product.id}
            >
              <div className="p-[10px] relative">
                <img src={product.image} alt={product.productName} />
                {/* <button></button> */}
              </div>
              <div>
                <p className="text-2xl text-center">{product.productName}</p>
                <p className="text-2xl text-center p-[10px]">
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
