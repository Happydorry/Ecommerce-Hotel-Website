/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import logo from "../assets/Images/logo.png";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ scrollToRooms }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <nav className="bg-gray-400 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="Logo" />
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/roomspage"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  }
                >
                  Rooms
                </NavLink>
                <ScrollLink
                  to="Facilities"
                  smooth={true}
                  offset={-200}
                  duration={500}
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 cursor-pointer"
                >
                  Facilities
                </ScrollLink>
                <ScrollLink
                  to="faq"
                  smooth={true}
                  offset={-200}
                  duration={500}
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 cursor-pointer"
                >
                  FAQ
                </ScrollLink>

                <NavLink
                  to=""
                  onClick={toggleDropdown}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  }
                >
                  Account
                </NavLink>
                {dropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-10 w-40 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-4">
                    {isLoggedIn ? (
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    ) : (
                      <NavLink
                        to="/LoginPage"
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Login
                      </NavLink>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
