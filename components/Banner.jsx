import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-white mt-8 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <Image
          src="https://web-cdn.snapp.ir/snapp-website/images/homepage/slider/Food.jpg"
          height={320}
          width={1085}
          layout="responsive"
          className="rounded-lg cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Banner;
