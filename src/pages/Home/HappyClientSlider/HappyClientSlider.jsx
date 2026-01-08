import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { ArrowRight } from "lucide-react";
import LeftArrow from "../../../component/LeftArrow/LeftArrow";
import RightArrow from "../../../component/RightArrow/RightArrow";
import "./HappyClientSlide.css";

const HappyClientsSlider = () => {
  const clients = [
    {
      image:
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop",
      name: "PI 360",
      description:
        "Their professionalism, transparency, and commitment to quality truly set them apart. The team communicates clearly, meets deadlines, and consistently delivers results that exceed expectations.",
      features: [
        "Where global reach meets trusted excellence.",
        "Professional team delivering results with honesty and care.",
        "Exceptional service backed by global expertise and strong values.",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
      name: "TechCorp Solutions",
      description:
        "Outstanding service and attention to detail. Their innovative approach and dedication to excellence have transformed our business operations completely.",
      features: [
        "Innovative solutions that drive real business growth.",
        "Dedicated team committed to client success.",
        "Cutting-edge technology with personalized support.",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop",
      name: "GlobalVentures Ltd",
      description:
        "A partner you can trust. Their commitment to quality and customer satisfaction is unmatched. Every project is handled with precision and care.",
      features: [
        "Reliable partnership built on trust and transparency.",
        "Consistent quality across all deliverables.",
        "Strategic thinking that aligns with business goals.",
      ],
    },
  ];

  return (
    <div className="bg-base-100 dark:bg-base-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-3xl text-primary dark:text-white mb-2">Our</p>
          <h2 className="text-5xl md:text-6xl font-bold text-primary dark:text-white">
            Happy Clients
          </h2>
        </div>

        {/* Slider Content */}
        <div className="relative mb-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{
              el: ".happy-clients-pagination",
              clickable: true,
            }}
            navigation={{
              nextEl: ".happy-next",
              prevEl: ".happy-prev",
            }}
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-4">
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-auto rounded-lg shadow-xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
                      {client.name}
                    </h3>
                    <p className="text-lg text-primary dark:text-white leading-relaxed mb-8">
                      {client.description}
                    </p>
                    <ul className="space-y-4 border-t border-gray-300 pt-8 mb-8">
                      {client.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-800"
                        >
                          <span className="text-primary dark:text-white text-2xl leading-none">
                            •
                          </span>
                          <span className="text-base dark:text-white leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-primary text-lg font-semibold uppercase tracking-wide hover:gap-3 transition-all"
                    >
                      More Many
                      <span className="text-xl">→</span>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-end max-w-6xl mx-auto">
          <div className="flex flex-col xl:flex-row items-center gap-y-5 xl:justify-between w-1/2">
            {/* Pagination Dots */}
            <div className="happy-clients-pagination flex items-center gap-3 !static !w-auto"></div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4">
              {/* left arrow  */}
              <div className="happy-prev cursor-pointer">
                <LeftArrow />
              </div>
              <div className="happy-next cursor-pointer">
                <RightArrow />
              </div>
            </div>

            {/* Read More Link */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-white text-lg font-semibold hover:gap-3 hover:text-blue-700 transition-all group"
            >
              Read more case studies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClientsSlider;
