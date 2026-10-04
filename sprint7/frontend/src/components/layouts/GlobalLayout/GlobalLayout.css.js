import { style } from "@vanilla-extract/css";

export const container = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

/* 원본 CSS 는 `.landing` 내부 이미지가 746px 로 고정이라,
   부모가 좁아지면 min-width:auto 때문에 main 이 늘어나 가로 스크롤이 생긴다.
   minWidth:0 으로 그 압력을 끊어 자식 래퍼가 넘침을 흡수하게 한다. */
export const main = style({
  flex: 1,
  width: "100%",
  minWidth: 0,
});