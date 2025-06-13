import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa";

function Recruiters() {
  const plans = [1, 2, 3]; // Simulate 3 identical plans

  return (
    <div className="bg-[#F7F7F8] px-4 py-10">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-2xl md:text-[32px] font-medium text-[#101022] leading-snug">
          Unlock{" "}
          <span className="bg-gradient-to-r from-[#5B5DE6] to-[#921294] bg-clip-text text-transparent font-bold">
            Premium
          </span>{" "}
          Access for Recruiters
        </h1>
        <p className="text-[16px] font-medium text-[#101022] mt-3">
          Get exclusive features and enhanced visibility with our
          premium membership.
        </p>
      </div>

      {/* Plan Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto ">
        {plans.map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 bg-[#1E1E2F] text-white text-xs px-15 py-2 rounded-l-full z-10">
              <p className="text-center text-base">Popular</p>
              <div className="flex justify-center mt-1 text-yellow-400 text-[9px]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>

            <img
              src="./WhatsApp Image 2025-05-18 at 10.04.21_de6464cf 1.png"
              alt="Recruiters access"
              className="w-full h-[239px] object-cover"
            />
            <div className="p-5">
              <p className="text-[24px] font-medium text-[#101022] mb-2 leading-snug">
                Get free of cost access to services to hire the right talent
              </p>
              <ul className="list-disc list-inside text-[16px] text-[#101020] font-medium space-y-1 mb-4">
                <li>Unlimited Job posting</li>
                <li>Live chat with job seekers</li>
                <li>Post your hiring requirements on social media</li>
                <li>Send unlimited connection requests</li>
              </ul>
              <div>
                <p className="mb-1 text-[16px] text-[#939393]">
                  Subscription starts from
                </p>
                <div className="flex items-center justify-between font-semibold">
                  <span className="text-[#101020] text-[20px] font-semibold">
                    Free
                  </span>
                  <a
                    href="#"
                    className="text-[16px] font-bold bg-gradient-to-r from-[#5B5DE6] to-[#921294] bg-clip-text text-transparent flex items-center"
                  >
                    <span className="underline">Know more</span>{" "}
                    <MdKeyboardArrowRight className="ml-1 text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recruiters;
