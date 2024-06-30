"use client";

import {BlogPostBannerComponent} from "@/components";

type Params = {
  slug: string;
};

const BlogSinglePage = ({ params }: { params: Params }) => {
  return (
    <div className="flex flex-row py-16">
      <BlogPostBannerComponent params={params} />
    </div>
  );
};

export default BlogSinglePage;
