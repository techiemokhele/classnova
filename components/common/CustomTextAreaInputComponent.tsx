"use client";

import { useState } from "react";
import { TextAreaProps } from "@/types";

const CustomTextAreaComponent = ({
  value = "",
  onChange,
  placeholder ="",
  label,
  type ="text",
  rows = 5,
}: TextAreaProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const validateInput = (value: string, type: string) => {
    if (type === "text") {
      return value.length >= 2;
    } else {
      return value.trim() !== "";
    }
  };

  const getErrorMessage = (type: string) => {
    if (type === "text") {
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
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full p-2 shadow-lg rounded-xl bg-gray-700 text-[12px] text-white border-2 ${
            isFocused ? "border-teal-500" : "border-transparent"
          } ${showError ? "border-red-500" : ""}`}
        ></textarea>
      </div>
      {showError && type && (
        <p className="text-red-500 text-[10px] mt-1">{getErrorMessage(type)}</p>
      )}
    </div>
  );
};

export default CustomTextAreaComponent;
