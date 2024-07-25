/* eslint-disable no-unused-vars */
import React from "react";
//import Card from "../Component/Card";
import { NavLink } from "react-router-dom";
const accountPage = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <div className="flex space-x-8">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-8 py-6">
              <div className="font-bold text-xl mb-2">Log In</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <NavLink
                to="/login"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Log In
              </NavLink>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Create an Account</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <NavLink
                to="/signup"
                className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Create an Account
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      );
    </>
  );
};

export default accountPage;
