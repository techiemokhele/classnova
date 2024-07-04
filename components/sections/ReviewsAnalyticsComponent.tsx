"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FcRatings, FcRating } from "react-icons/fc";

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { formatNumber } from "@/libs/utils";
import StarRatingComponent from "./StarRatingComponent";

const ReviewsAnalyticsComponent = () => {
  const data = {
    labels: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
    datasets: [
      {
        label: "Number of Reviews",
        data: [500, 1000, 2000, 2500, 5000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <section className="flex flex-col md:flex-row lg:flex-row space-y-8 md:space-y-0 lg:space-y-0 justify-between">
      <div className="flex flex-row justify-between items-center">
        {/* mobile view */}
        <div className="flex flex-col lg:flex-row md:flex-row">
          <div className="flex flex-col justify-center items-start lg:items-start space-y-2">
            <div className="bg-gray-800 rounded-xl h-10 w-10 justify-center items-center flex">
              <FcRating />
            </div>

            <h1 className="text-white font-bold text-[14px]">Total Feedback</h1>
            <p className="text-white text-[20px] font-thin">
              {formatNumber(10000)}
            </p>
            <p className="text-white text-xs font-thin">
              Growth in reviews on this year
            </p>
          </div>
        </div>

        <div className="flex flex-col md:hidden lg:hidden justify-center items-center lg:items-start space-y-2">
          <div className="bg-gray-800 rounded-xl h-10 w-10 justify-center items-center flex">
            <FcRatings />
          </div>

          <h1 className="text-white font-bold text-[14px]">Average Rating</h1>
          <div className="flex flex-row items-center">
            <p className="text-white text-[20px] font-thin mr-2">4.5/5</p>
            <span>
              <StarRatingComponent rating={4.5} />
            </span>
          </div>
          <p className="text-white text-xs font-thin">
            Average rating on this year
          </p>
        </div>
      </div>

      {/* dekstop view */}
      <div className="hidden md:block lg:block flex-col justify-center items-center pt-10 space-y-2">
        <div className="bg-gray-800 rounded-xl h-10 w-10 justify-center items-center flex">
          <FcRatings />
        </div>

        <h1 className="text-white font-bold text-[14px]">Average Rating</h1>
        <div className="flex flex-row items-center">
          <p className="text-white text-[20px] font-thin mr-2">5.0/5</p>
          <span>
            <StarRatingComponent rating={5} />
          </span>
        </div>
        <p className="text-white text-xs font-thin">
          Average rating on this year
        </p>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-white font-bold text-[14px]">Overall Stats</h1>
        <p className="text-white text-[12px] font-thin">
          {formatNumber(10000)}
        </p>
        <div className="mt-4">
          <Bar data={data} options={options} />
        </div>
      </div>
    </section>
  );
};

export default ReviewsAnalyticsComponent;
