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
          <p className="text-[12px] text-white font-thin">
            At Mzxit, our mission is to empower local vendors by connecting them
            with local buyers through a seamless and interactive e-commerce
            platform. We aim to foster economic growth within the SADC region by
            providing a marketplace that supports local businesses and
            encourages community engagement. By offering an accessible and
            user-friendly platform, we enable vendors to showcase their unique
            products and services, making it easier for consumers to discover
            and support local businesses. Our goal is to create a vibrant and
            sustainable economic ecosystem that benefits everyone involved.
          </p>
        </div>

        {/* media section */}
        <div className="w-full md:w-1/2 p-4 justify-center items-center flex">
          <Image
            src="/images/our-work/goods.jpeg"
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
            src="/images/our-work/warehouse.jpeg"
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
          <p className="text-[12px] text-white font-thin">
            To be the leading social marketplace in the SADC region,
            transforming the way communities engage in commerce and creating
            meaningful connections that drive economic prosperity. We envision a
            future where local businesses thrive, consumers have access to
            high-quality local products, and communities are strengthened
            through robust economic interactions. At Mzxit, we are dedicated to
            innovation and excellence, continuously improving our platform to
            meet the evolving needs of our users. By fostering a sense of
            community and promoting local commerce, we strive to make a lasting
            positive impact on the SADC region's economy and social fabric.
          </p>
        </div>
      </div>

      {/* Why Choose Mzxit section */}
      <div className="flex flex-col-reverse md:flex-row lg:flex-row items-center justify-between">
        {/* text section */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl text-white font-bold pb-4">
            Why Choose Mzxit?
          </h1>
          <p className="text-[12px] text-white font-thin">
            1. <span className="font-bold">Support Local Businesses</span>: Our
            platform is designed to prioritise and promote local vendors,
            ensuring that your purchases directly contribute to the local
            economy.
            <br /> <br />
            2. <span className="font-bold">Community Engagement</span>: We
            believe in the power of community-driven commerce, where buyers and
            sellers build lasting relationships and support each other.
            <br /> <br />
            3. <span className="font-bold">Seamless Experience</span>: Our
            user-friendly interface makes it easy for vendors to list their
            products and for buyers to find exactly what they need, creating a
            hassle-free shopping experience.
            <br /> <br />
            4. <span className="font-bold">Economic Growth</span>: By connecting
            local vendors with a broader audience, we help drive economic growth
            and prosperity within the SADC region.
          </p>
        </div>

        {/* media section */}
        <div className="w-full md:w-1/2 p-4 justify-center items-center flex">
          <Image
            src="/images/our-work/office.jpeg"
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
            src="/images/our-work/swegga.jpeg"
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
          <p className="text-[12px] text-white font-thin pb-4">
            Join us at Mzxit and be part of a movement that celebrates and
            supports local commerce. Whether you're a vendor looking to reach
            more customers or a buyer eager to discover unique local products,
            Mzxit is your platform for meaningful and impactful shopping
            experiences. Together, we can create a thriving marketplace that
            uplifts our communities and fosters sustainable economic
            development.
          </p>

          <CustomButtonComponent text="Join now" onClick={handleJoining} />
        </div>
      </div>
    </section>
  );
};

export default AboutOurStoryComponent;
