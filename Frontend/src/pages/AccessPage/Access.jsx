import React, { useState } from "react";
import Recruiters from "./Recruiters";
import Seekers from "./Seekers";
import ResumeWriting from "./ResumeWriting";
import ContactUs from "./ContactUs";

function Access() {
  const [activeBtn, setActiveBtn] = useState("Plans for Recruiters");

  const tabs = [
    "Plans for Recruiters",
    "Plans for Job Seekers",
    "Resume Writing",
    "Contact Us",
  ];

  return (
    <div className="bg-[#F7F7F8] py-6">
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveBtn(tab)}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-200
              ${
                activeBtn === tab
                  ? "bg-gradient-to-r from-[#5B5DE6] to-[#921294] text-white"
                  : "bg-white text-[#939393] border border-gray-300"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <Recruiters />
      <Seekers />
      <ResumeWriting />
      <ContactUs />
    </div>
  );
}

export default Access;
