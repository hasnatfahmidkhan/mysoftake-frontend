const SecondaryBtn = ({ buttonText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white w-fit text-primary px-8 xl:px-16 py-3 xl:py-4 rounded-full text-lg font-semibold border-2 border-[#0077B6] hover:bg-[#0077B6] hover:text-white hover:shadow-2xl transition-all duration-200 cursor-pointer shadow-lg"
    >
      {buttonText}
    </button>
  );
};

export default SecondaryBtn;
