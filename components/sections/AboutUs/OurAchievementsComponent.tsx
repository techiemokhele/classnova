import Image from "next/image";

const OurAchievementsComponent = () => {
  const data = [
    {
      company: "Online Shoppers",
      achievement: "Best Product Distributors of the Year 2024",
    },
    {
      company: "Sellify",
      achievement: "Best Online Sellers of the Year 2024",
    },
    {
      company: "Digi Markters",
      achievement: "Best Digital Marketers of the Year 2024",
    },
  ];

  return (
    <section className="container mx-auto flex flex-col py-8 bg-gray-800">
      <h1 className="text-white text-3xl font-bold pb-6 self-center">
        Our Achievements
      </h1>

      <div className="flex flex-rowjustify-center items-center w-full">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col space-y-2 items-center w-[33%]">
            <Image
              src="/images/web/achievement.webp"
              alt="mission-image"
              width={1000}
              height={1000}
              className="w-[80px] h-[80px] object-cover"
              loading="lazy"
            />
            <h1 className="text-white font-bold text-center text-m md:text-2xl lg:text-2xl py-2">
              {item.company}
            </h1>
            <p className="text-white font-medium text-[8px] lg:text-[10px] text-center px-2">
              {item.achievement}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurAchievementsComponent;
