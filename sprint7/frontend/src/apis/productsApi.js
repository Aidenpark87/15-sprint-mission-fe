import { requestApi } from "./requestApi";

export async function fetchProductList(
  { page = 1, pageSize = 10, orderBy = "recent", keyword = "" } = {},
  requestOptions = {},
) {
  const offset = (page - 1) * pageSize;
  const payload = await requestApi("/products", {
    query: { offset, limit: pageSize, sort: orderBy, keyword },
    ...requestOptions,
  });
  return {
    list: payload?.list ?? [],
    totalCount: payload?.totalCount ?? payload?.list?.length ?? 0,
  };
}

export async function fetchProductDetail(productId, requestOptions = {}) {
  return requestApi(`/products/${productId}`, requestOptions);
}

export async function createProduct({ name, description, price, tags }) {
  return requestApi("/products", {
    method: "POST",
    body: { name, description, price, tags },
  });
}
