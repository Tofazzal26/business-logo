import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="mt-[100px] lg:mb-14 md:mb-10 mb-6">
      <div className="lg:max-w-[1600px] md:max-w-[768px] max-w-[390px] mx-auto">
        <div className="flex lg:flex-row md:flex-col flex-col justify-between">
          <div className="">
            <div>
              <h2 className="font-bold lg:text-[32px] md:text-[32px] text-[20px]">
                Business Logo
              </h2>
              <div className="flex items-center gap-4 mt-7">
                <Image width={24} height={24} src="/facebook.svg" alt="" />
                <Image width={24} height={24} src="/linkedin.svg" alt="" />
                <Image width={24} height={24} src="/twitter.svg" alt="" />
                <Image width={24} height={24} src="/instagram.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col lg:items-center lg:w-[430px] lg:mt-0 md:mt-10 mt-8 md:items-center">
            <div className="lg:flex-1 md:flex-1 flex-1">
              <div>
                <h2 className="text-sm font-semibold text-[#2a2f32]">
                  Our Services
                </h2>
                <ul className="text-sm font-normal mt-6 space-y-[16px]">
                  <li>Plumbing</li>
                  <li>Drainage</li>
                  <li>Bathrooms</li>
                  <li>Commercial</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center lg:flex-2 md:flex-2 flex-1 lg:justify-between gap-[40px] lg:mt-0 md:mt-0 mt-8">
              <div>
                <div>
                  <h2 className="text-sm font-semibold text-[#2a2f32]">
                    Useful Links
                  </h2>
                  <ul className="text-sm font-normal mt-6 space-y-[16px]">
                    <li>Contact Us</li>
                    <li>Updates</li>
                    <li>About Us</li>
                    <li>Rates</li>
                  </ul>
                </div>
              </div>
              <div>
                <div>
                  <h2 className="text-sm font-semibold text-[#2a2f32]">‎ </h2>
                  <ul className="text-sm font-normal mt-6 space-y-[16px]">
                    <li>Customer Services</li>
                    <li>Updates</li>
                    <li>Locations</li>
                    <li>Sitemap</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[430px] lg:mt-0 md:mt-10 mt-8">
            <h2 className="text-sm font-semibold text-[#2a2f32]">
              Contact Info
            </h2>
            <div className="mt-6">
              <div className="space-y-[20px]">
                <div className="flex items-center gap-3">
                  <Image width={24} height={24} src="/location.svg" alt="" />
                  <h2 className="font-semibold text-sm">
                    1 Sail Street, London, SE11 6NQ
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <Image width={24} height={24} src="/mail.svg" alt="" />
                  <h2 className="font-semibold text-sm">
                    enquiries@PlumbingPros.com
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <Image width={24} height={24} src="/call.svg" alt="" />
                  <h2 className="font-semibold text-sm">020 4527 6474</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center lg:mt-20 md:mt-12 mt-8 lg:gap-0 md:gap-0 gap-2">
          <div>
            <h2 className="text-sm font-normal text-[#949798]">
              © Plumbing Pros. All Rights Reserved 
            </h2>
          </div>
          <div>
            <h2 className="text-sm font-normal text-[#949798]">
              Website by IH Adventure And Creative
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
