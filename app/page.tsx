"use client";

import { useRouter } from "next/navigation";
import { BsCart4 } from "react-icons/bs";
import { BannerComponent } from "@/components";

export default function HomePage() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/shop");
  };

  return (
    <BannerComponent
      backgroundImage="/images/web/homeBanner.jpg"
      logo="/icons/logo-white-transparent.png"
      title="A seamless and engaging e-commerce store for consumers."
      description="We believe in the potential of community-driven commerce and are committed to building a platform that benefits consumers and encourages meaningful connections."
      buttonIcon={<BsCart4 className="h-5 w-5" />}
      buttonText="Buy Products"
      onClick={handleButtonClick}
    />
  );
}
