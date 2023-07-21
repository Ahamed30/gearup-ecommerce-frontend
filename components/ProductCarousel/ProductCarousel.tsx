"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Pagination } from "swiper/modules";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { AssetType, Breakpoint } from "@/types";
import { useIsBreakpoint } from "@/hooks/useIsBreakpoint";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";

interface ProductCarouselProps {
  productImages: AssetType[];
}

export const ProductCarousel = ({ productImages }: ProductCarouselProps) => {
  const [activeImage, setActiveImage] = useState<SwiperType>();

  const isTablet = useIsBreakpoint(Breakpoint.Medium);
  const isMobile = useIsBreakpoint(Breakpoint.Small);

  return (
    <div className="w-full md:w-3/5 mb-[24px]">
      <Swiper
        loop
        spaceBetween={10}
        pagination={true}
        modules={[Thumbs, Pagination]}
        grabCursor
        thumbs={{ swiper: activeImage }}
        className="mb-[16px]"
      >
        {productImages.map((image) => {
          return (
            <SwiperSlide key={image.id}>
              <div className="relative w-full h-[300px] lg:h-[450px]">
                <Image
                  src={`${image.url}`}
                  alt="Image"
                  fill
                  className="rounded-[16px] object-cover"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setActiveImage}
        spaceBetween={10}
        slidesPerView={isTablet || isMobile ? 3.5 : 4.5}
        modules={[Thumbs]}
        className="product-images-slider-thumbs"
      >
        {productImages.map((image) => {
          return (
            <SwiperSlide key={image.id} className="cursor-pointer">
              <div className="relative w-30 h-20">
                <Image
                  src={`${image.url}`}
                  alt="Image"
                  fill
                  className="absolute top-0 left-0 w-full rounded-[8px] object-cover"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
