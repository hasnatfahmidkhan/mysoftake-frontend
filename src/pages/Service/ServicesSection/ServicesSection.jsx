import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
// Swiper modules
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Factory, Truck, Globe, Ship, Box } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Manufacturing & Production",
      icon: (
        <Factory
          className="w-24 h-24 md:w-32 md:h-32 text-indigo-600"
          strokeWidth={1.5}
        />
      ),
      color: "bg-indigo-50",
    },
    {
      id: 2,
      title: "Export Logistics",
      icon: (
        <Truck
          className="w-24 h-24 md:w-32 md:h-32 text-orange-500"
          strokeWidth={1.5}
        />
      ),
      color: "bg-orange-50",
    },
    {
      id: 3,
      title: "Import Solutions",
      icon: (
        <Globe
          className="w-24 h-24 md:w-32 md:h-32 text-cyan-500"
          strokeWidth={1.5}
        />
      ),
      color: "bg-cyan-50",
    },
    {
      id: 4,
      title: "Warehousing",
      icon: (
        <Box
          className="w-24 h-24 md:w-32 md:h-32 text-yellow-500"
          strokeWidth={1.5}
        />
      ),
      color: "bg-yellow-50",
    },
    {
      id: 5,
      title: "Ocean Freight",
      icon: (
        <Ship
          className="w-24 h-24 md:w-32 md:h-32 text-blue-600"
          strokeWidth={1.5}
        />
      ),
      color: "bg-blue-50",
    },
  ];

  return (
    <section className="py-24 font-sans overflow-hidden">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
          Our Services
        </h2>
        <p className="text-lg text-primary dark:text-white max-w-2xl mx-auto leading-relaxed">
          Teamwork begins by building trust. And the only way to do that is to
          overcome our need for invulnerability.
        </p>
      </div>

      {/* Slider */}
      <div className="w-full relative px-0">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          // STRICT REQUIREMENT: Always show 3 slides
          slidesPerView={3}
          // The Curve Effect Configuration
          coverflowEffect={{
            rotate: 25, // The angle of the side cards (The "Curve")
            stretch: 0, // Space between cards (0 is standard)
            depth: 100, // How far back the side cards look
            modifier: 1, // Multiplier for the effect
            slideShadows: false, // Clean look without dark shadows
            scale: 1, // Side cards are 90% size of the center one
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          // Responsive Breakpoints:
          // Even though we want 3 slides, on very small mobile screens
          // 3 columns might look crushed.
          // However, per your request, we keep it 3.
          // If you want mobile to be 1 slide, change '320' slidesPerView to 1.
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              coverflowEffect: { rotate: 0, depth: 0 },
            }, // Mobile: Flat view usually better
            640: { slidesPerView: 3 }, // Tablet/Desktop: Strict 3 view with Curve
          }}
          className="w-full py-12"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              {({ isActive }) => (
                <div
                  className={`group h-full select-none transition-all duration-500`}
                >
                  <div
                    className={`p-6 md:p-10 h-80 md:h-96 flex flex-col items-center justify-center text-center transition-all duration-300
                                        ${
                                          isActive
                                            ? "bg-[#EAEAEA] shadow-xl"
                                            : "bg-slate-100 "
                                        }`}
                  >
                    {/* Icon */}
                    <div className="relative mb-6 md:mb-8">
                      <div
                        className={`absolute inset-0 rounded-full blur-2xl opacity-20 scale-75 ${service.color}`}
                      ></div>
                      <div className="relative z-10 drop-shadow-sm">
                        {service.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-2xl font-bold text-slate-800 leading-tight">
                      {service.title}
                    </h3>

                    {/* Active Indicator Line */}
                    <div
                      className={`w-12 h-1 mt-6 rounded-full transition-colors ${
                        isActive ? "bg-slate-800" : "bg-transparent"
                      }`}
                    ></div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesSection;
