"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getIconByJobTitle } from "@/libs/utils";
import careerData from "../../../../assets/app/careersData.json";
import {
  ApplyFormComponent,
  BannerComponent,
  CompanyOverviewComponent,
  CustomButtonComponent,
  CustomModalComponent,
  CustomTextInputComponent,
  NoResultsFoundComponent,
} from "@/components";

const CareersPage = () => {
  const router = useRouter();
  const [applyFormJob, setApplyFormJob] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const handleViewNavigation = (slug: string) => {
    router.push(`/company/career/${slug}/`);
  };

  const handleFormSubmit = (applicationData: any) => {
    console.log("Application submitted: ", applicationData);
    setApplyFormJob(null);
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  // Filter careerData based on search input
  const filteredCareerData = careerData.filter((item) =>
    item.jobTitle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <div className="flex">
        <BannerComponent
          title="Join Our Team at Spendio"
          description="Unlock your potential and join our team of innovators and problem solvers."
          backgroundImage="/images/colleagues/team.jpg"
          onClick={() => {}}
        />
      </div>

      <div className="flex flex-col mx-auto">
        <CompanyOverviewComponent />

        {/* current opening section */}
        <div className="flex flex-row px-6 flex-wrap pb-6">
          <div className="flex flex-col justify-center items-center container pb-6">
            <h2 className="text-2xl font-bold text-white">Current Openings</h2>
            <p className="text-[12px] text-white text-center font-normal pb-6">
              Join our team at Spendio and unlock your potential with a group of
              innovators and problem solvers. We're passionate about offering
              unique, high-quality products from local neighborhoods. Explore
              our current openings and find your perfect fit at Spendio!
            </p>

            {/* search careerData */}
            <div className="w-1/2">
              <CustomTextInputComponent
                search={true}
                type="text"
                value={search}
                onChange={(text) => setSearch(text)}
                label=""
                placeholder="Search..."
              />
            </div>
          </div>

          {/* Display filtered or no results */}
          {filteredCareerData.length > 0 ? (
            filteredCareerData.map((item) => (
              <div
                key={item.id}
                className="w-1/2 md:w-1/2 lg:w-1/4 flex flex-col pb-6"
              >
                <div className=" bg-gray-800 mx-2 flex flex-col space-y-3 px-2 md:px-4 lg:px-4 py-4 rounded-xl">
                  <div className="flex flex-row justify-between items-center">
                    <div className="bg-dark-1 h-10 w-10 rounded-md flex justify-center items-center">
                      {getIconByJobTitle(item.jobTitle)}
                    </div>

                    <p className="text-white text-[8px] font-normal">
                      Closing date: {item.closingDate}
                    </p>
                  </div>

                  <p
                    onClick={() => handleViewNavigation(item.slug)}
                    className="text-white text-[12px] font-bold cursor-pointer line-clamp-1"
                  >
                    {item.jobTitle}
                  </p>

                  <p
                    onClick={() => handleViewNavigation(item.slug)}
                    className="text-white text-xs font-normal line-clamp-2 cursor-pointer"
                  >
                    {item.jobDescription}
                  </p>

                  <CustomButtonComponent
                    text="View"
                    onClick={() => handleViewNavigation(item.slug)}
                  />

                  <CustomButtonComponent
                    text="Apply now"
                    onClick={() => setApplyFormJob(item.slug)}
                  />
                </div>

                {/* Show apply form for selected job */}
                {applyFormJob === item.slug && (
                  <ApplyFormComponent
                    jobTitle={item.jobTitle}
                    onClose={() => setApplyFormJob(null)}
                    onSubmit={handleFormSubmit}
                  />
                )}
              </div>
            ))
          ) : (
            <NoResultsFoundComponent
              title="No results found"
              message="No careers found! Please try again later."
            />
          )}
        </div>

        {/* Success Modal */}
        {showSuccessModal && (
          <CustomModalComponent
            show={showSuccessModal}
            onClose={closeSuccessModal}
          >
            <div className="flex flex-col items-center justify-center space-y-4">
              <img
                src="/images/web/confetti.webp"
                alt="Confetti"
                className="w-24 h-24"
              />
              <div className="flex flex-col space-y-2 justify-center items-center">
                <h2 className="text-2xl font-bold text-white">
                  Application Sent Successfully!
                </h2>
                <p className="text[12px] text-white text-center">
                  Thank you for applying. Please check your email for
                  application progress.
                </p>
              </div>
            </div>
          </CustomModalComponent>
        )}
      </div>
    </div>
  );
};

export default CareersPage;
