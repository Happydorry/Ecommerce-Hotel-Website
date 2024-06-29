/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useFormik, validateYupSchema } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import validationForm from "../Component/validationForm";
import * as Yup from "yup";

const FormPage = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    validationSchema: validationForm,
    onSubmit: () => {
      toast.success("Successfully Reserved!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      formik.resetForm();
    },
  });

  useEffect(() => {
    formik.resetForm();
  }, []);

  return (
    <div className="border bg-gray-500 border-black w-full md:w-1/2 lg:w-1/3 mx-auto p-8 py-10 mt-40">
      <h1 className="font-extrabold text-2xl text-center mb-10">
        Create an Account
      </h1>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col">
          <label className="mb-2" htmlFor="fullname">
            Full Name
          </label>
          <input
            className="border border-black p-2"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            id="fullname"
            type="text"
            placeholder="Full Name"
          />
          {formik.touched.fullname && formik.errors.fullname ? (
            <div className="text-red-500">{formik.errors.fullname}</div>
          ) : null}
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
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
          <label className=" mt-10 mb-2" htmlFor="password">
            Password
          </label>
          <input
            className={`border border-black p-2 ${
              formik.values.password ? "bg-pink" : ""
            }`}
            value={formik.values.password}
            onChange={formik.handleChange}
            id="password"
            type="password"
            placeholder="Enter Password"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="mt-10 ml-40 bg-black hover:bg-blue-700 text-white font-bold py-4 px-6 rounded"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default FormPage;
