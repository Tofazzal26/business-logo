"use client";
import React from "react";

const Frequently_Questions: React.FC = () => {
  const faqs = [
    {
      question: "What is this app about?",
      answer:
        "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
    },
    {
      question: "Do you charge a call out fee?",
      answer:
        "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
    },
    {
      question: "How quickly can your company send out an engineer?",
      answer:
        "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
    },
    {
      question: "What should I do if I get a water leak?",
      answer:
        "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
    },
  ];

  return (
    <div className="lg:mt-20 md:mt-14 mt-10">
      <div className="">
        <div className="">
          <h2 className="lg:text-5xl md:text-[32px] text-2xl font-bold text-center">
            Frequently asked questions
          </h2>
          <div className="lg:max-w-[920px] md:max-w-[688px] mx-auto lg:mt-[120px] md:mt-[40px] mt-8 space-y-4 lg:px-0 md:px-0 px-6">
            {faqs.map((item, index) => (
              <div key={index} className="collapse collapse-arrow">
                <input type="checkbox" defaultChecked={index === 0} />
                <div
                  className={`collapse-title lg:text-[28px] md:text-xl text-base font-semibold leading-[40px] px-0 ${
                    index == 2
                      ? "border-t-[1px] border-[#D4DBE0] rounded-none lg:py-8 md:py-6 py-7"
                      : index === 1
                      ? "border-t-[1px] border-[#D4DBE0] lg:pt-7 md:pt-6 pt-6 rounded-none"
                      : index === 3
                      ? "border-t-[1px] border-[#D4DBE0] rounded-none lg:pt-7 md:pt-8 pt-7"
                      : ""
                  }`}
                >
                  {item.question}
                </div>
                <div className="collapse-content px-0">
                  <p className="lg:text-lg md:text-sm text-sm font-normal leading-[30px] text-[#2a2f32]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequently_Questions;
