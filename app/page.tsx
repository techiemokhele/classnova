"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsCart4 } from "react-icons/bs";
import { CustomButtonComponent } from "@/components";

export default function HomePage() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/shop");
  };

  return (
    <main className="relative flex flex-col min-h-screen w-full z-10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/web/homeBanner.jpg"
          alt="banner-image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-screen p-4">
        <div className="flex flex-col items-center justify-center text-center text-white w-full md:w-1/2 p-8">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={1000}
            height={1000}
            className="w-[100px] h-[100px] object-contain rounded-full mt-6 mb-4"
          />

          <h1 className="text-4xl font-bold my-4">
            Mzxit was founded with the goal of connecting local vendors and
            consumers.
          </h1>
          <p className="text-lg mb-6 font-thin text-[14px]">
            We believe in the potential of community-driven commerce and are
            committed to building a platform that benefits local businesses and
            encourages meaningful connections.
          </p>

          <CustomButtonComponent
            icon={<BsCart4 className="h-5 w-5" />}
            text="Buy Products"
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </main>
  );
}
