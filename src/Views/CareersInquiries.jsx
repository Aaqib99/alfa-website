import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/careers.jpg";
import { motion } from "framer-motion";
import ContactUsInside from "../Assets/Images/career3.jpg";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";

// import AboutUSComp from '../Components/AboutUSComp';
const CareersInquiries = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SectionWrapperReverse>
        <div
          className="bg-cover bg-center h-[90vh] flex items-center justify-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          
          <div className="absolute inset-0 h-110 bg-black/60 h-[90vh]"></div>
          <div className="relative flex flex-col items-center justify-center h-full text-white">

          <motion.div
            // className="md:w-2/2 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className="text-5xl text-white font-bold">Careers</h1>
          </motion.div>
          </div>
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
            CAREERS
          </h1>

          {/* Main Flex Layout */}
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Form - Wider (75-80%) */}
            <form
              className="bg-gray-100 p-6 md:w-[75%] w-full self-stretch"
              action="https://getform.io/f/bkkndzxb"
              method="POST"
              encType="multipart/form-data"
            >
              {/* Form Fields */}
              <div className="mb-4">
                <label className="block text-[#20376D] font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#20376D] font-bold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-[#20376D] font-bold mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="user_phone"
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-[#20376D] font-bold mb-2">
                  Upload Your CV <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  name="user_cv"
                  required
                  className="border border-gray-800 rounded px-3 py-2 w-full"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-[#20376D] hover:bg-[#1976D2] text-white font-bold py-3 rounded"
              >
                Send
              </button>
            </form>

            {/* Image - 25% and same height as form */}
            <div className="hidden md:block md:w-[25%]">
              <div className="h-full">
                <img
                  src={ContactUsInside}
                  alt="Contact Illustration"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CareersInquiries;
