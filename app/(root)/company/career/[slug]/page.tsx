"use client";

import { useState, useEffect } from "react";

import {
  BannerComponent,
  CustomButtonComponent,
  NoResultsFoundComponent,
} from "@/components";
import careerData from "../../../../../assets/app/careersData.json";
import { CareerItemParams, CareerItemProps } from "@/types";
import { formatDecimalNumber } from "@/libs/utils";

const CareerSinglePage = ({ params }: { params: CareerItemParams }) => {
  const [career, setCareer] = useState<CareerItemProps | null>(null);

  useEffect(() => {
    const foundCareer = careerData.find(
      (careerItem) => careerItem.slug === params.slug
    ) as CareerItemProps | undefined;
    setCareer(foundCareer || null);
  }, [params.slug]);

  if (!career) {
    return (
      <NoResultsFoundComponent
        title="Careers Not Found"
        message="The requested career does not exist."
      />
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex">
        <BannerComponent
          buttonText="Apply now"
          title={`Hey there, ${career.jobTitle}`}
          description="Unlock your potential and join our team of innovators and problem solvers."
          backgroundImage="/images/colleagues/team.jpg"
          onClick={() => {}}
        />
      </div>

      <div className="flex flex-col px-4 py-8">
        <div className="w-16 h-5 mb-2 bg-teal-500 rounded-full flex flex-col items-center justify-center">
          <p className="text-white font-semibold text-[10px]">
            {career.location}
          </p>
        </div>

        <h1 className="text-3xl font-bold text-white pb-4">
          {career.jobTitle}
        </h1>

        <p className="text-[12px] text-white font-thin pb-8">
          {career.jobDescription}
        </p>

        {/* job overview section */}
        <div className="flex flex-col space-y-4 pb-6">
          <h4 className="text-[l] text-white font-semibold">Job overview</h4>

          <p className="text-[12px] text-white font-thin">
            Eu adipisicing minim cupidatat labore incididunt ullamco ad. Nostrud
            qui qui irure duis irure eiusmod nisi eiusmod sit. Reprehenderit
            laboris nostrud excepteur enim minim incididunt Lorem aute ex amet
            cupidatat aliquip qui. Elit excepteur irure eu velit proident
            aliquip do amet non mollit id dolor et. Enim cillum nisi est
            proident labore nostrud et veniam eu cupidatat.
          </p>

          {career.jobOverview.map((item) => (
            <ul key={item} className="container list-disc leading-tight">
              <li className="text-white text-[12px] font-thin">{item}</li>
            </ul>
          ))}
        </div>

        {/* job responsibilities section */}
        <div className="flex flex-col space-y-4 pb-6">
          <h4 className="text-[l] text-white font-semibold">
            Responsibilities
          </h4>

          <p className="text-[12px] text-white font-thin">
            Lorem labore occaecat sint est mollit officia. Veniam consequat id
            ex ea. Commodo sint duis irure id ullamco quis incididunt magna
            deserunt aliqua. Nulla et et occaecat sunt velit reprehenderit
            cillum nostrud qui dolore commodo.
          </p>

          {career.responsibilities.map((item) => (
            <ul key={item} className="container list-disc leading-tight">
              <li className="text-white text-[12px] font-thin">{item}</li>
            </ul>
          ))}
        </div>

        {/* job requirements section */}
        <div className="flex flex-col space-y-4 pb-6">
          <h4 className="text-[l] text-white font-semibold">Requirements</h4>

          <p className="text-[12px] text-white font-thin">
            Amet laboris aute excepteur Lorem labore occaecat sint est mollit
            officia. Veniam consequat id ex ea. Commodo sint duis irure id
            ullamco quis incididunt magna deserunt aliqua. Nulla et et occaecat
            sunt velit reprehenderit cillum nostrud qui dolore commodo.
          </p>

          {career.requirements.map((item) => (
            <ul key={item} className="container list-disc leading-tight">
              <li className="text-white text-[12px] font-thin">{item}</li>
            </ul>
          ))}
        </div>

        {/* job benefits section */}
        <div className="flex flex-col space-y-4 pb-6">
          <h4 className="text-[l] text-white font-semibold">Benefits</h4>

          <ul className="container list-disc leading-tight">
            <li className="text-white text-[12px] font-thin">
              Mostrud qui dolore commodo.
            </li>
            <li className="text-white text-[12px] font-thin">
              Sunt velit reprehenderit
            </li>
            <li className="text-white text-[12px] font-thin">
              Tus veniam consequat
            </li>
            <li className="text-white text-[12px] font-thin">
              Excepteur Lorem labore
            </li>
          </ul>
        </div>

        {/* job salary section */}
        <div className="flex flex-col space-y-4 pb-6">
          <h4 className="text-[l] text-white font-semibold">Salary</h4>

          <p className="text-[12px] text-white font-thin">
            R{formatDecimalNumber(career.salary)} / {career.paymentRecurrence}
          </p>
        </div>

        <div className="pt-4">
          <CustomButtonComponent text="Apply now" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default CareerSinglePage;
