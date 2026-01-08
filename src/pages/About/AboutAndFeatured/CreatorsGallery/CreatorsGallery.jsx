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

          {/* Bottom Area: Black Card & Blue Button */}
          <div className="flex flex-col gap-6 relative">
            {/* Black Info Card */}
            <div className="bg-white dark:bg-primary rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6">
              {/* Logo Mockup */}
              <div className="flex flex-col items-center">
                <img src="./footerLogo.png" alt="" />
              </div>

              {/* Text Content */}
              <div className="md:border-l border-gray-700 pl-0 sm:pl-6 text-center sm:text-left">
                <p className="text-cyan-400 font-semibold text-lg">
                  Smart technology, honest solutions.
                </p>
                <p className="text-cyan-400 font-medium text-base">
                  Connecting businesses beyond borders.
                </p>
              </div>
            </div>

            {/* Blue Notification Button (Aligned Right) */}
            <div className="self-end bg-[#3385a8] text-white px-6 py-4 rounded-3xl flex items-center gap-4 shadow-lg w-full sm:w-auto max-w-sm cursor-pointer hover:bg-[#2c7493] transition-colors">
              <div className="bg-blue-600/50 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-sm md:text-base leading-tight">
                  Teamwork turns <br /> vision into reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorsGallery;
