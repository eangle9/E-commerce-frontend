"use client";

import Link from "next/link";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Container from "../Container";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 w-full z-30 shadow-sm">
      <nav className="bg-black">
        <Container>
          <div className="flex justify-between items-center text-white">
            <Link href="/" className="hidden lg:block">
              My E-commerce
            </Link>
            <div className="w-1/2 flex relative">
              <input type="text" placeholder="Search..." className="w-full" />
              <button className="searchbtn">
                <SearchOutlinedIcon />
              </button>
            </div>
            <div className="flex items-center gap-10">
              <Link href="/account" className="flex items-center gap-2">
                <PersonOutlineOutlinedIcon className="size-8 text-slate-100" />
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
                <ShoppingCartOutlinedIcon className="size-7 text-slate-100" />
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
          <div className="h-10">jkjkjkj</div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
