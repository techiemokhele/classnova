import { ImHappy2 } from "react-icons/im";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { GiClothes } from "react-icons/gi";
import { FaBuildingUser } from "react-icons/fa6";

import { formatNumber } from "../../../libs/utils";

const CompanyMetricsComponent = () => {
  return (
    <section className="container mx-auto lg:py-8 flex flex-col py-8 bg-gray-800">
      <h1 className="text-white text-3xl font-bold pb-8 self-center">
        Our Metrics
      </h1>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4 justify-items-center">
        <div className="flex flex-col space-y-2 items-center">
          <div className="flex justify-center items-center rounded-xl w-14 h-14 p-2 bg-dark-2">
            <ImHappy2 className="size-8 text-teal-1" />
          </div>
          <h1 className="text-white font-bold text-3xl py-2">
            {formatNumber(53023)}
          </h1>
          <h4 className="text-white font-medium text-[12px]">
            Satisfied Customers
          </h4>
        </div>

        <div className="flex flex-col space-y-2 items-center">
          <div className="flex justify-center items-center rounded-xl w-14 h-14 p-2 bg-dark-2">
            <HiChatBubbleBottomCenterText className="size-8 text-teal-1" />
          </div>
          <h1 className="text-white font-bold text-3xl py-2">
            {formatNumber(10093)}
          </h1>
          <h4 className="text-white font-medium text-[12px]">
            Customers Reviews
          </h4>
        </div>

        <div className="flex flex-col space-y-2 items-center">
          <div className="flex justify-center items-center rounded-xl w-14 h-14 p-2 bg-dark-2">
            <GiClothes className="size-8 text-teal-1" />
          </div>
          <h1 className="text-white font-bold text-3xl py-2">
            {formatNumber(23957432)}
          </h1>
          <h4 className="text-white font-medium text-[12px]">Sold Products</h4>
        </div>

        <div className="flex flex-col space-y-2 items-center">
          <div className="flex justify-center items-center rounded-xl w-14 h-14 p-2 bg-dark-2">
            <FaBuildingUser className="size-8 text-teal-1" />
          </div>
          <h1 className="text-white font-bold text-3xl py-2">
            {formatNumber(150)}
          </h1>
          <h4 className="text-white font-medium text-[12px]">Our Employees</h4>
        </div>
      </div>
    </section>
  );
};

export default CompanyMetricsComponent;
