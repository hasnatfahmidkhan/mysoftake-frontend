const PrimaryBtn = ({ buttonText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white w-fit text-primary px-16 py-4 rounded-full text-lg font-semibold hover:bg-[#0077B6] hover:text-white hover:shadow-2xl transition-all duration-200 cursor-pointer shadow-lg"
    >
      {buttonText}
    </button>
  );
};

export default PrimaryBtn;
