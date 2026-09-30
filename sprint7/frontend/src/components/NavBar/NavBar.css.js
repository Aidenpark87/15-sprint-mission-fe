import { style } from "@vanilla-extract/css";

export const navbar = style({
  borderBottom: "1px solid #f3f4f6",
  background: "#fff",
});

export const inner = style({
  maxWidth: "1200px",
  margin: "0 auto",
  height: "64px",
  padding: "0 16px",
  display: "flex",
  alignItems:"center",
  justifyContent: "space-between",
});

export const left = style({
  display: "flex",
  alignItems: "center",
  gap: "32px",
});

export const logo = style({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontFamily: "ROKAF Sans",
  fontWeight: 700,
  fontSize: "25.633px",
  color: "#3692ff",
});

export const menu = style({
  display: "flex",
  gap: "16px",
  fontWeight: 600,
  fontSize: "18px",
});

export const login = style({
  height: "42px",
  background: "#3692ff",
  color: "#fff",
  padding: "12px 23px",
  borderRadius: "8px",
  fontWeight: 600,
  fontSize: "16px",
});

export const menuItemActive = style({
  color: "#3692ff",
});