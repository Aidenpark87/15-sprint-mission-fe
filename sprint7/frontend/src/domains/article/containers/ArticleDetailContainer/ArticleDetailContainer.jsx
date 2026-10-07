"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArticleCommentsSection } from "@/domains/article/components/ArticleCommentsSection";
import { ArticleContentSection } from "@/domains/article/components/ArticleContentSection";
import { Kebab } from "@/domains/article/components/Kebab";
import { useCommentThread } from "@/domains/article/hooks/useCommentThread";
import { deleteArticle } from "@/apis";
import { board, btn } from "@/styles/shared.css";
import {
  backBtn,
  backWrap,
} from "@/domains/article/containers/ArticleDetailContainer/ArticleDetailContainer.css";

export function ArticleDetailContainer({ article, initialComments }) {
  const router = useRouter();
  const thread = useCommentThread(article.id, initialComments);

  const run = async (task) => {
    try {
      await task();
    } catch {
      alert("요청에 실패했어요. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <section className={board}>
      <ArticleContentSection article={article}>
        <Kebab
          onEdit={() => router.push(`/board/${article.id}/edit`)}
          onDelete={() =>
            run(async () => {
              await deleteArticle(article.id);
              router.push("/board");
            })
          }
        />
      </ArticleContentSection>

      <ArticleCommentsSection thread={thread} />

      <div className={backWrap}>
        <Link href="/board" className={`${btn} ${backBtn}`}>
          목록으로 돌아가기 ↩
        </Link>
      </div>
    </section>
  );
}
