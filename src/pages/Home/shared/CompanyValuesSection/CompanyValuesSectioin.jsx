import { ChevronRight } from "lucide-react";

const CompanyValuesSection = () => {
  return (
    <div className="bg-base-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
            It is a long established fact
            <br />
            that a reader will be distracted a.
          </h2>
        </div>

        {/* Logos Section */}
        <div className="flex justify-center items-center gap-8 md:gap-12 mb-16 flex-wrap">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-red-600 rounded-lg transform rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-1 bg-white transform rotate-45"></div>
                  <div className="w-1 h-8 bg-white absolute"></div>
                </div>
              </div>
              <div>
                <div className="text-base-content font-bold text-lg">
                  COMPANY
                </div>
                <div className="text-base-content/60 text-xs">
                  Your partner in success
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-2">
            Built on local roots,
          </h3>
          <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-12">
            we expand worldwide with a commitment to global trust.
          </h3>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-26 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-base-content/80 text-lg font-medium leading-relaxed">
              We are driven by strong values and a clear vision, our
              multinational company is built on integrity, innovation, and
              trust. What began with local roots has grown into a global
              presence, connecting people, markets, and opportunities across
              borders. We believe that success comes not only from expansion,
              but from responsibility—respecting cultures, empowering
              communities, and delivering consistent excellence worldwide.
            </p>
            <p className="text-base-content/80 text-lg font-medium leading-relaxed">
              We continue to move forward with confidence, shaping a future
              where{" "}
              <span className="">global reach is guided by shared values</span>{" "}
              and lasting trust.
            </p>
          </div>

          {/* Right Content - Image Arrangement */}
          <div className="relative flex justify-center items-center gap-10">
            {/* Left Circle Image */}
            <div className="relative w-72 h-140 rounded-full overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-linear-to-br from-gray-800 to-gray-900"></div>
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=700&fit=crop"
                alt="Writing"
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Right Circle Image */}
            <div className="relative w-72 h-140 rounded-full overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-linear-to-br from-gray-200 to-gray-300"></div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=700&fit=crop"
                alt="Business Meeting"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-2xl px-8 py-6 text-center">
              <div className="text-5xl font-bold text-base-content mb-1">
                90+
              </div>
              <div className="text-sm font-semibold text-base-content/80">
                Principle
              </div>
              <div className="text-sm font-semibold text-base-content/80">
                of
              </div>
              <div className="text-sm font-semibold text-base-content/80">
                Selection
              </div>
            </div>
          </div>
        </div>

        {/* Read More Link */}
        <div className="mt-12 text-right">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:text-primary/80 transition-colors group"
          >
            Read more case studies
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyValuesSection;
