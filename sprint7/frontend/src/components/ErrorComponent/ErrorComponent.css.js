import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/tokens.css";

export const wrapper = style({
  padding: "48px 16px",
  textAlign: "center",
});

export const title = style({
  fontSize: "20px",
  fontWeight: "700",
  color: vars.color.gray900,
  marginBottom: "8px",
});

export const description = style({
  fontSize: "15px",
  color: vars.color.gray600,
  marginBottom: "20px",
});

export const retryButton = style({
  padding: "12px 20px",
  fontSize: "16px",
  fontWeight: "600",
  color: vars.color.white,
  background: vars.color.blue,
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",

  ":hover": {
    background: vars.color.blueHover,
  },
});
