"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdArrowOutward } from "react-icons/md";
import { BlogListContentProps } from "@/types";

const BlogListContentComponent = ({ blogs }: BlogListContentProps) => {
  const router = useRouter();

  const handleNavigation = (slug: string) => {
    router.push(`/company/blog/${slug}`);
  };

  return (
    <div className="flex flex-wrap w-full gap-6">
      {blogs
        .map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)] pb-4"
          >
            <div className="flex flex-col space-y-2">
              <Image
                priority
                src={item.blogImage}
                alt={item.blogTitle}
                width={1000}
                height={1000}
                className="w-full h-[250px] md:h-[200px] lg:h-[180px] object-cover cursor-pointer"
                onClick={() => handleNavigation(item.slug)}
              />

              {/* excerpt and description section */}
              <div className="flex flex-col space-y-2 pb-2">
                {/* author and date section */}
                <div className="flex flex-row justify-between pb-1">
                  <div className="flex flex-row space-x-2 items-center">
                    <Image
                      priority
                      src={item.authorImage}
                      alt={item.author}
                      width={1000}
                      height={1000}
                      className="w-[20px] h-[20px] rounded-full object-cover"
                    />
                    <p className="text-white text-[8px] font-semibold">
                      {item.author}
                    </p>
                  </div>

                  <div className="flex justify-end items-center">
                    <p className="text-white text-[8px] font-thin">
                      {item.createdAt}
                    </p>
                  </div>
                </div>

                {/* title and router section */}
                <div className="flex flex-row justify-between w-full">
                  <div className="w-[90%]">
                    <h2 className="text-m font-bold text-white line-clamp-2">
                      {item.blogTitle}
                    </h2>
                  </div>

                  <div
                    onClick={() => handleNavigation(item.slug)}
                    className="flex h-6 w-6 md:h-4 md:w-4 lg:h-4 lg:w-4 justify-center items-center border-2 border-teal-500 hover:bg-teal-500 rounded-full cursor-pointer"
                  >
                    <MdArrowOutward className="text-white size-6" />
                  </div>
                </div>

                <p className="text-[10px] text-white font-thin line-clamp-3">
                  {item.blogExcerpt}
                </p>
              </div>

              {/* category section */}
              <div className="flex flex-wrap space-x-2">
                {item.blogCategory.map((category) => (
                  <div
                    key={category}
                    className="flex justify-center items-center px-3 border-2 border-teal-500 hover:bg-teal-500 rounded-full"
                  >
                    <p className="text-white text-[10px] font-semibold">
                      {category}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
        .reverse()}
    </div>
  );
};

export default BlogListContentComponent;
