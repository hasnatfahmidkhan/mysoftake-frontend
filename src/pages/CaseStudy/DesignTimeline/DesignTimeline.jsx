import Container from "../../../component/Container/Container";
import SectionHeading from "../shared/SectionHeading";

const DesignTimeline = () => {
  const weeks = [
    "1st week",
    "2nd week",
    "3rd week",
    "4th week",
    "5th week",
    "6th week",
  ];

  const phases = [
    {
      title: "Understand",
      details: "User Research, User Interview, Competitive Analysis",
      bg: "bg-yellow-500",
      // Grid positioning for Desktop: Starts at col 1, spans 2
      gridClass: "col-start-1 col-span-2",
      // Fine-tune width to match the 'waterfall' look (stops it from filling full 2 cols)
      widthClass: "w-[90%]",
    },
    {
      title: "Define",
      details: "User Personas, Empathy Map, User Journey",
      bg: "bg-red-800",
      gridClass: "col-start-2 col-span-2",
      widthClass: "w-[90%]",
    },
    {
      title: "Ideate",
      details: "User flow, Card sorting, Information Architecture",
      bg: "bg-blue-700",
      // Ideate looks wider in the image
      gridClass: "col-start-3 col-span-3",
      widthClass: "w-[70%]",
    },
    {
      title: "Design",
      details: "Wireframe, HI-Fi Design, Prototype",
      bg: "bg-pink-700",
      gridClass: "col-start-4 col-span-2",
      widthClass: "w-[100%]",
    },
    {
      title: "Test",
      details: "Feedbacks, Conclusion, Future Concept",
      bg: "bg-green-600",
      // Starts at the last column and spills out
      gridClass: "col-start-5 col-span-2",
      widthClass: "w-[100%]",
    },
  ];

  return (
    <Container>
      <SectionHeading title="Design Timeline" />

      {/* --- MOBILE VIEW (Vertical Stack) --- */}
      <div className="flex flex-col gap-4 md:hidden mt-8">
        {phases.map((phase, index) => (
          <div
            key={index}
            className={`${phase.bg} p-6 rounded-xl text-white shadow-lg`}
          >
            <h3 className="text-xl font-bold mb-1">{phase.title}</h3>
            <p className="text-sm opacity-90">{phase.details}</p>
          </div>
        ))}
      </div>

      {/* --- DESKTOP VIEW (Waterfall Grid) --- */}
      <div className="hidden md:block relative mt-16">
        {/* Background Grid Lines & Headers */}
        <div className="absolute inset-0 grid grid-cols-6 -z-10 border-r-2 border-dashed border-base-content">
          {weeks.map((week, index) => (
            <div
              key={index}
              className="border-l-2 border-dashed border-base-content relative"
            >
              {/* Week Header */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 font-bold text-base-content text-lg whitespace-nowrap">
                {week}
              </span>
            </div>
          ))}
        </div>

        {/* Timeline Cards Container */}
        {/* We use a grid that matches the background to align items */}
        <div className="grid grid-cols-6 gap-y-8 pt-4">
          {phases.map((phase, index) => (
            /* 
               We wrap each card in a full-width row div that maintains the grid context.
               This allows us to place the card on specific columns using `gridClass`.
            */
            <div key={index} className={`contents`}>
              {/* 
                  The card itself. 
                  'contents' above makes this div act as if it's direct child of the grid 
               */}
              <div
                className={`${phase.gridClass} flex flex-col justify-center`}
              >
                <div
                  className={`${phase.bg} ${phase.widthClass} p-5 rounded-xl text-white text-center shadow-md hover:shadow-xl transition-shadow duration-300 relative`}
                >
                  <h3 className="text-2xl font-bold mb-1">{phase.title}</h3>
                  <p className="text-xs font-medium text-white/90">
                    {phase.details}
                  </p>
                </div>
              </div>

              {/* Spacer rows to push the next item down visually to create the "steps" */}
              <div className="col-span-6 h-4"></div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default DesignTimeline;
