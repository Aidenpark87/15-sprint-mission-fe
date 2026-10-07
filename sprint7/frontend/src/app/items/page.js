import { ItemsPageContainer } from "@/domains/market/containers/ItemsPageContainer";
import { parseItemsSearchParams } from "@/domains/market/utils/marketQuery";
import { fetchProductList } from "@/apis";

export const metadata = {
  title: "중고마켓 | 판다마켓",
  description: "판다마켓에서 중고 상품을 거래해 보세요.",
};

export default async function ItemsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const { page, pageSize, keyword, orderBy } =
    parseItemsSearchParams(resolvedSearchParams);

  const { list, totalCount } = await fetchProductList({
    page,
    pageSize,
    keyword,
    orderBy,
  });

  return (
    <ItemsPageContainer
      products={list}
      totalCount={totalCount}
      page={page}
      pageSize={pageSize}
      orderBy={orderBy}
      keyword={keyword}
    />
  );
}
