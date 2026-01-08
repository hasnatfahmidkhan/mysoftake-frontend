import React from "react";
import SectionHeading from "../shared/SectionHeading";
import Container from "../../../component/Container/Container";

const QuantitativeResearch = () => {
  const screeners = [
    "Sed et lorem nulla ipsum egestas dolor, adipiscing. Risus mollis dictum dolor, quam donec id",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu condimentum consectetur eu fusce amet posuere sapien neque. Cras neque, condimentum metus integer velit condimentum luctus. Sociis nisi ornare arcu.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sollicitudin eleifend lorem lacus dictumst sed sed.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pharetra, gravida sollicitudin eu, bibendum aliquet purus massa. Nulla facilisi vel eget turpis nibh non, aliquet. Eget ut velit arcu id. Cras justo feugiat malesuada eget erat in potenti elit id. Platea ornare metus porta sit non sed nisi dolor enim. In elit non ac cras.",
  ];

  const observations = [
    {
      percentage: "80%",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    },
    {
      percentage: "50%",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    },
    {
      percentage: "80%",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    },
    {
      percentage: "50%",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    },
    {
      percentage: "80%",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    },
    {
      percentage: "50%",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    },
    {
      percentage: "80%",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    },
    {
      percentage: "50%",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    },
  ];

  return (
    <Container>
      {/* --- Main Header --- */}
      <div className="mb-12">
        <SectionHeading title="Quantitative Research" />
        <p className="text-base-content text-lg leading-relaxed max-w-5xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
          vitae dui sagittis, erat. Nunc donec enim turpis sapien mattis diam
          ultrices in suspendisse. Blandit dolor urna felis sit. Tellus ornare
          condimentum duis nisl egestas feugiat nibh. Dignissim semper auctor
          sed odio tincidunt.
        </p>
      </div>

      {/* --- Screeners Section --- */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-base-content mb-6">Screeners</h3>
        <ul className="space-y-4">
          {screeners.map((item, index) => (
            <li key={index} className="flex items-start">
              {/* Custom Blue Dash Bullet */}
              <span className="text-blue-600 font-bold text-xl mr-3 leading-none mt-1">
                -
              </span>
              <p className="text-base-content text-lg leading-relaxed">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* --- Observations Section --- */}
      <div>
        <h3 className="text-3xl font-bold text-base-content mb-10">
          Observations
        </h3>

        {/* Grid for Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {observations.map((obs, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-4xl font-bold text-blue-600 dark:text-[#A8C9FF] mb-2">
                {obs.percentage}
              </span>
              <p className="text-base-content text-lg">{obs.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default QuantitativeResearch;
