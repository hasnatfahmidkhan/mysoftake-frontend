import React from "react";

const AboutAndFeatured = () => {
  return (
    <div className="w-full font-sans">
      <section className="relative w-full bg-base-100 dark:bg-primary py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* LEFT COLUMN: Image with Network Background Effect */}
          <div className="relative flex justify-center items-center md:col-span-1">
            {/* 
                Decorative Background "Network" Circles
                These mimic the faint lines/dots behind the image in your screenshot
             */}
            <div className="absolute w-[340px] h-[340px] border border-cyan-800/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute w-[400px] h-[400px] border border-cyan-800/20 rounded-full"></div>

            {/* Decorative Dots on the ring */}
            <div className="absolute w-[340px] h-[340px] rounded-full animate-[spin_15s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-900/50 rounded-full"></div>
              <div className="absolute bottom-10 right-4 w-2 h-2 bg-cyan-900/50 rounded-full"></div>
              <div className="absolute bottom-10 left-4 w-2 h-2 bg-cyan-900/50 rounded-full"></div>
            </div>

            {/* The Main Circular Image */}
            <div className="relative z-10 w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-gray-500/50 overflow-hidden shadow-2xl">
              {/* Using a placeholder image of an office meeting similar to your screenshot */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team working together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Text Content */}
          <div className="md:col-span-2 text-primary dark:text-white space-y-6">
            <div className="space-y-4 tracking-wide">
              {/* Headline - Dark Blue color as per screenshot */}
              <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
                Building Technology for What's Next
              </h2>
              <p>
                My Softake PLC. is driven by a passion for innovation and a
                commitment to excellence. We harness the power of technology to
                create smart, reliable, and scalable solutions that help
                businesses grow, adapt, and succeed in a rapidly changing
                digital world. Guided by integrity, teamwork, and continuous
                learning, we transform challenges into opportunities and ideas
                into impact—building a smarter future together.
              </p>
              <p>
                We stands at the forefront of digital transformation, turning
                vision into value through cutting-edge technology. With a strong
                focus on quality, creativity, and customer success, we design
                solutions that solve real problems and drive meaningful
                progress. Together, we innovate with purpose, embrace change
                with confidence, and build technology that empowers businesses
                today and into the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-base-100 dark:g-[#383838] py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Header */}
          <div className="mb-12">
            <span className="block text-xl text-primary dark:text-white mb-1">
              We
            </span>
            <h3 className="text-3xl font-bold text-primary dark:text-white tracking-wide">
              Featured On
            </h3>
          </div>

          {/* Logos Grid 
              Note: I am using styled text/spans to mimic the logos since I don't have the PNG files.
              In a real project, replace these <div>s with <img src="logo.png" /> 
          */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 hover:opacity-100 transition-opacity duration-300">
            {/* Facebook Mimic */}
            <div className="text-[#1877F2] font-bold text-2xl flex items-center">
              facebook
            </div>

            {/* "B" Logo Mimic */}
            <div className="bg-[#1a4731] w-8 h-8 flex items-center justify-center rounded-sm text-white font-serif font-bold text-xl">
              B
            </div>

            {/* RocketReach Mimic */}
            <div className="flex items-center gap-1 text-[#4f86f7] font-semibold text-lg">
              <span className="text-xl">🚀</span> RocketReach
            </div>

            {/* Clutch Mimic */}
            <div className="text-[#6b6b6b] font-bold text-2xl flex items-center relative">
              Clutc
              <span className="text-red-500 text-3xl leading-3 relative -top-1">
                .
              </span>
              h
            </div>

            {/* Daily Observer Mimic */}
            <div className="flex items-center text-xl font-bold">
              <span className="text-gray-400">daily</span>
              <span className="text-[#0099cc]">observer</span>
            </div>

            {/* Daily Star Mimic */}
            <div className="text-[#1a1a2e] bg-transparent font-serif font-black text-2xl opacity-60">
              The Daily Star
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutAndFeatured;
