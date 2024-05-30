"use client";

import Link from "next/link";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Container from "@/app/components/Container";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { closeMenu, toggleMenu } from "@/features/menu/menuSlice";
import Image from "next/image";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      dispatch(closeMenu());
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("isOpen: ", isOpen);

  return (
    <div className="sticky top-0 w-full z-30 shadow-sm shadow-slate-100/50">
      <nav className="bg-black">
        <Container>
          <div className="topnav">
            <div className=" flex items-center">
              <img src="/images/eagle-logo.jpg" alt="eagle-logo" className="hidden lg:block h-10 w-auto "/>
              <Link href="/" className="hidden lg:block text-lg font-bold">
                Eagle Shop
              </Link>
            </div>
            <div className="w-full mb-2.5 md:mb-0 md:w-1/2 flex relative">
              <input type="text" placeholder="Search..." className="w-full" />
              <button className="searchbtn">
                <SearchOutlinedIcon />
              </button>
            </div>
            <div className="flex justify-evenly mt-2.5 md:mt-0 items-center md:gap-10">
            <img src="/images/eagle-logo.jpg" alt="eagle-logo" className="block md:hidden h-12 w-auto "/>
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
            </div>
          </div>
        </Container>
      </nav>
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
