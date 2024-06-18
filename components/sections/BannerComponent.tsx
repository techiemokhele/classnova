"use client";

import Image from "next/image";
import { BsCart4 } from "react-icons/bs";

import { BannerComponentProps } from "@/types";
import CustomButtonComponent from "../common/CustomButtonComponent";

const BannerComponent = ({
  backgroundImage,
  logo,
  title,
  buttonText,
  buttonIcon,
  description,
  onClick,
}: BannerComponentProps) => {
  return (
    <section className="relative flex flex-col min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="banner-image"
          layout="fill"
          objectFit="cover"
          quality={100}
          loading="lazy"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-screen p-4">
        <div className="flex flex-col items-center justify-center text-center text-white w-full md:w-1/2 p-1">
          {logo && (
            <Image
              src={logo}
              alt="logo"
              width={1000}
              height={1000}
              className="w-[100px] h-[100px] object-contain rounded-full mt-6 mb-4"
              loading="lazy"
            />
          )}

          <h1 className="text-4xl font-bold my-4">{title}</h1>
          <p className="text-lg mb-6 font-thin text-[14px]">{description}</p>

          {buttonText && (
            <CustomButtonComponent
              icon={buttonIcon}
              text={buttonText}
              onClick={onClick}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
