"use client";

import Image from "next/image";
import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";
import { SidebarBlogProps } from "@/types";

import categoryData from "../../../assets/app/blogCategories.json";
import tagData from "../../../assets/app/blogTags.json";
import authorData from "../../../assets/app/blogAuthors.json";
import { CustomTextInputComponent } from "@/components";

const SidebarBlogComponent = ({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  selectedTag,
  setSelectedTag,
  filterByAuthor,
  seeAllAuthor,
  setSeeAllAuthor,
  seeAllCategories,
  setSeeAllCategories,
  seeAllTags,
  setSeeAllTags,
  sortByDateDescending,
  sortByDateAscending,
}: SidebarBlogProps) => {
  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handleTagSelect = (tag: string | null) => {
    setSelectedTag(tag);
  };

  return (
    <section className="flex flex-col space-y-8">
      {/* sort by date section */}
      <div className="flex flex-col">
        <p className="text-white text-sm font-bold pb-4">Sort by Date</p>

        <div
          onClick={() => sortByDateDescending()}
          className={`flex flex-row space-x-2 pb-4 cursor-pointer ${
            selectedTag === null ? "text-teal-500" : "text-white"
          }`}
        >
          <p className="text-[12px] font-semibold">Newest First</p>
        </div>

        <div
          onClick={() => sortByDateAscending()}
          className={`flex flex-row space-x-2 cursor-pointer ${
            selectedTag === null ? "text-teal-500" : "text-white"
          }`}
        >
          <p className="text-[12px] font-semibold">Oldest First</p>
        </div>
      </div>

      <CustomTextInputComponent
        value={search}
        onChange={(text) => setSearch(text)}
        placeholder=""
        label="Search"
        type="text"
        search
      />

      {/* filter by author section */}
      <div className="flex flex-col">
        <p className="text-white text-sm font-bold pb-4">Filter by Author</p>

        <div
          onClick={() => filterByAuthor(null)}
          className={`flex flex-row space-x-2 pb-4 cursor-pointer ${
            selectedTag === null ? "text-teal-500" : "text-white"
          }`}
        >
          <p className="text-[12px] font-semibold">Clear Filter</p>
        </div>

        <div className="flex flex-wrap">
          {authorData
            .slice(0, seeAllAuthor ? authorData.length : 3)
            .map((item) => (
              <div
                key={item.id}
                onClick={() => filterByAuthor(item.author)}
                className="py-1 px-1 flex justify-center items-center rounded-md mb-2 mr-2 cursor-pointer space-x-1"
                style={{
                  backgroundColor:
                    selectedTag === item.author ? "#38B2AC" : "transparent",
                  border:
                    selectedTag === item.author
                      ? "2px solid #38B2AC"
                      : "2px solid #4A5568",
                }}
              >
                <Image
                  priority
                  src={item.authorImage}
                  alt={item.author}
                  width={1000}
                  height={1000}
                  className="w-3 h-3 object-cover rounded-full"
                />
                <p className="text-white text-[8px] font-semibold">
                  {item.author}
                </p>
              </div>
            ))}
        </div>

        <div
          onClick={() => setSeeAllAuthor()}
          className="flex flex-row space-x-2 cursor-pointer text-white"
        >
          <p className="text-[12px] font-semibold">
            {!seeAllAuthor ? "Show all" : "Show less"}
          </p>
        </div>
      </div>

      {/* category section */}
      <div className="flex flex-col">
        <p className="text-white text-sm font-bold pb-4">Category</p>

        <div
          onClick={() => handleCategorySelect(null)}
          className={`flex flex-row space-x-2 pb-4 cursor-pointer ${
            selectedCategory === null ? "text-teal-500" : "text-white"
          }`}
        >
          {selectedCategory === null ? (
            <FaRegDotCircle className="text-teal-500" />
          ) : (
            <FaRegCircle className="text-teal-500" />
          )}
          <p className="text-[12px] font-semibold">See All</p>
        </div>

        <div className="flex flex-wrap">
          {categoryData
            .slice(0, seeAllCategories ? authorData.length : 3)
            .map((item) => (
              <div
                key={item.id}
                onClick={() => handleCategorySelect(item.categoryName)}
                className="py-1 px-2 flex justify-center items-center rounded-md mb-2 mr-2 cursor-pointer"
                style={{
                  backgroundColor:
                    selectedCategory === item.categoryName
                      ? "#38B2AC"
                      : "transparent",
                  border:
                    selectedCategory === item.categoryName
                      ? "2px solid #38B2AC"
                      : "2px solid #4A5568",
                }}
              >
                <p className="text-white text-[8px] font-semibold">
                  {item.categoryName}
                </p>
              </div>
            ))}
        </div>

        <div
          onClick={() => setSeeAllCategories()}
          className="flex flex-row space-x-2 cursor-pointer text-white"
        >
          <p className="text-[12px] font-semibold">
            {!seeAllCategories ? "Show all" : "Show less"}
          </p>
        </div>
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

        <div className="flex flex-wrap">
          {tagData.slice(0, seeAllTags ? authorData.length : 3).map((item) => (
            <div
              key={item.id}
              onClick={() => handleTagSelect(item.tagName)}
              className="py-1 px-2 flex justify-center items-center rounded-md mb-2 mr-2 cursor-pointer"
              style={{
                backgroundColor:
                  selectedTag === item.tagName ? "#38B2AC" : "transparent",
                border:
                  selectedTag === item.tagName
                    ? "2px solid #38B2AC"
                    : "2px solid #4A5568",
              }}
            >
              <p className="text-white text-[8px] font-semibold">
                {item.tagName}
              </p>
            </div>
          ))}
        </div>

        <div
          onClick={() => setSeeAllTags()}
          className="flex flex-row space-x-2 cursor-pointer text-white"
        >
          <p className="text-[12px] font-semibold">
            {!seeAllTags ? "Show all" : "Show less"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SidebarBlogComponent;
