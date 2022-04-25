import { InMemoryCache, makeVar } from "@apollo/client";
import { productQueryRes } from "./types/ProductTypes";

export const productData = makeVar<productQueryRes>({
  data: undefined,
  loading: true,
});

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        productItems: {
          read() {
            return productData();
          },
        },
      },
    },
  },
});
