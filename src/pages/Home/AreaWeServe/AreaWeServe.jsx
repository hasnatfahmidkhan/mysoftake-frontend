import React from "react";

const AreaWeServe = () => {
  const countries = [
    {
      name: "BANGLADESH",
      flag: (
        <svg viewBox="0 0 120 80" className="w-24 h-16">
          <rect width="120" height="80" fill="#006a4e" />
          <circle cx="52" cy="40" r="20" fill="#f42a41" />
        </svg>
      ),
    },
    {
      name: "CHINA",
      flag: (
        <svg viewBox="0 0 120 80" className="w-24 h-16">
          <rect width="120" height="80" fill="#de2910" />
          <g fill="#ffde00">
            <path d="M20,15 l3,9 l-8,-5 h10 l-8,5 z" />
            <path d="M35,8 l1,3 l-3,-2 h3 l-3,2 z" />
            <path d="M40,13 l1,3 l-3,-2 h3 l-3,2 z" />
            <path d="M40,20 l1,3 l-3,-2 h3 l-3,2 z" />
            <path d="M35,25 l1,3 l-3,-2 h3 l-3,2 z" />
          </g>
        </svg>
      ),
    },
    {
      name: "JAPAN",
      flag: (
        <svg viewBox="0 0 120 80" className="w-24 h-16">
          <rect width="120" height="80" fill="#ffffff" />
          <circle cx="60" cy="40" r="18" fill="#bc002d" />
        </svg>
      ),
    },
    {
      name: "UAE",
      flag: (
        <svg viewBox="0 0 120 80" className="w-24 h-16">
          <rect width="120" height="80" fill="#ffffff" />
          <rect width="120" height="26.67" fill="#00732f" />
          <rect y="26.67" width="120" height="26.67" fill="#ffffff" />
          <rect y="53.34" width="120" height="26.67" fill="#000000" />
          <rect width="30" height="80" fill="#ff0000" />
        </svg>
      ),
    },
  ];

  const partners = [
    {
      name: "Facebook",
      logo: (
        <svg viewBox="0 0 120 30" className="h-8">
          <text
            x="0"
            y="22"
            fontFamily="Arial, sans-serif"
            fontSize="24"
            fontWeight="bold"
            fill="#1877f2"
          >
            facebook
          </text>
        </svg>
      ),
    },
    {
      name: "TS",
      logo: (
        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
          <span className="text-white font-bold text-lg">TS</span>
        </div>
      ),
    },
    {
      name: "RocketReach",
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M12 2L4 8v8l8 6 8-6V8l-8-6zm0 2.5L17.5 9v6L12 19.5 6.5 15V9L12 4.5z" />
            </svg>
          </div>
          <span className="text-blue-600 font-semibold text-lg">
            RocketReach
          </span>
        </div>
      ),
    },
    {
      name: "Clutch",
      logo: (
        <svg viewBox="0 0 120 30" className="h-8">
          <text
            x="0"
            y="24"
            fontFamily="Arial, sans-serif"
            fontSize="26"
            fontWeight="bold"
            fill="#2d3640"
          >
            Clutch
          </text>
        </svg>
      ),
    },
    {
      name: "Daily Observer",
      logo: (
        <div className="flex flex-col items-start">
          <span className="text-blue-500 text-xs font-semibold">daily</span>
          <span className="text-blue-600 text-lg font-bold -mt-1">
            observer
          </span>
        </div>
      ),
    },
    {
      name: "The Daily Star",
      logo: (
        <svg viewBox="0 0 140 30" className="h-8">
          <text
            x="0"
            y="20"
            fontFamily="serif"
            fontSize="18"
            fontWeight="normal"
            fill="#000000"
            fontStyle="italic"
          >
            The Daily Star
          </text>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-base-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Area we serve
          </h2>
        </div>

        {/* Countries Flags */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24">
          {countries.map((country, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="bg-white rounded-lg shadow-md p-2 border border-gray-200 hover:shadow-lg transition-shadow">
                {country.flag}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-wide">
                {country.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Partners/Clients Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreaWeServe;
