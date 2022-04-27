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
  mutation CreateUser($data: CreateUserInput!) {
    createUser(data: $data) {
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
