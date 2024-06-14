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
import { BiSolidCategory } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  const [isLanClicked, setIsLanClicked] = useState<Boolean>(false);
  const [isCatClicked, setIsCatClicked] = useState<Boolean>(false);
  // const [isClient, setIsClient] = useState<Boolean>(false);

  const handleLanClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLanClicked(!isLanClicked);
  };

  const handleCatClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsCatClicked(!isCatClicked);
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
    <div className="w-full sticky top-0 z-30 shadow-sm shadow-slate-100/50">
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

      <div className="bg-white">
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

      <div className="bg-white">
        <Container>
          <div className="w-full flex items-center justify-between text-[#2B3445] relative h-[60px] rounded-md">
            <div className="cursor-pointer relative text-sm bg-[#f3f5f9] ">
              <button
                onClick={handleCatClick}
                className="p-2 inline-flex items-center justify-between w-10 sm:w-64 font-semibold capitalize"
              >
                <div className="flex gap-2 items-center">
                  <BiSolidCategory size={20} />
                  <span className="hidden sm:block">categories</span>
                </div>
                <MdKeyboardArrowRight
                  className={`size-5 hidden sm:block ${
                    isCatClicked
                      ? "transition-transform duration-500 ease-in-out transform rotate-90"
                      : ""
                  }`}
                />
              </button>
              {isCatClicked && (
                <div className="absolute top-12 bg-white text-[#2B3445] rounded-sm shadow-sm shadow-slate-200">
                  <div className="relative">
                    <Link href="#">
                      <div className="flex items-center h-10 min-w-64 px-4 cursor-pointer transition-colors duration-300 hover:text-[#D23F57]">
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
                              d="M 81.63 60.863 H 8.37 c -1.433 0 -2.595 -1.162 -2.595 -2.595 V 12.745 c 0 -1.615 1.309 -2.924 2.924 -2.924 h 72.601 c 1.615 0 2.924 1.309 2.924 2.924 v 45.523 C 84.225 59.701 83.063 60.863 81.63 60.863 z M 10.654 55.983 h 68.691 V 14.7 H 10.654 V 55.983 z"
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
                              d="M 89.762 75.346 L 85.1 63.152 c -0.527 -1.379 -1.85 -2.29 -3.327 -2.29 H 8.226 c -1.476 0 -2.8 0.911 -3.327 2.29 L 0.238 75.346 c -0.891 2.332 0.83 4.833 3.327 4.833 h 82.87 C 88.931 80.179 90.653 77.678 89.762 75.346 z M 35.016 74.774 l 1.62 -3.81 c 0.156 -0.368 0.517 -0.607 0.917 -0.607 h 14.893 c 0.4 0 0.761 0.239 0.917 0.607 l 1.62 3.81 c 0.279 0.657 -0.203 1.387 -0.917 1.387 H 35.934 C 35.219 76.161 34.737 75.432 35.016 74.774 z"
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
                        <span className="pl-3 flex-grow">Electronics</span>
                        <MdKeyboardArrowRight className="text-lg" />
                      </div>
                    </Link>
                    <div className="absolute"></div>
                  </div>
                  <div className="relative">
                    <Link href="#">
                      <div className="flex items-center h-10 min-w-64 px-4 cursor-pointer transition-colors duration-300 hover:text-[#D23F57]">
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
                              d="M 82.861 45.817 l -7.567 -22.189 c -0.186 -0.546 -0.599 -0.985 -1.132 -1.204 L 47.179 11.321 v -1.073 c 1.944 -0.792 3.318 -2.703 3.318 -4.929 C 50.497 2.386 48.111 0 45.179 0 c -1.576 0 -3.061 0.692 -4.074 1.899 c -0.71 0.846 -0.6 2.107 0.246 2.818 c 0.846 0.709 2.107 0.601 2.818 -0.246 C 44.419 4.172 44.788 4 45.179 4 c 0.727 0 1.318 0.592 1.318 1.319 s -0.591 1.319 -1.318 1.319 c -1.104 0 -2 0.896 -2 2 v 2.536 l -27.341 11.25 c -0.533 0.219 -0.946 0.658 -1.132 1.204 L 7.138 45.817 c -0.173 0.509 -0.135 1.066 0.107 1.546 c 0.242 0.48 0.667 0.843 1.18 1.006 l 11.303 3.593 V 88 c 0 1.104 0.896 2 2 2 h 46.543 c 1.104 0 2 -0.896 2 -2 V 51.962 l 11.303 -3.593 c 0.513 -0.163 0.938 -0.525 1.181 -1.006 C 82.997 46.884 83.035 46.326 82.861 45.817 z M 36.327 18.319 L 45 14.75 l 8.954 3.684 C 48.47 22.123 42.658 22.084 36.327 18.319 z M 54.922 22.572 c -1.83 3.984 -5.988 5.84 -9.922 5.84 c -4.08 0 -8.402 -1.997 -10.116 -6.293 C 41.936 26.125 48.646 26.274 54.922 22.572 z M 70.271 47.765 v -6.011 c 0 -1.104 -0.896 -2 -2 -2 s -2 0.896 -2 2 v 8.745 V 86 H 23.728 V 50.499 v -8.745 c 0 -1.104 -0.896 -2 -2 -2 s -2 0.896 -2 2 v 6.011 l -8.145 -2.589 l 6.616 -19.397 l 12.183 -5.013 C 31.729 28.417 38.392 32.412 45 32.412 c 6.608 0 13.271 -3.995 14.618 -11.647 l 12.184 5.013 l 6.615 19.397 L 70.271 47.765 z"
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
                        <span className="pl-3 flex-grow">Fashion</span>
                        <MdKeyboardArrowRight className="text-lg" />
                      </div>
                    </Link>
                    <div className="absolute"></div>
                  </div>
                  <div className="relative">
                    <Link href="#">
                      <div className="flex items-center h-10 min-w-64 px-4 cursor-pointer transition-colors duration-300 hover:text-[#D23F57]">
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
                              d="M 61.55 90 H 29.687 c -0.479 0 -0.891 -0.34 -0.982 -0.81 l -7.894 -40.695 c -0.057 -0.293 0.021 -0.597 0.21 -0.827 c 0.19 -0.229 0.473 -0.363 0.771 -0.363 h 47.649 c 0.299 0 0.581 0.134 0.771 0.363 c 0.19 0.23 0.267 0.534 0.21 0.827 L 62.531 89.19 C 62.44 89.66 62.028 90 61.55 90 z M 30.512 88 h 30.214 l 7.504 -38.695 H 23.006 L 30.512 88 z"
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
                              d="M 67.11 61.33 H 24.126 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 H 67.11 c 0.553 0 1 0.447 1 1 S 67.663 61.33 67.11 61.33 z"
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
                              d="M 59.187 39.403 c -0.45 0 -0.903 -0.035 -1.356 -0.104 c -2.313 -0.357 -4.35 -1.594 -5.732 -3.483 c -1.384 -1.889 -1.949 -4.203 -1.592 -6.517 c 0.357 -2.314 1.595 -4.35 3.483 -5.733 c 5.896 -4.319 12.413 -2.797 19.706 -0.532 c 0.371 0.115 0.642 0.435 0.694 0.82 c 0.052 0.385 -0.123 0.766 -0.45 0.976 c -2.992 1.925 -3.854 4.005 -4.769 6.206 c -0.92 2.217 -1.872 4.509 -4.824 6.671 C 62.828 38.82 61.034 39.403 59.187 39.403 z M 62.652 22.838 c -2.664 0 -5.161 0.642 -7.481 2.342 c -1.458 1.068 -2.412 2.639 -2.688 4.425 c -0.275 1.786 0.161 3.572 1.229 5.03 l 0 0 c 1.067 1.458 2.639 2.412 4.425 2.688 c 1.784 0.275 3.572 -0.16 5.029 -1.228 c 2.501 -1.833 3.307 -3.772 4.158 -5.825 c 0.815 -1.965 1.654 -3.984 3.884 -5.898 C 68.194 23.491 65.339 22.838 62.652 22.838 z"
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
                              d="M 45 43.518 c -0.089 0 -0.179 -0.012 -0.269 -0.037 c -0.532 -0.148 -0.843 -0.7 -0.695 -1.231 c 0.758 -2.724 4.501 -7.567 8.119 -8.677 c 0.529 -0.161 1.087 0.135 1.249 0.663 c 0.162 0.528 -0.135 1.087 -0.662 1.25 c -2.864 0.879 -6.151 5.047 -6.779 7.301 C 45.84 43.228 45.438 43.518 45 43.518 z"
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
                              d="M 30.821 39.398 c -1.797 0 -3.609 -0.549 -5.167 -1.69 c -2.953 -2.163 -3.904 -4.455 -4.824 -6.671 c -0.914 -2.201 -1.777 -4.28 -4.769 -6.206 c -0.327 -0.21 -0.502 -0.591 -0.45 -0.976 c 0.052 -0.385 0.323 -0.705 0.694 -0.82 c 7.292 -2.265 13.808 -3.788 19.706 0.532 c 3.899 2.855 4.748 8.351 1.892 12.25 l 0 0 C 36.188 38.157 33.521 39.398 30.821 39.398 z M 18.793 24.371 c 2.229 1.915 3.068 3.934 3.883 5.898 c 0.852 2.053 1.657 3.992 4.158 5.825 c 3.009 2.205 7.251 1.548 9.455 -1.46 l 0 0 c 1.067 -1.458 1.503 -3.244 1.228 -5.03 c -0.276 -1.786 -1.23 -3.357 -2.688 -4.425 C 30.169 21.766 24.792 22.619 18.793 24.371 z M 37.096 35.225 h 0.01 H 37.096 z"
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
                              d="M 45 43.518 c -0.438 0 -0.84 -0.29 -0.963 -0.732 c -0.628 -2.254 -3.914 -6.422 -6.778 -7.301 c -0.528 -0.162 -0.825 -0.722 -0.663 -1.25 c 0.163 -0.528 0.722 -0.823 1.25 -0.663 c 3.617 1.11 7.36 5.954 8.118 8.677 c 0.148 0.532 -0.163 1.083 -0.695 1.231 C 45.179 43.505 45.088 43.518 45 43.518 z"
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
                              d="M 45 49.305 c -0.552 0 -1 -0.447 -1 -1 v -28.43 c 0 -0.552 0.448 -1 1 -1 s 1 0.448 1 1 v 28.43 C 46 48.857 45.552 49.305 45 49.305 z"
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
                              d="M 45 20.875 c -4.039 0 -7.325 -3.286 -7.325 -7.324 c 0 -6.042 4.171 -9.622 9.211 -13.354 c 0.313 -0.23 0.729 -0.261 1.071 -0.075 c 0.342 0.185 0.545 0.551 0.521 0.939 c -0.172 2.835 0.722 4.308 1.756 6.014 c 0.979 1.614 2.089 3.444 2.089 6.477 C 52.324 17.589 49.039 20.875 45 20.875 z M 46.527 2.972 c -3.979 3.075 -6.852 6.032 -6.852 10.579 c 0 2.936 2.389 5.324 5.325 5.324 c 2.936 0 5.324 -2.389 5.324 -5.324 c 0 -2.474 -0.874 -3.915 -1.799 -5.439 C 47.696 6.744 46.78 5.234 46.527 2.972 z"
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
                        <span className="pl-3 flex-grow">Home & Garden</span>
                        <MdKeyboardArrowRight className="text-lg" />
                      </div>
                    </Link>
                    <div className="absolute"></div>
                  </div>
                  <div className="relative">
                    <Link href="#">
                      <div className="flex items-center h-10 min-w-64 px-4 cursor-pointer transition-colors duration-300 hover:text-[#D23F57]">
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
                              strokeWidth: 0,
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
                              d="M 70.64 89.325 H 26.013 c -2.486 0 -4.508 -2.023 -4.508 -4.508 V 53.464 c 0 -0.553 0.448 -1 1 -1 h 51.644 c 0.553 0 1 0.447 1 1 v 31.353 C 75.148 87.302 73.125 89.325 70.64 89.325 z M 23.504 54.464 v 30.353 c 0 1.383 1.125 2.508 2.508 2.508 H 70.64 c 1.383 0 2.508 -1.125 2.508 -2.508 V 54.464 H 23.504 z"
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
                              d="M 52.977 89.325 h -9.303 c -0.552 0 -1 -0.447 -1 -1 V 53.464 c 0 -0.553 0.448 -1 1 -1 h 9.303 c 0.553 0 1 0.447 1 1 v 34.861 C 53.977 88.878 53.53 89.325 52.977 89.325 z M 44.675 87.325 h 7.302 V 54.464 h -7.302 V 87.325 z"
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
                              d="M 7.495 69.421 c -0.256 0 -0.512 -0.098 -0.707 -0.293 l -4.425 -4.425 c -1.758 -1.758 -1.758 -4.618 0 -6.376 l 31.556 -31.556 c 0.851 -0.852 1.983 -1.321 3.188 -1.321 c 1.204 0 2.336 0.469 3.187 1.321 l 4.425 4.425 c 0.391 0.391 0.391 1.024 0 1.414 L 8.202 69.128 C 8.007 69.323 7.751 69.421 7.495 69.421 z M 37.107 27.451 c -0.67 0 -1.3 0.261 -1.774 0.735 L 3.777 59.742 c -0.978 0.978 -0.978 2.57 0 3.547 l 3.718 3.718 l 35.103 -35.103 l -3.718 -3.718 C 38.406 27.712 37.776 27.451 37.107 27.451 z"
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
                              d="M 18.847 44.257 c -0.141 0 -0.284 -0.03 -0.418 -0.092 c -0.38 -0.175 -0.611 -0.569 -0.578 -0.987 l 1.05 -13.308 c 0.184 -2.331 1.661 -4.283 3.856 -5.092 c 2.194 -0.81 4.584 -0.285 6.238 1.369 c 2.31 2.309 2.31 6.067 0 8.377 l -9.439 9.44 C 19.363 44.156 19.108 44.257 18.847 44.257 z M 24.844 26.4 c -0.462 0 -0.932 0.084 -1.396 0.254 c -1.475 0.544 -2.43 1.805 -2.553 3.372 l -0.837 10.605 l 7.522 -7.522 c 1.529 -1.53 1.529 -4.018 0 -5.548 C 26.818 26.799 25.851 26.4 24.844 26.4 z"
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
                              d="M 5.927 55.139 c -1.582 0 -3.07 -0.616 -4.188 -1.736 C 0.084 51.75 -0.44 49.36 0.369 47.165 c 0.809 -2.194 2.76 -3.672 5.092 -3.856 l 13.308 -1.05 c 0.417 -0.026 0.812 0.198 0.987 0.578 s 0.095 0.83 -0.201 1.126 l -9.44 9.439 C 8.996 54.522 7.509 55.139 5.927 55.139 z M 16.223 44.467 L 5.618 45.304 c -1.568 0.124 -2.828 1.078 -3.372 2.554 c -0.544 1.475 -0.205 3.02 0.907 4.131 c 1.483 1.483 4.066 1.483 5.548 0 L 16.223 44.467 z"
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
                              d="M 22.464 54.451 c -0.256 0 -0.512 -0.098 -0.707 -0.293 l -6.906 -6.905 c -0.188 -0.188 -0.293 -0.441 -0.293 -0.707 s 0.105 -0.52 0.293 -0.707 l 6.578 -6.579 c 0.375 -0.375 1.039 -0.375 1.414 0 l 6.906 6.906 c 0.188 0.188 0.293 0.441 0.293 0.707 s -0.105 0.52 -0.293 0.707 l -6.578 6.578 C 22.976 54.353 22.72 54.451 22.464 54.451 z M 16.973 46.546 l 5.492 5.491 l 5.164 -5.164 l -5.492 -5.492 L 16.973 46.546 z"
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
                              d="M 74.792 46.443 l -0.36 -0.426 c -1.665 -1.97 -3.911 -5.976 -4.621 -8.243 c -1.526 -4.881 -0.415 -9.595 2.642 -11.21 c 1.478 -0.782 3.188 -0.91 4.816 -0.36 c 1.6 0.54 2.962 1.691 3.909 3.284 c 1.762 -0.574 3.545 -0.54 5.104 0.11 c 1.584 0.66 2.785 1.884 3.381 3.447 c 1.233 3.23 -1.042 7.507 -5.409 10.169 c -2.028 1.236 -6.358 2.766 -8.91 3.148 L 74.792 46.443 z M 75.258 27.87 c -0.651 0 -1.29 0.155 -1.872 0.463 c -2.168 1.146 -2.885 4.948 -1.667 8.845 c 0.587 1.876 2.423 5.209 3.885 7.109 c 2.353 -0.464 5.93 -1.758 7.608 -2.781 c 3.487 -2.125 5.456 -5.456 4.58 -7.748 l 0 0 c -0.398 -1.045 -1.208 -1.867 -2.281 -2.314 c -1.305 -0.544 -2.869 -0.47 -4.4 0.209 l -0.899 0.398 l -0.413 -0.893 c -0.704 -1.52 -1.83 -2.607 -3.17 -3.059 C 76.176 27.945 75.714 27.87 75.258 27.87 z"
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
                              d="M 56.075 25.992 l -0.36 -0.426 c -2.077 -2.458 -4.874 -7.447 -5.755 -10.268 c -1.88 -6.014 -0.537 -11.809 3.195 -13.781 c 1.795 -0.948 3.87 -1.103 5.847 -0.437 c 2.01 0.678 3.715 2.152 4.875 4.192 c 2.221 -0.769 4.472 -0.751 6.432 0.066 c 1.924 0.802 3.382 2.288 4.106 4.185 c 1.504 3.943 -1.31 9.185 -6.689 12.464 c -2.524 1.539 -7.918 3.444 -11.099 3.921 L 56.075 25.992 z M 56.558 2.674 c -0.858 0 -1.701 0.205 -2.47 0.611 c -2.831 1.496 -3.786 6.404 -2.22 11.416 c 0.756 2.418 3.151 6.748 5.019 9.136 c 2.979 -0.562 7.633 -2.237 9.798 -3.556 c 4.483 -2.733 7.003 -7.05 5.861 -10.043 l 0 0 c -0.525 -1.38 -1.593 -2.463 -3.006 -3.052 c -1.707 -0.712 -3.743 -0.618 -5.732 0.264 l -0.899 0.398 l -0.413 -0.893 c -0.914 -1.974 -2.382 -3.387 -4.133 -3.978 C 57.765 2.774 57.157 2.674 56.558 2.674 z"
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
                              d="M 58.869 47.494 l -0.552 -0.082 c -1.783 -0.268 -4.809 -1.337 -6.225 -2.201 c -3.173 -1.934 -4.751 -4.956 -3.838 -7.351 c 0.44 -1.153 1.324 -2.055 2.491 -2.541 c 1.067 -0.445 2.277 -0.497 3.479 -0.156 c 0.681 -1.048 1.623 -1.808 2.72 -2.178 c 1.198 -0.405 2.456 -0.309 3.548 0.267 c 2.266 1.197 3.074 4.51 1.964 8.057 c -0.495 1.585 -2.064 4.384 -3.227 5.76 L 58.869 47.494 z M 52.668 36.942 c -0.406 0 -0.796 0.074 -1.153 0.223 c -0.654 0.272 -1.149 0.773 -1.391 1.408 l 0 0 c -0.547 1.432 0.747 3.552 3.01 4.93 c 1.06 0.646 3.354 1.485 4.92 1.826 c 0.952 -1.289 2.123 -3.433 2.494 -4.618 c 0.79 -2.529 0.364 -4.976 -0.99 -5.691 c -0.601 -0.317 -1.3 -0.368 -1.974 -0.141 c -0.837 0.282 -1.543 0.968 -1.989 1.931 l -0.413 0.893 l -0.899 -0.398 C 53.737 37.064 53.188 36.942 52.668 36.942 z"
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
                        <span className="pl-3 flex-grow">Gifts</span>
                        <MdKeyboardArrowRight className="text-lg" />
                      </div>
                    </Link>
                    <div className="absolute"></div>
                  </div>
                  <div className="relative">
                    <Link href="#">
                      <div className="flex items-center h-10 min-w-64 px-4 cursor-pointer transition-colors duration-300 hover:text-[#D23F57]">
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
                              d="M 86.189 48.524 H 68.344 V 1 c 0 -0.552 -0.447 -1 -1 -1 H 22.656 c -0.552 0 -1 0.448 -1 1 v 47.524 H 3.811 c -0.552 0 -1 0.447 -1 1 v 9.027 V 89 c 0 0.553 0.448 1 1 1 h 18.845 c 0.552 0 1 -0.447 1 -1 V 59.552 h 42.688 V 89 c 0 0.553 0.447 1 1 1 h 18.846 c 0.553 0 1 -0.447 1 -1 V 58.552 v -9.027 C 87.189 48.972 86.742 48.524 86.189 48.524 z M 23.656 2 h 42.688 v 46.524 H 23.656 V 2 z M 4.811 50.524 h 17.845 h 44.688 h 17.846 v 7.027 H 67.344 H 22.656 H 4.811 V 50.524 z M 4.811 88 V 74.776 h 16.845 V 88 H 4.811 z M 21.656 72.776 H 4.811 V 59.552 h 16.845 V 72.776 z M 85.189 59.552 v 13.225 H 68.344 V 59.552 H 85.189 z M 68.344 88 V 74.776 h 16.846 V 88 H 68.344 z"
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
                              d="M 29.279 21.869 c -0.256 0 -0.512 -0.098 -0.707 -0.293 c -0.391 -0.391 -0.391 -1.023 0 -1.414 L 41.818 6.916 c 0.391 -0.391 1.023 -0.391 1.414 0 s 0.391 1.023 0 1.414 L 29.986 21.576 C 29.791 21.771 29.535 21.869 29.279 21.869 z"
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
                              d="M 29.279 13.038 c -0.256 0 -0.512 -0.098 -0.707 -0.293 c -0.391 -0.391 -0.391 -1.023 0 -1.414 l 4.415 -4.415 c 0.391 -0.391 1.023 -0.391 1.414 0 s 0.391 1.023 0 1.414 l -4.415 4.415 C 29.791 12.94 29.535 13.038 29.279 13.038 z"
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
                              cx="13.237"
                              cy="68.667"
                              r="2.047"
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
                              cx="13.237"
                              cy="84.11699999999999"
                              r="2.047"
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
                              cx="77.417"
                              cy="68.667"
                              r="2.047"
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
                              cx="77.417"
                              cy="84.11699999999999"
                              r="2.047"
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
                        <span className="pl-3 flex-grow">Gifts</span>
                        <MdKeyboardArrowRight className="text-lg" />
                      </div>
                    </Link>
                    <div className="absolute"></div>
                  </div>
                  <div className="relative">
                    <Link href="#">
                      <div className="flex items-center h-10 min-w-64 px-4 cursor-pointer transition-colors duration-300 hover:text-[#D23F57]">
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
                              d="M 45.378 53.854 c -3.266 0 -6.657 -1.325 -10.151 -3.977 c -0.44 -0.334 -0.526 -0.961 -0.192 -1.401 c 0.333 -0.439 0.962 -0.525 1.401 -0.192 c 6.226 4.726 11.809 4.742 17.066 0.051 c 0.413 -0.366 1.044 -0.332 1.412 0.08 s 0.332 1.045 -0.08 1.412 C 51.824 52.512 48.664 53.854 45.378 53.854 z"
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
                              d="M 31.648 33.591 c -0.302 0 -0.601 -0.136 -0.798 -0.396 c -0.333 -0.44 -0.248 -1.067 0.192 -1.401 c 3.577 -2.713 7.095 -2.696 10.172 0.051 c 0.412 0.368 0.448 1 0.081 1.412 c -0.367 0.412 -1 0.449 -1.412 0.081 c -2.372 -2.116 -4.797 -2.1 -7.632 0.051 C 32.071 33.524 31.858 33.591 31.648 33.591 z"
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
                              d="M 49.452 33.591 c -0.303 0 -0.601 -0.136 -0.798 -0.396 c -0.334 -0.44 -0.247 -1.067 0.192 -1.401 c 3.577 -2.713 7.095 -2.696 10.173 0.051 c 0.412 0.368 0.448 1 0.08 1.412 c -0.367 0.413 -0.999 0.448 -1.412 0.081 c -2.371 -2.115 -4.796 -2.102 -7.632 0.051 C 49.875 33.524 49.662 33.591 49.452 33.591 z"
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
                              d="M 18.039 27.959 c -2.41 0 -4.37 -1.96 -4.37 -4.37 s 1.96 -4.37 4.37 -4.37 s 4.37 1.96 4.37 4.37 S 20.448 27.959 18.039 27.959 z M 18.039 21.219 c -1.307 0 -2.37 1.063 -2.37 2.37 s 1.063 2.37 2.37 2.37 s 2.37 -1.063 2.37 -2.37 S 19.346 21.219 18.039 21.219 z"
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
                              d="M 71.961 27.959 c -2.41 0 -4.37 -1.96 -4.37 -4.37 s 1.96 -4.37 4.37 -4.37 s 4.37 1.96 4.37 4.37 S 74.371 27.959 71.961 27.959 z M 71.961 21.219 c -1.307 0 -2.37 1.063 -2.37 2.37 s 1.063 2.37 2.37 2.37 s 2.37 -1.063 2.37 -2.37 S 73.268 21.219 71.961 21.219 z"
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
                              d="M 70.838 47.176 c -2.41 0 -4.37 -1.96 -4.37 -4.37 c 0 -2.41 1.96 -4.37 4.37 -4.37 s 4.37 1.96 4.37 4.37 C 75.208 45.215 73.248 47.176 70.838 47.176 z M 70.838 40.436 c -1.307 0 -2.37 1.063 -2.37 2.37 c 0 1.307 1.063 2.37 2.37 2.37 s 2.37 -1.063 2.37 -2.37 C 73.208 41.499 72.145 40.436 70.838 40.436 z"
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
                              d="M 19.162 47.176 c -2.41 0 -4.37 -1.96 -4.37 -4.37 c 0 -2.41 1.96 -4.37 4.37 -4.37 s 4.37 1.96 4.37 4.37 C 23.532 45.215 21.572 47.176 19.162 47.176 z M 19.162 40.436 c -1.307 0 -2.37 1.063 -2.37 2.37 c 0 1.307 1.063 2.37 2.37 2.37 s 2.37 -1.063 2.37 -2.37 C 21.532 41.499 20.469 40.436 19.162 40.436 z"
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
                              d="M 89.747 88.73 l -2.087 -7.465 c -1.374 -4.913 -5.896 -8.344 -10.997 -8.344 h -9.629 c -4.195 0 -7.821 -2.7 -9.023 -6.721 c -0.993 -3.316 -0.106 -6.878 2.312 -9.294 c 1.766 -1.763 3.282 -3.818 4.549 -6.093 c 1.668 1.246 3.729 1.993 5.966 1.993 c 5.515 0 10.002 -4.486 10.002 -10.001 c 0 -4.376 -2.829 -8.095 -6.75 -9.449 c 4.495 -0.979 7.874 -4.984 7.874 -9.769 c 0 -5.515 -4.487 -10.002 -10.002 -10.002 c -3.356 0 -6.325 1.667 -8.14 4.212 c -0.505 -0.772 -1.051 -1.505 -1.621 -2.212 h 1.627 c 2.628 0 4.767 -2.138 4.767 -4.766 V 4.767 C 68.594 2.138 66.455 0 63.827 0 H 26.173 c -2.628 0 -4.766 2.138 -4.766 4.767 v 6.054 c 0 2.628 2.138 4.766 4.766 4.766 H 27.8 c -0.57 0.707 -1.116 1.44 -1.621 2.212 c -1.815 -2.544 -4.784 -4.212 -8.141 -4.212 c -5.515 0 -10.002 4.487 -10.002 10.002 c 0 4.784 3.378 8.79 7.874 9.769 c -3.921 1.354 -6.75 5.073 -6.75 9.449 c 0 5.515 4.487 10.001 10.002 10.001 c 2.188 0 4.254 -0.704 5.969 -1.988 c 1.266 2.272 2.781 4.326 4.545 6.087 c 2.419 2.415 3.305 5.977 2.313 9.295 c -1.183 3.956 -4.894 6.72 -9.023 6.72 h -9.629 c -5.101 0 -9.624 3.432 -10.997 8.344 L 0.253 88.73 c -0.084 0.302 -0.023 0.625 0.167 0.874 C 0.609 89.854 0.903 90 1.216 90 h 87.568 c 0.313 0 0.607 -0.146 0.797 -0.396 C 89.77 89.355 89.831 89.032 89.747 88.73 z M 78.84 42.806 c 0 4.412 -3.59 8.001 -8.002 8.001 s -8.002 -3.59 -8.002 -8.001 c 0 -3.538 2.31 -6.542 5.5 -7.596 h 0.5 c 0 -0.047 -0.002 -0.095 -0.002 -0.142 c 0.642 -0.166 1.311 -0.264 2.004 -0.264 C 75.25 34.804 78.84 38.394 78.84 42.806 z M 71.961 15.587 c 4.412 0 8.002 3.59 8.002 8.002 s -3.59 8.002 -8.002 8.002 s -8.002 -3.59 -8.002 -8.002 S 67.549 15.587 71.961 15.587 z M 66.594 4.767 v 6.054 c 0 1.525 -1.241 2.766 -2.767 2.766 h -6.593 V 2 h 6.593 C 65.353 2 66.594 3.241 66.594 4.767 z M 34.766 13.587 V 2 H 44 v 11.587 H 34.766 z M 46 2 h 9.234 v 11.587 H 46 V 2 z M 23.407 10.821 V 4.767 C 23.407 3.241 24.647 2 26.173 2 h 6.593 v 11.587 h -6.593 C 24.647 13.587 23.407 12.346 23.407 10.821 z M 10.037 23.589 c 0 -4.412 3.59 -8.002 8.002 -8.002 s 8.002 3.59 8.002 8.002 s -3.59 8.002 -8.002 8.002 S 10.037 28.001 10.037 23.589 z M 11.16 42.806 c 0 -4.412 3.59 -8.002 8.002 -8.002 c 0.921 0 1.824 0.155 2.681 0.46 c 3.183 1.131 5.321 4.162 5.321 7.542 c 0 2.096 -0.804 4.078 -2.265 5.579 c -1.52 1.563 -3.557 2.423 -5.737 2.423 C 14.75 50.808 11.16 47.218 11.16 42.806 z M 2.534 88 l 1.732 -6.195 c 1.133 -4.053 4.863 -6.883 9.071 -6.883 h 9.629 c 5.006 0 9.505 -3.351 10.939 -8.147 c 1.204 -4.022 0.125 -8.347 -2.815 -11.283 c -1.742 -1.739 -3.226 -3.784 -4.446 -6.065 c 1.622 -1.83 2.52 -4.158 2.52 -6.62 c 0 -3.973 -2.365 -7.558 -5.955 -9.148 c 0.026 -0.535 0.064 -1.066 0.116 -1.595 c 2.826 -1.769 4.715 -4.902 4.715 -8.475 c 0 -1.339 -0.269 -2.615 -0.748 -3.783 c 0.919 -1.536 1.973 -2.951 3.144 -4.219 h 29.127 c 1.17 1.266 2.224 2.682 3.144 4.219 c -0.479 1.168 -0.748 2.444 -0.748 3.783 c 0 3.573 1.89 6.706 4.716 8.475 c 0.053 0.533 0.091 1.067 0.116 1.603 c -3.503 1.557 -5.956 5.065 -5.956 9.139 c 0 2.538 0.958 4.851 2.521 6.616 c -1.22 2.283 -2.705 4.33 -4.448 6.07 c -2.939 2.937 -4.019 7.26 -2.814 11.282 c 1.435 4.797 5.934 8.147 10.939 8.147 h 9.629 c 4.208 0 7.938 2.83 9.071 6.883 L 87.466 88 H 2.534 z"
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
                        <span className="pl-3 flex-grow">Health & Beauty</span>
                        {/* <MdKeyboardArrowRight className="text-lg" /> */}
                      </div>
                    </Link>
                    <div className="absolute"></div>
                  </div>
                  <div className="relative">
                    <Link href="#">
                      <div className="flex items-center h-10 min-w-64 px-4 cursor-pointer transition-colors duration-300 hover:text-[#D23F57]">
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
                              d="M 37.181 80.599 c -0.552 0 -1 -0.447 -1 -1 V 41.378 c 0 -0.552 0.448 -1 1 -1 s 1 0.448 1 1 v 38.221 C 38.181 80.151 37.733 80.599 37.181 80.599 z"
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
                              d="M 49.268 80.599 c -0.553 0 -1 -0.447 -1 -1 V 50.906 c 0 -0.553 0.447 -1 1 -1 s 1 0.447 1 1 v 28.692 C 50.268 80.151 49.82 80.599 49.268 80.599 z"
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
                              d="M 25.095 80.599 c -0.552 0 -1 -0.447 -1 -1 V 48.247 c 0 -0.553 0.448 -1 1 -1 s 1 0.447 1 1 v 31.352 C 26.095 80.151 25.647 80.599 25.095 80.599 z"
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
                              d="M 73.337 29.566 H 61.539 v -1.993 c 1.702 -2.224 2.716 -4.995 2.716 -7.991 c 0 -7.276 -5.92 -13.196 -13.196 -13.196 c -1.753 0 -3.447 0.339 -5.05 1.008 C 44.14 2.928 39.797 0 34.872 0 c -4.774 0 -9.002 2.739 -10.969 7.04 c -0.21 -0.01 -0.421 -0.016 -0.634 -0.016 c -8.051 0 -14.601 6.55 -14.601 14.601 c 0 0.026 0 0.051 0.002 0.077 c -0.001 0.021 -0.002 0.043 -0.002 0.064 v 29.095 c 0 2.454 1.806 4.479 4.156 4.855 v 29.418 c 0 2.684 2.183 4.866 4.866 4.866 h 38.983 c 2.684 0 4.866 -2.183 4.866 -4.866 V 71.122 h 11.798 c 4.408 0 7.995 -3.674 7.995 -8.189 V 37.757 C 81.332 33.241 77.745 29.566 73.337 29.566 z M 61.539 37.61 h 9.642 c 1.138 0 2.063 0.925 2.063 2.062 v 21.345 c 0 1.138 -0.925 2.063 -2.063 2.063 h -9.642 V 37.61 z M 10.667 50.861 V 21.887 c 0.005 -0.043 0.008 -0.087 0.007 -0.131 l -0.007 -0.131 c 0 -6.948 5.653 -12.601 12.601 -12.601 c 0.4 0 0.794 0.024 1.185 0.06 c 0.447 0.038 0.863 -0.218 1.025 -0.635 C 26.994 4.531 30.681 2 34.872 2 c 4.429 0 8.294 2.837 9.619 7.061 c 0.088 0.282 0.297 0.511 0.57 0.624 c 0.272 0.113 0.583 0.1 0.845 -0.036 c 1.612 -0.838 3.345 -1.263 5.153 -1.263 c 6.174 0 11.196 5.022 11.196 11.196 c 0 5.916 -4.63 10.818 -10.539 11.162 c -0.529 0.031 -0.942 0.469 -0.942 0.999 v 6.934 c 0 1.618 -1.316 2.934 -2.934 2.934 c -1.618 0 -2.934 -1.316 -2.934 -2.934 v -5.285 c 0 -0.337 -0.17 -0.652 -0.453 -0.837 c -0.282 -0.184 -0.638 -0.214 -0.948 -0.079 c -1.005 0.439 -2.063 0.663 -3.143 0.663 c -2.434 0 -4.698 -1.103 -6.211 -3.026 c -0.182 -0.231 -0.458 -0.371 -0.752 -0.381 c -0.292 -0.011 -0.579 0.111 -0.776 0.33 c -1.916 2.125 -4.536 3.542 -7.376 3.992 c -0.486 0.077 -0.844 0.496 -0.844 0.988 v 2.537 c 0 1.618 -1.316 2.934 -2.934 2.934 s -2.934 -1.316 -2.934 -2.934 c 0 -0.552 -0.448 -1 -1 -1 s -1 0.448 -1 1 v 13.284 c 0 1.617 -1.316 2.934 -2.934 2.934 S 10.667 52.479 10.667 50.861 z M 56.673 88 H 17.689 c -1.581 0 -2.866 -1.286 -2.866 -2.866 v -29.51 c 2.128 -0.547 3.712 -2.465 3.712 -4.762 v -9.32 c 0.82 0.609 1.836 0.969 2.934 0.969 c 2.72 0 4.934 -2.213 4.934 -4.934 v -1.708 c 2.6 -0.571 5.004 -1.846 6.926 -3.669 c 1.855 1.88 4.362 2.938 7.034 2.938 c 0.863 0 1.714 -0.113 2.544 -0.337 v 3.875 c 0 2.721 2.213 4.934 4.934 4.934 s 4.934 -2.213 4.934 -4.934 v -6.023 c 2.567 -0.333 4.888 -1.41 6.766 -2.989 v 55.47 C 59.539 86.714 58.253 88 56.673 88 z M 79.332 62.933 c 0 3.413 -2.689 6.189 -5.995 6.189 H 61.539 v -4.043 h 9.642 c 2.24 0 4.063 -1.822 4.063 -4.063 V 39.672 c 0 -2.24 -1.822 -4.062 -4.063 -4.062 h -9.642 v -4.043 h 11.798 c 3.306 0 5.995 2.777 5.995 6.19 V 62.933 z"
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
                        <span className="pl-3 flex-grow">Groceries</span>
                        {/* <MdKeyboardArrowRight className="text-lg" /> */}
                      </div>
                    </Link>
                    <div className="absolute"></div>
                  </div>
                </div>
              )}
            </div>
            <div className="hidden lg:flex gap-8 items-center">
              <div className="relative">
                <div className="flex gap-[2.4px] items-end cursor-pointer">
                  <span className="font-[500] transition-colors hover:text-[#D23F57]">
                    Home
                  </span>
                  <MdKeyboardArrowDown className="text-[#AEB4BE] text-[1.1rem]" />
                </div>
              </div>
              <div className="relative">
                <div className="flex gap-[2.4px] items-end cursor-pointer">
                  <span className="font-[500] transition-colors hover:text-[#D23F57]">
                    Pages
                  </span>
                  <MdKeyboardArrowDown className="text-[#AEB4BE] text-[1.1rem]" />
                </div>
              </div>
              <div className="relative">
                <div className="flex gap-[2.4px] items-end cursor-pointer">
                  <span className="font-[500] transition-colors hover:text-[#D23F57]">
                    User Account
                  </span>
                  <MdKeyboardArrowDown className="text-[#AEB4BE] text-[1.1rem]" />
                </div>
              </div>
              <div className="relative">
                <div className="flex gap-[2.4px] items-end cursor-pointer">
                  <span className="font-[500] transition-colors hover:text-[#D23F57]">
                    Vendor Account
                  </span>
                  <MdKeyboardArrowDown className="text-[#AEB4BE] text-[1.1rem]" />
                </div>
              </div>
            </div>

            <div className="block lg:hidden px-1 py-3">
              <button
                onClick={() => dispatch(toggleMenu())}
                className="flex items-center"
              >
                <MenuOutlinedIcon className="text-slate-500" />
                <span className="ml-1 uppercase font-bold text-sm">Menu</span>
              </button>
            </div>
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
              <div className="relative">
                <div className="flex gap-[2.4px] items-end cursor-pointer">
                  <span className="font-[500] transition-colors hover:text-[#D23F57]">
                    Home
                  </span>
                  <MdKeyboardArrowDown className="text-[#AEB4BE] text-[1.1rem]" />
                </div>
              </div>
            </li>
            <li>
              <div className="relative">
                <div className="flex gap-[2.4px] items-end cursor-pointer">
                  <span className="font-[500] transition-colors hover:text-[#D23F57]">
                    Pages
                  </span>
                  <MdKeyboardArrowDown className="text-[#AEB4BE] text-[1.1rem]" />
                </div>
              </div>
            </li>
            <li>
              <div className="relative">
                <div className="flex gap-[2.4px] items-end cursor-pointer">
                  <span className="font-[500] transition-colors hover:text-[#D23F57]">
                    User Account
                  </span>
                  <MdKeyboardArrowDown className="text-[#AEB4BE] text-[1.1rem]" />
                </div>
              </div>
            </li>
            <li>
              <div className="relative">
                <div className="flex gap-[2.4px] items-end cursor-pointer">
                  <span className="font-[500] transition-colors hover:text-[#D23F57]">
                    Vendor Account
                  </span>
                  <MdKeyboardArrowDown className="text-[#AEB4BE] text-[1.1rem]" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
