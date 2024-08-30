"use client";

import Link from "next/link";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Container from "@/app/components/Container";
import { MouseEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store, { RootState } from "@/redux/store";
import { closeMenu, toggleMenu } from "@/features/menu/menuSlice";
import Image from "next/image";
import { BiSolidCategory } from "react-icons/bi";
import { MdComputer, MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowDownSLine, RiDrinks2Fill } from "react-icons/ri";
import { FaInstagram, FaPersonBooth, FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaSearch } from "react-icons/fa";
import { MdSportsGymnastics } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { IoGiftSharp } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { LiaCartPlusSolid } from "react-icons/lia";
import { GiClothes, GiFruitBowl } from "react-icons/gi";
import { FcAutomotive } from "react-icons/fc";
import { togglePopup } from "@/features/popup/popupSlice";
import LoginPopup from "../LoginPopup";
import {
  closeCat,
  ProductCategory,
  toggleCat,
} from "@/features/category/categorySlice";
import { FadeLoader, PulseLoader } from "react-spinners";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import axios from "axios";
import { fetchProducts } from "@/features/products/productsSlice";
import { NavbarProps, SearchQuery } from "@/utils/types";
import { getTotals } from "@/features/cart/cartSlice";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const isOpen: boolean = useSelector((state: RootState) => state.menu.isOpen);
  const isOpened: boolean = useSelector(
    (state: RootState) => state.category.isOpened
  );
  const isVisible: boolean = useSelector(
    (state: RootState) => state.popup.isVisible
  );
  const [isLanClicked, setIsLanClicked] = useState<Boolean>(false);
  // const [isCatClicked, setIsCatClicked] = useState<Boolean>(false);
  const [navbar, setNavbar] = useState<Boolean>(false);
  const [search, setSearch] = useState<SearchQuery>({});

  const totalQuantity = useSelector(
    (state: RootState) => state.cart.cartTotalQuantity
  );
  const categories: ProductCategory[] = useSelector(
    (state: RootState) => state.category.categories
  );
  const loading: boolean = useSelector(
    (state: RootState) => state.category.isLoading
  );

  useEffect(() => {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("keydown", function (event: KeyboardEvent) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("searchButton")?.click();
        }
      });
    }

    console.log("totalQtyy: ", totalQuantity)

    return () => {
      searchInput?.removeEventListener(
        "keydown",
        function (event: KeyboardEvent) {
          if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("searchButton")?.click();
          }
        }
      );
    };
  }, []);

  useEffect(() => {
    // Extracting query parameters from the URL
    const name = searchParams.get("name") || "";
    const category = searchParams.get("category") || "";
    const sort = searchParams.get("sort") || "";
    const page = searchParams.get("page") || "";
    const per_page = searchParams.get("per_page") || "";

    // Dispatch the action to fetch products whenever search params change
    store.dispatch(
      fetchProducts({
        name,
        category,
        sort,
        page,
        per_page,
      })
    );
  }, [searchParams, dispatch]);

  const handleLanClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLanClicked((prev) => !prev);
  };

  const handleCatClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(toggleCat());
    // setIsCatClicked((prev) => !prev);
  };

  const handleNavbar = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearch((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSearchClicked = () => {
    const params = new URLSearchParams(searchParams);

    Object.keys(search).forEach((key: string) => {
      if (search[key]) {
        params.set(key, search[key]);
      }
    });

    router.push(`/?${params.toString()}`);
    // window.location.href = `/?${params.toString()}`;
  };

  const handleCategoryClicked = (name: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", name);
    router.push(`/?${params.toString()}`);
    handleLogoClicked();
  };

  const handleLogoClicked = () => {
    router.refresh();
    setSearch({});
    dispatch(closeCat());
  };

  // const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
  //   if (e.target === e.currentTarget) {
  //     dispatch(closeCat());
  //   }
  // };

  // document
  //   .getElementById("searchInput")
  //   ?.addEventListener("keydown", function (event: KeyboardEvent) {
  //     if (event.key === "Enter") {
  //       event.preventDefault();
  //       document.getElementById("searchButton")?.click();
  //     }
  //   });

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      dispatch(closeMenu());
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleNavbar);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleNavbar);
    };
  }, []);

  const categoryIcons = [
    <MdComputer size={14} color="inherit" />,
    <GiClothes size={14} color="inherit" />,
    <FaPersonBooth size={14} color="inherit" />,
    <FcAutomotive size={14} color="inherit" />,
    <RiDrinks2Fill size={14} color="inherit" />,
    <MdSportsGymnastics size={14} color="inherit" />,
  ];

  return (
    <>
      <div className="w-full shadow-sm shadow-slate-100/50">
        <nav className="bg-[#2B3445] h-10 p-1">
          <Container>
            <div className="topnav">
              <div className="flex items-center gap-2">
                <Link
                  href="/"
                  className="text-lg font-extrabold hover:opacity-80 transition bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
                  onClick={handleLogoClicked}
                >
                  Eagle Shop
                </Link>
              </div>
              <div className="flex items-center text-xs">
                <button
                  onClick={handleLanClick}
                  className="inline-flex h-8 mr-5 cursor-pointer items-center justify-center text-white relative transition-colors duration-300 hover:bg-slate-700"
                >
                  <span className="ml-2 text-xs font-semibold">EN</span>
                  <RiArrowDownSLine size={14} color="inherit" />
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
                    <FaXTwitter size={16} color="inherit" />
                  </Link>
                  <Link href="#">
                    <FaFacebookSquare size={16} color="inherit" />
                  </Link>
                  <Link href="#">
                    <FaInstagram size={16} color="inherit" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </nav>

        <div className="bg-white">
          <Container>
            <div className="w-full flex items-center justify-between">
              <div className="block md:hidden px-1 py-3">
                <button
                  onClick={() => dispatch(toggleMenu())}
                  className="flex items-center"
                >
                  <MenuOutlinedIcon className="text-slate-500" />
                </button>
              </div>
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={handleLogoClicked}
              >
                <Image
                  src="/images/logo-eagle.png"
                  // src="/images/eagle-logo2.jpg"
                  alt=""
                  width={100}
                  height={60}
                />
              </Link>
              <div className="w-0 hidden text-sm md:w-1/2 md:flex relative">
                <input
                  type="text"
                  name="name"
                  value={search.name || ""}
                  placeholder="Search for products..."
                  id="searchInput"
                  onChange={handleFilterChange}
                  className="w-full hidden md:block bg-[#F3F5F9] border-none"
                />
                <button
                  className="searchbtn hidden md:block"
                  id="searchButton"
                  onClick={handleSearchClicked}
                >
                  <FiSearch size={16} color="inherit" />
                </button>
              </div>
              <div className="flex items-center gap-1 text-xl text-[#7D879C]">
                <button className="transition-all p-1 block md:hidden hover:bg-[#0000000a] rounded-[50%]">
                  <GoSearch className="size-5 md:size-6 text-inherit" />
                </button>
                <button
                  className="p-1 transition-all hover:bg-[#0000000a] rounded-[50%]"
                  onClick={() => dispatch(togglePopup())}
                >
                  <BsPerson className="size-5 md:size-6 text-inherit" />
                </button>
                <Link
                  href="/cart"
                  className="relative transition-all hover:bg-[#0000000a] rounded-[50%]"
                >
                  <button className="p-1 pr-1 relative">
                    <LiaCartPlusSolid className="size-5 md:size-6 text-inherit" />
                  </button>
                  <span className="flex flex-wrap justify-center items-center content-center absolute top-0 right-0 px-[6px] h-[20px] min-w-[20px] text-xs text-white bg-[#D23F57] rounded-[20px] transform scale-100 translate-x-1/2 -translate-y-1/2 origin-top-right">
                    {totalQuantity}
                  </span>
                </Link>
              </div>
            </div>
          </Container>

          <div
            className={`${
              isOpen
                ? "sidebar left-0 ease-in-out duration-1000 shadow-md shadow-slate-100/50 z-50"
                : "sidebar -left-full ease-in duration-300 z-50"
            }`}
          >
            <div
              onClick={() => dispatch(closeMenu())}
              className="closeIconContainer"
            >
              <CloseOutlinedIcon className="closeIcon" />
            </div>
            <ul className="menu text-[15px]">
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

        <div className="bg-white hidden md:block">
          <Container>
            <div className="w-full flex items-center justify-between text-[#2B3445] relative h-10 sm:h-[50px] md:h-[60px] rounded-md">
              <div className="cursor-pointer relative text-sm bg-[#f3f5f9] z-[45]">
                <button
                  onClick={handleCatClick}
                  className="p-2 inline-flex items-center justify-between w-20 sm:w-64 font-semibold capitalize"
                >
                  <div className="flex gap-2 items-center">
                    <BiSolidCategory size={20} />
                    <span className="hidden sm:block">categories</span>
                  </div>
                  <MdKeyboardArrowRight
                    className={`size-5 ${
                      isOpened
                        ? "transition-transform duration-500 ease-in-out transform rotate-90"
                        : ""
                    }`}
                  />
                </button>
                {isOpened && (
                  <div
                    // ref={dropdownRef}
                    className="absolute top-12 bg-white text-[#2B3445] rounded-sm shadow-sm shadow-slate-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {categories.map((category: ProductCategory, i: number) => (
                      <div key={category.category_id} className="relative">
                        <div
                          className="flex items-center h-10 min-w-64 px-4 cursor-pointer transition-colors duration-300 hover:text-[#D23F57]"
                          onClick={() => handleCategoryClicked(category.name)}
                        >
                          {categoryIcons[i]}
                          <span className="pl-3 flex-grow">
                            {category.name}
                          </span>
                        </div>
                        <div className="absolute"></div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="hidden text-[14px] lg:flex gap-8 items-center">
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
                ? "sidebar left-0 ease-in-out duration-1000 shadow-md shadow-slate-100/50 z-50"
                : "sidebar -left-full ease-in duration-300 z-50"
            }`}
          >
            <div
              onClick={() => dispatch(closeMenu())}
              className="closeIconContainer"
            >
              <CloseOutlinedIcon className="closeIcon" />
            </div>
            <ul className="menu text-[15px]">
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

      <div className="bg-white w-full z-40 sticky top-0 shadow-custom transition-all duration-350 ease-in-out animate-custom-animation">
        <Container>
          {navbar && (
            <div className="flex items-center justify-between ">
              <div className="block md:hidden px-1 py-3">
                <button
                  onClick={() => dispatch(toggleMenu())}
                  className="flex items-center"
                >
                  <MenuOutlinedIcon className="text-slate-500" />
                </button>
              </div>
              <div className="flex gap-0 items-center">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={handleLogoClicked}
                >
                  <Image
                    src="/images/eagle-image.jpg"
                    alt=""
                    width={100}
                    height={60}
                  />
                </Link>
                <div className="hidden md:block text-[#7d879c] cursor-pointer relative text-sm hover:bg-[#f3f5f9] z-50">
                  <button
                    onClick={handleCatClick}
                    className="p-2 inline-flex items-center text-inherit justify-between font-semibold capitalize"
                  >
                    <div className="flex gap-2 items-center">
                      <BiSolidCategory size={20} />
                      <IoIosArrowDown />
                    </div>
                  </button>
                  {isOpened && (
                    <div className="absolute top-12 bg-white text-[#2B3445] rounded-sm shadow-sm shadow-slate-300">
                      {categories.map(
                        (category: ProductCategory, i: number) => (
                          <div className="relative">
                            <Link href="#">
                              <div className="flex items-center h-10 min-w-64 px-4 cursor-pointer transition-colors duration-300 hover:text-[#D23F57]">
                                {categoryIcons[i]}
                                <span className="pl-3 flex-grow">
                                  {category.name}
                                </span>
                              </div>
                            </Link>
                            <div className="absolute"></div>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-0 hidden md:w-1/2 md:flex md:relative">
                <input
                  type="text"
                  name="name"
                  value={search.name || ""}
                  placeholder="Search..."
                  onChange={handleFilterChange}
                  className="w-full hidden md:block bg-[#F3F5F9] border-none"
                />
                <button className="searchbtn hidden md:block">
                  <FiSearch
                    size={16}
                    color="inherit"
                    onClick={handleSearchClicked}
                  />
                </button>
              </div>
              <div className="flex gap-1 items-center text-xl text-[#7D879C]">
                <button className="p-2 block md:hidden">
                  <GoSearch className="size-5 md:size-6 text-inherit" />
                </button>
                <button className="p-2">
                  <BsPerson
                    className="size-5 md:size-6 text-inherit"
                    onClick={() => dispatch(togglePopup())}
                  />
                </button>
                <Link href="/cart" className="relative">
                  <button className="p-2 relative">
                    <LiaCartPlusSolid className="size-5 md:size-6 text-inherit" />
                  </button>
                  <span className="flex flex-wrap justify-center items-center content-center absolute top-0 right-0 px-[6px] h-[20px] min-w-[20px] text-xs text-white bg-[#D23F57] rounded-[20px] transform scale-100 translate-x-1/2 -translate-y-1/2 origin-top-right">
                    {totalQuantity}
                  </span>
                </Link>
              </div>
            </div>
          )}
        </Container>
      </div>
      {isVisible && <LoginPopup />}
    </>
  );
};

export default Navbar;
