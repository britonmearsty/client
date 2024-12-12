import React from "react";
import { Facebook, Instagram, PhoneCall, Twitter, Youtube } from "lucide-react";
const Bottom = () => {
  return (
    <div className="p-4 sm:p-6 bg-white text-center border-t-2">
      <div className="flex flex-col items-center justify-between text-[#7E7E7E] font-[poppins] gap-6 sm:gap-10 md:flex-row md:gap-8">
        <div className="w-full text-center md:w-auto md:text-left">
          <h1 className="text-base sm:text-lg md:text-xl">
            {new Date().getFullYear()} &copy;{" "}
            <span className="text-[#3BB77E]">Brime shop</span>- React Ecommerce
            Shop.
            <br /> All rights reserved.
          </h1>
        </div>
        {/* calls starts */}
        <div className="flex flex-col w-full gap-4 sm:gap-8 md:flex-row md:gap-12 md:w-auto">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <PhoneCall size={20} className="block sm:block md:block" />
            <div className="flex flex-col items-center">
              <h1 className="text-[#3bb77e] font-bold text-[18px] sm:text-[22px] md:text-[26px] font-[Quicksand]">
                +254 758939807
              </h1>
              <p className="text-sm sm:text-lg md:text-lg">
                working 8:00am - 10:00pm
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <PhoneCall size={20} className="block sm:block md:block" />
            <div className="flex flex-col items-center">
              <h1 className="text-[#3bb77e] font-bold text-[18px] sm:text-[22px] md:text-[26px] font-[Quicksand]">
                +254 758939807
              </h1>
              <p className="text-sm sm:text-lg md:text-lg">
                24/7 Support centre
              </p>
            </div>
          </div>
        </div>
        {/* calls ends */}
        <div className="flex flex-col gap-4 sm:gap-8 w-full md:gap-6 md:w-auto">
          <div className="flex flex-col gap-3 sm:gap-5 items-center justify-center md:flex-row">
            <h1 className="font-bold text-black text-base sm:text-lg md:text-xl">
              Follow Us
            </h1>
            <div className="flex gap-4 sm:gap-8 items-center text-white font-bold md:gap-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer">
                <Facebook className="bg-[#3BB77E] rounded-full w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] p-2 sm:p-2.5 hover:p-3 duration-300 ease-in-out cursor-pointer md:w-[35px] md:h-[35px] md:p-2.5" />
              </a>
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer">
                <Twitter className="bg-[#3BB77E] rounded-full w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] p-2 sm:p-2.5 hover:p-3 duration-300 ease-in-out cursor-pointer md:w-[35px] md:h-[35px] md:p-2.5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer">
                <Instagram className="bg-[#3BB77E] rounded-full w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] p-2 sm:p-2.5 hover:p-3 duration-300 ease-in-out cursor-pointer md:w-[35px] md:h-[35px] md:p-2.5" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer">
                <Youtube className="bg-[#3BB77E] rounded-full w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] p-2 sm:p-2.5 hover:p-3 duration-300 ease-in-out cursor-pointer md:w-[35px] md:h-[35px] md:p-2.5" />
              </a>
            </div>
          </div>
          <div>
            <h1 className="text-base sm:text-lg md:text-xl">
              Up to 15% discount on your first order
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
