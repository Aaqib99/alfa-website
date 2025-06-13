import React, { useState, useEffect } from "react";
import backgroundImage from "../Assets/Images/markup.png";
import contactuscall from "../Assets/Icons/callus.svg";
import contactusemail from "../Assets/Icons/emailus.svg";
import ContactUsInside from "../Assets/Images/contactus5.png";
import { motion } from "framer-motion";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";

import Markup from "../Assets/Images/markup.png";
const countryOptions = [
  { code: "+966", label: "🇸🇦 Saudi Arabia (+966)" },
  { code: "+971", label: "🇦🇪 United Arab Emirates (+971)" },
  { code: "+1", label: "🇺🇸 United States (+1)" },
  { code: "+44", label: "🇬🇧 United Kingdom (+44)" },
  { code: "+91", label: "🇮🇳 India (+91)" },
  { code: "+61", label: "🇦🇺 Australia (+61)" },
  { code: "+81", label: "🇯🇵 Japan (+81)" },
  { code: "+49", label: "🇩🇪 Germany (+49)" },
  { code: "+33", label: "🇫🇷 France (+33)" },
  { code: "+39", label: "🇮🇹 Italy (+39)" },
  { code: "+7", label: "🇷🇺 Russia (+7)" },
  { code: "+55", label: "🇧🇷 Brazil (+55)" },
  { code: "+27", label: "🇿🇦 South Africa (+27)" },
  { code: "+82", label: "🇰🇷 South Korea (+82)" },
  { code: "+34", label: "🇪🇸 Spain (+34)" },
  { code: "+46", label: "🇸🇪 Sweden (+46)" },
  { code: "+64", label: "🇳🇿 New Zealand (+64)" },
  { code: "+52", label: "🇲🇽 Mexico (+52)" },
  { code: "+20", label: "🇪🇬 Egypt (+20)" },
  { code: "+62", label: "🇮🇩 Indonesia (+62)" },
];

const ContactUs = () => {
  const [selectedCode, setSelectedCode] = useState("+966"); // ✅ Default to +966
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SectionWrapperReverse>
        <div
          className="bg-cover bg-center h-[90vh] flex items-center justify-center"
          style={{ backgroundImage: `url(${Markup})` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className="text-5xl text-white font-bold mb-28">Contact Us</h1>
          </motion.div>
        </div>
        </SectionWrapperReverse>
        <motion.div
          className="md:w-2/2 mb-6 md:mb-0"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="w-full p-4 md:p-24">
            <h1
              className="text-4xl font-bold mb-4 text-center md:text-left"
              style={{ color: "#20376D" }}
            >
              CONTACT US
            </h1>

            {/* Main Flex Layout */}
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Image - 30% and same height as form */}
              <div className="hidden md:block md:w-[30%]">
                <div className="h-full">
                  <img
                    src={ContactUsInside}
                    alt="Contact Illustration"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              {/* Form - 70% */}
              <form
                className="bg-gray-100 p-6 md:w-[70%] w-full"
                action="https://getform.io/f/awnwqovb"
                method="POST"
                encType="multipart/form-data"
              >
                {/* Company Name */}
                <div className="mb-4">
                  <label className="block text-[#20376D] font-bold mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    placeholder="Company Name"
                    className="w-full px-4 py-2 border-l-4 border-[#20376D] rounded-md border"
                  />
                </div>

                {/* First & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[#20376D] font-bold mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      className="w-full px-4 py-2 border-l-4 border-[#20376D] rounded-md border"
                    />
                  </div>
                  <div>
                    <label className="block text-[#20376D] font-bold mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      className="w-full px-4 py-2 border-l-4 border-[#20376D] rounded-md border"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[#20376D] font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border-l-4 border-[#20376D] rounded-md border"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#20376D] font-bold mb-2">
                      Mobile No
                    </label>
                    <div className="flex">
                      <div
                        className="w-32 px-3 py-2 border border-l-4 rounded-l-md border-[#20376D] cursor-pointer text-black flex items-center justify-between"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <span>{selectedCode}</span>
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-200 ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>

                      {/* Dropdown list */}
                      {isOpen && (
                        <ul className="absolute z-10 bg-white border border-gray-300 rounded mt-10 max-h-60 overflow-auto w-72">
                          {countryOptions.map((option) => (
                            <li
                              key={option.code}
                              onClick={() => {
                                setSelectedCode(option.code);
                                setIsOpen(false);
                              }}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              {option.label}
                            </li>
                          ))}
                        </ul>
                      )}
                      <input
                        type="number"
                        name="mobile"
                        placeholder="Phone Number"
                        className="flex-1 px-4 py-2 border border-l-0 rounded-r-md"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Job Title */}
                <div className="mb-4">
                  <label className="block text-[#20376D] font-bold mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="job_title"
                    placeholder="Job Title"
                    className="w-full px-4 py-2 border-l-4 border-[#20376D] rounded-md border"
                  />
                </div>

                {/* Job Description */}
                <div className="mb-4">
                  <label className="block text-[#20376D] font-bold mb-2">
                    Job Description
                  </label>
                  <textarea
                    name="job_description"
                    rows="4"
                    placeholder="Enter job description here..."
                    className="w-full px-4 py-2 border-l-4 border-[#20376D] rounded-md border resize-y"
                  ></textarea>
                </div>

                {/* CAPTCHA (fake for demo) */}
                <div className="mb-4">
                  <label className="block text-[#20376D] font-bold mb-2">
                    CAPTCHA
                  </label>
                  <input
                    type="text"
                    name="captcha"
                    placeholder="Enter CAPTCHA"
                    className="w-full px-4 py-2 border-l-4 border-[#20376D] rounded-md border"
                    required
                  />
                  {/* Replace this with a real CAPTCHA solution like Google reCAPTCHA */}
                </div>

                {/* Privacy Policy */}
                <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    name="privacy_agreement"
                    required
                    className="mr-2"
                  />
                  <label className="text-sm text-[#20376D]">
                    I agree to the{" "}
                    <a
                      href="/privacy-policy"
                      className="text-blue-700 underline"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="/terms-and-conditions"
                      className="text-blue-700 underline"
                      target="_blank"
                    >
                      Terms of Service
                    </a>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-[#20376D] hover:bg-[#2C95D2] text-white font-bold py-3 rounded transition-all"
                >
                  Submit
                </button>
              </form>

              
            </div>
          </div>
        </motion.div>
      

      {/* map */}
      <div className="w-full mt-16">
        <h2
          className="text-3xl font-bold mb-6 text-center"
          style={{ color: "#20376D" }}
        >
          Our Office Location
        </h2>
        <div className="w-full mt-8 -mb-20">
          <iframe
            title="Alfa Marine Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7716012845244!2d50.1077281!3d26.4345218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fb6d8a3e52d5%3A0x36ad5b73c9d39550!2sAlfa%20Marine%20%26%20Industrial%20Services%20Company!5e0!3m2!1sen!2s!4v1717356840000!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
