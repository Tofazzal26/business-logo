import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const Get_Touch = () => {
  return (
    <div className="lg:my-32 md:my-14 my-7">
      <div>
        <div className="bg-[#0058FF] rounded-[24px] lg:max-w-[1360px] md:max-w-[688px] lg:h-[404px] mx-auto md:h-[278px] max-w-[358px] h-[236px]">
          <div className="lg:translate-y-[90px] md:translate-y-[30px] translate-y-[20px]">
            <div className="flex justify-center items-center flex-col text-center">
              <h2 className="lg:text-5xl md:text-[32px] font-bold text-white text-2xl">
                Get In Touch
              </h2>
              <p className="lg:text-lg md:text-sm font-normal text-white lg:py-8 md:py-6 lg:w-[1000px] md:w-[608px] mx-auto py-4 text-sm">
                Contact us now to enquire our plumbing services, whether you
                have a commercial project that requires support, or a domestic
                plumbing task that needs the attention of a trusted
                professional.
              </p>
              <button className="text-[#0058FF] bg-white px-6 py-2.5 cursor-pointer rounded-lg flex items-center gap-2">
                Book a Professional Plumber <FaArrowRight />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Get_Touch;
