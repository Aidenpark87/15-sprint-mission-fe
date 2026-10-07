"use client";

import Link from "next/link";
import { BoardArticleList } from "@/domains/board/components/BoardArticleList";
import { board, btn, head, heading } from "@/styles/shared.css";

export function BoardPageContainer({ articles, keyword }) {
  return (
    <section className={board}>
      <div className={head}>
        <h2 className={heading}>게시글</h2>
        <Link href="/addArticle" className={btn}>
          글쓰기
        </Link>
      </div>

      <BoardArticleList
        articles={articles}
        emptyMessage={keyword ? "검색 결과가 없어요." : "아직 게시글이 없어요."}
      />
    </section>
  );
}
