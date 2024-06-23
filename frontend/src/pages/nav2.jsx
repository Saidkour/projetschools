import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NavLinkItem from "./NavLinkItem";

import { IoSchoolSharp } from "react-icons/io5";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [url, setUrl] = useState(location.pathname);
  const [isTrensparent, setIsTransparent] = useState(false);
  useEffect(() => {
    setUrl(location.pathname);
    if (url == "/") {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  }, [location, url]);
  return (
    <>
      <nav
        className={`py-5 px-10 shadow-lg  ${isTrensparent
          ? menuOpen
            ? "bg-semi-black relative  z-[999] top-0 left-0 w-full"
            : "bg-transparent absolute z-[999] top-0 left-0 w-full"
          : "bg-white "
          }`}
      >
        <div className="container  mx-auto flex max-w-[1440px] flex-col md:flex-row justify-start relative md:justify-between ">
          <Link to={"/"} className="text-black w-fit font-bold flex ">
          EDUSYS
          </Link>
          <div className="md:hidden absolute right-0">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`text-primary focus:outline-none`}
            >
              {menuOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#edb932" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg> : <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="w-auto h-6 stroke-primary  transition-transform duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>}
            </button>
          </div>
          <ul
            className={` mx-4 mt-3 md:flex   md:m-0 md:items-center gap-3 flex-col md:flex-row ${menuOpen ? "" : "hidden"
              }`}
          >
            <li onClick={() => setMenuOpen(!menuOpen)} >
              <NavLinkItem to={"/"} >
                Home
              </NavLinkItem>
            </li>
            <li onClick={() => setMenuOpen(!menuOpen)}>
              <NavLinkItem to={"/"} >
                About Us
              </NavLinkItem>
            </li>
            <li onClick={() => setMenuOpen(!menuOpen)}>
              <NavLinkItem to={"/contact"} >
                Contact Us
              </NavLinkItem>
            </li>
            <li onClick={() => setMenuOpen(!menuOpen)}>
              <NavLinkItem to={"/login"} >
                Login
              </NavLinkItem>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
