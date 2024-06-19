import Image from "next/image";

const ComingSoonComponent = ({ pageName }: { pageName: string }) => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl text-white font-medium">{pageName}</h1>

      <div className="flex justify-center items-center my-3">
        <Image
          src="/images/web/coming-soon.png"
          alt="coming-soon-image"
          width={1000}
          height={1000}
          className="w-[300px] h-[300px]"
          loading="lazy"
        />
      </div>

      <h4 className="text-xl lg:text-2xl text-white text-center font-medium">
        We are working on something great
      </h4>
    </section>
  );
};

export default ComingSoonComponent;
