"use client";

import { useState, useEffect } from "react";
import blogData from "../../../../assets/app/blogData.json";
import {
  HeaderBlogBannerComponent,
  SidebarBlogComponent,
  BlogListContentComponent,
  NoResultsFoundComponent,
} from "@/components";

const BlogHomePage = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);

  useEffect(() => {
    let filtered = blogData;

    if (search) {
      filtered = filtered.filter((blog) =>
        blog.blogTitle.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((blog) =>
        blog.blogCategory.includes(selectedCategory)
      );
    }

    if (selectedTag) {
      filtered = filtered.filter((blog) => blog.blogTag.includes(selectedTag));
    }

    setFilteredBlogs(filtered);
  }, [search, selectedCategory, selectedTag]);

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
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
        </div>

        <div className="w-full flex flex-col">
          {filteredBlogs.length > 0 ? (
            <BlogListContentComponent blogs={filteredBlogs} />
          ) : (
            <NoResultsFoundComponent
              title="No blogs found"
              message="Try using different keywords or filtering methods for better results"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogHomePage;
