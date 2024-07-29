/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validationForm from "../Component/validationForm";
import Spinner from "../Component/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationForm,
    onSubmit: (values) => {
      setLoading(true);
      // bcrypt
      axios
        .post("http://localhost:8000/form/submit-form", {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          console.log("Logged in successfully", response.data);
          toast.success("Successfully Reserved!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          formik.resetForm();
          setTimeout(() => {
            navigate("/roomspage");
          }, 3000);
        })
        .catch((err) => console.log(err.message))
        .finally(() => setLoading(false));
    },
  });

  useEffect(() => {
    formik.resetForm();
  }, []);
  return (
    <>
      <div className="border bg-gray-500 border-black w-full md:w-1/2 lg:w-1/3 mx-auto p-8 py-10 mt-40">
        <h1 className="font-extrabold text-2xl text-center mb-10">Welcome!</h1>

        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col">
            <label className="mt-8 mb-2" htmlFor="email">
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
            className="mt-10 ml-40 bg-black hover:bg-gray-800 text-white font-bold py-4 px-6 rounded"
            disabled={loading}
          >
            Log in
          </button>
        </form>
        <ToastContainer />
      </div>
      {loading && (
        <div className="spinner-container">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default LoginPage;
