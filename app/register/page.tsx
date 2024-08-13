"use client";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);
import Container from "../components/Container";
import Button from "../components/Button";
import Link from "next/link";
import axiosInstance from "@/utils/axiosInstance";
import { Values } from "@/utils/types";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import store from "@/redux/store";
import { RegisterPayload, userRegister } from "@/features/user/userSlice";

const RegisterForm = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("UserName is required")
      .min(5, "UserName must be at least 5 characters long"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .minLowercase(1, "Password must contain at least 1 lower case letter")
      .minUppercase(1, "Password must contain at least 1 upper case letter")
      .minNumbers(1, "Password must contain at least 1 number")
      .minSymbols(1, "Password must contain at least 1 special characters"),
    retypePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Retype Password is required"),
    firstName: Yup.string()
      .required("First Name is required")
      .min(2, "First Name must be at least 2 characters long"),
    lastName: Yup.string()
      .required("Last Name is required")
      .min(2, "Last Name must be at least 2 characters long"),
    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .matches(/^(\+251|251|0)?[79]\d{8}$/, " Invalid Phone Number"),
    agreement: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions.")
      .required("You must accept the terms and conditions"),
  });

  const handleSubmit = async (
    values: Values,
    { resetForm }: { resetForm: () => void }
  ) => {
    if (!values.agreement) {
      toast.error("You must accept the terms and conditions", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });

      return;
    }

    const user: RegisterPayload = {
      username: values.username,
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
    };

    try {
      const resultAction = await store.dispatch(userRegister(user));

      if (userRegister.fulfilled.match(resultAction)) {
        console.log("register successful", resultAction);
        resetForm();
      } else {
        console.log("registration failed", resultAction.error.message);
      }
    } catch (error) {
      console.log("unexpected error occured", error);
    }

    // try {
    //   const response = await axios.post("http://localhost:9000/user/register", {
    //     username: values.username,
    //     email: values.email,
    //     password: values.password,
    //     firstName: values.firstName,
    //     lastName: values.lastName,
    //     phoneNumber: values.phoneNumber,
    //   });
    //   console.log("response: ", response);
    //   toast.success(`${values.username} registered successfully`, {
    //     position: "bottom-left",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //     transition: Bounce,
    //   });
    //   resetForm();
    //   console.log("values: ", values);
    // } catch (error) {
    //   console.log("error: ", error);
    //   toast.error(`${error}`, {
    //     position: "bottom-left",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //     transition: Bounce,
    //   });
    // }
  };

  const [eye, setEye] = useState<Boolean>(false);
  const handleEyeClick = () => {
    setEye((prev) => !prev);
  };

  return (
    <div className="bg-[#f6f9fc] min-h-screen">
      <Container>
        <div className="bg-white lg:w-[500px] xs:w-[400px] px-12 py-8 m-auto rounded-lg shadow-md">
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              retypePassword: "",
              firstName: "",
              lastName: "",
              phoneNumber: "",
              agreement: false,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="mb-3 flex flex-col">
                  <label className="text-[13px] font-medium text-[#4b566b] mb-2">
                    UserName
                  </label>
                  <Field
                    name="username"
                    type="text"
                    placeholder="snake"
                    style={{
                      borderColor:
                        errors.username && touched.username
                          ? "#e94560"
                          : "#475569",
                    }}
                    className={`form-control h-[44px] text-[#2b3445] text-[14px] font-normal w-full rounded-[4px] p-3 border outline-none ${
                      errors.username && touched.username
                        ? "is-invalid border-[#e94560]"
                        : "border-[#475569]"
                    }`}
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="invalid-feedback text-[#e94560] mx-[14px] mt-1 text-[12px] font-normal"
                  />
                </div>

                <div className="mb-3 flex flex-col">
                  <label className="text-[13px] font-medium text-[#4b566b] mb-2">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    className={`form-control h-[44px] text-[#2b3445] text-[14px] font-normal w-full rounded-[4px] p-3 border outline-none ${
                      errors.email && touched.email
                        ? "is-invalid border-[#e94560]"
                        : "border-[#475569]"
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback text-[#e94560] mx-[14px] mt-1 text-[12px] font-normal"
                  />
                </div>

                <div className="mb-3 flex flex-col">
                  <label className="text-[13px] font-medium text-[#4b566b] mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Field
                      name="password"
                      type={`${eye ? "text" : "password"}`}
                      placeholder="********"
                      className={`form-control h-[44px] text-[#2b3445] text-[14px] font-normal w-full rounded-[4px] p-3 border outline-none ${
                        errors.password && touched.password
                          ? "is-invalid border-[#e94560]"
                          : "border-[#475569]"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={handleEyeClick}
                      className="absolute right-3 top-3"
                    >
                      {eye ? (
                        <IoEye size={20} color="#7D879C" />
                      ) : (
                        <IoEyeOff size={20} color="#DAE1E7" />
                      )}
                    </button>
                  </div>

                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback text-[#e94560] mx-[14px] mt-1 text-[12px] font-normal"
                  />
                </div>

                <div className="mb-3 flex flex-col">
                  <label className="text-[13px] font-medium text-[#4b566b] mb-2">
                    Retype Password
                  </label>
                  <div className="relative">
                    <Field
                      name="retypePassword"
                      type={`${eye ? "text" : "password"}`}
                      placeholder="********"
                      className={`form-control h-[44px] text-[#2b3445] text-[14px] p-3 font-normal w-full rounded-[4px] border outline-none ${
                        errors.retypePassword && touched.retypePassword
                          ? "is-invalid border-[#e94560]"
                          : "border-[#475569]"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={handleEyeClick}
                      className="absolute right-3 top-3"
                    >
                      {eye ? (
                        <IoEye size={20} color="#7D879C" />
                      ) : (
                        <IoEyeOff size={20} color="#DAE1E7" />
                      )}
                    </button>
                  </div>
                  <ErrorMessage
                    name="retypePassword"
                    component="div"
                    className="invalid-feedback text-[#e94560] mx-[14px] mt-1 text-[12px] font-normal"
                  />
                </div>

                <div className="mb-3 flex flex-col">
                  <label className="text-[13px] font-medium text-[#4b566b] mb-2">
                    First Name
                  </label>
                  <Field
                    name="firstName"
                    type="text"
                    placeholder="Biruk"
                    style={{
                      borderColor:
                        errors.firstName && touched.firstName
                          ? "#e94560"
                          : "#475569",
                    }}
                    className={`form-control h-[44px] text-[#2b3445] text-[14px] font-normal w-full rounded-[4px] p-3 border outline-none ${
                      errors.firstName && touched.firstName
                        ? "is-invalid border-[#e94560]"
                        : "border-[#475569]"
                    }`}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="invalid-feedback text-[#e94560] mx-[14px] mt-1 text-[12px] font-normal"
                  />
                </div>

                <div className="mb-3 flex flex-col">
                  <label className="text-[13px] font-medium text-[#4b566b] mb-2">
                    Last Name
                  </label>
                  <Field
                    name="lastName"
                    type="text"
                    placeholder="Belhu"
                    style={{
                      borderColor:
                        errors.lastName && touched.lastName
                          ? "#e94560"
                          : "#475569",
                    }}
                    className={`form-control h-[44px] text-[#2b3445] text-[14px] font-normal w-full rounded-[4px] p-3 border outline-none ${
                      errors.lastName && touched.lastName
                        ? "is-invalid border-[#e94560]"
                        : "border-[#475569]"
                    }`}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="invalid-feedback text-[#e94560] mx-[14px] mt-1 text-[12px] font-normal"
                  />
                </div>

                <div className="mb-3 flex flex-col">
                  <label className="text-[13px] font-medium text-[#4b566b] mb-2">
                    Phone Number
                  </label>
                  <Field
                    name="phoneNumber"
                    type="text"
                    placeholder="0938484848"
                    style={{
                      borderColor:
                        errors.phoneNumber && touched.phoneNumber
                          ? "#e94560"
                          : "#475569",
                    }}
                    className={`form-control h-[44px] text-[#2b3445] text-[14px] font-normal w-full rounded-[4px] p-3 border outline-none ${
                      errors.phoneNumber && touched.phoneNumber
                        ? "is-invalid border-[#e94560]"
                        : "border-[#475569]"
                    }`}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="invalid-feedback text-[#e94560] mx-[14px] mt-1 text-[12px] font-normal"
                  />
                </div>

                <div className="mb-6 flex flex-col">
                  <div className="flex items-center gap-[9px] text-[#2B3445] text-sm">
                    <Field
                      name="agreement"
                      type="checkbox"
                      className="form-checkbox size-4"
                    />
                    <div className="w-full flex gap-2 items-center">
                      <span>Accept our </span>
                      <a
                        href="/condition"
                        className="border-b border-b-[#2b3445] font-semibold text-14px sm:text-red-100[16px]"
                      >
                        Terms & Condition
                      </a>
                    </div>
                  </div>
                  <ErrorMessage
                    name="agreement"
                    component="div"
                    className="invalid-feedback text-[#e94560] mx-[14px] mt-1 text-[12px] font-normal"
                  />
                </div>

                {/* <div className="flex items-center gap-[9px] mt-3 mb-6 text-[#2B3445] text-sm">
                  <input type="checkbox" name="agreement" />
                  <div>
                    <span>Accept our </span>
                    <a
                      href="/condition"
                      className="border-b border-b-[#2b3445] font-semibold text-14px sm:text-red-100[16px]"
                    >
                      Terms & Condition
                    </a>
                  </div>
                </div> */}

                <button
                  type="submit"
                  className="bg-[#d23f57] text-white text-[0.9375rem] px-10 py-[0.6rem] w-full  rounded-[6px] transition-colors active:shadow-xl hover:bg-[#e3364e]"
                >
                  Create Account
                </button>

                <div className="flex justify-center items-center mt-6 gap-2 text-sm text-[#2B3445]">
                  Already have an account?
                  <Link
                    href="/login"
                    className="font-semibold border-b border-b-[#2b3445]"
                  >
                    Login
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </div>
  );
};

export default RegisterForm;
