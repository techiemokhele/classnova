"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import ShopBannerData from "../../assets/app/ShopBannerData.json";

const images = ShopBannerData;

const ShopImageSliderComponent = ({ onClick }: { onClick?: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute inset-0 flex items-center justify-center">
        <ul className="flex justify-center -mt-16 m-0">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={`w-2 h-2 rounded-full mx-1 ${
          i === currentIndex ? "bg-teal-500" : "bg-gray-300"
        }`}
      />
    ),
  };

  return (
    <section className="relative w-full h-[30vh] md:h-[60vh] lg:h-[65vh]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[34vh] md:h-[60vh] lg:h-[65vh]"
          >
            {image.isVideo ? (
              <video
                className="w-full h-full object-cover"
                src={image.url}
                autoPlay
                loop
                muted
                playsInline
              ></video>
            ) : (
              <Image
                src={image.url}
                alt={image.text}
                width={1300}
                height={1300}
                quality={100}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
            <div
              onClick={onClick}
              className="absolute  cursor-pointer inset-0 flex items-center justify-center"
            >
              <span className="bg-teal-500 text-white text-[12px] font-normal p-2 rounded-xl">
                {image.text}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ShopImageSliderComponent;
