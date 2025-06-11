import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Assets/Icons/white-logo.svg";
import ColorLogo from "../Assets/Icons/alfa-color-logo.svg";
import { FaChevronDown } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaLinkedinIn, FaInstagram, FaUser, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import ReactCountryFlag from "react-country-flag";
import layoutbg from "../Assets/Images/layoutbg.png";
import linee from "../Assets/Icons/linee.svg";

const Navbar = () => {
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
        { name: "MISSION, VISION, GOAL", path: "/our-statement" },
        { name: "Core Values", path: "/core-values" },
        { name: "Our Strategy", path: "/our-strategy" },
        // { name: "Meet Our Leadership", path: "/meet-our-leadership" },
        { name: "Meet Our Leadership", },
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
        {
          name: "Marine & Offshore Division",
          path: "/marine-and-offshore-division",
        },
        { name: "Construction Division", path: "/construction-division" },
        {
          name: "Fabrication & Machining Division",
          path: "/fabrication-and-machining-division",
        },
        { name: "Trading Division", path: "/trading-division" },
        { name: "ICT Division", path: "/ict-division" },
        {
          name: "Facility Management Division",
          path: "/facility-management-division",
        },
        { name: "Joinery Division", path: "/joinery-division" },
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
        <div
          className={`fixed w-full z-50 h-16 px-4 py-2 flex justify-between items-center ${
            isSticky ? "bg-white" : "bg-transparent"
          }`}
        >
          {/* Logo Column */}
          <div className="flex items-center justify-center">
            <Link to="/" className="flex items-center">
              <img
                src={isSticky ? ColorLogo : logo}
                alt="Logo"
                className={`h-auto w-38`}
              />
            </Link>
          </div>

          {/* Navigation Column */}
          <div className="hidden md:flex flex items-center justify-center">
            <nav className="text-center">
              <ul
                className={`inline-flex font-poppins space-x-6 uppercase text-sm p-0 m-0 ${
                  isSticky ? "text-black" : "text-white"
                }`}
              >
                {links.map((menu, idx) => (
                  <li
                    key={idx}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setOpenMenu(menu.name)}
                  >
                    <div className="py-2">
                      <Link
                        to={menu.path}
                        className={`hover:text-blue-400 ${
                          openMenu === menu.name
                            ? "text-blue-400 border-b-2 border-blue-400"
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
                        } ${
                          isSticky
                            ? "bg-[#11234B]/90"
                            : "bg-white/20 backdrop-blur-md"
                        } text-white py-4 shadow-xl space-y-2 z-50 ${
                          menu.name === "WHAT WE DO"
                            ? "w-74"
                            : menu.name === "SUSTAINABILITY"
                            ? "w-88"
                            : "w-64"
                        }`}
                        onMouseLeave={() => setOpenMenu(null)}
                      >
                        {menu.submenu.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <Link
                              to={sub.path}
                              className="block w-full py-3 px-4 text-left hover:bg-[#2C95D2] hover:text-white transition-all duration-50"
                            >
                              <span className=" text-left whitespace-nowrap">
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

          {/* Social Icons + Language + Menu Column */}
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/afla-marine/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn
                  className={`hidden md:flex ${
                    isSticky ? "text-black" : "text-white"
                  } hover:text-[#2C95D2]`}
                />
              </a>
              <a
                href="https://www.instagram.com/alfa_marine_sa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className={`hidden md:flex ${
                    isSticky ? "text-black" : "text-white"
                  } hover:text-[#2C95D2]`}
                />
              </a>
              <a
                href="https://x.com/alfamarinesa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter
                  className={`hidden md:flex ${
                    isSticky ? "text-black" : "text-white"
                  } hover:text-[#2C95D2]`}
                />
              </a>
              <span
                className={`w-px h-5 bg-current md:inline-block hidden ${
                  isSticky ? "bg-black" : "bg-white"
                }`}
              />
              <a href="https://login.microsoftonline.com/...">
                <FaUser
                  className={`hidden md:flex ${
                    isSticky ? "text-black" : "text-white"
                  } hover:text-blue-400 cursor-pointer`}
                />
              </a>
              <FaSearch
                className={`hidden md:flex ${
                  isSticky ? "text-black" : "text-white"
                } hover:text-blue-400 cursor-pointer`}
              />
              <div
                onMouseEnter={() => setLangDropdownOpen(true)}
                className="relative cursor-pointer inline-block"
              >
                <div
                  className={`flex items-center space-x-1 ${
                    isSticky ? "text-black" : "text-white"
                  } hover:text-blue-400`}
                >
                  <FaGlobe />
                  <IoIosArrowDown />
                </div>
                {langDropdownOpen && (
                  <div
                    className={`absolute right-0 mt-2 text-white ${
                      isSticky ? "bg-[#11234B]/90" : "bg-white/20"
                    }`}
                    onMouseLeave={() => setLangDropdownOpen(false)}
                  >
                    <ul className="w-32">
                      <li className="hover:bg-[#2C95D2] pl-4 py-2 cursor-pointer">
                        EN
                      </li>
                      <li className="hover:bg-[#2C95D2] pl-4 py-2 cursor-pointer">
                        AR
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <button onClick={toggleMenu} className="group cursor-pointer">
                {
                  !isOpen ? (
                    <div className="flex z-[9999] flex-col space-y-1 relative">
                      {/* Top Line */}
                      <span
                        className={`block w-4 h-[3px] ${
                          isSticky ? "bg-black" : "bg-white"
                        } group-hover:bg-[#2C95D2]`}
                      />

                      {/* Bottom Line with dot */}
                      <span className="relative block w-3 h-[3px]">
                        <span
                          className={`absolute top-0 left-0 w-full h-full ${
                            isSticky ? "bg-black" : "bg-white"
                          } group-hover:bg-[#2C95D2] animate-wiggle-right`}
                        />
                        <span
                          className={`absolute right-[-6px] top-1/2 -translate-y-1/2 w-1 h-1 rounded-full ${
                            isSticky ? "bg-black" : "bg-white"
                          } group-hover:bg-[#2C95D2] animate-dot-wiggle`}
                        />
                      </span>
                    </div>
                  ) : (
                    ""
                  )
                  //  (
                  //   <FaTimes onClick={closeMenu}
                  //     className={`
                  //         ${isSticky ? "text-black" : "text-white"}
                  //         ${isOpen ? "text-red-600 z-[9999]" : "text-black"}`}
                  //   />
                  // )
                }
              </button>
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-[#20376D]/90 text-gray-200 z-[999] bg-cover bg-center overflow-hidden animate-fadeScaleIn"
            style={{ backgroundImage: `url(${layoutbg})` }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4">
              <Link to="/" className="flex items-center mb-2 sm:mb-0">
                <img src={logo} alt="Logo" className="h-auto w-28" />
              </Link>
              <IoCloseSharp
                onClick={closeMenu}
                className="cursor-pointer mr-7 mt-2 text-white text-xl sm:text-2xl transition-transform duration-50 hover:rotate-90 hover:scale-110"
              />
              {/* <button
                onClick={closeMenu}
                className="cursor-pointer text-white text-xl sm:text-2xl transition-transform duration-50 hover:rotate-90 hover:scale-110"
              >
                <IoCloseSharp className="text-2xl font-extrabold transition-transform duration-50 hover:rotate-90 hover:scale-110" />
              </button> */}
            </div>

            <div className="flex-grow flex justify-center items-center">
              <div className="grid lg:ml-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-16 py-1 h-full">
                {links.map((menu, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setOpenMenu(menu.name)}
                    onMouseLeave={() => setOpenMenu(null)}
                    className="group"
                  >
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

                    <img
                      src={linee}
                      alt=""
                      className="w-35 h-auto mb-2 opacity-10 group-hover:opacity-100 transition duration-50"
                    />

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
                            className={`block py-1 px-1 rounded transition-all duration-50 ${
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

export default Navbar;
