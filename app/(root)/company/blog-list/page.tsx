"use client";

import { useState, useEffect } from "react";

import blogData from "../../../../assets/app/blogData.json";
import {
  HeaderBlogBannerComponent,
  SidebarBlogComponent,
  BlogListContentComponent,
} from "@/components";

const BlogHomePage = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);

  useEffect(() => {
    let filtered = blogData;

    if (selectedCategory) {
      filtered = filtered.filter((blog) =>
        blog.blogCategory.includes(selectedCategory)
      );
    }

    if (search) {
      filtered = filtered.filter((blog) =>
        blog.blogTitle.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredBlogs(filtered);
  }, [search, selectedCategory]);

  return (
    <div className="mx-auto container flex flex-col pt-16">
      <HeaderBlogBannerComponent />

      <div className="flex-grow border-t border-gray-400 pb-10"></div>

      <div className="flex flex-col md:flex-row lg:flex-row space-x-0 md:space-x-6 lg:space-x-6 pb-10">
        <div className="hidden md:block lg:block w-1/4 flex-col px-2">
          <SidebarBlogComponent
            search={search}
            setSearch={setSearch}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="w-full flex flex-col">
          <BlogListContentComponent blogs={filteredBlogs} />
        </div>
      </div>
    </div>
  );
};

export default BlogHomePage;
