"use client";

import Link from "next/link";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Container from "../Container";
import { useEffect, useState } from "react";
// import { MenuIcon, XIcon } from '@heroicons/react@v1/outline';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      // 1024px corresponds to Tailwind's `lg` breakpoint
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("isOpen", isOpen);

  return (
    <div className="sticky top-0 w-full z-30 shadow-sm">
      <nav className="bg-black">
        <Container>
          <div className="flex flex-col-reverse gap-2 flex-grow md:flex-row md:justify-between md:items-center text-white">
            <Link href="/" className="hidden lg:block">
              My E-commerce
            </Link>
            <div className="w-full mb-2.5 md:mb-0 md:w-1/2 flex relative">
              <input type="text" placeholder="Search..." className="w-full" />
              <button className="searchbtn">
                <SearchOutlinedIcon />
              </button>
            </div>
            <div className="flex justify-evenly mt-2.5 md:mt-0 items-center md:gap-10">
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
          <div className="block lg:hidden">
            <button onClick={toggleMenu}>
              <MenuOutlinedIcon />
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
        {isOpen ? (
          <div className="block lg:hidden fixed top-0 z-50 h-screen w-60 px-6 py-10 bg-slate-200 text-sm text-black">
            <div className="absolute top-0 right-0 size-10 bg-black text-slate-300 flex justify-center items-center">
              <CloseOutlinedIcon className="transition-transform duration-500 ease-in-out transform hover:rotate-90 hover:cursor-pointer" />
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
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
