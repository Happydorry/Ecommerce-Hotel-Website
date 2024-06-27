/* eslint-disable no-unused-vars */
import React from "react";
import spa from "../assets/Images/spa.png";
import pool from "../assets/Images/pool.png";
import Lounges from "../assets/Images/Lounges.png";
import { Link as ScrollLink } from "react-scroll";

const Facilities = () => {
  return (
    <>
      <h2
        className="text-4xl font-bold text-black-500 mb-6 text-center mt-28"
        id="Facilities"
      >
        Facilities
      </h2>

      <section className="bg-beige-500 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="ml-20 mb-7">
                  <img
                    className="w-3/4 h-auto rounded-full"
                    src={spa}
                    alt="spa"
                  />
                </div>
                <div className="mb-0">
                  <h3 className="text-xl font-bold">Spa & Massage</h3>
                </div>
                <div className="border border-gray-200 mb-2"></div>
                <div className="mb-7">
                  Indulge in ultimate relaxation with our luxurious spa and
                  massage services. Unwind with soothing treatments tailored to
                  your needs.
                </div>

                <div className="  mb-4 ml-60">
                  <ScrollLink
                    to="spa"
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="bg-orange-200 hover:bg-orange-400 text-orange-800 px-2 py-2 rounded-lg text-center text-lg cursor-pointer"
                  >
                    Read More
                  </ScrollLink>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mr- 10ml-20 mb-7">
                  <img className="" src={pool} alt="pool" />
                </div>
                <div className="mb-0">
                  <h3 className="text-xl font-bold">Swimming pool</h3>
                </div>
                <div className="border border-gray-200 mb-2"></div>
                <div className="mb-7">
                  Dive into relaxation and enjoy our luxurious hotel pool, where
                  serenity meets refreshment in an oasis of tranquility.
                </div>

                <div className="  mb-4 ml-60">
                  <ScrollLink
                    to="pool"
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="bg-orange-200 hover:bg-orange-400 text-orange-800 px-2 py-2 rounded-lg text-center text-lg cursor-pointer"
                  >
                    Read More
                  </ScrollLink>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="ml-0 mb-7">
                  <img className=" " src={Lounges} alt="spa" />
                </div>
                <div className="mb-0">
                  <h3 className="text-xl font-bold">Lounges & bar</h3>
                </div>
                <div className="border border-gray-200 mb-2"></div>
                <div className="mb-7">
                  Unwind and indulge in our stylish lounge and bar area, where
                  crafted cocktails and cozy ambiance await to elevate your
                  evening.
                </div>

                <div className="  mb-4 ml-60">
                  <ScrollLink
                    to="bar"
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="bg-orange-200 hover:bg-orange-400 text-orange-800 px-2 py-2 rounded-lg text-center text-lg cursor-pointer"
                  >
                    Read More
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facilities;
