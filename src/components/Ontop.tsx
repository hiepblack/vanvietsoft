"use client";
import React, { useEffect, useState } from "react";

const Ontop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Hiển thị nút khi cuộn xuống đủ
  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up sự kiện khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Cho hiệu ứng cuộn mượt
    });
  };

  return (
    <button
      className={`fixed z-50 w-[50px] h-[50px]  xl:bottom-10 bottom-5 xl:right-10 right-5 ${
        isVisible ? "flex" : "hidden"
      } justify-center items-center rounded-lg bg-white shadow-lg `}
      onClick={scrollToTop}
    >
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.25 11.438 12 4.688l6.75 6.75"></path>
        <path d="M12 5.625v13.688"></path>
      </svg>
    </button>
  );
};

export default Ontop;
