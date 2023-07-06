import { Header } from "@/components/Header";
import "./globals.css";
import "@/styles";

export const metadata = {
  title: "GearUp",
  description: "An e-commerce site for sportswear",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-full w-[1440px] py-8 px-[16px] lg:px-[60px]">
        <Header />
        {children}
      </body>
    </html>
  );
}
