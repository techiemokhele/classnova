"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  CustomButtonComponent,
  TestimonialAuthComponent,
  CustomTextInputComponent,
} from "@/components";

const ResetPasswordPage = () => {
  const router = useRouter();

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  const passwordsMatch = password === confirmPassword && password !== "";

  const handleSubmit = () => {
    if (!password || !confirmPassword) {
      setPasswordError("New password is required");
      setConfirmPasswordError("Confirm password is required");
      return;
    }

    setPasswordError("");
    setConfirmPasswordError("");

    const data = {
      password,
    };

    router.push("/sign-in");

    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex flex-row justify-between w-full h-screen">
      {/* form section */}
      <div className="w-full md:w-1/2 lg:w-1/2 px-10 lg:px-12 flex flex-col justify-center">
        {/* title section */}
        <div className="flex flex-col mb-6">
          <h1 className="text-white font-bold text-3xl">Change password.</h1>
          <p className="text-white font-thin text-xs">
            This password will be used next time you login.
          </p>
        </div>

        {/* form section */}
        <div className="flex flex-col pb-2 space-y-2">
          <CustomTextInputComponent
            type="password"
            value={password}
            onChange={(text) => setPassword(text)}
            placeholder="●●●●●●●●"
            label={
              !passwordError ? (
                "Password"
              ) : (
                <>
                  {passwordError && (
                    <p className="text-red-500 text-[8px]">{passwordError}</p>
                  )}
                </>
              )
            }
          />

          <CustomTextInputComponent
            type="password"
            value={confirmPassword}
            onChange={(text) => setConfirmPassword(text)}
            placeholder="●●●●●●●●"
            label={
              !confirmPasswordError ? (
                "Confirm password"
              ) : (
                <>
                  {confirmPasswordError && (
                    <p className="text-red-500 text-[8px]">
                      {confirmPasswordError}
                    </p>
                  )}
                </>
              )
            }
          />
          {!passwordsMatch && confirmPassword && (
            <p className="text-red-500 text-xs">Passwords do not match</p>
          )}
        </div>

        {/* submit section */}
        <div className="w-full flex flex-col mt-6">
          <CustomButtonComponent onClick={handleSubmit} text="Continue" />
        </div>
      </div>

      <TestimonialAuthComponent />
    </div>
  );
};

export default ResetPasswordPage;
