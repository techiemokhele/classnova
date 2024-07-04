"use client";

import CustomButtonComponent from "@/components/common/CustomButtonComponent";
import { useRouter } from "next/navigation";

const CompanyOverviewComponent = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/company/about-us");
  };

  return (
    <section className="container mx-auto flex flex-row flex-wrap pb-8">
      {/* intro section */}
      <div className="flex flex-col py-4">
        <h1 className="text-3xl font-bold text-white">
          Welcome to Spendio, where talent meets opportunity!
        </h1>

        <p className="text-[12px] font-thin text-white py-6">
          At Spendio, we are passionate about offering consumers unique and
          high-quality products from their own neighborhoods.
        </p>

        <div className="pt-3">
          <CustomButtonComponent
            text="Why work at Spendio"
            onClick={handleNavigation}
          />
        </div>
      </div>

      {/* company points section */}
      <div className="flex flex-col w-1/2 py-6 px-2 space-y-2">
        <p className="text-[18px] font-bold text-white">
          Innovation and Impactful Projects
        </p>
        <p className="text-xs font-thin text-white">
          At Spendio, innovation drives our mission to deliver unique,
          high-quality products sourced from local neighborhoods. Our impactful
          projects empower communities, foster creativity, and promote
          sustainable practices. Join our team of innovators and problem
          solvers, and unlock your potential to make a difference.
        </p>
      </div>

      <div className="flex flex-col w-1/2 py-6 px-2 space-y-2">
        <p className="text-[18px] font-bold text-white">
          Supportive Environment
        </p>
        <p className="text-xs font-thin text-white">
          We foster a supportive environment where every team member can thrive.
          Our inclusive culture encourages collaboration, creativity, and
          innovation, allowing you to unlock your potential. Join us and be part
          of a team dedicated to offering unique, high-quality products from
          local neighborhoods.
        </p>
      </div>

      <div className="flex flex-col w-1/2 py-6 px-2 space-y-2">
        <p className="text-[18px] font-bold text-white">
          Continuous Learning and Growth
        </p>
        <p className="text-xs font-thin text-white">
          At Spendio, we prioritise continuous learning and growth. We believe
          in empowering our team to unlock their full potential through ongoing
          education and professional development. Join us to be part of a
          culture that values innovation, fosters creativity, and supports
          personal and professional growth, all while delivering high-quality,
          neighborhood-sourced products to our consumers.
        </p>
      </div>

      <div className="flex flex-col w-1/2 py-6 px-2 space-y-2">
        <p className="text-[18px] font-bold text-white">
          Challenging and Rewarding Work
        </p>
        <p className="text-xs font-thin text-white">
          We provide challenging and rewarding work, encouraging team members to
          unlock their potential. Join our team of innovators and problem
          solvers dedicated to delivering unique, high-quality products from
          local neighborhoods. Embrace the opportunity to grow with us at
          Spendio, where your talent meets limitless possibilities.
        </p>
      </div>
    </section>
  );
};

export default CompanyOverviewComponent;
