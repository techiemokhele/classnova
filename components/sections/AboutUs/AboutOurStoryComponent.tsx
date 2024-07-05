"use client";

import Image from "next/image";
import CustomButtonComponent from "@/components/common/CustomButtonComponent";
import { useRouter } from "next/navigation";

const AboutOurStoryComponent = () => {
  const router = useRouter();

  const handleJoining = () => {
    router.push("/resources/join");
  };

  return (
    <section className="container mx-auto flex flex-col space-y-4 lg:space-y-6 py-8">
      {/* Mission section */}
      <div className="flex flex-col-reverse md:flex-row lg:flex-row items-center justify-between">
        {/* text section */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl text-white font-bold pb-4">Our Mission</h1>
          <p className="text-[12px] text-white font-normal">
            At Spendio, our mission is to redefine online shopping by curating a
            diverse selection of high-quality products that inspire and delight
            our customers. We aim to provide a seamless shopping experience that
            prioritises customer satisfaction, innovation, and community
            support. Through our platform, we strive to empower small businesses
            and local artisans, fostering economic growth and promoting
            sustainable consumer choices.
          </p>
        </div>

        {/* media section */}
        <div className="w-full md:w-1/2 p-4 justify-center items-center flex">
          <Image
            src="/images/our-work/our-mission.jpg"
            alt="mission-image"
            width={1000}
            height={1000}
            className="max-w-full max-h-[260px] object-cover transform transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
        </div>
      </div>

      {/* Vision section */}
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between">
        {/* media section */}
        <div className="w-full md:w-1/2 p-4 justify-center items-center flex">
          <Image
            src="/images/our-work/our-vision.jpg"
            alt="mission-image"
            width={1000}
            height={1000}
            className="max-w-full max-h-[260px] object-cover transform transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* text section */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl text-white font-bold pb-4">Our Vision</h1>
          <p className="text-[12px] text-white font-normal">
            Our vision at Spendio is to become a leading e-commerce destination
            known for its commitment to quality, authenticity, and
            customer-centricity. We envision a future where every shopper can
            discover unique products that reflect their personal style and
            values, all while supporting local economies and reducing
            environmental impact. By continuously innovating and adapting to
            meet the evolving needs of our customers, we aspire to set new
            standards in online retailing.
          </p>
        </div>
      </div>

      {/* Why Choose Spendio section */}
      <div className="flex flex-col-reverse md:flex-row lg:flex-row items-center justify-between">
        {/* text section */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl text-white font-bold pb-4">
            Why Choose Spendio?
          </h1>
          <p className="text-[12px] text-white font-normal">
            Choose Spendio for a shopping experience that combines convenience
            with conscientiousness. We prioritise quality, authenticity, and
            customer satisfaction, ensuring that every purchase supports local
            businesses and promotes sustainable practices. With our curated
            selection and user-friendly platform, you can shop confidently,
            knowing you're making a positive impact on communities and the
            environment.
          </p>
        </div>

        {/* media section */}
        <div className="w-full md:w-1/2 p-4 justify-center items-center flex">
          <Image
            src="/images/our-work/choose-us.jpg"
            alt="mission-image"
            width={1000}
            height={1000}
            className="max-w-full max-h-[260px] object-cover transform transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
        </div>
      </div>

      {/* Join Us section */}
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between">
        {/* media section */}
        <div className="w-full md:w-1/2 p-4 justify-center items-center flex">
          <Image
            src="/images/our-work/join-us.jpg"
            alt="mission-image"
            width={1000}
            height={1000}
            className="max-w-full max-h-[260px] object-cover transform transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* text section */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl text-white font-bold pb-4">Join Us</h1>
          <p className="text-[12px] text-white font-normal pb-4">
            Join Spendio and be part of a team dedicated to reshaping the future
            of e-commerce. Whether you're a vendor looking to showcase your
            products or a passionate shopper seeking unique finds, Spendio
            offers a dynamic and supportive environment where creativity thrives
            and connections flourish. Together, we can build a better shopping
            experience that celebrates diversity, sustainability, and community
            empowerment.
          </p>

          <CustomButtonComponent text="Join now" onClick={handleJoining} />
        </div>
      </div>
    </section>
  );
};

export default AboutOurStoryComponent;
