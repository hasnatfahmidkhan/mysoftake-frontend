import React from "react";

const FloatingCircle = ({ className }) => {
  return (
    <div
      className={`absolute rounded-full bg-gradient-to-br from-cyan-300 to-blue-600 shadow-lg opacity-90 ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};

export default FloatingCircle;
