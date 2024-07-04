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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const blogsPerPage = 6;

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
    setCurrentPage(1);
  }, [search, selectedCategory, selectedTag]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
            <>
              <BlogListContentComponent blogs={currentBlogs} />
              {totalPages > 1 && (
                <div className="flex justify-center mt-4">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => paginate(i + 1)}
                      className={` text-white px-3 py-1 mx-1 rounded-md ${
                        currentPage === i + 1
                          ? "bg-teal-500"
                          : "bg-gray-800"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </>
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
