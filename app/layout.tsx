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
      <body className="my-8 mx-[16px] lg:mx-[60px]">
        <Header />
        {children}
      </body>
    </html>
  );
}
