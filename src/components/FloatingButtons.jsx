import React from "react";
import { FaWhatsapp } from "react-icons/fa";


const FloatingButtons = () => {
  return (
    <div className="fixed bottom-20 md:bottom-14 right-5 flex flex-col gap-3 z-50">
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white  p-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-green-600 transition"
      >
      <FaWhatsapp size={28}/>
      </a>
      
    </div>
  );
};

export default FloatingButtons;