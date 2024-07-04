"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const PromoCodePages = () => {
  const router = useRouter();

  const handleNavigator = () => {
    router.push("/resources/join");
  };

  return (
    <div className="container mx-auto flex flex-col pt-20 pb-6">
      <div className="flex flex-col justify-start items-start mb-6">
        <h1 className="text-3xl text-white font-bold">
          Promo & Discount Codes
        </h1>
        <p className="text-[12px] text-white font-normal py-4">
          Use real Spendio coupon codes to save a ton of money on your
          favorites. Look through our specials and offers to get the equipment
          you need to step up your game.
        </p>

        <p className="text-[12px] text-white font-normal">
          You can only access exclusive deals and Spendio discount codes as a{" "}
          <span
            onClick={handleNavigator}
            className="underline cursor-pointer font-bold"
          >
            Spendio Member
          </span>
          .
        </p>
      </div>

      <div className="relative flex flex-col h-[250px] w-full">
        <Image
          src="/images/web/promoBanner.jpg"
          alt="promo-banner"
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-0 left-0 px-8 w-full h-full flex justify-start items-center bg-black bg-opacity-50">
          <h2 className="text-2xl text-white font-bold">
            Welcome Promo Code: SAVE20 <br />
            <span className="text-[14px] text-white font-normal pt-6">
              Save Up To <span className="font-bold">20%</span> on all purchases
            </span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start mt-6">
        <h1 className="text-3xl text-white font-bold">
          Promo & Discount Codes FAQ
        </h1>

        <p className="text-[12px] text-white font-bold pt-2">
          Can I obtain a discount as an existing Member?
        </p>

        <p className="text-[12px] text-white font-normal py-4">
          Indeed. As a{" "}
          <span
            onClick={handleNavigator}
            className="underline cursor-pointer font-bold"
          >
            Spendio Member
          </span>
          , you may take advantage of numerous advantages, such as exclusive
          discount codes that can be used on our website.
        </p>

        <p className="text-[12px] text-white font-bold py-2">
          Does Spendio offer seasonal promotions?
        </p>

        <p className="text-[12px] text-white font-normal">
          Indeed, our end-of-season specials provide discounts on a number of
          your favorite Spendio items. As a{" "}
          <span
            onClick={handleNavigator}
            className="underline cursor-pointer font-bold"
          >
            Spendio Member
          </span>{" "}
          subscribe to our newsletter to ensure you never miss another deal or
          sale. Check out all the other advantages of{" "}
          <span
            onClick={handleNavigator}
            className="underline cursor-pointer font-bold"
          >
            Spendio Membership
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default PromoCodePages;
