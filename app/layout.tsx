import { Header } from "@/components/Header";
import "./globals.css";
import "@/styles";
import { Footer } from "@/components/Footer";
import { getCMSData } from "@/utils/getCMSData";
import { footerQuery, headerQuery } from "@/query";
import { Provider } from "@/context";

export const metadata = {
  title: "GearUp",
  description: "An e-commerce site for sportswear",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerData = await getCMSData(headerQuery);
  const footerData = await getCMSData(footerQuery);

  const [header, footer] = await Promise.all([headerData, footerData]);

  return (
    <html lang="en">
      <body className="mx-auto max-w-full w-[1440px] py-8 px-[16px] lg:px-[60px]">
        <Provider>
          <Header data={header?.headers[0]} />
          {children}
          <Footer data={footer?.footers[0]} />
        </Provider>
      </body>
    </html>
  );
}
