"use client";

import React, { useState } from "react";
import {
  CustomButtonComponent,
  CustomModalComponent,
  CustomTextInputComponent,
} from "@/components";

const JoinPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [phoneNumberError, setPhoneNumberError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const handleJoinButton = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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

    if (!phoneNumber) {
      setPhoneNumberError("Phone number is required");
      valid = false;
    } else {
      setPhoneNumberError("");
    }

    if (!email) {
      setEmailError("Email address is required");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!valid) return;

    // If valid, proceed to show success modal and reset form
    setShowModal(false);
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 5000);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
  };

  return (
    <div className="flex flex-col">
      {/* top video section */}
      <div className="relative flex flex-col h-[100vh] md:h-[100vh] lg:h-[100vh] w-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-fill"
          src="/video/member2.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute top-0 left-0 px-8 w-full h-full flex justify-start items-center bg-black bg-opacity-50">
          <div className="flex flex-col">
            <h1 className="text-3xl text-white font-bold">
              Always Better To Be A Member
              <br />
              <span className="text-[14px] text-white font-normal pt-6">
                Shop, Celebrate, and Benefit with the best of Spendio.
              </span>
            </h1>

            <div className="w-1/2 pt-4">
              <CustomButtonComponent
                text={"Join now"}
                onClick={handleJoinButton}
              />
            </div>
          </div>
        </div>
      </div>

      {/* modal section */}
      <CustomModalComponent show={showModal} onClose={handleCloseModal}>
        <form
          className="flex flex-col space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-xl text-white font-bold">Become a member</h2>

          <CustomTextInputComponent
            type="text"
            label={
              !firstNameError ? (
                "First name"
              ) : (
                <>
                  {" "}
                  {firstNameError && (
                    <p className="text-red-500 text-[8px]">{firstNameError}</p>
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

          <CustomTextInputComponent
            type="email"
            label={
              !emailError ? (
                "Email"
              ) : (
                <>
                  {" "}
                  {emailError && (
                    <p className="text-red-500 text-[8px]">{emailError}</p>
                  )}
                </>
              )
            }
            placeholder="example@company.com"
            value={email}
            onChange={(text) => setEmail(text)}
          />

          <CustomTextInputComponent
            type="tel"
            label={
              !phoneNumberError ? (
                "Phone number"
              ) : (
                <>
                  {" "}
                  {phoneNumberError && (
                    <p className="text-red-500 text-[8px]">
                      {phoneNumberError}
                    </p>
                  )}
                </>
              )
            }
            placeholder="+27123456789"
            value={phoneNumber}
            onChange={(text) => setPhoneNumber(text)}
          />

          <CustomButtonComponent text="Register" onClick={handleSubmit} />
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
          <p>Your form has been submitted successfully.</p>
        </div>
      </CustomModalComponent>
    </div>
  );
};

export default JoinPage;
