"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Pagination } from "swiper/modules";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { Breakpoint } from "@/types/breakpoint";
import { useIsBreakpoint } from "@/hooks/useIsBreakpoint";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";

export const ProductCarousel = () => {
  const images = [
    "/shoe1.jpg",
    "/shoe2.jpg",
    "/shoe1.jpg",
    "/shoe2.jpg",
    "/shoe1.jpg",
    "/shoe2.jpg",
  ];
  const [activeImage, setActiveImage] = useState<SwiperType>();

  const isTablet = useIsBreakpoint(Breakpoint.Medium);
  const isMobile = useIsBreakpoint(Breakpoint.Small);

  return (
    <div className="w-full md:w-1/2 mb-[16px]">
      <Swiper
        loop
        spaceBetween={10}
        pagination={true}
        modules={[Thumbs, Pagination]}
        grabCursor
        thumbs={{ swiper: activeImage }}
        className="mb-[16px]"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[400px]">
                <Image
                  src={image}
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
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="relative w-30 h-20">
                <Image
                  src={image}
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
