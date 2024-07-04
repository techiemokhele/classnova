import { OrderCustomerInfoComponentProps } from "@/types";

import { FaUserAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";

const OrderCustomerInfoComponent = ({
  selectedOrder,
}: OrderCustomerInfoComponentProps) => {
  return (
    <div className="grid flex-grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full py-6">
      {/* customer section*/}
      <div className="w-full flex flex-row space-x-6 pb-8 md:pb-0 lg:pb-0">
        <div className="w-[10%] flex justify-center items-start">
          <div className="flex justify-center items-center bg-gray-800 rounded-full p-2">
            <FaUserAlt className="text-teal-500 size-4" />
          </div>
        </div>

        <div className="w-[85%] flex flex-col justify-start items-start">
          <h1 className="text-white text-xl font-bold pb-2">Customer</h1>
          <p className="text-gray-300 text-xs font-bold">
            Full name:{" "}
            <span className="text-white font-thin">Maria Aniston</span>
          </p>
          <p className="text-gray-300 text-xs font-bold py-[0.5px]">
            Email:{" "}
            <span className="text-white font-thin">m.aniston@yahoo.com</span>
          </p>
          <p className="text-gray-300 text-xs font-bold">
            Phone: <span className="text-white font-thin">+27 71 763 7483</span>
          </p>
        </div>
      </div>

      {/* order info section*/}
      <div className="w-full flex flex-row space-x-6">
        <div className="w-[10%] flex justify-center items-start">
          <div className="flex justify-center items-center bg-gray-800 rounded-full p-2">
            <BsCart4 className="text-teal-500 size-4" />
          </div>
        </div>

        <div className="w-[85%] flex flex-col justify-start items-start">
          <h1 className="text-white text-xl font-bold pb-2">Order Info</h1>
          <p className="text-gray-300 text-xs font-bold">
            Shipping:{" "}
            <span className="text-white font-thin">Spendio Transit</span>
          </p>
          <p className="text-gray-300 text-xs font-bold py-[0.5px]">
            Payment via:{" "}
            <span className="text-white font-thin">Master Card</span>
          </p>
          {selectedOrder && (
            <p className="text-gray-300 text-xs font-bold">
              Status:{" "}
              <span className="text-white font-thin">
                {selectedOrder?.status}
              </span>
            </p>
          )}
        </div>
      </div>

      {/* payment info section*/}
      <div className="w-full flex flex-row space-x-6">
        <div className="w-[10%] flex justify-center items-start">
          <div className="flex justify-center items-center bg-gray-800 rounded-full p-2">
            <FaCreditCard className="text-teal-500 size-4" />
          </div>
        </div>

        <div className="w-[85%] flex flex-col justify-start items-start">
          <h1 className="text-white text-xl font-bold pb-2">Payment Info</h1>
          <p className="text-gray-300 text-xs font-bold">
            Card No:{" "}
            <span className="text-white font-thin">**** **** 3463</span>
          </p>
          <p className="text-gray-300 text-xs font-bold py-[0.5px]">
            Full name:{" "}
            <span className="text-white font-thin">Maria Aniston</span>
          </p>
          <p className="text-gray-300 text-xs font-bold">
            Phone: <span className="text-white font-thin">+27 71 763 7483</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCustomerInfoComponent;
