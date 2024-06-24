/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import RoomsPages from "./Pages/RoomsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import { useRef } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/roomspage" element={<RoomsPages />} />/
        <Route path="*" element={<NotFoundPage />} />/
      </Route>
    </>
  )
);

const App = () => {
  const facilitiesRef = useRef(null);
  const faqRef = useRef(null);

  return (
    <>
      <RouterProvider router={router} />
      {/* <div id="facilities" ref={facilitiesRef}>
        <Facilities />
      </div>
      <div id="faq" ref={faqRef}>
        <FAQ />
      </div> */}
    </>
  );
};

export default App;
