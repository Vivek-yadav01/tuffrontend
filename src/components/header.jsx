import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mode, setMode] = useState("Admin mode");

  useEffect(() => {
    // Set the mode based on the current path
    if (location.pathname === "/admin") {
      setMode("User mode");
    } else {
      setMode("Admin mode");
    }
  }, [location.pathname]);

  const handleClick = () => {
    if (mode === "Admin mode") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="relative  mx-auto px-3 flex h-[73px] w-100% items-center justify-between  pb-4 pt-4 duration-300  motion-reduce:transition-none bg-black">
      <a href="/">
        <svg
          width="125"
          height="26"
          viewBox="0 0 135 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 5.89409H15.3693L9.5331 36H21.8368L27.2126 5.89409H42.2511L43.4131 0H1.17165L0 5.89409Z"
            fill="#D41F30"
          ></path>
          <path
            d="M47.2951 0L42.512 26.9438L49.9857 36H82.8746L89.1533 0H77.1198L71.8129 30.008H56.8626L54.4711 27.0927L59.1053 0H47.2951Z"
            fill="#D41F30"
          ></path>
          <path
            d="M86.9282 36H98.7784L100.699 23.9651H130.691L131.882 17.9993H101.825L103.214 8.93625L106.724 5.82379H122.018L120.826 11.9812H132.81L134.929 0H102.156L91.6286 9.00241L86.9282 36Z"
            fill="#D41F30"
          ></path>
        </svg>
      </a>
      <button
        onClick={handleClick}
        class="flex items-center gap-x-2 border-2 rounded-lg px-8 py-2.5 border-red-600 flex-end"
        fdprocessedid="g8l6ic"
      >
        <span class="text-[16px] text-red-600 font-medium">{mode}</span>
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 1L6.5 6L11.5 1M1.5 7L6.5 12L11.5 7"
            stroke="#DC2626"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Header;
