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
import SecondLayout from "./Layouts/SecondLayout";
import NotFoundPage from "./Pages/NotFoundPage";
import FormPage from "./Pages/FormPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/FormPage" element={<FormPage />} />/
        <Route path="*" element={<NotFoundPage />} />/
      </Route>
      <Route path="/roomspage" element={<SecondLayout />}>
        <Route path="/roomspage" element={<RoomsPages />} />/
      </Route>
    </>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
