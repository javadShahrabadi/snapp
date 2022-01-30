import React from "react";
import Image from "next/image";
const Download = () => {
  return (
    <div className="bg-white ">
      <div className="max-w-6xl mx-auto hidden md:flex flex-row items-center justify-between py-20">
        <div className="hover:scale-105 transition-all ease-in-out duration-500">
          <a href="">
            <Image
              src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/google-play-badge.png"
              width={180}
              height={60}
            />
          </a>
        </div>
        <div className="hover:scale-105 transition-all ease-in-out duration-500">
          <a href="">
            <Image
              src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/bazaar.png"
              width={180}
              height={60}
            />
          </a>
        </div>
        <div className="hover:scale-105 transition-all ease-in-out duration-500">
          <a href="">
            <Image
              src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/snapp-pwa.png"
              width={180}
              height={60}
            />
          </a>
        </div>
        <div className="hover:scale-105 transition-all ease-in-out duration-500">
          <a href="">
            <Image
              src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/sibapp-badge-white.png"
              width={180}
              height={60}
            />
          </a>
        </div>
        <div className="hover:scale-105 transition-all ease-in-out duration-500">
          <a href="">
            <Image
              src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/iApps.png"
              width={180}
              height={60}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download;
