import caseStudyLogo from "../../../assets/case-study-logo.png";

const CaseStudyBanner = () => {
  return (
    <div className="relative overflow-hidden font-sans selection:bg-blue-100">
      {/* 1. DECORATIVE DOTS (Top Right) */}
      <div className="absolute top-0 right-0 p-8 grid grid-cols-5 gap-4 z-0 opacity-80">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-blue-500 rounded-full"></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        {/* ================= LEFT COLUMN: CONTENT ================= */}
        <div className="relative z-10">
          {/* Logo (CSS Shapes) */}
          <div className="relative w-16 h-16 mb-6">
            <img
              className="w-full h-full"
              src={caseStudyLogo}
              alt="Case Study Logo"
            />
          </div>

          {/* Titles */}
          <h1 className="text-5xl font-bold text-base-content mb-2 tracking-tight">
            Project Title
          </h1>
          <p className="text-xl text-primary dark:text-base-content mb-6 font-medium">
            Project description
          </p>

          {/* UX Case Study Section with Scribble & Cursor */}
          <div className="relative inline-block mb-16">
            <h2 className="text-5xl font-bold text-blue-500 relative z-10">
              UX Case Study
            </h2>

            {/* Hand-drawn Underline SVG */}
            <div className="absolute -bottom-4 left-0 w-full h-6">
              <svg
                viewBox="0 0 200 20"
                className="w-full h-full"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <path d="M5 10 Q 50 18, 100 12 T 220 15" />
              </svg>
            </div>

            {/* Custom Green Cursor & Badge */}
            <div className="absolute -right-32 top-1/2 -translate-y-1/2 flex items-center animate-bounce-slow">
              {/* Green Mouse Cursor SVG */}
              <svg
                className="w-10 h-10 text-[#1cd69d] fill-current drop-shadow-md z-20 -mr-3 transform -rotate-12"
                viewBox="0 0 24 24"
              >
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
              </svg>

              {/* Name Tag */}
              <div className="bg-[#1cd69d] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg relative z-10">
                Roni Ahmed
              </div>
            </div>
          </div>

          {/* Duration Info */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-base-content mb-1">
              Duration:
            </h3>
            <p className="text-blue-500 text-lg font-medium">
              12th June - 30th August
            </p>
            <p className="text-blue-500 text-lg font-medium">(6 weeks)</p>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: PHONE MOCKUPS ================= */}
        <div className="relative h-[600px] w-full flex justify-center items-center perspective-1000">
          {/* Phone 1 (Left - Tilted Right) */}
          <div className="absolute left-10 lg:left-20 top-10 w-[280px] h-[550px] bg-white border-[12px] border-gray-800 rounded-[3rem] shadow-2xl transform rotate-12 z-10 overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
            {/* Screen Content Placeholder */}
            <div className="w-full h-full bg-white"></div>
            {/* Side Buttons */}
            <div className="absolute top-24 -left-3 w-1 h-8 bg-gray-700 rounded-l"></div>
            <div className="absolute top-36 -left-3 w-1 h-12 bg-gray-700 rounded-l"></div>
          </div>

          {/* Phone 2 (Right - Tilted Left) */}
          <div className="absolute right-10 lg:right-20 top-10 w-[280px] h-[550px] bg-white border-[12px] border-gray-800 rounded-[3rem] shadow-2xl transform -rotate-12 z-0 overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
            {/* Screen Content Placeholder */}
            <div className="w-full h-full bg-white"></div>
            {/* Side Buttons */}
            <div className="absolute top-28 -right-3 w-1 h-12 bg-gray-700 rounded-r"></div>
          </div>
        </div>
      </div>

      {/* Custom Animation for slow float */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(-50%) translateY(-5px);
          }
          50% {
            transform: translateY(-50%) translateY(5px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default CaseStudyBanner;
