"use client";

import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Thumbs, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useIsBreakpoint } from "@/hooks/useIsBreakpoint";
import { AssetType, Breakpoint } from "@/types";
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
        className="mb-[16px]"
        grabCursor
        loop
        modules={[Thumbs, Pagination]}
        pagination={true}
        spaceBetween={10}
        thumbs={{ swiper: activeImage }}
      >
        {productImages.map((image) => {
          return (
            <SwiperSlide key={image.id}>
              <div className="relative w-full h-[300px] lg:h-[450px]">
                <Image
                  alt="Image"
                  className="rounded-[16px] object-cover"
                  fill
                  src={`${image.url}`}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        className="product-images-slider-thumbs"
        modules={[Thumbs]}
        onSwiper={setActiveImage}
        slidesPerView={isTablet || isMobile ? 3.5 : 4.5}
        spaceBetween={10}
      >
        {productImages.map((image) => {
          return (
            <SwiperSlide className="cursor-pointer" key={image.id}>
              <div className="relative w-30 h-20">
                <Image
                  alt="Image"
                  className="absolute top-0 left-0 w-full rounded-[8px] object-cover"
                  fill
                  src={`${image.url}`}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
