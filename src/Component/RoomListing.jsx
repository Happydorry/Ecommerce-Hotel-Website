/* eslint-disable no-unused-vars */
import React from "react";
import queen from "../assets/Images/queen.png";
import bath1 from "../assets/Images/bath1.png";
import king from "../assets/Images/king.png";
import bath2 from "../assets/Images/bath2.png";
import suit from "../assets/Images/suit.png";
import bath3 from "../assets/Images/bath3.png";
import Card from "./Card";
import { FaTags, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import accountpage from "../Pages/AccountPage";

const RoomListing = () => {
  const images = [queen, bath1]; // Add all images here
  const images1 = [king, bath2];
  const images2 = [suit, bath3];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate("/accountpage");
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextImage1 = () => {
    setCurrentIndex1((prevIndex) => (prevIndex + 1) % images1.length);
  };

  const prevImage1 = () => {
    setCurrentIndex1(
      (prevIndex) => (prevIndex - 1 + images1.length) % images1.length
    );
  };

  const nextImage2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex + 1) % images2.length);
  };

  const prevImage2 = () => {
    setCurrentIndex2(
      (prevIndex) => (prevIndex - 1 + images2.length) % images2.length
    );
  };

  const numQueen = 3;
  const numKing = 10;
  const numSuit = 5;
  return (
    <>
      <h1 className="font-extrabold text-3xl text-center my-10  mb-5 p-5">
        View All Rooms
      </h1>
      <div className="bg-beige-500 py-1">
        <div className="container-lg border bg-white  border-gray-300 lg:container m-auto mt-10 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 rounded-lg">
            <div className="relative h-96">
              <Card>
                <img
                  className="object-cover w-full h-96"
                  src={images[currentIndex]}
                  alt={`room-${currentIndex + 1}`}
                />
              </Card>
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full"
                onClick={prevImage}
              >
                <FaArrowLeft />
              </button>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full"
                onClick={nextImage}
              >
                <FaArrowRight />
              </button>
            </div>

            <div className="col-span-2 flex flex-col justify-between">
              <div>
                <h2 className="font-extrabold text-2xl mt-5">
                  Marriott View 1 Queen
                </h2>
                <p className="mt-2">
                  1 Queen Bed, 1 bathroom, 280-sq-foot room with city views
                </p>
                <hr className="my-2 border-t border-gray-300 mx-auto w-3/4 ml-0" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-row">
                  <FaTags className="mr-2 mt-3 text-green" />
                  <p className="text-green mt-2">Special deal: save 15%</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="font-extrabold text-2xl mr-40">$300/night</p>
                    <span className="text-red-400 text-sm ml-4 mr-5">
                      Only ${numQueen} rooms left. Reserve now!
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="mt-1">Partially refundable</p>
                <button
                  onClick={handleExploreClick}
                  className="bg-red-500 hover:bg-red-300 mr-10 btn-lg text-white font-bold py-4 px-10 rounded"
                >
                  Reserve
                </button>
              </div>

              <hr className="my-2 w-1/2 border-gray-300 mt-6 mb-6" />
            </div>
          </div>
        </div>

        <div className="container-lg border bg-white  border-gray-300 lg:container m-auto mt-10 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 rounded-lg">
            <div className="relative h-96">
              <Card>
                <img
                  className="object-cover w-full h-96"
                  src={images1[currentIndex1]}
                  alt={`room-${currentIndex1 + 1}`}
                />
              </Card>
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full"
                onClick={prevImage1}
              >
                <FaArrowLeft />
              </button>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full"
                onClick={nextImage1}
              >
                <FaArrowRight />
              </button>
            </div>

            <div className="col-span-2 flex flex-col justify-between">
              <div>
                <h2 className="font-extrabold text-2xl mt-5">
                  Marriott View 1 King
                </h2>
                <p className="mt-2">
                  1 King Bed, 1 bathroom, 350-sq-foot room with city views
                </p>
                <hr className="my-2 border-t border-gray-300 mx-auto w-3/4 ml-0" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-row">
                  <FaTags className="mr-2 mt-3 text-green" />
                  <p className="text-green mt-2">Special deal: save 15%</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="font-extrabold text-2xl mr-40">$506/night</p>
                    <span className="text-red-400 text-sm ml-4 mr-5">
                      Only ${numKing} rooms left. Reserve now!
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="mt-1">Partially refundable</p>
                <button
                  onClick={handleExploreClick}
                  className="bg-red-500 hover:bg-red-300 mr-10 btn-lg text-white font-bold py-4 px-10 rounded"
                >
                  Reserve
                </button>
              </div>

              <hr className="my-2 w-1/2 border-gray-300 mt-6 mb-6" />
            </div>
          </div>
        </div>

        <div className="container-lg border bg-white  border-gray-300 lg:container m-auto mt-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 rounded-lg">
            <div className="relative h-96">
              <Card>
                <img
                  className="object-cover w-full h-96"
                  src={images2[currentIndex2]}
                  alt={`room-${currentIndex2 + 1}`}
                />
              </Card>
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full"
                onClick={prevImage2}
              >
                <FaArrowLeft />
              </button>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full"
                onClick={nextImage2}
              >
                <FaArrowRight />
              </button>
            </div>

            <div className="col-span-2 flex flex-col justify-between">
              <div>
                <h2 className="font-extrabold text-2xl mt-5">
                  Marriott View 1 Suit
                </h2>
                <p className="mt-2">
                  2 Queen Bed, 1 bathroom, 500-sq-foot room with harbor views
                </p>
                <hr className="my-2 border-t border-gray-300 mx-auto w-3/4 ml-0" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-row">
                  <FaTags className="mr-2 mt-3 text-green" />
                  <p className="text-green mt-2">Special deal: save 15%</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="font-extrabold text-2xl mr-40">$700/night</p>
                    <span className="text-red-400 text-sm ml-4 mr-5">
                      Only ${numSuit} rooms left. Reserve now!
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="mt-1">Partially refundable</p>
                <button
                  onClick={handleExploreClick}
                  className="bg-red-500 hover:bg-red-300 mr-10 btn-lg text-white font-bold py-4 px-10 rounded"
                >
                  Reserve
                </button>
              </div>

              <hr className="my-2 w-1/2 border-gray-300 mt-6 mb-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomListing;
