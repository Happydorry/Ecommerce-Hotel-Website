/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ children }) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-blue-100 h-full ">
      <div>{children}</div>
    </div>
  );
};

export default Card;
