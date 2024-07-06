"use client";

import { useState, useEffect } from "react";
import blogData from "../../../../assets/app/blogData.json";
import {
  HeaderBlogBannerComponent,
  SidebarBlogComponent,
  BlogListContentComponent,
  NoResultsFoundComponent,
} from "@/components";
import { BlogDataItemProps } from "@/types";

const BlogHomePage = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredBlogs, setFilteredBlogs] =
    useState<BlogDataItemProps[]>(blogData);
  const [seeAllAuthor, setSeeAllAuthor] = useState<boolean>(false);
  const [seeAllCategory, setSeeAllCategory] = useState<boolean>(false);
  const [seeAllTag, setSeeAllTag] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const blogsPerPage = 6;

  useEffect(() => {
    let filtered = blogData;

    if (search) {
      filtered = filtered.filter(
        (blog: BlogDataItemProps) =>
          blog.blogTitle.toLowerCase().includes(search.toLowerCase()) ||
          blog.blogExcerpt.toLowerCase().includes(search.toLowerCase()) ||
          blog.author.toLowerCase().includes(search.toLowerCase()) ||
          blog.createdAt.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((blog: BlogDataItemProps) =>
        blog.blogCategory.includes(selectedCategory)
      );
    }

    if (selectedTag) {
      filtered = filtered.filter((blog: BlogDataItemProps) =>
        blog.blogTag.includes(selectedTag)
      );
    }

    setFilteredBlogs(filtered);
    setCurrentPage(1);
  }, [search, selectedCategory, selectedTag]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const filterByAuthor = (author: string | null) => {
    if (author === null) {
      setFilteredBlogs(blogData);
    } else {
      const filteredByAuthor = blogData.filter(
        (blog: BlogDataItemProps) =>
          blog.author.toLowerCase() === author.toLowerCase()
      );
      setFilteredBlogs(filteredByAuthor);
    }
  };

  const seeAllAuthors = () => [setSeeAllAuthor(!seeAllAuthor)];
  const seeAllCategorys = () => [setSeeAllCategory(!seeAllCategory)];
  const seeAllTags = () => [setSeeAllTag(!seeAllTag)];

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, selectedCategory, selectedTag]);

  return (
    <div className="mx-auto container flex flex-col pt-16">
      <HeaderBlogBannerComponent />

      <div className="flex-grow border-t border-gray-400 pb-10"></div>

      <div className="flex flex-col md:flex-row lg:flex-row space-x-0 md:space-x-6 lg:space-x-6 pb-10">
        <div className="hidden md:block lg:block w-1/4 flex-col px-2">
          <SidebarBlogComponent
            search={search}
            setSearch={setSearch}
            filterByAuthor={filterByAuthor}
            seeAllAuthor={seeAllAuthor}
            setSeeAllAuthor={seeAllAuthors}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            seeAllCategories={seeAllCategory}
            setSeeAllCategories={seeAllCategorys}
            seeAllTags={seeAllTag}
            setSeeAllTags={seeAllTags}
          />
        </div>

        <div className="w-full flex flex-col">
          {filteredBlogs.length > 0 ? (
            <>
              {currentPage > 1 && (
                <div className="flex justify-center mt-0 pb-4">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => paginate(i + 1)}
                      className={`px-3 py-1 mx-1 rounded-md text-white ${
                        currentPage === i + 1 ? "bg-teal-500" : "bg-gray-500"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}

              <BlogListContentComponent blogs={currentBlogs} />

              {totalPages > 1 && (
                <div className="flex justify-center mt-4">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`mx-1 px-4 py-2 rounded-md text-white ${
                        currentPage === index + 1
                          ? "bg-teal-500"
                          : "bg-gray-800"
                      } hover:bg-gray-700 focus:outline-none focus:bg-gray-700`}
                    >
                      {index + 1}
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
