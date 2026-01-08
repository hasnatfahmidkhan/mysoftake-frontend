import netPattern from "../../../assets/net-pattern.svg";

// --- 1. Helper Component: Individual Marquee Column ---
const MarqueeColumn = ({ images, duration = "5s", reverse = false }) => {
  return (
    <div className="relative hidden xl:flex flex-col">
      {/* 
        We create a wrapper that slides. 
        We contain TWO sets of images to create the infinite seamless loop.
      */}
      <div
        className={`flex flex-col gap-8 w-full ${
          reverse
            ? "animate-marquee-reverse infinite"
            : "animate-marquee infinite"
        }`}
        style={{ animationDuration: duration }}
      >
        {/* Set 1 */}
        {images.map((img, idx) => (
          <div
            key={`set1-${idx}`}
            className="w-full h-86 shrink-0 rounded-full overflow-hidden shadow-lg"
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Set 2 (Duplicate for seamless loop) */}
        {images.map((img, idx) => (
          <div
            key={`set2-${idx}`}
            className="w-full h-86 shrink-0 rounded-full overflow-hidden shadow-lg"
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Gradient Overlays for smooth fade in/out effect at top and bottom */}
      <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-cyan-500/0 to-transparent z-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-cyan-500/0 to-transparent z-10"></div>
    </div>
  );
};

// --- 2. Main Hero Section ---
const VisionHero = () => {
  // Mock Images
  const col1 = [
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400",
  ];
  const col2 = [
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400",
  ];
  const col3 = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
  ];

  return (
    <section className="relative w-full bg-linear-to-br from-[#5DC3E5] to-[#75CDE9] overflow-hidden flex items-center">
      {/* --- A. Global Styles for Animation --- */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse linear infinite;
        }
      `}</style>

      {/* --- B. Background Net SVG --- */}
      {/* Pass your SVG here. I used a placeholder wave path similar to your image. 
          The 'mix-blend-mode' helps it blend nicely with the blue. */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply">
        <img
          src={netPattern}
          alt="Vision Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* --- C. Content Container --- */}
      <div className="max-w-7xl mx-auto w-full px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-sm">
            Where Global Vision Meets <br />
            Technological Mastery
          </h1>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light">
            We are a globally trusted technology partner, empowering
            multinational enterprises with innovative, enterprise-scale
            solutions. With a strong presence across markets, we deliver
            reliable, secure, and scalable systems that drive operational
            excellence. Our expertise helps organizations transform, compete,
            and lead in a rapidly evolving digital world.
          </p>
        </div>

        {/* Right Side: Marquee Image Columns */}
        <div className="grid grid-cols-3 gap-4 h-18 xl:h-200 -skew-x-3 transform scale-95 opacity-90">
          {/* Column 1: Moves UP slowly */}
          <MarqueeColumn images={col1} duration="10s" reverse={true} />

          {/* Column 2: Moves DOWN faster (offset) */}
          <div className="pt-24">
            <MarqueeColumn images={col2} duration="10s" reverse={false} />
          </div>

          {/* Column 3: Moves UP slowly */}
          <MarqueeColumn images={col3} duration="10s" reverse={true} />
        </div>
      </div>
    </section>
  );
};

export default VisionHero;
