"use client";

import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";

import { CustomTextInputComponent } from "@/components";
import categoryData from "../../../assets/app/blogCategories.json";

const SidebarBlogComponent = () => {
  const [search, setSearch] = useState<string>("");
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleSelectedCategory = () => {
    setIsSelected(!isSelected);
  };

  return (
    <section className="flex flex-col space-y-8">
      <CustomTextInputComponent
        value={search}
        onChange={(text) => setSearch(text)}
        placeholder=""
        label="Search"
        type="text"
        search
      />

      {/* category section */}
      <div className="flex flex-col">
        <p className="text-white text-sm font-bold pb-4">Categories</p>
        {categoryData.map((item) => (
          <div
            key={item.id}
            onClick={handleSelectedCategory}
            className="flex flex-row space-x-2 pb-4 cursor-pointer"
          >
            {isSelected ? (
              <FaRegDotCircle className="text-teal-500" />
            ) : (
              <FaRegCircle className="text-teal-500" />
            )}
            <p className="text-white text-[12px] font-semibold">
              {item.categoryName}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SidebarBlogComponent;
