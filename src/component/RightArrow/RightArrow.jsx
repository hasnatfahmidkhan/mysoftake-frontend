import { ChevronRight } from "lucide-react";

const RightArrow = ({ className, onClick, ...props }) => {
  return (
    <button
      className={`custom-next-button w-14 h-14 flex items-center justify-center cursor-pointer z-10 ${
        className || ""
      }`}
      onClick={onClick}
      {...props}
    >
      <ChevronRight />
    </button>
  );
};

export default RightArrow;
