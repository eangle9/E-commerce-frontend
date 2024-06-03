"use client";

import Link from "next/link";
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Container from "@/app/components/Container";
import { MouseEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { closeMenu, toggleMenu } from "@/features/menu/menuSlice";
import Image from "next/image";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  const [isLanClicked, setIsLanClicked] = useState<Boolean>(false);
  // const [isClient, setIsClient] = useState<Boolean>(false);

  const handleLanClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLanClicked(!isLanClicked);
  };
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      dispatch(closeMenu());
    }
  };

  useEffect(() => {
    // setIsClient(true);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // if (!isClient) return null;

  return (
    <div className="sticky top-0 w-full z-30 shadow-sm shadow-slate-100/50">
      <nav className="bg-[#2B3445] h-10 p-1">
        <Container>
          <div className="topnav">
            <div className="flex items-center gap-2">
              <Link href="/" className="">
                <Image
                  src="/images/eagle-logo.jpg"
                  alt="eagle-logo"
                  height={40}
                  width={40}
                  className="rounded-2xl w-auto h-auto transition duration-300 hover:opacity-50"
                />
              </Link>
              <Link
                href="/"
                className="hidden lg:block text-lg font-extrabold hover:opacity-80 transition bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
              >
                Eagle Shop
              </Link>
            </div>
            <div className="flex items-center text-xs">
              <button
                onClick={handleLanClick}
                className="inline-flex h-8 mr-5 gap-1 cursor-pointer items-center justify-center text-white relative transition-colors duration-300 hover:bg-slate-700"
              >
                <span className="ml-2 text-xs font-semibold">EN</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="8px"
                  height="8px"
                  viewBox="0 0 256 256"
                  xmlSpace="preserve"
                >
                  <defs></defs>
                  <g
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "currentColor",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <polygon
                      points="45,69.52 0,30.25 8.52,20.48 45,52.31 81.48,20.48 90,30.25 "
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="  matrix(1 0 0 1 0 0) "
                    />
                  </g>
                </svg>
                {isLanClicked && (
                  <div className="absolute top-10 z-10 text-[#2b3445] bg-transparent">
                    <ul className="list-none">
                      <li className="text-sm font-normal px-3 py-1 transition-colors hover:bg-slate-100">
                        EN
                      </li>
                      <li className="text-sm font-normal px-3 py-1 hover:bg-slate-100">
                        AM
                      </li>
                    </ul>
                  </div>
                )}
              </button>
              <div className="flex items-center text-[16px] gap-3">
                <Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    xmlSpace="preserve"
                  >
                    <defs></defs>
                    <g
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                    >
                      <path
                        d="M 28.303 81.565 c 33.962 0 52.538 -28.138 52.538 -52.538 c 0 -0.799 0 -1.595 -0.054 -2.387 c 3.614 -2.614 6.733 -5.85 9.212 -9.558 c -3.37 1.493 -6.945 2.473 -10.606 2.905 c 3.855 -2.308 6.74 -5.937 8.118 -10.213 c -3.625 2.151 -7.59 3.667 -11.725 4.482 c -6.993 -7.436 -18.69 -7.795 -26.126 -0.802 c -4.796 4.51 -6.83 11.23 -5.342 17.643 C 29.473 30.352 15.64 23.34 6.264 11.804 c -4.901 8.437 -2.398 19.231 5.717 24.649 c -2.939 -0.087 -5.813 -0.88 -8.381 -2.311 c 0 0.076 0 0.155 0 0.234 c 0.002 8.79 6.198 16.36 14.814 18.101 c -2.718 0.741 -5.571 0.85 -8.338 0.317 c 2.419 7.522 9.351 12.675 17.251 12.823 c -6.539 5.139 -14.616 7.928 -22.932 7.92 C 2.926 73.534 1.459 73.445 0 73.27 c 8.444 5.419 18.27 8.293 28.303 8.28"
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "currentColor",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </Link>
                <Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    xmlSpace="preserve"
                  >
                    <defs></defs>
                    <g
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                    >
                      <path
                        d="M 85.033 -0.001 H 4.967 C 2.224 -0.001 0 2.223 0 4.967 v 80.066 C 0 87.775 2.223 90 4.967 90 h 40.922 V 55.147 H 34.16 V 41.564 h 11.729 V 31.547 c 0 -11.625 7.1 -17.954 17.47 -17.954 c 4.967 0 9.237 0.37 10.481 0.535 v 12.149 l -7.193 0.003 c -5.639 0 -6.731 2.68 -6.731 6.612 v 8.672 h 13.45 l -1.752 13.583 H 59.916 V 90 h 25.117 C 87.776 90 90 87.776 90 85.032 V 4.967 C 90 2.223 87.776 -0.001 85.033 -0.001 z"
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "currentColor",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </Link>
                <Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    xmlSpace="preserve"
                  >
                    <defs></defs>
                    <g
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                    >
                      <path
                        d="M 62.263 90 H 27.738 C 12.443 90 0 77.557 0 62.263 V 27.738 C 0 12.443 12.443 0 27.738 0 h 34.525 C 77.557 0 90 12.443 90 27.738 v 34.525 C 90 77.557 77.557 90 62.263 90 z M 27.738 7 C 16.303 7 7 16.303 7 27.738 v 34.525 C 7 73.697 16.303 83 27.738 83 h 34.525 C 73.697 83 83 73.697 83 62.263 V 27.738 C 83 16.303 73.697 7 62.263 7 H 27.738 z"
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "currentColor",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 45.255 70.47 c -13.904 0 -25.215 -11.312 -25.215 -25.215 S 31.352 20.04 45.255 20.04 s 25.215 11.312 25.215 25.215 S 59.159 70.47 45.255 70.47 z M 45.255 27.04 c -10.044 0 -18.215 8.171 -18.215 18.215 c 0 10.044 8.171 18.215 18.215 18.215 c 10.044 0 18.215 -8.171 18.215 -18.215 C 63.471 35.211 55.3 27.04 45.255 27.04 z"
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "currentColor",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <circle
                        cx="70.557"
                        cy="19.936999999999998"
                        r="4.897"
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "currentColor",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform="  matrix(1 0 0 1 0 0) "
                      />
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
            {/* <div className="w-full mb-2.5 md:mb-0 md:w-1/2 flex relative">
              <input type="text" placeholder="Search..." className="w-full" />
              <button className="searchbtn">
                <SearchOutlinedIcon />
              </button>
            </div> */}
            {/* <div className="flex justify-evenly mt-2.5 md:mt-0 items-center md:gap-10">
              <Link href="/">
                <img
                  src="/images/eagle-logo.jpg"
                  alt="eagle-logo"
                  className="block md:hidden h-12 w-auto "
                />
              </Link>
              <Link href="/account" className="flex items-center gap-2">
                <PersonOutlineOutlinedIcon className="size-9 text-slate-100" />
                <div className="flex flex-col">
                  <div className="login-signup">
                    <div className="hover:opacity-80 transition">Login</div>
                    <span>&nbsp;/&nbsp;</span>
                    <div className="hover:opacity-80 transition">Signup</div>
                  </div>
                  <div className="my-account">My account</div>
                </div>
              </Link>
              <Link href="/shoppingcart" className="flex items-center">
                <ShoppingCartOutlinedIcon className="size-8 text-slate-100" />
                <div className="flex flex-col gap-0.5">
                  <span className="cart-quantity">0</span>
                  <span className="cart">Cart</span>
                </div>
              </Link>
            </div> */}
          </div>
        </Container>
      </nav>

      <div className="bg-white h-20">
        <Container>
          <div className="w-full h-full flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/eagle-image.jpg"
                alt=""
                width={100}
                height={60}
                layout="fixed"
                // className="w-20 h-14 sm:w-24 sm:h-16 md:w-32 md:h-20 lg:w-40 lg:h-28 xl:w-48 xl:h-32"
              />
            </Link>
            <div className="w-1/2 flex relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full hidden md:block bg-[#F3F5F9] border-none"
              />
              <button className="searchbtn hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                  xmlSpace="preserve"
                >
                  <defs></defs>
                  <g
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "currentColor",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <path
                      d="M 88.271 79.927 L 71.011 62.666 c -0.631 -0.631 -1.574 -0.743 -2.327 -0.355 l -2.509 -2.509 c 11.408 -14.576 10.241 -35.733 -2.986 -48.96 C 56.197 3.851 46.902 0 37.015 0 S 17.833 3.851 10.842 10.842 C 3.851 17.833 0 27.128 0 37.015 s 3.851 19.182 10.842 26.173 c 7.171 7.172 16.671 10.798 26.191 10.798 c 8.04 0 16.095 -2.588 22.769 -7.812 l 2.509 2.509 c -0.388 0.753 -0.276 1.696 0.355 2.327 l 17.261 17.261 C 81.041 89.386 82.523 90 84.099 90 c 1.576 0 3.059 -0.614 4.173 -1.729 S 90 85.675 90 84.099 C 90 82.523 89.386 81.041 88.271 79.927 z M 58.596 58.596 c -5.95 5.95 -13.765 8.925 -21.581 8.925 c -7.815 0 -15.631 -2.975 -21.581 -8.925 c -11.9 -11.899 -11.9 -31.262 0 -43.162 c 11.9 -11.9 31.262 -11.899 43.162 0 C 70.496 27.333 70.496 46.696 58.596 58.596 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <div className="flex gap-1 items-center text-xl text-[#7D879C]">
              <button className="p-2 block md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                  xmlSpace="preserve"
                >
                  <defs></defs>
                  <g
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "currentColor",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <path
                      d="M 88.271 79.927 L 71.011 62.666 c -0.631 -0.631 -1.574 -0.743 -2.327 -0.355 l -2.509 -2.509 c 11.408 -14.576 10.241 -35.733 -2.986 -48.96 C 56.197 3.851 46.902 0 37.015 0 S 17.833 3.851 10.842 10.842 C 3.851 17.833 0 27.128 0 37.015 s 3.851 19.182 10.842 26.173 c 7.171 7.172 16.671 10.798 26.191 10.798 c 8.04 0 16.095 -2.588 22.769 -7.812 l 2.509 2.509 c -0.388 0.753 -0.276 1.696 0.355 2.327 l 17.261 17.261 C 81.041 89.386 82.523 90 84.099 90 c 1.576 0 3.059 -0.614 4.173 -1.729 S 90 85.675 90 84.099 C 90 82.523 89.386 81.041 88.271 79.927 z M 58.596 58.596 c -5.95 5.95 -13.765 8.925 -21.581 8.925 c -7.815 0 -15.631 -2.975 -21.581 -8.925 c -11.9 -11.899 -11.9 -31.262 0 -43.162 c 11.9 -11.9 31.262 -11.899 43.162 0 C 70.496 27.333 70.496 46.696 58.596 58.596 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </button>
              <button className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                  xmlSpace="preserve"
                >
                  <defs></defs>
                  <g
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "currentColor",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <path
                      d="M 84.657 90 H 5.343 v -2 c 0 -21.867 17.79 -39.657 39.657 -39.657 c 21.867 0 39.657 17.79 39.657 39.657 V 90 z M 9.398 86 h 71.203 C 79.562 67.265 63.99 52.343 45 52.343 S 10.439 67.265 9.398 86 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <path
                      d="M 45 43.971 c -12.123 0 -21.985 -9.863 -21.985 -21.986 C 23.015 9.863 32.877 0 45 0 c 12.123 0 21.985 9.863 21.985 21.985 C 66.985 34.108 57.123 43.971 45 43.971 z M 45 4 c -9.917 0 -17.985 8.068 -17.985 17.985 c 0 9.917 8.068 17.986 17.985 17.986 s 17.985 -8.068 17.985 -17.986 C 62.985 12.068 54.917 4 45 4 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </button>
              <button className="p-2 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                  xmlSpace="preserve"
                >
                  <defs></defs>
                  <g
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "currentColor",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <path
                      d="M 72.975 58.994 H 31.855 c -1.539 0 -2.897 -1.005 -3.347 -2.477 L 15.199 13.006 H 3.5 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 14.289 c 1.539 0 2.897 1.005 3.347 2.476 l 13.309 43.512 h 36.204 l 10.585 -25.191 h -6.021 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 H 86.5 c 1.172 0 2.267 0.587 2.915 1.563 s 0.766 2.212 0.312 3.293 L 76.201 56.85 C 75.655 58.149 74.384 58.994 72.975 58.994 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                    <circle
                      cx="28.88"
                      cy="74.33"
                      r="6.16"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="  matrix(1 0 0 1 0 0) "
                    />
                    <circle
                      cx="74.59"
                      cy="74.33"
                      r="6.16"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="  matrix(1 0 0 1 0 0) "
                    />
                    <path
                      d="M 62.278 19.546 H 52.237 V 9.506 c 0 -1.933 -1.567 -3.5 -3.5 -3.5 s -3.5 1.567 -3.5 3.5 v 10.04 h -10.04 c -1.933 0 -3.5 1.567 -3.5 3.5 s 1.567 3.5 3.5 3.5 h 10.04 v 10.04 c 0 1.933 1.567 3.5 3.5 3.5 s 3.5 -1.567 3.5 -3.5 v -10.04 h 10.041 c 1.933 0 3.5 -1.567 3.5 -3.5 S 64.211 19.546 62.278 19.546 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
                <span className="absolute top-0 right-0 text-white bg-[#D23F57] rounded-xl"></span>
              </button>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-slate-100">
        <Container>
          <div className="block lg:hidden px-1 py-3">
            <button
              onClick={() => dispatch(toggleMenu())}
              className="flex items-center"
            >
              <MenuOutlinedIcon className="text-slate-500" />
              <span className="ml-1 uppercase font-bold text-sm">Menu</span>
            </button>
          </div>

          <div className="hidden lg:block text-sm text-black py-4">
            <ul className="lists">
              <li>
                <Link href="#" className="link">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Vegetables & Fruits
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Groceries
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Meat & Meat Products
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Dairy Products
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Beverages
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Machineries & Tools
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Shoes & Clothes
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Medicine & Pharmaceuticals
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Vendor Membership
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Agents Registration
                </Link>
              </li>
            </ul>
          </div>
        </Container>
        <div
          className={`${
            isOpen
              ? "sidebar left-0 ease-in-out duration-1000 shadow-md shadow-slate-100/50"
              : "sidebar -left-full ease-in duration-300"
          }`}
        >
          <div
            onClick={() => dispatch(closeMenu())}
            className="closeIconContainer"
          >
            <CloseOutlinedIcon className="closeIcon" />
          </div>
          <ul className="menu">
            <li>
              <Link href="#" className="link">
                Shop
              </Link>
            </li>
            <li>
              <Link href="#" className="link">
                Vegetables & Fruits
              </Link>
            </li>
            <li>
              <Link href="#" className="link">
                Groceries
              </Link>
            </li>
            <li>
              <Link href="#" className="link">
                Meat & Meat Products
              </Link>
            </li>

            <li>
              <Link href="#" className="link">
                Dairy Products
              </Link>
            </li>
            <li>
              <Link href="#" className="link">
                Beverages
              </Link>
            </li>
            <li>
              <Link href="#" className="link">
                Machineries & Tools
              </Link>
            </li>
            <li>
              <Link href="#" className="link">
                Shoes & Clothes
              </Link>
            </li>
            <li>
              <Link href="#" className="link">
                Electronics
              </Link>
            </li>
            <li>
              <Link href="#" className="link">
                Medicine & Pharmaceuticals
              </Link>
            </li>
            <li>
              <Link href="#" className="link">
                Vendor Membership
              </Link>
            </li>
            <li>
              <Link href="#" className="link">
                Agents Registration
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
