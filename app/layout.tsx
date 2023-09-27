import "./globals.css";
import "@/styles";
import { Provider } from "@/context";
import { footerQuery, headerQuery } from "@/query";
import { getCMSData } from "@/utils/getCMSData";
import { DefaultLayout } from "./default-layout";

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
          <DefaultLayout
            footerData={footer?.footers[0]}
            headerData={header?.headers[0]}
          >
            {children}
          </DefaultLayout>
        </Provider>
      </body>
    </html>
  );
}
