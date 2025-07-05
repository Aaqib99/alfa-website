import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from react-scroll
import logo from "../Assets/Icons/white-logo.svg";
import Footerphone from "../Assets/Icons/footer-phone.svg";
// import { ReactComponent as PhoneIcon } from "../Assets/Icons/footer-phone.svg";
import Footeremail from "../Assets/Icons/footer-email.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  faPhoneAlt,
  faEnvelope,
  faClock,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative" style={{ backgroundColor: "#20376D" }}>
      <div className="relative mx-auto max-w-screen-xl space-y-8 px-8 py-16 sm:px-12 lg:space-y-16 lg:px-16">
        <div className="grid grid-cols-1 gap-32 lg:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center">
              <img src={logo} alt="image1" className="w-44 text-white" />
            </Link>
            <p className="mt-8 max-w-xs text-white text-lg">
              Prince Muhammad Ibn Saud Dist, Dammam, Kingdom of Saudi Arabia
            </p>
            <div className="mt-6">
              {/* Contact Info */}
              <div className="flex items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-4">
                <a
                  href="tel:+966138052528"
                  className="flex items-center gap-1 whitespace-nowrap text-[#2C95D2] hover:text-white"
                >
                  <img src={Footerphone} alt="Phone" className="w-4 h-4" />
                  +966 13 805 2528
                </a>
                <span className="whitespace-nowrap text-white ml-2">|</span>
                <a
                  href="mailto:info@alfamarinesa.com"
                  className="flex items-center gap-1 -ml-1 whitespace-nowrap text-[#2C95D2] hover:text-white cursor-pointer"
                >
                  <img src={Footeremail} alt="Email" className="mt-1 w-4 h-4" />
                  info@alfamarinesa.com
                </a>
              </div>

              {/* Horizontal Gray Line */}
              <div className="w-full border-t border-white my-4"></div>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/afla-marine/"
                  className="group bg-transparent border border-white rounded-full p-2 transition duration-300 hover:bg-white hover:translate-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="hover:scale-110 text-white transition-colors duration-300 group-hover:text-[#20376D]" />
                </a>
                <a
                  href="https://www.instagram.com/alfa_marine_sa/"
                  className="group bg-transparent border border-white rounded-full p-2 transition duration-300 hover:bg-white hover:translate-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="hover:scale-110 text-white transition-colors duration-300 group-hover:text-[#20376D]" />
                </a>
                <a
                  href="https://x.com/alfamarinesa"
                  className="group bg-transparent border border-white rounded-full p-2 transition duration-300 hover:bg-white hover:translate-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="hover:scale-110 text-white transition-colors duration-300 group-hover:text-[#20376D]" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-semibold text-white text-2xl pb-1 cursor-pointer">
                <span className="border-b-2 border-[#2C95D2] inline-block">
                  Quick Links
                </span>
              </p>
              <ul className="mt-6 space-y-4 text-lg">
                <li>
                  <Link
                    to="/"
                    className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/groupoverview"
                    className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                  >
                    Group Overview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sustainability"
                    className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                  >
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link
                    to="/fabrication-and-machining-division"
                    className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                  >
                    Fabrication
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="mt-14 space-y-4 text-lg">
                <li>
                  <Link
                    to="/our-facilities"
                    className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                  >
                    Our Facilities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ict-division"
                    className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                  >
                    ICT Division
                  </Link>
                </li>
                <li>
                  <Link
                    to="/trading-division"
                    className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                  >
                    Trading
                  </Link>
                </li>
                <li>
                  <Link
                    to="/marine-and-offshore-division"
                    className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                  >
                    Marine & Offshore
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="mt-14 space-y-4 text-lg">
              <li>
                <Link
                  to="/core-values"
                  className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                >
                  Core Values
                </Link>
              </li>
              <li>
                <Link
                  to="/health-safety-and-environmental-policy"
                  className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                >
                  HSE Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/accreditations"
                  className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                >
                  Accreditations
                </Link>
              </li>
              <li>
                <Link
                  to="/ethics-and-compliance"
                  className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                >
                  Ethics & Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="text-xs text-white">
              Copyright © 2025 ALFA Technologies. all rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <Link to="/privacy-policy">
              <p className="text-xs text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer">
                Privacy Policy |
              </p>
            </Link>
            <Link to="/cookies-policy">
              <p className="text-xs text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer">
                Cookies Policy |
              </p>
            </Link>
            <Link to="/terms-and-conditions">
              <p className="text-xs text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer">
                Terms & Conditions
              </p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
