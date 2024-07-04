"use client";

import { useRouter } from "next/navigation";
import {
  AboutOurStoryComponent,
  BannerComponent,
  CompanyMetricsComponent,
  MeetTheTeamComponent,
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
        title="Empowering E-Commerce"
        description="At Spendio, we are passionate about offering consumers unique and high-quality products from their own neighborhoods."
        buttonText="Contact us"
        onClick={handleNavigation}
      />

      <CompanyMetricsComponent />

      <AboutOurStoryComponent />

      <OurAchievementsComponent />

      <MeetTheTeamComponent />
    </div>
  );
};

export default AboutUSPage;
