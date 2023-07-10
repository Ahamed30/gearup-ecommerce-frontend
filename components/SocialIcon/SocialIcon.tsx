import Image from "next/image";
import { AssetType } from "@/types";
import { rubik } from "@/styles";
import Link from "next/link";

interface SocialIconProps {
  socialIcons?: Array<AssetType>;
}

export const SocialIcon = ({ socialIcons }: SocialIconProps) => {
  if (!socialIcons) return;
  const fontRubik = rubik?.className;

  const iconImageContent = socialIcons?.map(({ id, name, url, link }) => {
    return (
      <Link target="_blank" href={`${link}`} key={id}>
        <Image key={id} width={24} height={24} src={`${url}`} alt={`${name}`} />
      </Link>
    );
  });

  return (
    <div className="gap-2">
      <p
        className={`${fontRubik} text-[#FFA52F] text-[20px] lg:text-[24px] font-semibold mb-[16px]`}
      >
        Follow us
      </p>
      <div className="inline-flex gap-5 hover:color-[#99979b]">
        {iconImageContent}
      </div>
    </div>
  );
};
