# 판다마켓 (스프린트 미션 7 + 8)

Next.js 16(App Router) · vanilla-extract · TanStack React Query · axios · react-hook-form

기준 코드(스프린트 7 완성본)에 미션 8 기능(로그인/회원가입, React Query 전면 전환, 상품 상세의 댓글·좋아요·수정·삭제, GNB 프로필, 베스트 상품)을 얹은 프로젝트입니다.

## 실행

```bash
pnpm install
cp .env.local.example .env.local   # 필요 시 수정
pnpm dev                           # http://localhost:3000
```

- API 주소: `https://panda-market-api.vercel.app` (명세: `/docs`)

## 폴더 구조

```
src/
  app/            라우트 (auth/signIn, auth/signUp, items, board, ...)
  apis/           API 레이어 (httpClient·authApi·productsApi·articlesApi·commentsApi)
  domains/        도메인별 containers/components/hooks
  components/     공용 컴포넌트 (NavBar, FormField, Skeleton, ...)
  hooks/          공용 훅
  constants/      상수
  styles/         글로벌 스타일
  utils/          유틸
public/
  images/         상품 샘플 이미지 + auth/GNB 아이콘
  assets/         아이콘·랜딩 이미지
```

## 확인이 필요한 부분

- 공식 API 응답 필드(`images[]`, `isFavorite`, `ownerNickname` 등)와 기존 컴포넌트 필드를 정규화하는 계층을 `src/apis`에 유지합니다.
- 상품 목록은 공식 API(`/products`)의 `page/pageSize/orderBy` 파라미터를 사용합니다.