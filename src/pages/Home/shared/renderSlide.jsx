import {
  Shield,
  Briefcase,
  Users,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

import imgSlide1 from "../../../assets/imgslide1.jpg";
import imgSlide3 from "../../../assets/imgslide3.jpg";
import imgSlide4 from "../../../assets/imgslide4.jpg";
import imgSlide5 from "../../../assets/imgslide5.jpg";

import SecondaryBtn from "../../../component/SecondaryBtn/SecondaryBtn";
import PrimaryBtn from "../../../component/primaryBtn/primaryBtn";

const renderSlide = (slide, navigate) => {
  switch (slide.type) {
    /* ------------------------------------
       LAYOUT 1 – DIAGONAL SPLIT (RESPONSIVE)
    -------------------------------------*/
    case "diagonal-split":
      return (
        <div className="flex flex-col lg:flex-row h-full w-full">
          {/* LEFT CONTENT */}
          <div
            className="relative w-full lg:w-[60%] p-6 sm:p-10 lg:p-20 flex flex-col justify-center text-white bg-[#235784] z-10"
            style={{
              clipPath:
                window.innerWidth >= 1024
                  ? `polygon(
                      100% 0%,0% 0%,0% 100%,90.6% 100%,100% 64.8%,
                      92.8% 68.3%,90.9% 64.0%,88.0% 56.0%,
                      85.0% 47.0%,83.0% 38.0%,82.6% 31.5%,
                      84.5% 22.0%,89.5% 11.7%,100% 0%)`
                  : "none",
            }}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-light mb-2">
              {slide.title}{" "}
              <span className="font-bold">{slide.titleHighlight}</span>{" "}
              {slide.titleEnd}
            </h1>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              {slide.mainText}
            </h2>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {slide.subText}
            </h3>

            <p className="text-base sm:text-lg max-w-xl mb-8 opacity-90">
              {slide.description}
            </p>

            <PrimaryBtn
              onClick={() => navigate("/schedule")}
              buttonText={slide.buttonText}
              className="w-full sm:w-auto"
            />
          </div>

          {/* RIGHT IMAGE */}
          <div className="absolute top-0 right-0 inset-0">
            <img
              src={imgSlide1}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      );

    /* ------------------------------------
       LAYOUT 2 – STATS OVERLAY
    -------------------------------------*/
    case "stats-overlay":
      return (
        <div className="relative h-full w-full bg-gray-50 p-6 sm:p-10 lg:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center text-[#0077B6]">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-2">
                {slide.title}{" "}
                <span className="font-bold">{slide.titleHighlight}</span>{" "}
                {slide.titleEnd}
              </h1>

              <h2 className="text-4xl lg:text-5xl font-bold mt-4">
                {slide.mainText}
              </h2>

              <h3 className="text-4xl lg:text-5xl font-bold mb-6">
                {slide.subText}
              </h3>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl mb-8">
                {slide.description}
              </p>

              <SecondaryBtn
                onClick={() => navigate("/contact-us")}
                buttonText={slide.buttonText}
                className="w-full sm:w-auto"
              />
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
              {slide.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center">
                      {stat.icon === "users" && <Users size={26} />}
                      {stat.icon === "shield" && <Shield size={26} />}
                      {stat.icon === "briefcase" && <Briefcase size={26} />}
                    </div>

                    <div>
                      <div className="text-3xl font-bold">{stat.value}</div>
                      <div className="text-sm text-slate-500">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    /* ------------------------------------
       LAYOUT 3 – FULL OVERLAY
    -------------------------------------*/
    case "full-overlay":
      return (
        <div
          className="relative h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imgSlide3})` }}
        >
          <div className="h-full w-full bg-black/60 p-6 sm:p-10 lg:p-20 text-white flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light mb-2">
              {slide.title}{" "}
              <span className="font-bold">{slide.titleHighlight}</span>{" "}
              {slide.titleEnd}
            </h1>

            <h2 className="text-4xl lg:text-6xl font-bold mt-4">
              {slide.mainText}
            </h2>

            <h3 className="text-4xl lg:text-6xl font-bold mb-6">
              {slide.subText}
            </h3>

            <p className="text-base sm:text-lg max-w-xl opacity-90 mb-8">
              {slide.description}
            </p>
          </div>
        </div>
      );

    /* ------------------------------------
       LAYOUT 4 – SPLIT DARK
    -------------------------------------*/
    case "split-dark":
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="bg-primary text-white p-6 sm:p-10 lg:p-20">
            <h1 className="text-3xl lg:text-5xl font-light mb-2">
              {slide.title}{" "}
              <span className="font-bold">{slide.titleHighlight}</span>{" "}
              {slide.titleEnd}
            </h1>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              {slide.mainText}
            </h2>

            <h3 className="text-4xl lg:text-5xl font-bold mb-6">
              {slide.subText}
            </h3>

            <p className="text-base sm:text-lg max-w-xl mb-8 opacity-90">
              {slide.description}
            </p>

            <PrimaryBtn
              onClick={() => navigate("/contact-us")}
              buttonText={slide.buttonText}
            />
          </div>

          <div className="">
            <img
              src={imgSlide4}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      );

    /* ------------------------------------
       LAYOUT 5 – CENTERED OVERLAY
    -------------------------------------*/
    case "centered-overlay":
      return (
        <div
          className="relative h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imgSlide5})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative h-full p-6 sm:p-10 lg:p-20 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-2">
              {slide.title}{" "}
              <span className="font-bold">{slide.titleHighlight}</span>{" "}
              {slide.titleEnd}
            </h1>

            <h2 className="text-4xl lg:text-6xl font-bold mt-4">
              {slide.mainText}
            </h2>

            <h3 className="text-4xl lg:text-6xl font-bold mb-6">
              {slide.subText}
            </h3>

            <p className="text-base sm:text-lg max-w-2xl opacity-90 mb-8">
              {slide.description}
            </p>

            <PrimaryBtn
              onClick={() => navigate("/contact-us")}
              buttonText={slide.buttonText}
            />
          </div>

          {/* SOCIAL ICONS – DESKTOP ONLY */}
          {slide.socialIcons && (
            <div className="hidden lg:flex absolute right-8 bottom-20 flex-col gap-3 text-white">
              <Facebook />
              <Twitter />
              <Instagram />
              <Linkedin />
            </div>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default renderSlide;
