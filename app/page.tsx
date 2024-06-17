"use client";

import CustomButtonComponent from "@/components/common/CustomButtonComponent";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsCart4 } from "react-icons/bs";

export default function HomePage() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/shop");
  };

  return (
    <main className="relative flex min-h-screen w-full z-10">
      <div className="absolute inset-0">
        <Image
          src="/images/web/homeBanner.jpg"
          alt="banner-image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="relative z-10 self-center flex flex-col items-center justify-center w-full h-full text-center text-white p-4 md:items-start md:text-start md:w-1/2 md:p-8">
        <h1 className="text-4xl font-bold mb-4">
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
    </main>
  );
}
