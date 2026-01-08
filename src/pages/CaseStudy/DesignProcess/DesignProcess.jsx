import Container from "../../../component/Container/Container";
import SectionHeading from "../shared/SectionHeading";

const DesignProcess = () => {
  // Data structure to make the grid easy to manage and update
  const processSteps = [
    {
      title: "Understand",
      color: "bg-yellow-500",
      items: ["User Research", "User Interview", "Competitve Analysis"],
      // Simple SVG placeholder icons - replace with your actual icons
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Define",
      color: "bg-red-800",
      items: ["User Personas", "Empathy Map", "User Journey"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      ),
    },
    {
      title: "Ideate",
      color: "bg-blue-600",
      items: ["User Flow", "Information Architecture"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Design",
      color: "bg-pink-600",
      items: ["Wireframe", "Hi-Fi Designs", "Prototype"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: "Test",
      color: "bg-green-600",
      items: ["Feedbacks", "Conclusion", "Future Concept"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <Container>
      {/* --- Header Section --- */}
      <div className="mb-16">
        <SectionHeading title="Design Process" />
        <p className="text-base-content text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
          vitae dui sagittis, erat. Nunc donec enim turpis sapien mattis diam
          ultrices in suspendisse. Blandit dolor urna felis sit. Tellus ornare
          condimentum duis nisl egestas feugiat nibh. Dignissim semper auctor
          sed odio tincidunt.
          <br className="hidden md:block" />
          Pretium amet lectus molestie vulputate feugiat non erat nunc, et.
          Lobortis diam duis feugiat fringilla a, amet nulla eget suscipit.
          Vitae pulvinar pellentesque aliquam risus. Habitasse duis rutrum
          viverra aenean. Blandit.
        </p>
      </div>

      {/* --- Grid Layout --- */}
      {/* We use grid-cols-3 so the 4th and 5th items naturally fall into the 2nd row, aligned left */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">
        {processSteps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Icon Box */}
            <div
              className={`w-24 h-24 rounded-2xl shadow-sm flex items-center justify-center mb-6 ${step.color}`}
            >
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-base-content mb-4">
              {step.title}
            </h3>

            {/* List Items */}
            <ul className="flex flex-col items-center space-y-1">
              {step.items.map((item, i) => (
                <li
                  key={i}
                  className="text-base-content font-medium text-center"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DesignProcess;
