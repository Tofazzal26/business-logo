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
    <div className="mt-20">
      <div className="">
        <div className="">
          <h2 className="text-5xl font-bold text-center">
            Frequently asked questions
          </h2>
          <div className="max-w-[920px] mx-auto mt-[120px] space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="collapse collapse-arrow">
                <input type="checkbox" defaultChecked={index === 0} />
                <div
                  className={`collapse-title text-[28px] font-semibold leading-[40px] px-0 ${
                    index == 2
                      ? "border-t-[1px] border-[#D4DBE0] rounded-none py-8"
                      : index === 1
                      ? "border-t-[1px] border-[#D4DBE0] pt-7 rounded-none"
                      : index === 3
                      ? "border-t-[1px] border-[#D4DBE0] rounded-none pt-7"
                      : ""
                  }`}
                >
                  {item.question}
                </div>
                <div className="collapse-content px-0">
                  <p className="text-lg font-normal leading-[30px] text-[#2a2f32]">
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
