import React, { useState, useEffect, useRef } from "react";

// --- 1. Custom Hook to detect when element is on screen ---
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Trigger only once when it enters view
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect(); // Stop observing after triggering
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, [ref, options]);

  return [ref, isInView];
};

// --- 2. The Counter Component ---
const CountUpNumber = ({ valueString, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView({ threshold: 0.5 }); // Trigger when 50% visible

  // Parse the string: "$20m+" -> prefix: "$", num: 20, suffix: "m+"
  const parseValue = (str) => {
    const match = str.match(/^(\D*)(\d+)(\D*)$/);
    if (!match) return { prefix: "", num: 0, suffix: str };
    return {
      prefix: match[1],
      num: parseInt(match[2], 10),
      suffix: match[3],
    };
  };

  const { prefix, num, suffix } = parseValue(valueString);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      // Calculate percentage (0 to 1)
      const percentage = Math.min(progress / duration, 1);

      // Ease-out function for smooth effect (starts fast, slows down)
      const easeOut = 1 - Math.pow(1 - percentage, 3);

      setCount(Math.floor(easeOut * num));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(num); // Ensure it lands exactly on the final number
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, num, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

// --- 3. Main Section ---
const StatsSection = () => {
  const stats = [
    {
      value: "200+",
      label: "Projects Delivered",
    },
    {
      value: "60+",
      label: "Team Members (3 nationalities)",
    },
    {
      value: "$20m+",
      label: "saved by cloud customers",
    },
    {
      value: "95%",
      label: "5 star AWS customer reviews",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-linear-to-b from-[#cedce4] to-[#9aaebc] font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section: Headline */}
        <div className="text-center mb-10 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight tracking-tight">
            Our solutions empower businesses <br className="hidden md:block" />
            to grow and lead.
          </h2>
        </div>

        {/* The "Ledge" Shadow Effect */}
        <div className="relative w-full h-8 mb-12 flex justify-center items-center">
          <div className="w-2/3 h-1 bg-transparent shadow-[0_25px_40px_rgba(0,0,0,0.6)] rounded-[100%]"></div>
        </div>

        {/* Bottom Section: Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-[#3b6bf6] mb-3 drop-shadow-sm">
                {/* Replaced static text with the animated component */}
                <CountUpNumber valueString={stat.value} />
              </span>
              <p className="text-gray-800 text-sm md:text-base font-medium max-w-[150px] md:max-w-none leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
