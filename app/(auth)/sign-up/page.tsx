"use client";

import { FcGoogle } from "react-icons/fc";
import { CustomSocialAuthButtonComponent } from "@/components";

const SignUpPage = () => {
  const handleGoogleAuth = () => {
    console.log("register user with google");
  };

  return (
    <div className="flex flex-row justify-between w-full h-screen">
      {/* slider of testimonies section */}
      <div className="w-1/2 bg-red-500"></div>

      {/* form section */}
      <div className="w-1/2 py-20 px-4">
        {/* title section */}
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-3xl">Get started.</h1>
          <p className="text-white font-thin text-sm">
            Explore the best shopping experience on
          </p>
        </div>

        {/* third-party auth section */}
        <div className="py-6">
          <CustomSocialAuthButtonComponent
            onClick={handleGoogleAuth}
            text="Sign Up with Google"
            icon={<FcGoogle />}
          />
        </div>

        {/* -or- divider section */}

        {/* form section */}

        {/* remember me section */}

        {/* submit section */}
      </div>
    </div>
  );
};

export default SignUpPage;
