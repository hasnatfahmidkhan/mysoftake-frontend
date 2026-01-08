import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Smartphone,
  Code,
  Monitor,
} from "lucide-react";

import "./ServiceSlider.css";
import LeftArrow from "../../../../component/LeftArrow/LeftArrow";
import RightArrow from "../../../../component/RightArrow/RightArrow";

const ServicesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 7;

  const services = [
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobile App Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Web Design & Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      icon: <Monitor className="w-8 h-8 text-primary" />,
      title: "Software Testing Service",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Software Testing",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      icon: <Monitor className="w-8 h-8 text-primary" />,
      title: "Cloud Solutions",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Digital Marketing",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "AI & Machine Learning",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
  ];

  return (
    <div className="bg-base-100 py-16 px-4">
      <div className="max-w-7xl mx-auto relative">
        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-base-content mb-16">
          Services we offer
        </h2>

        {/* Swiper Container */}
        <div className="mb-8 px-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
            pagination={{
              el: ".custom-swiper-pagination",
              clickable: true,
            }}
            navigation={{
              nextEl: ".custom-next-button",
              prevEl: ".custom-prev-button",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="services-swiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="h-full py-10 relative">
                {({ isActive }) => (
                  <div
                    className={`h-full transition-all duration-300 rounded-lg ${
                      isActive ? "z-10 translate-y-6" : "opacity-70"
                    }`}
                  >
                    {/* linear border wrapper */}
                    <div
                      className={
                        isActive
                          ? "rounded-lg p-0.5 bg-linear-to-r from-[#F76680] to-[#57007B]"
                          : "rounded-lg border-2 border-base-300 dark:border-white shadow-lg"
                      }
                    >
                      {/* Actual card */}
                      <div className="bg-white dark:bg-secondary rounded-lg p-8 h-full">
                        {/* Icon */}
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all ${
                            isActive
                              ? "p-2 bg-linear-to-r from-[#F76680] to-[#57007B]"
                              : "border-2 border-base-300"
                          }`}
                        >
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                            {service.icon}
                          </div>
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-2xl font-bold mb-4 transition-colors ${
                            isActive
                              ? "bg-linear-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent"
                              : "text-base-content"
                          }`}
                        >
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-base-content/70 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Controls Container */}
        <div className="relative mt-8 px-4">
          {/* Pagination Dots (Centered) */}
          <div className="custom-swiper-pagination w-full! flex justify-center gap-2 absolute left-0 top-[20%] z-10"></div>

          {/* Right Side Controls Group */}
          <div className="flex flex-col items-center md:items-end gap-6 mt-6 md:mt-0 ml-auto w-full md:w-auto">
            {/* Arrows and Progress */}
            <div className="flex items-center justify-center md:justify-end gap-4 w-full md:w-auto">
              {/* left Arrow  */}
              <LeftArrow />
              {/* right Arrow  */}
              <RightArrow />
              {/* Progress Bar */}
              <div className="flex items-center gap-3 ml-4">
                <span className="text-lg font-medium text-base-content/50">
                  {String(currentSlide).padStart(2, "0")}
                </span>
                <div className="w-24 h-1 bg-base-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
                  />
                </div>
                <span className="text-lg font-bold text-primary">
                  {String(totalSlides).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* View Detail Link */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary text-lg font-semibold hover:text-primary/80 transition-colors group"
            >
              View Detail
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;
