import { Header } from "@/components/Header";
import "./globals.css";
import "@/styles";
import { Footer } from "@/components/Footer";
import { getCMSData } from "@/utils/getCMSData";

export const metadata = {
  title: "GearUp",
  description: "An e-commerce site for sportswear",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerQuery = `{ 
    headers {
      id
      name
      navLinks {
        id
        name
        link
      }
    } 
  }`;
  const footerQuery = `{
    footers{
      id
    	subscribeForm {
        id
        headerText
        subText
      }
      leftColumnTitle
      leftColumnDescription
      linkColumns {
        id
        title
        links{
          id
          name
          link
        }
      }
      socialIcons {
        id
        name
        url
      }
    }
  }`;
  const headerData = await getCMSData(headerQuery);
  const footerData = await getCMSData(footerQuery);

  const [header, footer] = await Promise.all([headerData, footerData]);

  return (
    <html lang="en">
      <body className="mx-auto max-w-full w-[1440px] py-8 px-[16px] lg:px-[60px]">
        <Header data={header?.headers[0]} />
        {children}
        <Footer data={footer?.footers[0]} />
      </body>
    </html>
  );
}
