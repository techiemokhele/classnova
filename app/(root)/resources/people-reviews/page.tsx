"use client";

import {
  CustomButtonComponent,
  ReviewsAnalyticsComponent,
  ReviewsDisplayerComponent,
} from "@/components";
import { useRouter } from "next/navigation";

const FeedbackPages = () => {
  const router = useRouter();

  const handleWrite = () => {
    router.push("/help/add-review");
  };

  return (
    <div className="flex flex-col pt-16 pb-6 mx-auto container">
      <div className="flex flex-col items-start lg:items-start mb-6">
        <h1 className="text-3xl text-white font-bold lg:self-start self-center">
          Reviews
        </h1>
        <p className="text-[12px] text-white text-center lg:text-start font-thin py-4">
          At ClassNova, we strive to provide the best services and benefits to
          our members, and your feedback is crucial in helping us achieve that
          goal. Read on to see what others are saying about their journey with
          ClassNova, and feel free to share your own experiences. Your voice
          matters to us!
        </p>
      </div>

      <ReviewsAnalyticsComponent />

      <div className="flex-grow border-t border-gray-400 my-6"></div>

      <div className="md:my-6 lg:my-6 self-end">
        <CustomButtonComponent text="Leave a review" onClick={handleWrite} />
      </div>

      <div className="mt-6">
        <ReviewsDisplayerComponent itemNumber={5} pagination />
      </div>
    </div>
  );
};

export default FeedbackPages;
