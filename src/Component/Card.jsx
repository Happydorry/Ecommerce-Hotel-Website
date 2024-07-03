/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ children }) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gray-200 h-full p-4 py-18">
      <div>{children}</div>
    </div>
  );
};

export default Card;
