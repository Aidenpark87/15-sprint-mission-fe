import { style } from "@vanilla-extract/css";

export const footer = style({
  background: "#111827",
  color: "#E5E7EB",
});

export const inner = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "24px 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "12px",
  fontSize: "14px",
});

export const links = style({
  display:"flex",
  gap: "16px",
});

export const sns = style({
  display: "flex",
  gap: "12px",
});

export const snsIcon = style({
  width: "20px",
  height: "20px",
});

