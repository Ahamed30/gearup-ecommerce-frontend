import React from "react";
import { SocialIcon } from "../SocialIcon";

export const FooterContent = () => {
  const rightFooterContent = [
    [
      "Categories",
      "Runners",
      "Sneakers",
      "Basketball",
      "Outdoor",
      "Golf",
      "Hiking",
    ],
  ];

  const gridContent = (arr: String[]) => {
    return arr.map((value, index) => {
      return index > 0 ? (
        <p
          key={index}
          className="text-stone-200 text-[16px] lg:text-[20px] font-semibold"
        >
          {value}
        </p>
      ) : (
        <p
          key={index}
          className="text-[#FFA52F] text-[20px] lg:text-[24px] font-semibold mb-[8px]"
        >
          {value}
        </p>
      );
    });
  };

  const renderedContent = rightFooterContent.map((arr, index) => {
    return (
      <div
        key={index}
        className="flex-col justify-start items-start gap-2 inline-flex"
      >
        {gridContent(arr)}
      </div>
    );
  });
  return (
    <div className="p-[16px] pb-[40px] lg:p-[40px]">
      <div className="lg:flex lg:flex-row lg:justify-between gap-16">
        {/* Left div */}
        <div className="w-full">
          <h1 className="text-[24px] text-[32px] font-semibold text-[#FFA52F] leading-normal">
            About us
          </h1>
          <p className="text-[16px] lg:text-[20px] text-[#E7E7E3] leading-normal mb-[40px] lg:mb-0">
            We are the biggest hyperstore in the universe. We got you all cover
            with our exclusive collections and latest drops.
          </p>
        </div>

        {/* Right div */}
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-15">
            {renderedContent}
            {renderedContent}
            <SocialIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
