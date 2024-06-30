import {
  HeaderBlogBannerComponent,
  SidebarBlogComponent,
  BlogListContentComponent,
} from "@/components";

const BlogHomePage = () => {
  return (
    <div className="mx-auto container flex flex-col pt-16">
      <HeaderBlogBannerComponent />

      <div className="flex-grow border-t border-gray-400 pb-10"></div>

      <div className="flex flex-col md:flex-row lg:flex-row space-x-0 md:space-x-6 lg:space-x-6 pb-10">
        <div className="hidden md:block lg:block w-1/4 flex-col px-2">
          <SidebarBlogComponent />
        </div>

        <div className="w-full flex flex-col">
          <BlogListContentComponent />
        </div>
      </div>
    </div>
  );
};

export default BlogHomePage;
