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

  const handleSubmit = () => {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !attachment ||
      !coverLetter.trim()
    ) {
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
      <div className="bg-dark-2 py-4 px-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/2 max-h-[85vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Apply for {jobTitle}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-row justify-between items-center space-x-4">
            <CustomTextInputComponent
              type="text"
              value={firstName}
              onChange={(text) => setFirstName(text)}
              label="First name"
              placeholder="Example"
            />

            <CustomTextInputComponent
              type="text"
              value={lastName}
              onChange={(text) => setLastName(text)}
              label="Last name"
              placeholder="Example"
            />
          </div>

          <div className="flex flex-row justify-between items-center space-x-4">
            <CustomTextInputComponent
              type="text"
              value={email}
              onChange={(text) => setEmail(text)}
              label="Email address"
              placeholder="example@company.com"
            />

            <CustomTextInputComponent
              type="text"
              value={phone}
              onChange={(text) => setPhone(text)}
              label="Phone number"
              placeholder="+27712345678"
            />
          </div>

          <CustomTextAreaInputComponent
            value={coverLetter}
            onChange={(text) => setCoverLetter(text)}
            label="Cover letter"
            placeholder="Say something to our hiring manager..."
          />

          <PdfPickerComponent onFileSelect={(file) => setAttachment(file)} />

          <div className="flex justify-end">
            <CustomButtonComponent onClick={handleSubmit} text="Apply" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyFormComponent;
