/* eslint-disable no-unused-vars */
import React from "react";
import * as Yup from "yup";

const validationForm = Yup.object({
  fullname: Yup.string()
    .required("Full Name is required")
    .min(2, "Full Name must be at least 2 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export default validationForm;
