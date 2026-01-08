import React from "react";

const EventBlock = ({ type, title, top }) => {
  // Color mapping
  const styles = {
    blocked: "bg-red-100 border-red-400 text-red-800", // Lighter bg for cleaner look
    free: "bg-emerald-100 border-emerald-400 text-emerald-800",
  };

  const colorClass = styles[type] || styles.free;

  return (
    <div
      className={`absolute left-0 right-0 rounded border-l-[3px] px-1.5 py-0.5 text-xs font-medium shadow-sm flex items-center ${colorClass} m-2 py-4`}
      style={{ top: top }}
    >
      <span className="truncate leading-tight">{title}</span>
    </div>
  );
};

export default EventBlock;
