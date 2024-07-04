"use client";

import {
  CustomButtonComponent,
  CustomTextAreaInputComponent,
  CustomTextInputComponent,
} from "@/components";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ContactUsPages = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [subjectError, setSubjectError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  const handleAddNewMember = () => {
    router.push("/resources/join");
  };

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !subject || !message) {
      setFirstNameError("First name is required");
      setLastNameError("Last name is required");
      setEmailError("Email address is required");
      setSubjectError("Subject is required");
      setMessageError("Message is required");
      return;
    }

    const data = {
      firstName,
      lastName,
      email,
      subject,
      message,
    };

    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setSubjectError("");
    setMessageError("");

    console.log("captured data: ", data);

    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="flex flex-col pt-20">
      {/* top title section */}
      <div className="mx-auto container flex flex-col pb-6">
        <p className="text-white text-s text-center font-thin w-[90%] self-center">
          At Spendio, we value your feedback, questions, and concerns. Whether
          you need assistance with our services, have a query about your
          account, or just want to learn more about what we do, our team is here
          to support you. Feel free to reach out to us through any of the
          methods below.
          <br />
          <br />
          We look forward to connecting with you!
        </p>
      </div>

      <h1 className="text-white text-3xl text-center font-bold self-center">
        Contact us - We're here to help
      </h1>

      {/* form section */}
      <div className="mx-auto container flex flex-col py-10 space-y-4">
        <div className="flex flex-row justify-between space-x-4 w-full">
          <CustomTextInputComponent
            type="text"
            label={
              !firstNameError ? (
                "First name"
              ) : (
                <>
                  {firstNameError && (
                    <p className="text-red-500 text-[8px]">{firstNameError}</p>
                  )}
                </>
              )
            }
            value={firstName}
            onChange={(text) => setFirstName(text)}
            placeholder="Example"
          />

          <CustomTextInputComponent
            type="text"
            label={
              !lastNameError ? (
                "Last name"
              ) : (
                <>
                  {lastNameError && (
                    <p className="text-red-500 text-[8px]">{lastNameError}</p>
                  )}
                </>
              )
            }
            value={lastName}
            onChange={(text) => setLastName(text)}
            placeholder="Example"
          />
        </div>

        <CustomTextInputComponent
          type="email"
          label={
            !emailError ? (
              "Email address is required"
            ) : (
              <>
                {emailError && (
                  <p className="text-red-500 text-[8px]">{emailError}</p>
                )}
              </>
            )
          }
          value={email}
          onChange={(text) => setEmail(text)}
          placeholder="example@company.com"
        />

        <CustomTextInputComponent
          type="text"
          label={
            !subjectError ? (
              "Subject"
            ) : (
              <>
                {subjectError && (
                  <p className="text-red-500 text-[8px]">{subjectError}</p>
                )}
              </>
            )
          }
          value={email}
          onChange={(text) => setSubject(text)}
          placeholder="Example"
        />

        <div className="flex flex-col space-y-1">
          <CustomTextAreaInputComponent
            type="text"
            label={
              !messageError ? (
                "Message"
              ) : (
                <>
                  {messageError && (
                    <p className="text-red-500 text-[8px]">{messageError}</p>
                  )}
                </>
              )
            }
            value={message}
            onChange={(text) => setMessage(text)}
            placeholder="How can we help you?"
          />
        </div>

        <div className="w-1/2">
          <CustomButtonComponent text="Submit" onClick={handleSubmit} />
        </div>
      </div>

      {/* information section */}
      <div className="mx-auto container flex flex-col pb-10 pt-4">
        <div className="flex flex-row justify-between w-full space-x-4">
          <div className="flex flex-col items-start w-[33%]">
            <h4 className="text-white text-l font-semibold pb-4">
              Email Address
            </h4>
            <p className="text-white text-xs font-thin">
              For general inquiries, please email us at{" "}
              <span className="text-teal-500 cursor-pointer">
                <a href="mailto:info@Spendio.com">info@Spendio.com</a>
              </span>
              .
            </p>
          </div>

          <div className="flex flex-col w-[33%] items-center">
            <h4 className="text-white text-l text-center font-semibold pb-4">
              Tel Number
            </h4>
            <p className="text-white text-xs text-center font-thin">
              You can call us at{" "}
              <span className="text-teal-500 cursor-pointer">
                <a href="tel:+123-456-7890">+123-456-7890</a>
              </span>
              . Our customer support team is available Monday to Friday, from 9
              AM to 6 PM.
            </p>
          </div>

          <div className="flex flex-col w-[33%] items-end">
            <h4 className="text-white text-l font-semibold pb-4">
              Our Address
            </h4>
            <p className="text-white text-xs font-thin text-end">
              Spendio Headquarters
              <br />
              123 Innovation Drive Tech City,
              <br />
              TX 75001
              <br />
              United States
            </p>
          </div>
        </div>
      </div>

      {/* be a member section */}
      <div className="flex flex-row w-full p-6 justify-center items-center bg-gray-700 space-x-6">
        <h1 className="text-sm md:text-3xl lg:text-3xl text-white font-bold">
          Become a member & Get 20% Off
        </h1>
        <CustomButtonComponent
          text="Sign up for free"
          onClick={handleAddNewMember}
        />
      </div>
    </div>
  );
};

export default ContactUsPages;
