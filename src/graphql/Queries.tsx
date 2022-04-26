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

export const getProductsbyId = gql`
  query GetProduct($id: Int!) {
    getProduct(id: $id) {
      id
      productName
      price
      category
      discountPrice
      description
      image
      overview
      stocks
      similarProducts {
        id
        productName
        price
        discountPrice
        description
        image
        overview
        stocks
        category
      }
    }
  }
`;
