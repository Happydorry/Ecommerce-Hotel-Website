/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaPhone, FaStar } from "react-icons/fa";

const Hero = ({
  title = "MARRIOTT HOTEL",
  subtitle = "Chipping Norton, Oxfordshire, England ",
  rightText = ": +1 237-345-5992",
}) => {
  return (
    <section className="bg-white py-5 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className=" flex items-center space-x-4">
          <h1 className="text-2xl font-extrabold text-black">{title}</h1>

          <div className="flex items-center">
            <FaStar className="text-black-400 text-xl" />
            <FaStar className="text-black-400 text-xl" />
            <FaStar className="text-black-400 text-xl" />
            <FaStar className="text-black-400 text-xl" />
            <FaStar className="text-black-400 text-xl" />
          </div>
        </div>

        <div className="text-right flex items-center">
          <FaPhone className="mr-2 text-sm text-black" />
          <p className="text-sm text-black">{rightText}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex mt-3">
        <h2 className=" text-sm text-black">{subtitle}</h2>
      </div>
    </section>
  );
};

export default Hero;
