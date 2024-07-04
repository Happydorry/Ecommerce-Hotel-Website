/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../Component/Hero";
import Rooms from "../Component/Rooms";
import Facilities from "../Component/Facilities";
import AdditionalInfo from "../Component/AdditionalInfo";
import FrequentlyAskedQuestions from "../Component/FrequentlyAskedQuestions";
import Location from "../Component/Location";

import { useRef } from "react";

const HomePage = () => {
  const facilitiesRef = useRef(null);
  const faqRef = useRef(null);
  const locationRef = useRef(null);

  return (
    <>
      <Hero />
      <Rooms />
      <div id="Facilities" ref={facilitiesRef}>
        <Facilities />
      </div>
      <AdditionalInfo />
      <div id="location" ref={locationRef}>
        <Location />
      </div>
      <div id="faq" ref={faqRef}>
        <FrequentlyAskedQuestions />
      </div>
    </>
  );
};

export default HomePage;
