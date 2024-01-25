import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Văn Việt Software - Công ty TNHH phát triển phần mềm Văn Việt",
  description:
    "Công ty TNHH phát triển phần mềm Văn Việt - VanVietSoft, là đơn vị cung cấp phần mềm và giải pháp công nghệ thông tin cho các cơ quan đơn vị hành chính nhà nước, các đơn vị sự nghiệp giáo dục cũng như các doanh nghiệp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-min bg-[#FFFFFF]">
        <div className="mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
