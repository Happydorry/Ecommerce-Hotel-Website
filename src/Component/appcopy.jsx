/* eslint-disable no-unused-vars */

import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import HomeCards from "./Component/HomeCards";
import Rooms from "./Component/Rooms";
import Facilities from "./Component/Facilities";
import Accordian from "./Component/Accordian";
import AdditionalInfo from "./Component/AdditionalInfo";
import { FaComment } from "react-icons/fa";
import RoomListing from "./Component/RoomListing";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Rooms />
      <Facilities />
      <AdditionalInfo />
      <div className="App flex items-center justify-center min-h-1/2-screen bg-gray-100 mt-0">
        <div className="w-full max-w-2xl mt-20 p-4">
          <div className="flex ml-3 mb-5">
            <h1 className="font-extrabold text-3xl text-center ml-20 mb-5">
              Frequently Asked Questions
            </h1>
            <div className="flex justify-center mb-6 ml-10">
              <FaComment size={30} />
            </div>
          </div>
          <Accordian />
        </div>
      </div>
      <RoomListing />
    </>
  );
};

export default App;
