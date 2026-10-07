import Image from "next/image";
import { PRODUCT_IMAGE_SIZE } from "@/constants/uiDimensions";
import { getProductImage } from "@/domains/market/utils/productImage";
import { formatDate } from "@/utils";
import * as s from "@/domains/market/containers/ItemsPageContainer/ProductListSection.css";

export function ProductDetailContainer({ product }) {
  return (
    <div className={s.detailPage}>
      <Image
        src={getProductImage(product.id)}
        alt={product.name}
        width={PRODUCT_IMAGE_SIZE.width}
        height={PRODUCT_IMAGE_SIZE.height}
        className={s.detailImage}
      />
      <h1 className={s.detailTitle}>{product.name}</h1>
      <p className={s.price}>{product.price?.toLocaleString()}원</p>
      <p className={s.detailId}>{formatDate(product.createdAt)} 등록</p>
    </div>
  );
}
