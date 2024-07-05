"use client";

import {
  BlogDescriptionComponent,
  BlogPostBannerComponent,
  BlogRelatedStoriesComponent,
} from "@/components";

type Params = {
  slug: string;
};

const BlogSinglePage = ({ params }: { params: Params }) => {
  return (
    <div className="flex flex-col py-16">
      <BlogPostBannerComponent params={params} />

      <div className="flex flex-row w-1/7 space-x-2 pt-0 md:pt-10 lg:pt-10 mx-4 ">
        <div className="w-full md:w-[70%] lg:w-[70%]">
          <BlogDescriptionComponent params={params} />

          {/* mobile view */}
          <div className="md:hidden lg:hidden px-4 py-2 mt-4 bg-gray-800 rounded-md">
            <p className="text-white text-base font-bold pb-4">
              Related stories
            </p>
            <BlogRelatedStoriesComponent params={params} />
          </div>
        </div>

        {/* desktop view */}
        <div className="w-1/3 hidden md:block lg:block">
          <div className="flex-col">
            <p className="text-white text-[14px] font-bold">Related stories</p>
            <div className="mt-4 px-2 pb-4 pt-2 md:pt-4 lg:pt-4 bg-gray-800 rounded-md">
              <BlogRelatedStoriesComponent params={params} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSinglePage;
