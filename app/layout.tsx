import "./globals.css";
import "@/styles";
import { getCMSData } from "@/utils/getCMSData";
import { footerQuery, headerQuery } from "@/query";
import { Provider } from "@/context";
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
            headerData={header?.headers[0]}
            footerData={footer?.footers[0]}
          >
            {children}
          </DefaultLayout>
        </Provider>
      </body>
    </html>
  );
}
