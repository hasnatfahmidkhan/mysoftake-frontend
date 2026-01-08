import React, { useState } from "react";
import TimelineCard from "./TimelineCard";

// Floating Sphere Component (Gradient Look)
const FloatingSphere = ({ className }) => (
  <div
    className={`absolute rounded-full bg-gradient-to-br from-blue-300 to-[#5879ff] shadow-lg ${className}`}
  ></div>
);

const roadmapData = [
  {
    id: 1,
    year: "2025",
    title: "Enterprise-Scale Solutions",
    description: "Enterprise-Scale Solutions",
    points: [
      "Enterprise Cloud Infrastructure Modernization",
      "Smart City Data Analytics Platform",
      "Nationwide E-Commerce Platform Development",
      "IOT-Based Smart Transportation System",
      "Corporate ERP & Business Automation Solution",
      "FinTech Digital Payment & Wallet Solution",
    ],
  },
  {
    id: 2,
    year: "2024",
    title: "Smart Data & AI Breakthroughs",
    description: "Smart Data & AI Integration",
    points: [
      "Launch of proprietary AI Neural Engine",
      "Big Data predictive modeling for Retail",
      "Automated Customer Service Bots",
      "Cloud Security Protocol Overhaul",
    ],
  },
  {
    id: 3,
    year: "2023",
    title: "Advanced Tech Partner",
    description: "Foundational Tech Partnerships",
    points: [
      "Regional expansion into Southeast Asia",
      "Series B Funding secured",
      "Strategic partnership with Cloud Giants",
      "Core legacy system migrations",
    ],
  },
];

const RoadmapSection = () => {
  const [activeId, setActiveId] = useState(1);
  const activeData = roadmapData.find((item) => item.id === activeId);

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center p-4 md:p-10 overflow-hidden">
      {/* --- WRAPPER FOR CONTENT & SPHERES --- */}
      <div className="relative max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center mt-10">
        {/* 1. Top Left Small Sphere (Above 2025) */}
        <FloatingSphere className="w-6 h-6 -top-16 left-20 lg:left-32 z-0" />

        {/* 2. Top Center Tiny Sphere */}
        <FloatingSphere className="w-4 h-4 -top-20 left-[55%] z-0" />

        {/* 3. Top Right Large Sphere (Corner of Blue Box) */}
        <FloatingSphere className="w-24 h-24 lg:w-32 lg:h-32 -top-12 -right-4 lg:-right-16 z-20" />

        {/* 4. Behind Cards Sphere (Bottom Left) */}
        <FloatingSphere className="w-20 h-20 bottom-[-40px] left-[200px] lg:left-[260px] z-0" />

        {/* 5. Bottom Center Sphere */}
        <FloatingSphere className="w-8 h-8 -bottom-20 left-[55%] z-0" />

        {/* 6. Bottom Right Sphere */}
        <FloatingSphere className="w-5 h-5 -bottom-10 right-20 z-0" />

        {/* --- LEFT COLUMN: TIMELINE CARDS --- */}
        <div className="flex flex-col gap-6 z-20 w-full lg:w-auto items-center lg:items-start lg:mr-[-120px]">
          {roadmapData.map((item) => (
            <TimelineCard
              key={item.id}
              year={item.year}
              title={item.title}
              isActive={activeId === item.id}
              onClick={() => setActiveId(item.id)}
            />
          ))}
        </div>

        {/* --- RIGHT COLUMN: BLUE CONTENT BOX --- */}
        <div className="w-full lg:flex-1 z-10 mt-8 lg:mt-0">
          <div className="relative bg-[#5879ff] w-full min-h-[550px] flex flex-col justify-center shadow-none rounded-md">
            {/* Sphere Inside the Box (Bottom Right area) */}
            <div className="absolute bottom-16 right-[30%] w-6 h-6 rounded-full bg-linear-to-b from-blue-200 to-blue-400 opacity-90"></div>

            {/* Content Container */}
            {/* pl-12 md:pl-32 ensures text is centered visually relative to the visible blue area, ignoring the card overlap */}
            <div className="px-8 py-12 lg:pl-32 lg:pr-16 flex flex-col justify-center md:w-1/2 mx-auto h-full ">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {activeData.description}
              </h2>

              <ul className="space-y-3">
                {activeData.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start text-white text-lg font-normal leading-relaxed"
                  >
                    <span className="mr-3 mt-2 w-1 h-1 bg-white rounded-full flex-shrink-0 opacity-80"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
