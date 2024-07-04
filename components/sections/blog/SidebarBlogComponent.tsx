"use client";

import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";
import { SidebarBlogProps } from "@/types";
import categoryData from "../../../assets/app/blogCategories.json";
import tagData from "../../../assets/app/blogTags.json";
import { CustomTextInputComponent } from "@/components";

const SidebarBlogComponent = ({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  selectedTag,
  setSelectedTag,
}: SidebarBlogProps) => {
  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handleTagSelect = (tag: string | null) => {
    setSelectedTag(tag);
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

        <div
          onClick={() => handleCategorySelect(null)}
          className={`flex flex-row space-x-2 pb-4 cursor-pointer ${
            selectedCategory === null ? "text-teal-500" : "text-white"
          }`}
        >
          {selectedTag === null ? (
            <FaRegDotCircle className="text-teal-500" />
          ) : (
            <FaRegCircle className="text-teal-500" />
          )}
          <p className="text-[12px] font-semibold">See All</p>
        </div>

        {categoryData.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCategorySelect(item.categoryName)}
            className="flex flex-row space-x-2 pb-4 cursor-pointer"
          >
            {selectedCategory === item.categoryName ? (
              <FaRegDotCircle className="text-teal-500" />
            ) : (
              <FaRegCircle className="text-teal-500" />
            )}
            <p className="text-white text-[10px] font-semibold">
              {item.categoryName}
            </p>
          </div>
        ))}
      </div>

      {/* tags section */}
      <div className="flex flex-col">
        <p className="text-white text-sm font-bold pb-4">Tags</p>

        <div
          onClick={() => handleTagSelect(null)}
          className={`flex flex-row space-x-2 pb-4 cursor-pointer ${
            selectedTag === null ? "text-teal-500" : "text-white"
          }`}
        >
          {selectedTag === null ? (
            <FaRegDotCircle className="text-teal-500" />
          ) : (
            <FaRegCircle className="text-teal-500" />
          )}
          <p className="text-[12px] font-semibold">See All</p>
        </div>

        {tagData.map((item) => (
          <div
            key={item.id}
            onClick={() => handleTagSelect(item.tagName)}
            className="flex flex-row space-x-2 pb-4 cursor-pointer"
          >
            {selectedTag === item.tagName ? (
              <FaRegDotCircle className="text-teal-500" />
            ) : (
              <FaRegCircle className="text-teal-500" />
            )}
            <p className="text-white text-[10px] font-semibold">
              {item.tagName}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SidebarBlogComponent;
