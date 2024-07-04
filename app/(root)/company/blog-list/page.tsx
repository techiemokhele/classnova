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

  useEffect(() => {
    let filtered = blogData;

    if (search) {
      filtered = filtered.filter((blog: BlogDataItemProps) =>
        blog.blogTitle.toLowerCase().includes(search.toLowerCase())
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
  }, [search, selectedCategory, selectedTag]);

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

  const sortByDateDescending = () => {
    const sortedByDescendingDate = [...filteredBlogs].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setFilteredBlogs(sortedByDescendingDate);
  };

  const sortByDateAscending = () => {
    const sortedByAscendingDate = [...filteredBlogs].sort(
      (b, a) => new Date(a.createdAt) - new Date(b.createdAt)
    );
    setFilteredBlogs(sortedByAscendingDate);
  };

  const seeAllAuthors = () => [setSeeAllAuthor(!seeAllAuthor)];
  const seeAllCategorys = () => [setSeeAllAuthor(!seeAllAuthor)];
    const seeAllTags = () => [setSeeAllAuthor(!seeAllAuthor)];

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
            filterByAuthor={filterByAuthor}
            seeAllAuthor={seeAllAuthor}
            setSeeAllAuthor={seeAllAuthors}
            seeAllCategories={seeAllCategory}
            setSeeAllCategories={seeAllCategorys}
            seeAllTags={seeAllTag}
            setSeeAllTags={seeAllTags}
            sortByDateDescending={sortByDateDescending}
            sortByDateAscending={sortByDateAscending}
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
