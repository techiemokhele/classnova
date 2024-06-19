"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

import {
  CustomButtonComponent,
  CustomSocialAuthButtonComponent,
  TestimonialAuthComponent,
  CustomTextInputComponent,
} from "@/components";

const SignInPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleGoogleAuth = () => {
    console.log("login user with google");
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = () => {
    if (!email || !password) {
      setEmailError("Email address is required");
      setPasswordError("Password is required");
      return;
    }

    setEmailError("");
    setPasswordError("");

    const data = {
      email,
      password,
    };

    router.push("/shop");

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-row justify-between w-full h-screen">
      {/* form section */}
      <div className="w-full md:w-1/2 lg:w-1/2 px-10 lg:px-12 flex flex-col justify-center">
        {/* title section */}
        <div className="flex flex-col mb-6">
          <h1 className="text-white font-bold text-3xl">Welcome back.</h1>
          <p className="text-white font-thin text-xs">
            Ready to explore the best shopping experience again.
          </p>
        </div>

        {/* third-party auth section */}
        <div className="py-0">
          <CustomSocialAuthButtonComponent
            onClick={handleGoogleAuth}
            text="Sign In with Google"
            icon={<FcGoogle />}
          />
        </div>

        {/* -or- divider section */}
        <div className="relative flex py-3 px-6 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-[10px]">or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>

        {/* form section */}
        <div className="flex flex-col pb-2 space-y-2">
          <CustomTextInputComponent
            type="email"
            value={email}
            onChange={(text) => setEmail(text)}
            placeholder="username@company.com"
            label="Email address"
          />
          {emailError && (
            <p className="text-red-500 text-[10px]">{emailError}</p>
          )}

          <CustomTextInputComponent
            type="password"
            value={password}
            onChange={(text) => setPassword(text)}
            placeholder="●●●●●●●●"
            label="Password"
          />
          {passwordError && (
            <p className="text-red-500 text-[10px]">{passwordError}</p>
          )}
        </div>

        {/* remember me section */}
        <div className="flex flex-row justify-between pt-2">
          <div
            className="flex flex-row justify-center text-xs text-white cursor-pointer"
            onClick={handleRememberMe}
          >
            {rememberMe ? (
              <FaCircleCheck className="mr-2" />
            ) : (
              <FaRegCircle className="mr-2" />
            )}
            <span>Remember me</span>
          </div>

          <p
            onClick={() => router.push("/forgot-password")}
            className="text-teal-1 text-xs font-bold underline cursor-pointer"
          >
            Forgot Password?
          </p>
        </div>

        {/* submit section */}
        <div className="w-full flex flex-col mt-6">
          <CustomButtonComponent onClick={handleSubmit} text="Sign In" />
          <p className="text-[12px] text-white font-thin pt-2 self-center">
            Don't have an account?{" "}
            <span
              onClick={() => router.push("/sign-up")}
              className="text-teal-1 font-bold underline mr-2 cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>

      <TestimonialAuthComponent />
    </div>
  );
};

export default SignInPage;
