"use client";

import { useState } from "react";
import {
  CustomButtonComponent,
  CustomModalComponent,
  CustomTextAreaInputComponent,
  CustomTextInputComponent,
  ReviewsAnalyticsComponent,
  ReviewsDisplayerComponent,
} from "@/components";

const FeedbackPages = () => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [currentRating, setCurrentRating] = useState<string>("");
  const [review, setReview] = useState<string>("");
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [currentRatingError, setCurrentRatingError] = useState<string>("");
  const [reviewError, setReviewError] = useState<string>("");

  const handleWrite = () => {
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
  };

  const handleSubmit = () => {
    let valid = true;

    if (!firstName) {
      setFirstNameError("First name is required");
      valid = false;
    } else {
      setFirstNameError("");
    }

    if (!lastName) {
      setLastNameError("Last name is required");
      valid = false;
    } else {
      setLastNameError("");
    }

    if (!currentRating) {
      setCurrentRatingError("Current rating is required and must be between 0 and 5");
      valid = false;
    } else {
      setCurrentRatingError("");
    }

    if (!review) {
      setReviewError("Review message is required");
      valid = false;
    } else {
      setReviewError("");
    }

    if (!valid) return;

    setShowAddModal(false);
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 5000);

    setFirstName("");
    setLastName("");
    setCurrentRating("");
    setReview("");
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

      <div className="flex flex-row justify-between md:my-6 lg:my-6">
        <h2 className="text-white text-lg font-bold">Our customer reviews</h2>
        <CustomButtonComponent text="Leave a review" onClick={handleWrite} />
      </div>

      {/* add review modal section */}
      <CustomModalComponent show={showAddModal} onClose={handleCloseModal}>
        <form
          className="flex flex-col space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-xl text-white font-bold">
            Write a review for us
          </h2>

          <div className="flex flex-row justify-between space-x-4">
            <CustomTextInputComponent
              type="text"
              label={
                !firstNameError ? (
                  "First name"
                ) : (
                  <>
                    {" "}
                    {firstNameError && (
                      <p className="text-red-500 text-[8px]">
                        {firstNameError}
                      </p>
                    )}
                  </>
                )
              }
              placeholder="example"
              value={firstName}
              onChange={(text) => setFirstName(text)}
            />

            <CustomTextInputComponent
              type="text"
              label={
                !lastNameError ? (
                  "Last name"
                ) : (
                  <>
                    {" "}
                    {lastNameError && (
                      <p className="text-red-500 text-[8px]">{lastNameError}</p>
                    )}
                  </>
                )
              }
              placeholder="example"
              value={lastName}
              onChange={(text) => setLastName(text)}
            />
          </div>

          <CustomTextInputComponent
            type="number"
            label={
              !currentRatingError ? (
                "Current rating"
              ) : (
                <>
                  {" "}
                  {currentRatingError && (
                    <p className="text-red-500 text-[8px]">
                      {currentRatingError}
                    </p>
                  )}
                </>
              )
            }
            placeholder="2"
            value={currentRating}
            onChange={(text) => setCurrentRating(text)}
          />

          <CustomTextAreaInputComponent
            type="text"
            label={
              !reviewError ? (
                "Review"
              ) : (
                <>
                  {" "}
                  {reviewError && (
                    <p className="text-red-500 text-[8px]">{reviewError}</p>
                  )}
                </>
              )
            }
            placeholder="Tell us about your experience..."
            value={review}
            onChange={(text) => setReview(text)}
          />

          <CustomButtonComponent text="Add review" onClick={handleSubmit} />
        </form>
      </CustomModalComponent>

      {/* success modal section */}
      <CustomModalComponent
        show={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      >
        <div className="flex flex-col justify-center items-center text-white text-center">
          <img
            src="/images/web/confetti.webp"
            alt="success-icon"
            className="w-[80px] h-[80px] rounded-md self-center"
          />

          <h2 className="text-xl font-bold pt-4 pb-2">Success!</h2>
          <p>Your review has been submitted successfully.</p>
        </div>
      </CustomModalComponent>

      <div className="mt-6">
        <ReviewsDisplayerComponent itemNumber={5} pagination />
      </div>
    </div>
  );
};

export default FeedbackPages;
