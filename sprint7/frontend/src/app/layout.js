import "@/styles/globals.css.js";
import GlobalLayout from "@/components/layouts/GlobalLayout";

export const metadata = {
  title: "판다 마켓",
  description: "중고 물품을 사고팔 수 있는 판다마켓입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
