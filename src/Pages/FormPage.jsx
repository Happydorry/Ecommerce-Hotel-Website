/* eslint-disable no-unused-vars */
import React from "react";
import { useFormik } from "formik";

const FormPage = () => {
  const formik = useFormik({
    initialValues: {
      FullName: "",
      email: "",
      Password: "",
    },
  });

  return (
    <div className="border bg-gray-500 border-black w-full md:w-1/2 lg:w-1/3 mx-auto p-8 py-20 mt-40">
      <h1 className="font-extrabold text-2xl text-center mb-10">
        Create an Account
      </h1>
      <form autoComplete="off">
        <div className="flex flex-col">
          <label className="mb-2" htmlFor="fullname">
            Full Name
          </label>
          <input
            className="border border-black p-2"
            value={formik.values.FullName}
            onChange={formik.handleChange}
            id="name"
            type="name"
            placeholder="Full Name"
          />
          <label className="mt-10 mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border border-black p-2"
            value={formik.values.email}
            onChange={formik.handleChange}
            id="email"
            type="email"
            placeholder="Email Address"
          />
          <label className=" mt-10 mb-2" htmlFor="fullname">
            Password
          </label>
          <input
            className="border border-black p-2"
            value={formik.values.Password}
            onChange={formik.handleChange}
            id="password"
            type="password"
            placeholder="Enter Password"
          />
        </div>
      </form>
    </div>
  );
};

export default FormPage;
