import React from "react";

const About = () => {
  return (
    <div className="bg-white pt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#404B58] text-4xl font-semibold text-center">
          ABOUT US
        </h2>
        <p className="ltr_text mt-10 text-justify leading-normal pb-20 px-5 xl:px-0">
          Snapp is the fastest-growing startup in Iran and is powered by a young
          team that wants to take Iran’s IT industry to the next level. We are
          always looking for young talent that wants to make a better tomorrow
          and have a positive impact on the lifestyle of people. Today we are
          proud to announce that Snapp is the first and biggest ride-hailing
          service in Iran with more than 30 million passengers and 2 million
          drivers in its fleet. We are always expanding the team to reach our
          ambitious objectives! So if you want to be a part of the best
          transportation in Iran, just Send your Resume.
        </p>
      </div>
      {/* divider */}
      <div className="border-t border-gray-200 w-full" />
    </div>
  );
};

export default About;
