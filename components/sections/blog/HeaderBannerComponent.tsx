const HeaderBlogBannerComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-16">
      <div className="flex justify-center items-center py-2 px-2 rounded-full border-teal-500 border-2 hover:bg-teal-500">
        <p className="text-white text-[12px] font-thin">Blog and insight</p>
      </div>

      <p className="text-white text-2xl font-bold text-center py-4">
        Our e-commerce discoveries: investigating the field of art and goods
        sales.
      </p>

      <p className="text-white text-[12px] font-thin text-center">
        Fostering innovation, disclosing trade secrets, and equipping companies
        with creative ideas and tactics.
      </p>
    </div>
  );
};

export default HeaderBlogBannerComponent;
