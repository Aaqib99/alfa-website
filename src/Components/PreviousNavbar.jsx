import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Assets/Icons/white-logo.svg";
import ColorLogo from "../Assets/Icons/alfa-color-logo.svg";
import { FaChevronDown } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import {
  FaLinkedinIn,
  FaInstagram,
  FaUser,
  FaGlobe,
  FaTwitter,
} from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import ReactCountryFlag from "react-country-flag";
import layoutbg from "../Assets/Images/layoutbg.png";
import linee from "../Assets/Icons/linee.svg";

const PreviousNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  React.useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavigation = (path, section) => {
    navigate(path);
    closeMenu();
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const links = [
    {
      name: "WHO WE ARE",
      // path: "/who-we-are",
      submenu: [
        { name: "Group Overview", path: "/groupoverview" },
        { name: "Sustainability", path: "/sustainability" },
        { name: "Core Values", path: "/core-values" },
        { name: "Our Strategy", path: "/our-strategy" },
        { name: "Meet Our Leadership", path: "/meet-our-leadership" },
        { name: "Our Culture", path: "/our-culture" },
        { name: "Our Facilities", path: "/our-facilities" },
        { name: "Our Capabilities", path: "/our-capabilities" },
        { name: "Accreditations", path: "/accreditations" },
      ],
    },
    {
      name: "WHAT WE DO",
      // path: "/our-divisions",
      submenu: [
        { name: "Marine & Offshore", path: "/marine-and-offshore-division" },
        { name: "Construction", path: "/construction-division" },
        {
          name: "Fabrication & Machining",
          path: "/fabrication-and-machining-division",
        },
        { name: "Trading", path: "/trading-division" },
        { name: "ICT", path: "/ict-division" },
        { name: "Facility Management", path: "/facility-management-division" },
        { name: "Joinery", path: "/joinery-division" },
      ],
    },
    {
      name: "SUSTAINABILITY",
      // path: "/sustainability",
      submenu: [
        {
          name: "Environmental Responsibility",
          path: "/environmental-responsibility",
        },
        {
          name: "Health, Safety & Environmental Policy",
          path: "/health-safety-and-environmental-policy",
        },
        { name: "Quality Assurance Policy", path: "/quality-assurance-policy" },
        { name: "Ethics and Compliance", path: "/ethics-and-compliance" },
      ],
    },
    {
      name: "MEDIA CENTER",
      // path: "/media",
      submenu: [
        { name: "News", path: "/news" },
        { name: "Download Center", path: "/download-center" },
      ],
    },
    {
      name: "GET IN TOUCH",
      // path: "/contact",
      submenu: [
        { name: "Commercial Inquiries", path: "/commercial-inquiries" },
        { name: "Contact us", path: "/contact" },
        { name: "Careers", path: "/careers" },
        { name: "Become a Supplier", path: "/become-a-supplier" },
        { name: "Whistleblowing", path: "/whistle-blowing" },
      ],
    },
  ];

  return (
    <>
      {!isOpen && (
        <>
          <div
            className={`fixed right-0 top-0 pt-3 pb-4 w-full z-[1000] transition-all duration-50 ${
              isSticky ? "bg-white text-[#393939] shadow-md" : "text-white"
            }`}
          >
            <div className="flex justify-end text-sm space-x-4 px-6 mb-2 sticky top-0 bg-inherit z-[1000] overflow-visible">
              <a
                href="https://www.linkedin.com/company/afla-marine/"
                className="hover:text-[#2C95D2]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/alfa_marine_sa/"
                className="hover:text-[#2C95D2]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/alfamarinesa"
                className="hover:text-[#2C95D2]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <span
                className={`ml-4 mr-8 w-px h-5 -mt-1 inline-block align-middle transition-colors duration-10 ${
                  isSticky ? "bg-black" : "bg-gray-200"
                }`}
              />
              <a
                href="https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office365.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=ea0d4913-e01a-3e48-2a06-7dc4822537b9&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&domain_hint=alfamarinesa.com&nonce=638839595987907992.3d08aed2-1fd8-4878-97f4-0bd981dc03b9&state=DYtBDoAgDMBA3-AzgAnqtudMJ4mJSqIHv-_StLd651xvdqYHi8OlEBWeDUIGZM6xKJDsmsNYlcJESIGxTgFWZRp1g7Kyt3dI7ZMkZ5VLnuPeX4lbu34&sso_reload=true"
                target="_blank"
                // rel="noopener noreferrer"
              >
                <FaUser className="hover:text-blue-400 cursor-pointer" />
              </a>

              <a>
                <FaSearch className="hover:text-blue-400 cursor-pointer" />
              </a>

              {/* Language Selector */}

              <div
                onMouseEnter={() => setLangDropdownOpen(true)}
                className={`relative cursor-pointer inline-block`}
              >
                <div className="flex items-center space-x-1 hover:text-blue-400 select-none">
                  <FaGlobe />
                  <IoIosArrowDown />
                </div>

                {langDropdownOpen && (
                  <div
                    className={`absolute right-0 mt-2 bg-[#A9A9A9]/70 text-white
                       ${isSticky ? "bg-red-500 z-[9999]" : "z-[30]"}`}
                    role="menu"
                    aria-label="Language selection"
                    onMouseLeave={() => setLangDropdownOpen(false)}
                  >
                    <ul className="w-32">
                      <li
                        role="none"
                        className="hover:bg-[#2C95D2] pl-4 py-2 cursor-pointer"
                      >
                        {/* <a href="" role="menuitem" className="block w-full"> */}
                        English
                        {/* </a> */}
                      </li>
                      <li
                        role="none"
                        className="hover:bg-[#2C95D2] pl-4 py-2 cursor-pointer"
                      >
                        {/* <a href="" role="menuitem" className="block w-full"> */}
                        العربية
                        {/* </a> */}
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Hamburger Button inside menu */}
              <button
                onClick={toggleMenu}
                className={`cursor-pointer text-white text-2xl relative w-3 h-4 flex flex-col justify-between items-start space-y-[3px] group`}
              >
                {!isOpen ? (
                  <>
                    <span
                      className={`block w-full h-[2px] ${
                        isSticky ? "bg-black" : "bg-white"
                      } group-hover:bg-[#2C95D2]`}
                    ></span>
                    <span
                      className={`block w-4/5 h-[2px] ${
                        isSticky ? "bg-black" : "bg-white"
                      } group-hover:bg-[#2C95D2]`}
                    ></span>
                    <span
                      className={`relative w-full h-[2px] ${
                        isSticky ? "bg-black" : "bg-white"
                      } group-hover:bg-[#2C95D2]`}
                    >
                      <span
                        className={`absolute right-[-6px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 ${
                          isSticky ? "bg-black" : "bg-white"
                        } rounded-full group-hover:bg-[#2C95D2]`}
                      />
                    </span>
                  </>
                ) : (
                  <FaTimes className={isSticky ? "text-black" : "text-white"} />
                )}
              </button>
            </div>
          </div>
          <div
            className={`fixed w-full top-8 z-[900] transition-all duration-50 ${
              isSticky
                ? "bg-white font-medium text-[#393939] z-[2000]"
                : "text-white"
            }`}
          >
            <div
              className={`flex items-center justify-between w-11/12 mx-auto 
              ${
                isSticky ? "bg-white z-[50] font-medium text-[#393939]" : "text-white"
              }`}
            >
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                  <img
                    src={isSticky ? ColorLogo : logo}
                    alt="Logo"
                    className={`h-auto ${isSticky ? "w-38 -mt-7" : "w-38"}`}
                  />
                </Link>
              </div>

              <nav className={`flex-grow  text-center p-0 m-0`}>
                <ul className="inline-flex space-x-6 uppercase text-sm font-medium p-0 m-0">
                  {links.map((menu, idx) => (
                    <li
                      key={idx}
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setOpenMenu(menu.name)}
                    >
                      <div className="py-2">
                        <Link
                          to={menu.path}
                          className={`hover:text-blue-400 font-poppins ${
                            openMenu === menu.name
                              ? "text-blue-400 font-poppins border-b-2 border-blue-400"
                              : ""
                          }`}
                        >
                          {menu.name}
                          {menu.submenu && (
                            <FaChevronDown className="inline ml-1 text-xs" />
                          )}
                        </Link>
                      </div>

                      {openMenu === menu.name && (
                        <ul
                          className={`absolute ${
                            menu.name === "GET IN TOUCH" ? "right-0" : "left-0"
                          } mt-2 ${
                            isSticky
                              ? "bg-[#11234B]/90"
                              : "bg-white/20 backdrop-blur-md"
                          } text-white py-4 shadow-xl space-y-2 w-64 z-50 pointer-events-auto`}
                          onMouseLeave={() => setOpenMenu(null)}
                        >
                          {menu.submenu.map((sub, subIdx) => (
                            <li key={subIdx}>
                              <Link
                                to={sub.path}
                                className="block w-full py-3 px-4 text-left hover:bg-[#2C95D2] hover:text-white transition-all duration-50"
                              >
                                <span className="ml-3 block text-left">
                                  {sub.name}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </>
      )}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-[#20376D]/90 text-gray-200 z-[999] bg-cover bg-center overflow-hidden animate-fadeScaleIn"
            style={{ backgroundImage: `url(${layoutbg})` }}
          >
            {/* Header section with logo and close button */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4">
              <Link to="/" className="flex items-center mb-2 sm:mb-0">
                <img src={logo} alt="Logo" className="h-auto w-28" />
              </Link>
              <button
                onClick={closeMenu}
                className="cursor-pointer text-white text-xl sm:text-2xl transition-transform duration-300 hover:rotate-90 hover:scale-110"
              >
                {/* <FaTimes className="font-extrabold" /> */}
                <IoCloseSharp className="text-2xl font-extrabold transition-transform duration-300 hover:rotate-90 hover:scale-110" />
              </button>
            </div>

            {/* Grid Layout */}
            <div className="flex-grow flex justify-center items-center">
              <div className="grid lg:ml-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-4 py-1 h-full">
                {links.map((menu, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setOpenMenu(menu.name)}
                    onMouseLeave={() => setOpenMenu(null)}
                    className="group"
                  >
                    {/* Section Title with Icon */}
                    <div className="flex items-center cursor-pointer text-xl font-semibold mb-2 text-gray-300 hover:text-[#2C95D2]">
                      <span
                        className={`group-hover:font-bold font-poppins ${
                          openMenu === menu.name
                            ? "font-bold font-poppins text-[#2C95D2]"
                            : ""
                        }`}
                      >
                        {menu.name}
                      </span>
                    </div>

                    {/* Line Image */}
                    <img
                      src={linee}
                      alt=""
                      className="w-30 h-auto mb-2 opacity-10 group-hover:opacity-100 transition duration-100"
                    />

                    {/* Submenu */}
                    <ul
                      className={`grid gap-1 ${
                        (menu.name === "WHO WE ARE" &&
                          menu.submenu.length > 6) ||
                        (menu.name === "WHAT WE DO" &&
                          menu.submenu.length > 6) ||
                        (menu.name === "GET IN TOUCH" &&
                          menu.submenu.length > 2)
                          ? "grid-cols-2"
                          : "grid-cols-1"
                      }`}
                    >
                      {menu.submenu?.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            to={sub.path}
                            onClick={closeMenu}
                            className={`block py-1 px-2 rounded transition-all duration-200 text-[1.05rem] ${
                              openMenu === menu.name
                                ? "opacity-100 text-white"
                                : "opacity-10 text-gray-400"
                            } hover:opacity-100 hover:text-[#2C95D2]`}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PreviousNavbar;
