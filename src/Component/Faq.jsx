/* eslint-disable no-unused-vars */

import React from "react";
import { FaComment } from "react-icons/fa";
import Accordian from "./Accordian";

const Faq = () => {
  return (
    <div
      className="App flex items-center justify-center min-h-1/2-screen bg-gray-100 mt-10"
      id="faq"
    >
      <div className="w-full max-w-2xl mt-10 p-4">
        <div className="flex ml-3 mb-5">
          <h1 className="font-extrabold text-3xl text-center ml-20 mb-5 ">
            Frequently Asked Questions
          </h1>
          <div className="flex justify-center mb-6 ml-10">
            <FaComment size={30} />
          </div>
        </div>
        <Accordian />
      </div>
    </div>
  );
};

export default Faq;
