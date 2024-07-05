"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { BlogDataItemProps } from "@/types";
import blogData from "../../../assets/app/blogData.json";
import NoResultsFoundComponent from "../NoResultsFoundComponent";

const BlogRelatedStoriesComponent = ({
  params,
}: {
  params: { slug: string };
}) => {
  const [relatedBlogs, setRelatedBlogs] = useState<BlogDataItemProps[]>([]);
  const router = useRouter();

  const handleNavigation = (slug: string) => {
    router.push(`/company/blog/${slug}`);
  };

  useEffect(() => {
    const currentBlog = blogData.find((blog) => blog.slug === params.slug);
    if (currentBlog) {
      const relatedPosts = blogData.filter(
        (blog) =>
          blog.slug !== currentBlog.slug &&
          blog.blogCategory.some((category) =>
            currentBlog.blogCategory.includes(category)
          )
      );
      setRelatedBlogs(relatedPosts.slice(0, 3));
    }
  }, [params.slug]);

  if (relatedBlogs.length === 0) {
    return (
      <NoResultsFoundComponent
        title="No related blogs found!"
        message="Unfortunately, there are no related blogs found."
      />
    );
  }

  return (
    <section className="flex flex-col w-full space-x-0 md:space-x-2 lg:space-x-2 space-y-4 md:space-y-3 lg:space-y-3">
      {relatedBlogs.map((blog) => (
        <div key={blog.id} className="px-2">
          <div
            onClick={() => handleNavigation(blog.slug)}
            className="w-full lg:w-auto flex-row flex justify-start items-start space-x-4"
          >
            <Image
              priority
              src={blog.blogImage}
              alt={blog.blogTitle}
              height={1000}
              width={1000}
              className="w-[100px] h-[40px] md:w-[100px] lg:w-[40px] object-cover self-center"
            />

            <div className="flex flex-col justify-center items-start lg:justify-start lg:items-start">
              <p
                onClick={() => handleNavigation(blog.slug)}
                className="text-[12px] font-bold text-white line-clamp-1 md:line-clamp-1 lg:line-clamp-2 cursor-pointer"
              >
                {blog.blogTitle}
              </p>
              <div className="flex flex-row space-x-1 justify-center place-items-center">
                <Image
                  priority
                  src={blog.authorImage}
                  alt={blog.blogTitle}
                  height={1000}
                  width={1000}
                  className="w-[20px] h-[20px] md:w-[10px] md:h-[10px] object-cover self-center rounded-full"
                />
                <p className="text-white text-xs font-normal">
                  - {blog.author} - {blog.createdAt} - {blog.blogReadTime} min
                  Reads
                </p>
              </div>
              <p className="text-xs text-gray-300 line-clamp-1 md:line-clamp-1 lg:line-clamp-1">
                {blog.blogExcerpt}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogRelatedStoriesComponent;
