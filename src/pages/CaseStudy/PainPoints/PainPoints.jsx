import plainPointImage from "../../../assets/plainPointImage.jpg";
import Container from "../../../component/Container/Container";
import SectionHeading from "../shared/SectionHeading";
const PainPoints = () => {
  const points = [
    {
      id: 1,
      title: "Pain Point 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pharetra mauris pulvinar convallis vestibulum tortor, tincidunt sit pharetra. Sagittis volutpat morbi fames.",
    },
    {
      id: 2,
      title: "Pain Point 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pharetra mauris pulvinar convallis vestibulum tortor, tincidunt sit pharetra. Sagittis volutpat morbi fames.",
    },
    {
      id: 3,
      title: "Pain Point 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pharetra mauris pulvinar convallis vestibulum tortor, tincidunt sit pharetra. Sagittis volutpat morbi fames.",
    },
  ];

  return (
    <Container>
      {/* Header */}
      <div className="mb-12">
        <SectionHeading title="Pain Points" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT COLUMN: Your Image */}
        <div className="relative ">
          {/* 
            I added 'object-cover' and rounded corners to make it look polished. 
            Remove 'shadow-lg' if you want it flat.
          */}
          <img
            src={plainPointImage}
            alt="User holding phone showing app interface"
            className="w-full h-full rounded-lg shadow-xl object-cover"
          />
        </div>

        {/* RIGHT COLUMN: The List */}
        <div className="flex flex-col space-y-10">
          {points.map((point) => (
            <div key={point.id} className="flex flex-col">
              {/* Title Row with Number */}
              <div className="flex items-baseline mb-3">
                <span className="text-3xl font-bold text-blue-600 mr-3">
                  {point.id}.
                </span>
                <h3 className="text-3xl font-bold text-base-content">
                  {point.title}
                </h3>
              </div>

              {/* Description */}
              {/* 'pl-0' or 'pl-10' depending if you want text indented under the title or flush left */}
              <p className="text-base-content leading-relaxed text-lg md:pl-10">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PainPoints;
