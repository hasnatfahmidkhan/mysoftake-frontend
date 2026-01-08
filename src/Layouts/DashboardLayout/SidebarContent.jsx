import { NavLink } from "react-router";

const menuItems = [
  {
    name: "Schedule",
    path: "/schedule",
    end: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
        />
      </svg>
    ),
  },
  {
    name: "Availability",
    path: "/schedule/availability",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
];
const SidebarContent = ({ setIsSidebarOpen }) => (
  <div className="flex flex-col gap-2">
    {menuItems.map((item, index) => (
      <NavLink
        key={index}
        to={item.path}
        end={item.end}
        onClick={() => setIsSidebarOpen(false)} // Close sidebar on click (mobile)
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
            isActive
              ? "bg-blue-50 text-blue-600"
              : "text-gray-700 dark:text-gray-400 hover:text-blue-600 hover:bg-gray-50"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <span className={isActive ? "text-blue-600" : "text-gray-500"}>
              {item.icon}
            </span>
            <span>{item.name}</span>
          </>
        )}
      </NavLink>
    ))}
  </div>
);

export default SidebarContent;
