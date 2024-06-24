/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ children }) => {
  return (
    <div className="relative overflow-hidden rounded-lg h-full p-4">
      {children}
    </div>
  );
};

export default Card;
