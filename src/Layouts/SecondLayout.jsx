/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar2 from "../Component/Navbar2";

const SecondLayout = () => {
  return (
    <>
      <Navbar2 />
      <Outlet />
    </>
  );
};

export default SecondLayout;
