import { notFound } from "next/navigation";
import { ProductDetailContainer } from "@/domains/market/containers/ProductDetailContainer";
import { fetchProductDetail } from "@/apis";
import { parseArticleId } from "@/utils";

export const dynamic = "force-dynamic";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const productId = parseArticleId(id);

  if (productId === null) {
    notFound();
  }

  const product = await fetchProductDetail(productId).catch((error) => {
    if (error?.status === 404) return null;
    throw error;
  });

  if (!product) {
    notFound();
  }

  return <ProductDetailContainer product={product} />;
}
