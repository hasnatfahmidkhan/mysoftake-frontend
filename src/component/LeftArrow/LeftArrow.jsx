import { ChevronLeft } from "lucide-react";
const LeftArrow = ({ className, onClick, ...props }) => {
  return (
    <button
      className={`custom-prev-button w-14 h-14 overflow-hidden flex items-center justify-center cursor-pointer z-10 ${
        className || ""
      }`}
      onClick={onClick}
      {...props}
    >
      <ChevronLeft />
    </button>
  );
};

export default LeftArrow;
