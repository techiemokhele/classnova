"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  CustomButtonComponent,
  TestimonialAuthComponent,
  CustomTextInputComponent,
} from "@/components";

const ForgotPasswordPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = () => {
    if (!email) {
      setError("Email address is required");
      return;
    }

    setError("");

    const data = {
      email,
    };

    router.push("/reset-password");

    setEmail("");
  };

  return (
    <div className="flex flex-row justify-between w-full h-screen">
      {/* form section */}
      <div className="w-full md:w-1/2 lg:w-1/2 px-10 lg:px-12 flex flex-col justify-center">
        {/* title section */}
        <div className="flex flex-col mb-6">
          <h1 className="text-white font-bold text-3xl">
            Forgot your password?
          </h1>
          <p className="text-white font-thin text-xs">
            Do not worry, it happens to the best of us.
          </p>
        </div>

        {/* form section */}
        <div className="flex flex-col py-6">
          <CustomTextInputComponent
            type="email"
            value={email}
            onChange={(text) => setEmail(text)}
            placeholder="username@company.com"
            label={
              !error ? (
                "Email address"
              ) : (
                <>
                  {error && (
                    <p className="text-red-500 text-[8px]">{error}</p>
                  )}
                </>
              )
            }
          />
        </div>

        {/* submit section */}
        <div className="w-full flex flex-col mt-6">
          <CustomButtonComponent onClick={handleSubmit} text="Reset Password" />
          <p className="text-[12px] text-white font-thin pt-2 self-center">
            Do you remember your password?{" "}
            <span
              onClick={() => router.push("/sign-in")}
              className="text-teal-1 font-bold underline mr-2 cursor-pointer"
            >
              Sign in
            </span>
          </p>
        </div>
      </div>

      <TestimonialAuthComponent />
    </div>
  );
};

export default ForgotPasswordPage;
