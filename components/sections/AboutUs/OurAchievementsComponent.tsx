import Image from "next/image";

const OurAchievementsComponent = () => {
  const data = [
    { company: "MTN", achievement: "App of the Year" },
    {
      company: "SCeKasiHack",
      achievement: "Silicon cape in partnership with Cape Town U.S. Consulate",
    },
    { company: "Silicon cape", achievement: "Build Community Hackathons" },
  ];

  return (
    <section className="container mx-auto flex flex-col pb-8">
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
            <h1 className="text-white font-bold text-m md:text-2xl lg:text-2xl py-2">
              {item.company}
            </h1>
            <h4 className="text-white font-medium text-[8px] lg:text-[10px] text-center">
              {item.achievement}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurAchievementsComponent;
