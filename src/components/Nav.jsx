import React, { useEffect, useState } from "react";
import Logo from "../assets/logo/logolight.png";
import { IoIosCart } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdMenu as Menu } from "react-icons/md";
import { MdClose as Close } from "react-icons/md";
import { Link } from "react-router-dom";
import { navlinks } from "../utils/constants";

const Nav = () => {
  const [showSide, setShowSide] = useState(false);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`${
        !isTopOfPage ? "bg-white shadow-3xl" : "bg-transparent"
      } w-full easeinOut h-[100px] z-50 fixed top-0 left-0 right-0 flex items-center justify-center `}
    >
      <div className="w-full common-padding flex items-center gap-10 justify-between  max-w-large">
        <Link to="/" className="flex  items-center justify-center">
          <img className="w-20 max-sm:w-14 easeinOut" src={Logo} alt="" />
        </Link>

        <div className="flex easeinOut justify-center max-l:hidden flex-1 items-center ">
          <ul className="flex items-center capitalize text-sm gap-5 ">
            {navlinks.map((link, i) => {
              return (
                <li
                  key={i}
                  className="flex items-center easeinOut hover:text-red-400 cursor-pointer gap-2"
                >
                  <Link
                    to={
                      link === "feedback"
                        ? "/contact"
                        : link === "shop"
                        ? "/shop"
                        : "/"
                    }
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className=" flex items-center text-xl max-sm:text-sm justify-start gap-5">
          <li className="text-xl relative">
            <IoIosCart />
            <span className="absolute text-[10px] bg-[#E72463] w-4 h-4 flex items-center text-white justify-center bottom-[70%] left-[-20%] rounded-full">
              3
            </span>
          </li>
          <li className="relative search text-xl cursor-pointer">
            <span onMouseEnter={() => console.log("mouse entering")}>
              <IoIosSearch />
            </span>
            <form
              id="hiddenform"
              className="absolute hidden easeinOut hover:flex top-[100%] right-0 pt-14"
              action=""
            >
              <div className="w-fit border  px-2  items-center flex bg-white">
                <input
                  className="w-[300px] h-[40px] outline-none text-sm bg-transparent"
                  type="text"
                />
                <IoIosSearch className="" />
              </div>
            </form>
          </li>
          <li
            onClick={() => setShowSide((prev) => !prev)}
            className="text-2xl cursor-pointer hidden max-l:block"
          >
            <Menu />
          </li>
        </ul>
      </div>
      <aside
        className={`absolute easeinOut items-center hidden max-l:flex flex-col top-0 ${
          showSide ? "right-00" : "right-100 hidden"
        } min-h-[100vh] p-2 w-[300px] max-xxs:w-[200px] bg-white`}
      >
        <div className="flex items-center w-full common-padding text-xl h-[100px] justify-end">
          <span
            onClick={() => setShowSide((prev) => !prev)}
            className="cursor-pointer"
          >
            <Close />
          </span>
        </div>
        <ul className="flex flex-col w-full justify-self-center self-start  items-start capitalize text-sm gap-5 ">
          {navlinks.map((link, i) => {
            return (
              <li
                key={i}
                className="p-3 easeinOut cursor-pointer hover:text-red-400 hover:bg-gray-50 w-full"
              >
                <Link
                    to={
                      link === "feedback"
                        ? "/contact"
                        : link === "shop"
                        ? "/shop"
                        : "/"
                    }
                  >
                    {link}
                  </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </nav>
  );
};

export default Nav;
