"use client";

import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";

import { SidebarBlogProps } from "@/types";
import categoryData from "../../../assets/app/blogCategories.json";
import { CustomTextInputComponent } from "@/components";

const SidebarBlogComponent = ({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
}: SidebarBlogProps) => {
  const handleCategorySelect = (category: string | null) => {
    if (category === selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
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
          className="flex flex-row space-x-2 pb-4 cursor-pointer"
        >
          <FaRegCircle className="text-teal-500" />
          <p className="text-white text-[12px] font-semibold">See All</p>
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
