import React from "react";

const Container = ({ children }) => {
  return (
    <section className="px-6 max-w-7xl mx-auto w-full py-16">
      {children}
    </section>
  );
};

export default Container;
