import React from "react";
import { useParams } from "react-router-dom";
import { getProductsbyId } from "../graphql/Queries";
import { oneData, Product } from "../types/ProductTypes";
import { useQuery } from "@apollo/client";
import Spinner from "../utils/Spinner";
import { idparams } from "../types/ProductTypes";

const Products = () => {
  const { id } = useParams<idparams>();
  const Id = Number(id);
  const { loading, error, data } = useQuery<oneData>(getProductsbyId, {
    variables: { id: Id },
  });
  if (loading) return <Spinner />;
  if (error) return <h1>`Error! ${error.message}`</h1>;
  console.log(typeof data, data);
  //   const product = data?.getProduct;
  //   console.log(product);
  //   console.log(typeof data);
  return (
    <div>
      {data?.getProduct.map((product: Product) => {
        return (
          <>
            <div key={product.id}>
              {/* <img src={product.image} alt={product.productName} /> */}
              <img src={product.image} alt={product.productName} />
            </div>
            <div></div>
          </>
        );
      })}
    </div>
  );
};

export default Products;
