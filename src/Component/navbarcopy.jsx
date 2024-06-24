/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-400 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <a className="flex flex-shrink-0 items-center mr-4" href="">
              <img className="h-10 w-auto" src={logo} alt="Logo" />
            </a>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <Link
                  to="/"
                  className="text-white bg-black hover:bg-gray hover:text-white rounded-md px-3 py-2"
                >
                  Home
                </Link>
                <Link
                  to="/rooms"
                  className="text-white bg-black hover:bg-gray hover:text-white rounded-md px-3 py-2"
                >
                  Rooms
                </Link>
                <Link
                  to=""
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Facilities
                </Link>
                <Link
                  to=""
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
