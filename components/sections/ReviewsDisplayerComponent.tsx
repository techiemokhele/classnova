"use client";

import { useState } from "react";
import Image from "next/image";

import feedbackData from "../../assets/app/feedbackData.json";
import StarRatingComponent from "./StarRatingComponent";
import { formatDate } from "@/libs/utils";

const ReviewsDisplayerComponent = ({
  itemNumber,
  pagination,
}: {
  itemNumber: number;
  pagination: boolean;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = itemNumber;

  // Reverse the feedbackData to show the last entry first
  const reversedFeedbackData = [...feedbackData].reverse();

  // Calculate the total number of pages
  const totalPages = Math.ceil(reversedFeedbackData.length / reviewsPerPage);

  // Get the reviews for the current page
  const currentReviews = reversedFeedbackData.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  // Handler for changing pages
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <section className="flex flex-col w-full justify-between">
      {currentReviews.map((item, i) => (
        <div key={i} className="flex flex-col md:flex-row lg:flex-row pb-6">
          <div className="flex flex-row justify-start items-center w-full md:w-1/3 lg:w-1/3 space-x-4 lg:space-x-4">
            <Image
              src={item.userAvatar}
              alt="user-image"
              width={1000}
              height={1000}
              className="w-[50px] h-[50px] object-cover"
              loading="lazy"
            />
            <div className="flex flex-col">
              <h3 className="text-white text-[14px] font-semibold">
                {item.firstName} {item.lastName}
              </h3>
              <p className="text-white text-[10px] font-thin">
                Current rating:{" "}
                <span className="font-bold">{item.currentRating}</span>
              </p>
              <p className="text-white text-[10px] font-thin">
                Total reviews:{" "}
                <span className="font-bold">{item.totalRatings}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-2/3 lg:w-2/3 mt-4 md:mt-0 lg:mt-0">
            <div className="flex flex-row space-x-2 items-center">
              <StarRatingComponent rating={item.currentRating.toString()} />
              <p className="text-white text-[10px] font-thin">
                {formatDate(item.createdAt)}
              </p>
            </div>

            <p className="text-white text-[10px] font-thin pt-4">
              {item.review}
            </p>
          </div>
        </div>
      ))}

      {/* Pagination controls */}
      {pagination && (
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-4 py-2 rounded-md text-white ${
                currentPage === index + 1 ? "bg-teal-500" : "bg-gray-800"
              } hover:bg-gray-700 focus:outline-none focus:bg-gray-700`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default ReviewsDisplayerComponent;
