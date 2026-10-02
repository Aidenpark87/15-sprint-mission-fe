import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  fontFamily: "Pretendard",
  color: "#1f2937",
  background: "#fcfcfc",
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

globalStyle("*", {
  boxSizing: "border-box",
});
