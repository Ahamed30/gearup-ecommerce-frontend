import Image from "next/image";

export const SocialIcon = () => {
  return (
    <div className="gap-2">
      <p className="text-[#FFA52F] text-[20px] lg:text-[24px] font-semibold mb-[16px]">
        Follow us
      </p>
      <div className="inline-flex gap-5">
        <Image
          width={24}
          height={24}
          src={"facebook-icon.svg"}
          alt="Facebook Icon"
        />
        <Image
          width={24}
          height={24}
          src={"instagram-icon.svg"}
          alt="Facebook Icon"
        />
        <Image
          width={24}
          height={24}
          src={"twitter-icon.svg"}
          alt="Facebook Icon"
        />
        <Image
          width={24}
          height={24}
          src={"tiktok-icon.svg"}
          alt="Facebook Icon"
        />
      </div>
    </div>
  );
};
