"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Pagination } from "@/components/Pagination";
import { SearchBar } from "@/components/SearchBar";
import { SortDropdown } from "@/components/SortDropdown";
import { ProductList } from "@/domains/market/components/ProductList";
import { buildItemsHref } from "@/domains/market/utils/marketQuery";
import * as s from "./ProductListSection.css";

export function ItemsPageContainer({
  products,
  totalCount,
  page,
  pageSize,
  orderBy,
  keyword,
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const filters = { page, pageSize, orderBy, keyword };

  const applyFilters = (next) => {
    startTransition(() => {
      router.push(buildItemsHref({ ...filters, ...next, page: 1 }));
    });
  };

  return (
    <section className={s.section}>
      <div className={s.toolbar}>
        <h2 className={s.title}>판매 중인 상품</h2>

        <div className={s.controls}>
          <SearchBar
            initialValue={keyword}
            onSearch={(value) => applyFilters({ keyword: value })}
          />
          <Link href="/registration" className={s.registerBtn}>
            상품 등록하기
          </Link>
          <SortDropdown
            orderBy={orderBy}
            onChange={(value) => applyFilters({ orderBy: value })}
          />
        </div>
      </div>

      <ProductList products={products} isLoading={isPending} />

      <Pagination
        page={page}
        totalCount={totalCount}
        pageSize={pageSize}
        orderBy={orderBy}
        keyword={keyword}
        buildHref={buildItemsHref}
      />
    </section>
  );
}
