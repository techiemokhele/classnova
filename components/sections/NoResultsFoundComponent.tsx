import Image from "next/image";
import { BsCart4 } from "react-icons/bs";
import CustomButtonComponent from "../common/CustomButtonComponent";

const NoResultsFoundComponent = ({
  button,
  onClick,
  title,
  message,
}: {
  button?: boolean;
  onClick?: () => void;
  title: string;
  message: string;
}) => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl text-white font-medium">{title}</h1>

      <div className="flex justify-center items-center my-3">
        <Image
          src="/images/web/empty-cart.webp"
          alt="no-result-image"
          width={1000}
          height={1000}
          className="w-[300px] h-[300px]"
          loading="lazy"
        />
      </div>

      <h4 className="text-xl lg:text-2xl text-white text-center font-medium pb-8">
        {message}
      </h4>

      {button && onClick && (
        <CustomButtonComponent
          icon={<BsCart4 className="h-5 w-5" />}
          text="Buy Products"
          onClick={onClick}
        />
      )}
    </section>
  );
};

export default NoResultsFoundComponent;
