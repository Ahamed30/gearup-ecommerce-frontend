import { CMSComponent } from "@/components/CMSComponent";
import { homePageQuery } from "@/query";
import { getCMSData } from "@/utils/getCMSData";

export default async function Home() {
  const homePageData = await getCMSData(homePageQuery);

  return <CMSComponent data={homePageData.homePages[0]} />;
}
