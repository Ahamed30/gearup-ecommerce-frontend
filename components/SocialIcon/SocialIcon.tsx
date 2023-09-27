import Image from "next/image";
import Link from "next/link";
import { Typography } from "../Typography";

interface SocialIconProps {
  socialIcons?: String[];
}

export const SocialIcon = ({ socialIcons }: SocialIconProps) => {
  if (!socialIcons) return;

  const iconImageContent = socialIcons?.map((iconName, index) => {
    return (
      <Link
        className="transition duration-300 ease-in-out "
        href={`www.${iconName}.com`}
        key={index}
        target="_blank"
      >
        <Image
          alt={`${iconName}`}
          height={24}
          src={`/${iconName}-icon.svg`}
          width={24}
        />
      </Link>
    );
  });

  return (
    <div className="gap-2">
      <Typography
        className="text-[20px] lg:text-[24px] font-semibold mb-[16px]"
        color="#FFA52F"
        variant="headline"
      >
        Follow us
      </Typography>
      <div className="inline-flex gap-5">{iconImageContent}</div>
    </div>
  );
};
