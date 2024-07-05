import Image from "next/image";

import employeeData from "../../../assets/app/employeeData.json";

const MeetTheTeamComponent = () => {
  return (
    <div className="container mx-auto flex flex-col py-6">
      <h1 className="text-white text-3xl font-bold pb-6 self-center">
        Meet the team
      </h1>
      <p className="text-[12px] text-white text-center font-normal pb-6 px-10">
        Each member brings a wealth of experience and passion to their role,
        contributing to our shared vision of transforming local commerce and
        creating meaningful connections.
      </p>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 justify-items-center py-6 space-y-4">
        {employeeData.map((item, i) => (
          <div key={i} className="flex flex-col justify-center items-center">
            <Image
              src={item?.empAvatar}
              alt={item.empName}
              width={1000}
              height={1000}
              className="w-[130px] h-[130px] object-cover rounded-full grayscale hover:grayscale-0 transition duration-300"
              loading="lazy"
            />

            <div className="flex justify-center items-center py-1 px-2 bg-teal-500 rounded-xl my-3">
              <p className="text-[8px] text-white font-medium">
                {item.empPosition}
              </p>
            </div>

            <div className="flex justify-center items-center mb-1">
              <p className="text-lg text-white font-bold">{item.empName}</p>
            </div>

            <div className="flex justify-center items-center px-2">
              <p className="text-[12px] text-white text-center font-normal">
                {item.empDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeamComponent;
