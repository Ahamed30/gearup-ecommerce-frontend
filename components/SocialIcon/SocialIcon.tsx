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
      <Typography
        variant="headline"
        color="#FFA52F"
        className="text-[20px] lg:text-[24px] font-semibold mb-[16px]"
      >
        Follow us
      </Typography>
      <div className="inline-flex gap-5">{iconImageContent}</div>
    </div>
  );
};
