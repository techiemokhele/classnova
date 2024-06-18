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
      logo="/logo.jpg"
      title="Mzxit was founded with the goal of connecting local vendors and consumers."
      description="We believe in the potential of community-driven commerce and are committed to building a platform that benefits local businesses and encourages meaningful connections."
      buttonIcon={<BsCart4 className="h-5 w-5" />}
      buttonText="Buy Products"
      onClick={handleButtonClick}
    />
  );
}
