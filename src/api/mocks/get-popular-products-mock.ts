import { http, HttpResponse } from "msw";

import { GetPopularProductsResponse } from "../get-popular-product";

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>("/metrics/popular-products", () => {
  return HttpResponse.json(
    [
      {product: 'Pizza01', amount: 5},
      {product: 'Pizza02', amount: 12},
      {product: 'Pizza03', amount: 7},
      {product: 'Pizza04', amount: 2},
      {product: 'Pizza05', amount: 1},
    ]
  );
});
