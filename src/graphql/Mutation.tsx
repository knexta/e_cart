import { gql } from "@apollo/client";

export const login = gql`
  mutation Login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      id
      name
      email
      mobile
    }
  }
`;

export const signup = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $password: String!
    $mobile: Float!
  ) {
    createUser(
      data: { name: $name, email: $email, mobile: $mobile, password: $password }
    ) {
      id
      name
      email
      mobile
    }
  }
`;

export const forgotpass = gql`
  mutation ($password: String!, $forgotPasswordId: Int!) {
    forgotPassword(password: $password, id: $forgotPasswordId)
  }
`;

export const addToCart = gql`
  mutation CreateCart($userId: Int!, $productId: ID!) {
    createCart(data: { userId: $userId, productId: $productId })
  }
`;

export const addToWishlist = gql`
  mutation CreateWishlist($userId: Int!, $productId: ID!) {
    createWishlist(data: { userId: $userId, productId: $productId })
  }
`;

export const removeWishlist = gql`
  mutation Deletewishlist($id: Int!) {
    deleteWishlist(id: $id)
  }
`;
