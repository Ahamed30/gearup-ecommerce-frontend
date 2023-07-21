import Image from "next/image";
import Link from "next/link";
import { rubik } from "@/styles";

interface SocialIconProps {
  socialIcons?: String[];
}

export const SocialIcon = ({ socialIcons }: SocialIconProps) => {
  if (!socialIcons) return;
  const fontRubik = rubik?.className;

  const titleClassName = `${fontRubik} text-[#FFA52F] text-[20px] lg:text-[24px] font-semibold mb-[16px]`;

  const iconImageContent = socialIcons?.map((iconName, index) => {
    return (
      <Link
        target="_blank"
        href={`www.${iconName}.com`}
        key={index}
        className="transition duration-300 ease-in-out "
      >
        <Image
          width={24}
          height={24}
          src={`/${iconName}-icon.svg`}
          alt={`${iconName}`}
        />
      </Link>
    );
  });

  return (
    <div className="gap-2">
      <p className={titleClassName}>Follow us</p>
      <div className="inline-flex gap-5">{iconImageContent}</div>
    </div>
  );
};
