"use client";

import { useState } from "react";

type PdfPickerComponentProps = {
  onFileSelect: (file: File) => void;
};

const PdfPickerComponent = ({ onFileSelect }: PdfPickerComponentProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-[12px] font-medium text-white justify-center items-start space-x-4">
        Attachment{" "}
        {selectedFile && (
          <span className="text-xs text-gray-400">{selectedFile.name}</span>
        )}
      </label>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="mt-2 block w-full text-transparent border-teal-300 rounded-md shadow-sm"
      />
    </div>
  );
};

export default PdfPickerComponent;
