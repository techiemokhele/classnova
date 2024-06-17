"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaRegCircle } from "react-icons/fa";

import testimonials from "../../assets/auth/sliderData.json";
import { StarRatingComponent } from "@/components";

const TestimonialAuthComponent = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
    }, []);
    
    return (
    <div className="flex-col justify-center items-center w-full md:w-1/2 lg:w-1/2 hidden md:flex lg:flex relative bg-gray-800">
      <div className="flex flex-col justify-center items-center h-full">
        {testimonials.map((user, i) => (
          <div
            key={i}
            className={`flex flex-col justify-center items-center h-full absolute transition-opacity duration-1000 ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-white text-[14px] text-center font-medium px-20 pb-8">
              "{user.statement}"
            </p>

            <StarRatingComponent rating={user.rating} />

            <div className="py-8">
              <Image
                src={user.avatar}
                alt={user.username}
                width={1000}
                height={1000}
                className="w-[100px] h-[100px] rounded-full object-cover"
              />
            </div>

            <p className="text-[12px] text-white font-bold">{user.username}</p>
            <p className="text-[10px] text-white font-medium opacity-50">
              {user.position}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-20 flex space-x-2 left-1/2 transform -translate-x-1/2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`cursor-pointer ${
              i === currentSlide ? "text-white" : "text-gray-500"
            }`}
            onClick={() => setCurrentSlide(i)}
          >
            <FaRegCircle />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialAuthComponent;