import { ShopBannerProps } from "@/types";
import Image from "next/image";

const ShopAdBannerComponent = ({
  discountText,
  extraText,
  bannerImage,
  otherLayout,
  bigBanner,
}: ShopBannerProps) => {
  return (
    <section
      className={`relative flex flex-col w-full p-6 ${
        bigBanner ? "h-[160px]" : " h-[120px]"
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bannerImage}
          alt="banner-image"
          width={1300}
          height={1300}
          className="w-full h-full object-fill"
          loading="lazy"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Centered Content */}
      <div
        className={`relative z-10 flex w-full h-full ${
          otherLayout
            ? "items-center justify-start w-full "
            : "items-center justify-center "
        }`}
      >
        <div className="flex flex-col items-start justify-start text-center text-white w-full  p-1">
          <h1 className="text-4xl font-bold my-4">{discountText}</h1>
          <p className="text-lg mb-6 font-thin text-[12px]">{extraText}</p>
        </div>
      </div>
    </section>
  );
};

export default ShopAdBannerComponent;
