import React from "react";
import { ArrowUpRight } from "lucide-react";

const TimelineCard = ({ year, title, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative w-80 cursor-pointer group transition-transform duration-300 hover:-translate-x-2"
    >
      {/* 1. The Shadow Card (Background) */}
      <div className="absolute top-3 -left-3 z-0 h-full w-full rounded-md bg-[#7e9bff]"></div>

      {/* 2. The Main Card (Foreground) */}
      <div
        className={`relative z-10 flex flex-col justify-center rounded-md p-6 transition-colors duration-300 
        ${isActive ? "bg-[#eef2ff]" : "bg-white hover:bg-gray-50"}`}
      >
        {/* The Circle Badge (Only visible when Active) */}
        {isActive && (
          <div className="absolute -right-3 -top-3 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-white">
            <div className="h-2 w-2 rounded-full bg-[#5879ff]"></div>
          </div>
        )}

        {/* The Arrow Icon */}
        <div
          className={`absolute right-3 top-3 ${
            isActive
              ? "text-[#5879ff]"
              : "text-gray-400 group-hover:text-[#5879ff]"
          }`}
        >
          <ArrowUpRight size={20} strokeWidth={3} />
        </div>

        {/* Text Content */}
        <h2
          className={`mb-1 text-4xl font-extrabold leading-none transition-colors 
          ${
            isActive
              ? "text-[#5879ff]"
              : "text-gray-400 group-hover:text-gray-600"
          }`}
        >
          {year}
        </h2>
        <p
          className={`text-lg font-medium transition-colors 
          ${isActive ? "text-gray-800" : "text-gray-500"}`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default TimelineCard;
