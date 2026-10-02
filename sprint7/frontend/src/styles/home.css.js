import { style } from "@vanilla-extract/css";

export const hero = style({
  width: "100%",
  height: "540px",
  background: "#cfe5ff",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
});

export const heroInner = style({
  display: "flex",
  paddingRight: "0",
  justifyContent: "center",
  alignItems: "center",
  gap: "7px",
});

export const heroText = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "32px",
  paddingBottom: "40px",
  flexShrink: "0",
  selectors: {
    "& h1": {
      margin: "0",
      color: "#374151",
      fontFamily: "Pretendard",
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "140%",
    },
  },
});

export const heroCta = style({
  display: "flex",
  height: "56px",
  padding: "16px 124px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  background: "#3692ff",
  color: "#fff",
  borderRadius: "999px",
  fontWeight: "700",
  fontSize: "18px",

  ":hover": {
    background: "#1967d9",
  },
});

export const heroImage = style({
  flexShrink: "0",
  alignSelf: "flex-end",
});

export const features = style({
  background: "#ffffff",
});

export const featuresInner = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "120px 24px",
  display: "flex",
  flexDirection: "column",
  gap: "96px",
});

export const featureRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "64px",
});

export const featureRowReverse = style({
  flexDirection: "row-reverse",
});

export const featureImage = style({
  width: "100%",
  maxWidth: "460px",
  borderRadius: "12px",
  flexShrink: "0",
});

export const featureText = style({
  maxWidth: "420px",

  selectors: {
    "& p:not(:first-child)": {
      fontSize: "16px",
      lineHeight: "1.6",
      color: "#4b5563",
    },
    "& h2": {
      fontSize: "28px",
      fontWeight: "700",
      lineHeight: "1.4",
      marginBottom: "16px",
    },
  },
});

export const featureEyebrow = style({
  fontSize: "14px",
  fontWeight: "700",
  color: "#3692ff",
  marginBottom: "12px",
});
