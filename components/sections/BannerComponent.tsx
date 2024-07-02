"use client";

import Image from "next/image";

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
  otherLayout,
}: BannerComponentProps) => {
  return (
    <section className="relative flex flex-col min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          priority
          src={backgroundImage}
          alt="banner-image"
          width={1500}
          height={1500}
          quality={100}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Centered Content */}
      <div
        className={`relative z-10 flex w-full h-screen p-4 ${
          otherLayout
            ? "items-center justify-start w-full "
            : "items-center justify-center "
        }`}
      >
        <div className="flex flex-col items-center justify-center text-center text-white w-full  p-1">
          {logo && (
            <Image
              priority
              src={logo}
              alt="logo"
              width={1000}
              height={1000}
              quality={100}
              className="w-[100px] h-[100px] object-contain rounded-full mt-6 mb-4"
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
