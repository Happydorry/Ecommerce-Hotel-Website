/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border-b border-gray-200 ">
    <h2 className="mb-2">
      <button
        className="flex items-center justify-between w-full py-4 text-left text-gray-800 font-medium focus:outline-none"
        onClick={onClick}
      >
        {title}
        <span>{isOpen ? "^" : "+"}</span>
      </button>
    </h2>
    <div
      className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
        isOpen ? "max-h-50" : "max-h-0"
      }`}
    >
      <div className="py-4 text-gray-700 ms-5">{content}</div>
    </div>
  </div>
);

const Accordion = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const handleClick = (index) => {
    setOpenIndices(
      (prevIndices) =>
        prevIndices.includes(index)
          ? prevIndices.filter((i) => i !== index) // Close if already open
          : [...prevIndices, index] // Open if not already open
    );
  };

  return (
    <div className="accordion">
      <AccordionItem
        title="What are the check-in and check-out times?"
        content="The check-in time is at 3pm and the check-out time is at 12:00pm."
        isOpen={openIndices.includes(0)}
        onClick={() => handleClick(0)}
      />
      <AccordionItem
        title="Are pets allowed?"
        content="The Pet Policy is: No pets allowed"
        isOpen={openIndices.includes(1)}
        onClick={() => handleClick(1)}
      />
      <AccordionItem
        title="Does it have free Wi-Fi?"
        content="Yes, free Wi-Fi is available to all hotel guests."
        isOpen={openIndices.includes(2)}
        onClick={() => handleClick(2)}
      />
      <AccordionItem
        title="Is breakfast included?"
        content="Yes, breakfast is on the hotel."
        isOpen={openIndices.includes(3)}
        onClick={() => handleClick(3)}
      />
      <AccordionItem
        title="What is the nightly room rate for this weekend?"
        content="Based on recent averages, the room rate for this weekend can be as low as 337.97 per night."
        isOpen={openIndices.includes(4)}
        onClick={() => handleClick(4)}
      />
    </div>
  );
};

export default Accordion;
