"use client";

import { useState } from "react";
import { TextInputProps } from "@/types";
import { FaCheck, FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";

const CustomTextInputComponent = ({
  value,
  onChange,
  placeholder,
  label,
  type,
  search,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const validateInput = (value: string, type: string) => {
    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    } else if (type === "tel") {
      const phoneRegex = /^\+?[1-9]\d{1,14}$/;
      return phoneRegex.test(value);
    } else if (type === "password") {
      return value.length >= 8;
    } else if (type === "text") {
      return value.length >= 2;
    } else {
      return value.trim() !== "";
    }
  };

  const getErrorMessage = (type: string) => {
    if (type === "email") {
      return "Enter a valid email format";
    } else if (type === "tel") {
      return "Enter a valid phone number";
    } else if (type === "password") {
      return "Password must be at least 8 characters";
    } else if (type === "text") {
      return "Text must be at least 2 characters";
    } else {
      return "This field is required";
    }
  };

  const showError = !validateInput(value, type) && value !== "";

  return (
    <div className="flex flex-col w-full">
      <label className="text-white text-[12px] font-medium">{label}</label>
      <div className="relative mt-2">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          type={isPasswordVisible && type === "password" ? "text" : type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full p-2 shadow-lg rounded-xl bg-gray-700 text-[12px] text-white border-2 ${
            isFocused ? "border-teal-500" : "border-transparent"
          } ${showError ? "border-red-500" : ""}`}
        />
        {type === "password" && (
          <div
            className="absolute right-2 top-2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <FaEye className="text-white pt-2" />
            ) : (
              <FaEyeSlash className="text-white pt-2" />
            )}
          </div>
        )}
        {value && type !== "password" && search === false && (
          <div className="absolute right-2 top-2">
            {showError ? (
              <FaTimes className="text-red-500 pt-2" />
            ) : (
              <FaCheck className="text-teal-1 pt-2" />
            )}
          </div>
        )}
      </div>
      {showError && (
        <p className="text-red-500 text-[10px] mt-1">{getErrorMessage(type)}</p>
      )}
    </div>
  );
};

export default CustomTextInputComponent;
