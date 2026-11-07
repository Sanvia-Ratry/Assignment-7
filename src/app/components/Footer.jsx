import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 bg-[#244d3f] text-white px-61.25 pt-20 justify-center text-center">
      <div className="space-y-4">
        <h1 className="font-extrabold text-8xl">
          Keen<span className="font-medium">Keeper</span>
        </h1>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships
          that matter most.
        </p>
        <p className="font-medium text-xl mt-2">Social Links</p>
        <div className="flex gap-3 justify-center">
          <Image
            width={40}
            height={40}
            src="/assets/instagram.png"
            alt="this is a logo of instagram"
          ></Image>
          <Image
            width={40}
            height={40}
            src="/assets/facebook.png"
            alt="this is a logo of instagram"
          ></Image>
          <Image
            width={40}
            height={40}
            src="/assets/twitter.png"
            alt="this is a logo of instagram"
          ></Image>
        </div>
      </div>
      <div className="text-gray-400 py-8 flex justify-between border-t border-gray-500">
        <div>
          <p>© 2026 KeenKeeper. All rights reserved.</p>
        </div>
        <div className="flex gap-2.5">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
