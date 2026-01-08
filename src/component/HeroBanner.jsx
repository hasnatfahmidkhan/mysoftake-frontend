import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// icon image for slider
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";

import renderSlide from "../pages/Home/shared/renderSlide";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

/**
 * HeroSlider Component
 *
 * A versatile hero slider component that uses Swiper.js for the sliding engine
 * while maintaining custom layouts for each slide.
 *
 * Features:
 * - 5 Different slide designs/layouts
 * - Auto-play support
 * - Custom navigation arrows and pagination
 * - Smooth slide effect
 */
const HeroSlider = () => {
  const navigate = useNavigate();
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /**
   * Slide Data Configuration
   *
   * Each object in this array represents a slide.
   * The 'type' property determines which layout is rendered.
   *
   * Available Types:
   * 1. 'diagonal-split' - Split screen with diagonal cut
   * 2. 'stats-overlay' - Floating statistics cards
   * 3. 'full-overlay' - Full screen background with center text
   * 4. 'split-dark' - Dark theme split
   * 5. 'centered-overlay' - Center text with background blur
   */
  const slides = [
    {
      type: "diagonal-split",
      title: "Innovative",
      titleHighlight: "Solution",
      titleEnd: "for",
      mainText: "AI, OTT, IOT, BI &",
      subText: "Resource Augmentation",
      description:
        "We help build and manage a team of world-class developers to bring your vision to life",
      buttonText: "Book Now",
      bgColor: "from-blue-700 to-blue-900",
      image: "code-screen",
    },
    {
      type: "stats-overlay",
      title: "Innovative",
      titleHighlight: "Solution",
      titleEnd: "for",
      mainText: "AI, OTT, IOT, BI &",
      subText: "Resource Augmentation",
      heading: "Lorem Ipsum has been",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      buttonText: "Contact Us",
      bgColor: "white",
      stats: [
        { value: "700+", label: "Lormeipsum", icon: "users", color: "gray" },
        { value: "45+", label: "Lorm Ips", icon: "shield", color: "blue" },
        {
          value: "19K",
          label: "Available Here Any",
          icon: "briefcase",
          color: "indigo",
        },
        {
          value: "356K",
          label: "Understanding Form",
          icon: "users",
          color: "pink",
        },
      ],
    },
    {
      type: "full-overlay",
      title: "Innovative",
      titleHighlight: "Solution",
      titleEnd: "for",
      mainText: "AI, OTT, IOT, BI &",
      subText: "Resource Augmentation",
      tabs: ["Non Charact", "Lorem Ipsum"],
      description: "There are many variad tions",
      avatars: 7,
      bgImage: "tech-interface",
    },
    {
      type: "split-dark",
      title: "Innovative",
      titleHighlight: "Solution",
      titleEnd: "for",
      mainText: "AI, OTT, IOT, BI &",
      subText: "Resource Augmentation",
      heading: "Lorem Ipsum has been",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      buttonText: "Contact Us",
      bgColor: "from-teal-700 to-teal-900",
      image: "server-lights",
    },
    {
      type: "centered-overlay",
      title: "Innovative",
      titleHighlight: "Solution",
      titleEnd: "for",
      mainText: "AI, OTT, IOT, BI &",
      subText: "Resource Augmentation",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      buttonText: "Contact Us",
      socialIcons: true,
      bgImage: "workspace",
    },
  ];

  const axiosSecure = useAxiosSecure();
  const { data: hero } = useQuery({
    queryKey: ["hero"],
    queryFn: async () => {
      const { data } = axiosSecure.get("/hero/");
      console.log(data);
      return data;
    },
  });

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 
        Swiper Configuration 
        - Autoplay: Advances slides every 5s
        - Loop: Continuous cycling
        - Effect: 'slide' (Standard sliding animation)
      */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        effect="slide"
        speed={700}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="w-full h-full">{renderSlide(slide, navigate)}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 
        Custom Navigation Arrows 
        Linked to Swiper instance via swiperInstance.slidePrev() / slideNext()
      */}
      <button
        onClick={() => swiperInstance?.slidePrev()}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 text-white p-4 rounded-full transition-all duration-300 cursor-pointer"
      >
        <img className="" src={leftArrow} alt="" />
      </button>
      <button
        onClick={() => swiperInstance?.slideNext()}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10  text-white p-4 rounded-full transition-all duration-300 cursor-pointer"
      >
        <img src={rightArrow} alt="" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex space-x-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperInstance?.slideToLoop(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              index === activeIndex
                ? "bg-primary w-3 h-3"
                : "bg-white/40 w-3 h-3 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
