import Image from "next/image";
import Link from "next/link";
import { PRODUCT_IMAGE_SIZE } from "@/constants/uiDimensions";
import { getProductImage } from "@/domains/market/utils/productImage";
import * as s from "@/domains/market/containers/ItemsPageContainer/ProductListSection.css";

export function ProductCard({ product }) {
  return (
    <Link href={`/items/${product.id}`} className={s.card}>
      <div className={s.imageWrap}>
        <Image
          src={getProductImage(product.id)}
          alt={product.name}
          width={PRODUCT_IMAGE_SIZE.width}
          height={PRODUCT_IMAGE_SIZE.height}
          className={s.image}
        />
      </div>
      <p className={s.name}>{product.name}</p>
      <p className={s.price}>{product.price?.toLocaleString()}원</p>
    </Link>
  );
}
