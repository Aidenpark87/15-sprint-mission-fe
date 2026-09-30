import { style } from "@vanilla-extract/css"

export const container = style ({
  display: "flex",
  flexDirection: "column",
  minHeight:"100vh",

});

export const header = style({
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent:"space-between",
  backgroundColor: "white",
  color: "#3692ff",
  borderBottom: "1px solid #e9ecef",
  padding: "0 20px",
  fontWeight: "bold",
  fontSize: "18px",

});

export const headerLink = style({
  textDecoration: "none",
  color: "#3692ff",
  ":hover": {
    color: "#2b7de0",
  },
});

export const main = style({
  flex: 1,
});