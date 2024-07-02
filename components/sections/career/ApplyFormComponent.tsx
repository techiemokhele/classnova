"use client";

import { useState } from "react";
import CustomTextInputComponent from "../../common/CustomTextInputComponent";
import CustomTextAreaInputComponent from "../../common/CustomTextAreaInputComponent";
import PdfPickerComponent from "../../common/PdfPickerComponent";
import CustomButtonComponent from "@/components/common/CustomButtonComponent";

type JobApplyParams = {
  jobTitle: string;
  onClose: () => void;
  onSubmit: (applicationData: any) => void;
};

const ApplyFormComponent = ({
  jobTitle,
  onClose,
  onSubmit,
}: JobApplyParams) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [attachment, setAttachment] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<string>("");

  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [attachmentError, setAttachmentError] = useState<string>("");
  const [coverLetterError, setCoverLetterError] = useState<string>("");

  const handleSubmit = () => {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !attachment ||
      !coverLetter.trim()
    ) {
      setFirstNameError(!firstName.trim() ? "This field is required" : "");
      setLastNameError(!lastName.trim() ? "This field is required" : "");
      setPhoneError(!phone.trim() ? "This field is required" : "");
      setEmailError(!email.trim() ? "This field is required" : "");
      setAttachmentError(!attachment ? "This field is required" : "");
      setCoverLetterError(!coverLetter.trim() ? "This field is required" : "");
      return;
    }

    const applicationData = {
      firstName,
      lastName,
      phone,
      email,
      attachment,
      coverLetter,
    };

    setFirstNameError("");
    setLastNameError("");
    setPhoneError("");
    setEmailError("");
    setAttachmentError("");
    setCoverLetterError("");

    onSubmit(applicationData);

    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setAttachment(null);
    setCoverLetter("");
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-10">
      <div className="bg-dark-2 py-4 px-6 rounded-lg w-11/12 md:w-10/11 lg:w-9/10 h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-bold text-white">
            Apply for <span className="text-teal-500">{jobTitle}</span>
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-row justify-between items-center space-x-4">
            <div className="flex flex-col w-1/2 space-y-1">
              <CustomTextInputComponent
                type="text"
                value={firstName}
                onChange={(text) => setFirstName(text)}
                label="First name"
                placeholder="Example"
              />
              {firstNameError && (
                <p className="text-red-500 text-[10px]">{firstNameError}</p>
              )}
            </div>

            <div className="flex flex-col w-1/2 space-y-1">
              <CustomTextInputComponent
                type="text"
                value={lastName}
                onChange={(text) => setLastName(text)}
                label="Last name"
                placeholder="Example"
              />
              {lastNameError && (
                <p className="text-red-500 text-[10px]">{lastNameError}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <CustomTextInputComponent
              type="email"
              value={email}
              onChange={(text) => setEmail(text)}
              label="Email address"
              placeholder="example@company.com"
            />
            {emailError && (
              <p className="text-red-500 text-[10px]">{emailError}</p>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <CustomTextInputComponent
              type="tel"
              value={phone}
              onChange={(text) => setPhone(text)}
              label="Phone number"
              placeholder="+27712345678"
            />
            {phoneError && (
              <p className="text-red-500 text-[10px]">{phoneError}</p>
            )}
          </div>

          <div className="flex flex-col space-y-0">
            <CustomTextAreaInputComponent
              value={coverLetter}
              onChange={(text) => setCoverLetter(text)}
              label="Cover letter"
              placeholder="Say something to our hiring manager..."
            />
            {coverLetterError && (
              <p className="text-red-500 text-[10px]">{coverLetterError}</p>
            )}
          </div>

          <div
            className={`flex flex-col space-y-1 p-2 rounded-md border-2 ${
              attachment !== null
                ? "border-teal-500"
                : attachmentError
                ? "border-red-500"
                : "border-gray-500"
            }`}
          >
            <PdfPickerComponent onFileSelect={(file) => setAttachment(file)} />
          </div>

          <div className="flex justify-end">
            <CustomButtonComponent onClick={handleSubmit} text="Apply" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyFormComponent;
