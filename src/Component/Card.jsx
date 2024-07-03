/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ children }) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gray-200 h-full p-4 py-15">
      <div className="card-content overflow-y-auto max-h-60">{children}</div>
    </div>
  );
};

export default Card;
