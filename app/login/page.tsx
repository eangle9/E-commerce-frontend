"use client";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);
import Container from "../components/Container";
import Button from "../components/Button";
import Link from "next/link";
import axiosInstance from "@/utils/axiosInstance";
import { LoginValues, Values } from "@/utils/types";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginPayload, userLogin } from "@/features/user/userSlice";
import store, { RootState } from "@/redux/store";
import { ClipLoader } from "react-spinners";
// import { useRouter } from "next/router";

const LoginForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .minLowercase(1, "Password must contain at least 1 lower case letter")
      .minUppercase(1, "Password must contain at least 1 upper case letter")
      .minNumbers(1, "Password must contain at least 1 number")
      .minSymbols(1, "Password must contain at least 1 special characters"),
  });

  const dispatch = useDispatch();
  // const router = useRouter();
  const loading = useSelector((state: RootState) => state.users.isLoading);
  const error = useSelector((state: RootState) => state.users.error);
  const loginInfo = useSelector((state: RootState) => state.users.loginInfo);

  // useEffect(() => {
  //   if (typeof window != "undefined") {
  //     if (userInfo) {
  //       router.replace("/");
  //     }
  //   }
  // }, [router, userInfo]);

  const handleSubmit = async (
    values: LoginPayload,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const resultAction = await store.dispatch(userLogin(values));

      if (userLogin.fulfilled.match(resultAction)) {
        console.log("login successful", resultAction);
        resetForm();
      } else {
        console.log("login failed", resultAction.error.message);
      }
    } catch (error) {
      console.log("unexpected error occured", error);
    }
  };

  const [eye, setEye] = useState<Boolean>(false);
  const handleEyeClick = () => {
    setEye((prev) => !prev);
  };

  return (
    <div className="bg-[#f6f9fc] py-10 xs:p-10 min-h-fit flex justify-center items-center">
      <Container>
        <div className="bg-white lg:w-[500px] xs:w-[400px] w-full px-12 py-8 m-auto rounded-lg shadow-xl">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
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
                      style={{
                        borderColor:
                          errors.password && touched.password
                            ? "#e94560"
                            : "#475569",
                      }}
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
                <button
                  type="submit"
                  className="bg-[#d23f57] text-white text-[0.9375rem] px-10 py-[0.6rem] w-full  rounded-[6px] transition-colors active:shadow-xl hover:bg-[#e3364e]"
                >
                  {loading ? <ClipLoader size={25} color="#ffffff" /> : "Login"}
                </button>

                <div className="flex justify-center items-center my-6 gap-2 text-sm text-[#2B3445]">
                  Don't have account?
                  <Link
                    href="/register"
                    className="font-semibold border-b border-b-[#2b3445]"
                  >
                    Register
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-2 rounded-[4px] px-2 text-sm text-[#2B3445] py-4 bg-[#f3f5f9]">
                  Forgot your password?
                  <Link
                    href="/password-reset"
                    className="font-semibold border-b border-b-[#2b3445]"
                  >
                    Reset It
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

export default LoginForm;
