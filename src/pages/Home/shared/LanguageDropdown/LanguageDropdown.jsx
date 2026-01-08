import { useState } from "react";
import "flag-icons/css/flag-icons.min.css";

// List of country flags with their respective codes and labels
const icons = [
  { code: "fi fi-us", label: "United States" },
  { code: "fi fi-jp", label: "Japan" },
  { code: "fi fi-vn", label: "Vietnam" },
  { code: "fi fi-ae", label: "UAE" },
  { code: "fi fi-bd", label: "Bangladesh" },
  { code: "fi fi-br", label: "Brazil" },
  { code: "fi fi-gb", label: "United Kingdom" },
  { code: "fi fi-pl", label: "Poland" },
  { code: "fi fi-sg", label: "Singapore" },
  { code: "fi fi-de", label: "Germany" },
  { code: "fi fi-es", label: "Spain" },
];

const LanguageDropdown = () => {
  const [selected, setSelected] = useState(icons[0]); // 🇺🇸 default

  // Handle selection of a flag and close the dropdown
  const handleSelect = (icon) => {
    setSelected(icon);
    document.activeElement.blur();
  };
  return (
    <div className="dropdown dropdown-center w-full max-w-xs z-100">
      {/* Selected item */}
      <label
        tabIndex={0}
        className="select select-bordered w-full rounded-sm cursor-pointer outline-none focus:border-gray-300"
      >
        <span className={`${selected.code} text-xl`} />
      </label>

      {/* Dropdown */}
      <ul
        tabIndex={0}
        className="dropdown-content z-1 menu p-2 gap-1 border border-[#00000050] bg-base-100 rounded-box w-full mt-2"
      >
        {/* Dropdown items */}
        {icons.map((icon, i) => (
          <li key={i} className="space-y-3">
            <button
              type="button"
              onClick={() => handleSelect(icon)}
              className="flex justify-center"
            >
              <span
                className={`${icon.code} text-2xl rounded-sm border border-gray-200`}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageDropdown;
