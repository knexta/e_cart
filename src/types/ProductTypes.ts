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
  description: string[] | null;
  overview: string[] | null;
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
  description: string[] | null;
  overview: string[] | null;
  stocks: string;
  similarProducts: [
    {
      id: number;
      productName: string;
      price: string;
      category: string;
      discountPrice: string;
      image: string;
      description: string[] | null;
      overview: string[] | null;
      stocks: string;
    }
  ];
}

export interface oneData {
  getProduct: oneProduct[];
}

export type idparams = {
  id: string;
};

export type login = {
  email: string;
  id: string;
  mobile: number;
  name: string;
};

export interface whishlist {
  getWishList: whisitems[];
}

export interface whisitems {
  id: number;
  userId: number;
  productId: number;
  productDetails: oneProduct[];
}

export interface search {
  search: string | undefined;
  setSearch: React.Dispatch<React.SetStateAction<string | undefined>>;
}
