"use client";

import { useRouter } from "next/navigation";
import { getIconByJobTitle } from "@/libs/utils";

import careerData from "../../../../assets/app/careersData.json";
import { BannerComponent, CompanyOverviewComponent, CustomButtonComponent } from "@/components";

const CareersPage = () => {
  const router = useRouter();



  const handleApplyNavigation = () => {
    console.log("apply page slug should open");
  };

  const handleViewNavigation = (slug: string) => {
    router.push(`/company/career/${slug}/`);
  };

  return (
    <div className="flex flex-col">
      <div className="flex">
        <BannerComponent
          title="Join Our Team at ClassNova"
          description="Unlock your potential and join our team of innovators and problem solvers."
          backgroundImage="/images/colleagues/team.jpg"
          onClick={() => {}}
        />
      </div>

      <div className="flex flex-col mx-auto">
        <CompanyOverviewComponent/>

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
          {careerData.map((item) => (
            <div
              key={item.id}
              className="w-1/3 flex flex-col space-y-3 px-2 md:px-4 lg:px-4 pb-6"
            >
              <div className="bg-dark-1 h-10 w-10 rounded-md flex justify-center items-center">
                {getIconByJobTitle(item.jobTitle)}
              </div>

              <p
                onClick={() => handleViewNavigation(item.slug)}
                className="text-white text-[12px] font-bold cursor-pointer"
              >
                {item.jobTitle}
              </p>

              <p
                onClick={() => handleViewNavigation(item.slug)}
                className="text-white text-[10px] font-thin line-clamp-2 cursor-pointer"
              >
                {item.jobDescription}
              </p>

              <CustomButtonComponent
                text="View"
                onClick={() => handleViewNavigation(item.slug)}
              />

              <CustomButtonComponent
                text="Apply now"
                onClick={handleApplyNavigation}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
