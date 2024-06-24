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
      <h1 className="text-2xl md:text-4xl lg:text-4xl text-white font-medium">
        {title}
      </h1>

      <div className="flex justify-center items-center my-3">
        <Image
          src="/images/web/empty-cart.webp"
          alt="no-result-image"
          width={1000}
          height={1000}
          className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px]"
          loading="lazy"
        />
      </div>

      <h4 className="text-s md:text-xl lg:text-xl text-white text-center font-thin pb-8">
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
