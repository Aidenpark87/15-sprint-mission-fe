import { style } from "@vanilla-extract/css";
import { media, vars } from "@/styles/tokens.css";

export const header = style({
  borderBottom: "1px solid #f3f4f6",
  background: "#fff",
});

export const inner = style({
  maxWidth: vars.size.maxContentWidth,
  margin: "0 auto",
  height: "64px",
  padding: "0 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media": {
    [media.mobileDown]: {
      padding: "0 12px",
    },
  },
});

export const left = style({
  display: "flex",
  alignItems: "center",
  gap: "32px",
});

export const logoLink = style({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontFamily: vars.font.logo,
  fontWeight: 700,
  fontSize: "25.633px",
  color: vars.color.blue,
  whiteSpace: "nowrap",

  "@media": {
    [media.mobileDown]: {
      fontSize: "18px",
    },
  },
});

export const logoIcon = style({
  width: "40px",
  height: "40px",
  flexShrink: "0",

  "@media": {
    [media.mobileDown]: {
      width: "32px",
      height: "32px",
    },
  },
});

export const nav = style({
  display: "flex",
  gap: "16px",
  fontWeight: 600,
  fontSize: "18px",
});

/* 원본은 활성 메뉴에만 색상 클래스를 붙이고, 비활성은 `a { color: inherit }` 을 따른다. */
export const navLink = style({});

export const navLinkActive = style({
  color: vars.color.blue,
});

export const login = style({
  height: "42px",
  background: vars.color.blue,
  color: "#fff",
  padding: "12px 23px",
  borderRadius: "8px",
  fontWeight: 600,
  fontSize: "16px",
  transition: "background 0.2s ease, transform 0.1s ease",
  ":hover": {
    background: vars.color.blueHover,
  },

  ":active": {
    background: vars.color.blueHover,
    transform: "scale(0.97)",
  },

  "@media": {
    [media.mobileDown]: {
      height: "36px",
      padding: "8px 8px",
      fontSize: "14px",
      whiteSpace: "nowrap",
    },
  },
});
