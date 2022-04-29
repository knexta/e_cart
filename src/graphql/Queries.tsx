import { gql } from "@apollo/client";

export const getProducts = gql`
  query Getproducts($name: String!) {
    getAllProducts(name: $name) {
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

export const getCart = gql`
  query Getcart($userId: Int!) {
    getCart(userId: $userId) {
      id
      userId
      productId
      productDetails {
        id
        productName
        price
        discountPrice
        category
        image
        description
        overview
        stocks
      }
      quantity
    }
  }
`;

export const getWhishlist = gql`
  query GetWishList($userId: Int!) {
    getWishList(userId: $userId) {
      id
      userId
      productId
      productDetails {
        id
        productName
        price
        discountPrice
        category
        image
        description
        overview
        stocks
      }
    }
  }
`;
