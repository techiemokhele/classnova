"use client";

import { useRouter } from "next/navigation";
import { SiAdobeindesign } from "react-icons/si";

import {
  BannerComponent,
  CustomButtonComponent,
  OrSeparatorComponent,
} from "@/components";

const CareersPage = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/company/about-us");
  };

  const handleApplyNavigation = () => {
    console.log("apply page slug should open");
  };

  return (
    <div className="flex flex-col">
      <div className="flex">
        <BannerComponent
          title="Join Our Team at ClassNova"
          description="Unlock your potential and join our team of innovators and problem solvers."
          backgroundImage="https://images.unsplash.com/photo-1573166675921-076ea6b621ce?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          onClick={() => {}}
        />
      </div>

      <div className="flex flex-col mx-auto">
        {/* intro section */}
        <div className="container mx-auto flex flex-col py-6 space-y-2">
          <p className="text-[18px] font-bold text-white">
            Welcome to ClassNova, where talent meets opportunity!
          </p>

          <p className="text-[12px] font-thin text-white">
            At ClassNova, we are passionate about offering consumers unique and
            high-quality products from their own neighborhoods.
          </p>

          <div className="pt-3">
            <CustomButtonComponent
              text="Why work at ClassNova"
              onClick={handleNavigation}
            />
          </div>
        </div>

        {/* statements section */}
        <div className="container mx-auto flex flex-row flex-wrap">
          <div className="flex flex-col w-1/2 py-6 px-2 space-y-2">
            <p className="text-[18px] font-bold text-white">
              Innovation and Impactful Projects
            </p>
            <p className="text-[10px] font-thin text-white">
              At ClassNova, innovation drives our mission to deliver unique,
              high-quality products sourced from local neighborhoods. Our
              impactful projects empower communities, foster creativity, and
              promote sustainable practices. Join our team of innovators and
              problem solvers, and unlock your potential to make a difference.
            </p>
          </div>

          <div className="flex flex-col w-1/2 py-6 px-2 space-y-2">
            <p className="text-[18px] font-bold text-white">
              Supportive Environment
            </p>
            <p className="text-[10px] font-thin text-white">
              We foster a supportive environment where every team member can
              thrive. Our inclusive culture encourages collaboration,
              creativity, and innovation, allowing you to unlock your potential.
              Join us and be part of a team dedicated to offering unique,
              high-quality products from local neighborhoods.
            </p>
          </div>

          <div className="flex flex-col w-1/2 py-6 px-2 space-y-2">
            <p className="text-[18px] font-bold text-white">
              Continuous Learning and Growth
            </p>
            <p className="text-[10px] font-thin text-white">
              At ClassNova, we prioritise continuous learning and growth. We
              believe in empowering our team to unlock their full potential
              through ongoing education and professional development. Join us to
              be part of a culture that values innovation, fosters creativity,
              and supports personal and professional growth, all while
              delivering high-quality, neighborhood-sourced products to our
              consumers.
            </p>
          </div>

          <div className="flex flex-col w-1/2 py-6 px-2 space-y-2">
            <p className="text-[18px] font-bold text-white">
              Challenging and Rewarding Work
            </p>
            <p className="text-[10px] font-thin text-white">
              We provide challenging and rewarding work, encouraging team
              members to unlock their potential. Join our team of innovators and
              problem solvers dedicated to delivering unique, high-quality
              products from local neighborhoods. Embrace the opportunity to grow
              with us at ClassNova, where your talent meets limitless
              possibilities.
            </p>
          </div>
        </div>

        {/* current opening section */}
        <div className="flex flex-row px-6 flex-wrap pb-6">
          <p className="text-[18px] font-bold text-white">Current Openings</p>
          <p className="text-[10px] text-white font-thin pb-6">
            Join our team at ClassNova and unlock your potential with a group of
            innovators and problem solvers. We're passionate about offering
            unique, high-quality products from local neighborhoods. Explore our
            current openings and find your perfect fit at ClassNova!
          </p>

          {/* open positions list */}
          <div className="w-1/3 flex flex-col space-y-3 px-2 md:px-4 lg:px-4 pb-6">
            <div className="bg-dark-1 h-10 w-10 rounded-md flex justify-center items-center">
              <SiAdobeindesign className="text-teal-500 size-5" />
            </div>

            <p
              onClick={handleApplyNavigation}
              className="text-white text-[14px] font-bold"
            >
              UI Designer
            </p>

            <p
              onClick={handleApplyNavigation}
              className="text-white text-[10px] font-thin"
            >
              Join our dynamic team to create engaging, user-friendly
              interfaces. Apply now to shape the future of design!
            </p>

            <CustomButtonComponent
              text="Apply Now"
              onClick={handleApplyNavigation}
            />
          </div>

          <div className="w-1/3 flex flex-col space-y-3 px-2 md:px-4 lg:px-4 pb-6">
            <div className="bg-dark-1 h-10 w-10 rounded-md flex justify-center items-center">
              <SiAdobeindesign className="text-teal-500 size-5" />
            </div>

            <p className="text-white text-[14px] font-bold">UI Designer</p>

            <p className="text-white text-[10px] font-thin">
              Join our dynamic team to create engaging, user-friendly
              interfaces. Apply now to shape the future of design!
            </p>

            <CustomButtonComponent
              text="Apply Now"
              onClick={handleApplyNavigation}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
