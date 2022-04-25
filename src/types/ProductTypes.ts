import { ApolloError } from "@apollo/client";

export interface Data {
  getAllProducts: Product[];
}

export interface Product {
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

export interface productQueryRes {
  loading: Boolean;
  error?: ApolloError | undefined;
  data: Data | undefined;
}

export interface oneProduct {
  id: number;
  productName: string;
  price: string;
  category: string;
  discountPrice: string;
  image: string;
  description: string | null;
  overview: string | null;
  stocks: string;
  similarProducts: {
    id: number;
    productName: string;
    price: string;
    discountPrice: string;
  };
}

export interface oneData {
  getProduct: oneProduct;
}

export type idparams = {
  id: string;
};
