/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../Component/Hero";
import Rooms from "../Component/Rooms";
import Facilities from "../Component/Facilities";
import AdditionalInfo from "../Component/AdditionalInfo";
import FrequentlyAskedQuestions from "../Component/FrequentlyAskedQuestions";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Rooms />
      <Facilities />
      <AdditionalInfo />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default HomePage;
