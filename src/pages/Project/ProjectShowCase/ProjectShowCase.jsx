import React from "react";
import { CheckCircle2 } from "lucide-react";

const ProjectShowcase = () => {
  return (
    <section className="text-primary dark:text-white py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* LEFT COLUMN: Text Content */}
          <div className="flex flex-col justify-start">
            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-wide">
              Project Title
            </h1>
            <h2 className="text-2xl font-semibold  mb-8">Project Manager</h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-sm leading-relaxed text-base-content text-justify">
              <p>
                Our website development project focuses on creating a dynamic,
                user-friendly, and responsive digital platform tailored to meet
                client needs. By combining modern design, seamless navigation,
                and robust backend functionality, the website ensures an
                engaging user experience and smooth performance across devices.
                The project integrates security, scalability, and SEO best
                practices to enhance visibility and reliability.
              </p>
              <p>
                Through careful planning and execution, this website not only
                represents the brand effectively but also drives engagement and
                measurable results. Our website development project focuses on
                creating a dynamic, user-friendly, and responsive digital
                platform tailored to meet client needs. By combining modern
                design, seamless navigation, and robust backend functionality.
              </p>
              <p>
                The website ensures an engaging user experience and smooth
                performance across devices. The project integrates security,
                scalability, and SEO best practices to enhance visibility and
                reliability. Through careful planning and execution, this
                website not only represents the brand effectively but also
                drives engagement and measurable results.
              </p>
              <p>
                Our website development project focuses on creating a dynamic,
                user-friendly, and responsive digital platform tailored to meet
                client needs. By combining modern design, seamless navigation,
                and robust backend functionality, the website ensures an
                engaging user experience and smooth performance across devices.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Images, Checks & Stats */}
          <div className="flex flex-col">
            <div className="relative w-full h-[400px] md:h-[500px] mb-12">
              {/* Image 1: Top Right (Whiteboard/Wall) - Z-Index Lowest */}
              <div className="absolute top-0 right-0 w-[65%] h-[55%] z-0">
                <img
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80"
                  alt="Planning"
                  className="w-full h-full object-cover shadow-lg border-2 border-gray-700/50"
                />
              </div>

              {/* Image 2: Middle Left (Blueprint/Writing) - Z-Index Middle */}
              <div className="absolute top-[15%] left-0 w-[60%] h-[55%] z-10 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                  alt="Blueprint"
                  className="w-full h-full object-cover border-2 border-gray-700/50"
                />
              </div>

              {/* Image 3: Bottom Right (Laptop/Coding) - Z-Index Highest */}
              <div className="absolute bottom-0 right-[5%] w-[70%] h-[55%] z-20 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                  alt="Coding"
                  className="w-full h-full object-cover border-2 border-gray-700/50"
                />
              </div>
            </div>

            {/* 2. CHECKLIST SECTION */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-12 px-2 md:px-8">
              {[
                "Flexible Time",
                "Flexible Time",
                "Perfect Work",
                "Perfect Work",
                "Client Priority",
                "Client Priority",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="bg-white rounded-full p-0.5">
                    <CheckCircle2 className="w-4 h-4 text-black fill-white" />
                  </div>
                  <span className="text-base-content text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* 3. STATS SECTION */}
            <div className="flex justify-between items-center px-2 md:px-8 border-t border-gray-700 pt-8">
              {/* Stat 1 */}
              <div className="text-center">
                <h3 className="text-4xl font-bold text-base-content mb-2">
                  90D
                </h3>
                <p className="text-xs tracking-widest text-base-content uppercase font-bold">
                  Time
                </p>
              </div>

              {/* Stat 2 */}
              <div className="text-center">
                <h3 className="text-4xl font-bold text-base-content mb-2">
                  20+
                </h3>
                <p className="text-xs tracking-widest text-base-content uppercase font-bold">
                  Team Members
                </p>
              </div>

              {/* Stat 3 */}
              <div className="text-center">
                <h3 className="text-4xl font-bold text-base-content mb-2">
                  100+
                </h3>
                <p className="text-xs tracking-widest text-base-content uppercase font-bold">
                  Total Client
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
