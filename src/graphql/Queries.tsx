import { gql } from "@apollo/client";

// interface Products {
//   id: number;
//   productName: string;
//   price: string;
//   category: string;
//   discountPrice: string;
//   description: string;
//   overview: string;
//   stocks: string;
// }

export const getProducts = gql`
  query {
    getAllProducts {
      id
      productName
      price
      category
      discountPrice
      description
      overview
      stocks
    }
  }
`;
