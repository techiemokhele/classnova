"use client";

import { ModalComponentProps } from "@/types";
import React, { useEffect, useState } from "react";

const CustomModalComponent = ({
  show,
  onClose,
  children,
}: ModalComponentProps) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    }
  }, [show]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!show && !isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-6 lg:px-0 ${
        show ? "fade-in" : "fade-out"
      }`}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={handleClose}
      ></div>
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-y-auto max-h-[80vh] w-full max-w-md p-6 relative z-50 transition-opacity duration-300">
        <button
          className="absolute top-2 right-2 text-white"
          onClick={handleClose}
        >
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  );
};

export default CustomModalComponent;
