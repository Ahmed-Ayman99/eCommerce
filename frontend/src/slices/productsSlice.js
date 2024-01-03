import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      // query: () => ({
      //   url: "/api/products",
      // }),
      query: () => "/api/products",
      // keepUnusedDataFor: 5,
      providesTags: ["Products"],
      // invalidatesTags: ["Products"],
    }),
    getProduct: builder.query({
      // query: () => ({
      //   url: "/api/products",
      // }),
      query: (id) => `/api/products/${id}`,
      // keepUnusedDataFor: 5,
      providesTags: ["Product"],
      // invalidatesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApiSlice;
