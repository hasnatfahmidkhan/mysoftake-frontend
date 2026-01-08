import TeamProfileCard from "./TeamProfileCard";

// Mock Data
const teamMembers = [
  {
    id: 1,
    name: "Lucas Rossi",
    title: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    title: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 4,
    name: "Amara Okeke",
    title: "Marketing Head",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 5,
    name: "David Miller",
    title: "Content Strategist",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 6,
    name: "Elena Gomez",
    title: "Art Director",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300",
  },
];

const TeamSlider = () => {
  return (
    <section className="py-20 px-4 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl text-primary dark:text-white mb-2">
            Meet with our
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white">
            Amazing Team Members
          </h1>
        </div>

        {/* Slider */}
        <div className="team-swiper pb-12 pt-4 px-4 grid grid-cols-5 gap-5">
          {teamMembers.map((member) => (
            <TeamProfileCard
              name={member.name}
              title={member.title}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSlider;
