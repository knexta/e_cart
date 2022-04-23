import { gql } from "@apollo/client";

export const getProducts = gql`
  query {
    getAllProducts {
      id
      productName
      price
      category
      discountPrice
      image
      stocks
    }
  }
`;
