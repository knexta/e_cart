import React from "react";
import { useParams } from "react-router-dom";
import { getProductsbyId } from "../graphql/Queries";
import { oneData } from "../types/ProductTypes";
import { useQuery } from "@apollo/client";
import Spinner from "../utils/Spinner";
import { idparams } from "../types/ProductTypes";

const Product = () => {
  const { id } = useParams<idparams>();
  const Id = Number(id);
  const { loading, error, data } = useQuery<oneData>(getProductsbyId, {
    variables: { id: Id },
  });
  if (loading) return <Spinner />;
  if (error) return <h1>`Error! ${error.message}`</h1>;
  console.log(typeof data, data);
  const product = data?.getProduct;
  console.log(product);
  console.log(typeof data);
  return (
    <div>
      <div>
        {/* <img src={product.image} alt={product.productName} /> */}
        <img src={data?.getProduct.image} alt={data?.getProduct.productName} />
      </div>
      <div></div>
    </div>
  );
};

export default Product;
