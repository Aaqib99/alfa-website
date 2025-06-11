import React, { useEffect } from "react";
import NewsCard from "../Components/NewsCard";
import image1 from "../Assets/Images/GroupOverview.jpeg";
import image2 from "../Assets/Images/ceomessage1.jpg";
import backgroundImage from "../Assets/Images/aboutcompanyimage.jpg";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const NewsSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const newsList = [
    {
      image: image1,
      title: "RBI removes PCA restrictions on UCO Bank",
      description:
        "Following UCO Bank's exit, two banks -- Indian Overseas Bank and Central Bank of India ...",
    },
    {
      image: image2,
      title: "Microsoft acquires video creation and editing tool",
      description:
        "Video editing software may become the next big addition to Microsoft’s suite of productivity tools...",
    },
    {
      image: image1,
      title: "RBI removes PCA restrictions on UCO Bank",
      description:
        "Following UCO Bank's exit, two banks -- Indian Overseas Bank and Central Bank of India ...",
    },
    {
      image: image2,
      title: "Microsoft acquires video creation and editing tool",
      description:
        "Video editing software may become the next big addition to Microsoft’s suite of productivity tools...",
    },
  ];

  return (
    <>
      <SectionWrapperReverse>
        <div
          className="bg-cover bg-center h-[90vh] flex items-center justify-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/80 h-[90vh]"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="text-5xl font-bold text-center">News</h1>
            </motion.div>
          </div>
        </div>
      </SectionWrapperReverse>
      <motion.div
        variants={cardAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <div className="mt-12 flex justify-center items-center min-h-screen bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsList.map((news, index) => (
              <NewsCard
                key={index}
                image={news.image}
                title={news.title}
                description={news.description}
                onClick={() => console.log(`Read more about: ${news.title}`)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default NewsSection;
