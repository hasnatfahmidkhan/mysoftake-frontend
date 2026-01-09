import React from "react";

const CreatorsGallery = () => {
  return (
    <section className="py-20 px-4 min-h-screen flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h3 className="text-4xl text-primary dark:text-white font-medium mb-1">
          Join with Our
        </h3>
        <h2 className="text-4xl font-bold text-primary dark:text-white tracking-tight">
          Creators Of Change
        </h2>
      </div>

      {/* Main Grid Container */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* COLUMN 1 (Left) */}
        <div className="flex flex-col gap-6">
          {/* Top Tall Image */}
          <div className="h-80 md:h-96 rounded-3xl overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
              alt="Team meeting standing"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          {/* Bottom Square Image */}
          <div className="h-64 rounded-3xl overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
              alt="Casual discussion"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* COLUMN 2 (Middle-Left) */}
        <div className="flex flex-col gap-6">
          {/* Top Square Image */}
          <div className="h-64 rounded-3xl overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=600"
              alt="Working on laptop"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          {/* Bottom Tall Image */}
          <div className="h-80 md:h-96 rounded-3xl overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=600"
              alt="Hands stacked together"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* COLUMN 3 (Right - Spans 2 Columns) */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* Top Wide Image */}
          <div className="h-72 md:h-80 w-full rounded-3xl overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200"
              alt="Large team conference"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="h-72 md:h-80 w-full rounded-3xl overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200"
              alt="Large team conference"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Bottom Area: Black Card & Blue Button */}
        </div>
      </div>
    </section>
  );
};

export default CreatorsGallery;
