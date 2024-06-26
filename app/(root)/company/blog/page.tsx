import { HeaderBlogBannerComponent } from "@/components";

const BlogHomePage = () => {
  return (
    <div className="mx-auto container flex flex-col pt-16">
      <HeaderBlogBannerComponent />

      <div className="flex-grow border-t border-gray-400 pb-10"></div>

      <div className="flex flex-col md:flex-row lg:flex-row space-x-4"></div>
    </div>
  );
};

export default BlogHomePage;
