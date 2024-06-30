"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaXTwitter, FaFacebook, FaInstagram, FaLink } from "react-icons/fa6";

import blogData from "../../../assets/app/blogData.json";
import NoResultsFoundComponent from "../NoResultsFoundComponent";

import { BlogDataParams, BlogDataItemProps } from "@/types";

const BlogPostBannerComponent = ({ params }: { params: BlogDataParams }) => {
  const [blog, setBlog] = useState<BlogDataItemProps | null>(null);

  useEffect(() => {
    const foundBlog = blogData.find(
      (blogItem) => blogItem.slug === params.slug
    );
    setBlog(foundBlog || null);
  }, [params.slug]);

  if (!blog) {
    return (
      <NoResultsFoundComponent
        title="No blog found!"
        message="Unfortunately, there was no blog found."
      />
    );
  }

  return (
    <section className="flex flex-col-reverse md:flex-row lg:flex-row w-full space-x-0 md:space-x-1 lg:space-x-4">
      {/* text section */}
      <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 justify-center items-star p-4">
        <h1 className="text-white text-3xl leading-none font-semibold pb-4">
          {blog.blogTitle}
        </h1>
        <p className="text-white text-[10px]">{blog.blogExcerpt}</p>

        <div className="flex flex-row justify-between pt-6 md:pt-10 lg:pt-10">
          <div className="flex flex-row w-full space-x-4 justify-center items-center">
            <Image
              priority
              src={blog.authorImage}
              alt={blog.blogTitle}
              width={1000}
              height={1000}
              className="w-[50px] h-[50px] object-cover rounded-full"
            />
            <div className="flex flex-col w-full">
              <p className="text-[12px] text-white font-bold">{blog.author}</p>
              <p className="text-[8px] md:text-[10px] lg:text-[10px] text-white font-normal pt-1">
                {blog.createdAt} - {blog.blogReadTime} min Read
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full justify-center items-center">
            <p className="text-[10px] text-white font-thin">Share this post</p>
            <div className="flex flex-row space-x-3 justify-center items-start pt-2">
              <a href="#">
                <FaXTwitter className="text-white size-3" />
              </a>
              <a href="#">
                <FaFacebook className="text-white size-3" />
              </a>
              <a href="#">
                <FaInstagram className="text-white size-3" />
              </a>
              <a href="#">
                <FaLink className="text-white size-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* image section */}
      <div className="flex flex-col w-full md:w-1/2 lg:w-1/2">
        <Image
          priority
          src={blog.blogImage}
          alt={blog.blogTitle}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default BlogPostBannerComponent;
