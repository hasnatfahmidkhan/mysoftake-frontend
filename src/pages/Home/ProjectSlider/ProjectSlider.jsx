import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import {
  Clock,
  Users,
  Briefcase,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ChevronRight,
  Map,
  Truck,
  Headphones,
  SlidersVertical,
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import LeftArrow from "../../../component/LeftArrow/LeftArrow";
import RightArrow from "../../../component/RightArrow/RightArrow";

const ProjectSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  /* Duplicate images to ensure smooth infinite loop with centeredSlides and auto slidesPerView */
  const originalImages = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
  ];
  const images = [...originalImages, ...originalImages];

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-base-content/70 text-xl mb-2">Way of building</h2>
          <h1 className="text-5xl font-bold text-base-content">Great Future</h1>
        </div>

        {/* Main Content Wrapper (Slider + Bottom Content) */}
        <div className="relative">
          {/* Image Slider - Top Position */}
          <div className="mb-16 relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              speed={1000}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination-custom",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onSwiper={setSwiperInstance}
              slidesPerView="3"
              breakpoints={{
                320: {
                  slidesPerView: 1, // <= 320px width
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className=""
            >
              {images.map((image, idx) => (
                <SwiperSlide key={idx} className="w-140">
                  <div>
                    <img
                      src={image}
                      alt={`Project ${idx + 1}`}
                      className="w-full h-[360px] object-cover rounded-2xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className="swiper-pagination-custom flex justify-center gap-2 mt-8"></div>
          </div>

          {/* Content Section */}
          <div className="p-8 lg:p-12 flex justify-between">
            <div className="max-w-4xl mx-auto">
              {/* Project Title and Description */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-base-content mb-4">
                  Project Title
                </h3>
                <p className="text-base-content/80 leading-relaxed text-lg">
                  Short Description- Finding the right talent is not easy. We
                  help you find the talent that suits your needs, follows your
                  processes, and sticks with you long term (not the case with
                  freelancers. We help you find the talent that suits your
                  needs, follows your processes, and sticks with you long term
                  (not the case with freelancers
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-col justify-center w-fit">
                <div className="flex justify-center lg:justify-start gap-12 mb-6">
                  <div className="text-center">
                    <div className="bg-slate-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-base-content">
                      90D
                    </div>
                    <div className="text-sm text-base-content/70 font-semibold mt-1 tracking-wide">
                      TIME
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="bg-slate-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-base-content">
                      20+
                    </div>
                    <div className="text-sm text-base-content/70 font-semibold mt-1 tracking-wide">
                      TEAM MEMBERS
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="bg-slate-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-base-content">
                      100+
                    </div>
                    <div className="text-sm text-base-content/70 font-semibold mt-1 tracking-wide">
                      TOTAL CLIENT
                    </div>
                  </div>
                </div>
                {/* Social Links */}
                <div className="flex justify-center gap-6 mb-12">
                  <button className="btn btn-circle btn-sm bg-base-100 border-base-300 hover:bg-base-200 hover:border-primary">
                    <Facebook className="w-4 h-4 text-base-content" />
                  </button>
                  <button className="btn btn-circle btn-sm bg-base-100 border-base-300 hover:bg-base-200 hover:border-primary">
                    <Instagram className="w-4 h-4 text-base-content" />
                  </button>
                  <button className="btn btn-circle btn-sm bg-base-100 border-base-300 hover:bg-base-200 hover:border-primary">
                    <Twitter className="w-4 h-4 text-base-content" />
                  </button>
                  <button className="btn btn-circle btn-sm bg-base-100 border-base-300 hover:bg-base-200 hover:border-primary">
                    <Linkedin className="w-4 h-4 text-base-content" />
                  </button>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start flex-1">
                <div className="btn-gradient-blue rounded-2xl p-5 flex items-center gap-4 min-w-[300px] shadow-lg">
                  <div className="bg-white p-3 rounded-xl shadow-md">
                    <Map className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="text-white">
                    <div className="font-bold text-lg">Local Expertise</div>
                    <div className="text-sm opacity-90">
                      lorem ipsum is simply dummy text of the printing and
                      typesetting industry
                    </div>
                  </div>
                </div>

                <div className="btn-gradient-blue rounded-2xl p-5 flex items-center gap-4 min-w-[300px] shadow-lg">
                  <div className="bg-white p-3 rounded-xl shadow-md">
                    <Truck className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="text-white">
                    <div className="font-bold text-lg">Our delivery model</div>
                    <div className="text-sm opacity-90">
                      lorem ipsum is simply dummy text of the printing and
                      typesetting industry
                    </div>
                  </div>
                </div>

                <div className="btn-gradient-blue rounded-2xl p-5 flex items-center gap-4 min-w-[300px] shadow-lg">
                  <div className="bg-white p-3 rounded-xl shadow-md">
                    <Headphones className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="text-white">
                    <div className="font-bold text-lg">24/7 Support</div>
                    <div className="text-sm opacity-90">
                      lorem ipsum is simply dummy text of the printing and
                      typesetting industry
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn btn-link text-gradient-blue text-lg font-bold hover:opacity-80 gap-2 no-underline hover:no-underline whitespace-nowrap">
                View Detail
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Arrows - Absolutely Positioned Centered relative to Main Wrapper */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-8 lg:-ml-12 z-20">
            <LeftArrow onClick={() => swiperInstance?.slidePrev()} />
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 -mr-8 lg:-mr-12 z-20">
            <RightArrow onClick={() => swiperInstance?.slideNext()} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-swiper {
          width: 100%;
          padding: 50px 0;
        }

        .project-swiper .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 400px;
          height: 350px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .project-swiper .swiper-slide-active {
          transform: scale(1.05);
        }

        .project-swiper .swiper-wrapper {
          align-items: center;
          justify-content: center;
        }

        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #cbd5e1;
          opacity: 1;
          border-radius: 6px;
          transition: all 0.3s;
        }

        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #003da5, #0077b6);
          width: 40px;
        }
      `}</style>
    </div>
  );
};

export default ProjectSlider;
