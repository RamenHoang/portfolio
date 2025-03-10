import { Outfit } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Thiết Kế Website Chuẩn SEO - Tối Ưu Hiệu Quả & Tăng Thứ Hạng",
  description:
    "Dịch vụ thiết kế website chuẩn SEO, tốc độ cao, tối ưu Google giúp tăng traffic và chuyển đổi hiệu quả.",
  openGraph: {
    title: "Thiết Kế Website Chuẩn SEO - Tối Ưu Hiệu Quả & Tăng Thứ Hạng",
    description:
      "Dịch vụ thiết kế website chuẩn SEO, tốc độ cao, tối ưu Google giúp tăng traffic và chuyển đổi hiệu quả.",
    url: "https://hoangvuongdigital.com",
    type: "website",
    images: [
      {
        url: "/thumbnail.jpg", // Đúng định dạng Next.js
        width: 1200,
        height: 630,
        alt: "Thiết Kế Website Chuẩn SEO",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
