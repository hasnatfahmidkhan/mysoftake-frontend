const TeamProfileCard = ({ name, title, image }) => {
  return (
    <div className="relative flex flex-col items-center shrink-0 mx-auto group bg-white  rounded-xl overflow-hidden shadow-xl">
      {/* Image Container */}
      <div className="w-full h-full overflow-hidden z-0 relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content Box - Negatively margined to overlap upward */}
      <div className="z-10 bg-white p-6  shadow-lg w-full -mt-12 relative text-left">
        <h3 className="text-xl font-bold text-slate-800">{name}</h3>
        <p className="text-slate-500 text-sm mt-1 uppercase tracking-wide">
          {title}
        </p>
      </div>
    </div>
  );
};

export default TeamProfileCard;
