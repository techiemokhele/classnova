"use client";

import { useRouter } from "next/navigation";
import {
  AboutOurStoryComponent,
  BannerComponent,
  CompanyMetricsComponent,
  OurAchievementsComponent,
} from "@/components";

const AboutUSPage = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/help/contact-us");
  };

  return (
    <div className="flex flex-col">
      <BannerComponent
        backgroundImage="/images/web/aboutBanner.jpg"
        title="Empowering Local Commerce with Mzxit"
        description="At Mzxit, we are passionate about supporting small businesses, fostering local entrepreneurship, and providing consumers with unique and high-quality products from their own neighborhoods."
        buttonText="Contact us"
        onClick={handleNavigation}
      />

      <CompanyMetricsComponent />

      <AboutOurStoryComponent />

      <OurAchievementsComponent />
    </div>
  );
};

export default AboutUSPage;
