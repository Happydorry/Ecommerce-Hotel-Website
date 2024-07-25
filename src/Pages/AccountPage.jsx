/* eslint-disable no-unused-vars */
import React from "react";
//import Card from "../Component/Card";
import { NavLink } from "react-router-dom";
const accountPage = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <div className="flex space-x-20">
          <div className="w-64 rounded overflow-hidden shadow-lg bg-blue-200 hover:bg-blue-400">
            <div className="px-8 py-6">
              <div className="px-6 pt-4 pb-2">
                <NavLink
                  to="/login"
                  className="inline-block ms-5 text-lg  text-black font-bold py-2 px-4 rounded"
                >
                  Log In
                </NavLink>
              </div>
            </div>
          </div>

          <div className="w-64 rounded  overflow-hidden shadow-lg bg-blue-200 hover:bg-blue-400">
            <div className="px-6 py-4">
              <div className="px-6 pt-4 pb-2">
                <NavLink
                  to="/FormPage"
                  className="inline-block   ms-5 text-lg text-black font-bold py-2 px-4 rounded"
                >
                  Create an Account
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    </>
  );
};

export default accountPage;
