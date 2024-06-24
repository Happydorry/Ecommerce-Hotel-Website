/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import room from "../assets/Images/room.png";
import { Link, useNavigate } from "react-router-dom";

const Rooms = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/RoomsPage");
  };
  return (
    <div className="bg-black px-10 flex flex-col md:flex-row h-auto md:h-96 mt-20">
      <div className="max-w-full md:max-w-lg bg-white my-8 mx-auto md:mx-0">
        <div className="px-6 py-6 md:px-12 md:py-10 flex flex-col justify-center">
          <div className="font-extrabold text-xl mb-3">Rooms & Suits</div>

          <p className="text-gray-700 text-base">
            Our luxurious hotel rooms and suites offer elegant décor, plush
            bedding, and modern amenities. Enjoy spacious living areas, stunning
            views, and personalized services, ensuring a perfect blend of
            comfort and sophistication for an unforgettable stay.
          </p>

          <div className="mt-9">
            <button
              onClick={handleExploreClick}
              className="bg-gray-600 text-white py-3 px-6 rounded hover:bg-indigo-600"
            >
              Explore
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-0 md:ml-10 flex justify-center items-center">
        <img
          className="max-h-40 md:max-h-full rounded-full object-cover ml-60"
          src={room}
          alt="room"
        />
      </div>
    </div>
  );
};

export default Rooms;
