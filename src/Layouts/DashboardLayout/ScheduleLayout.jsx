import { Outlet, NavLink } from "react-router";
import Navbar from "../../pages/Home/shared/Navbar/Navbar";
import Footer from "../../pages/Home/shared/Footer/Footer";
import SidebarContent from "./SidebarContent";
import ScrollToTop from "../../component/ScrollToTop/ScrollToTop";

const ScheduleLayout = () => {
  const mobileTabs = [
    {
      name: "Schedule",
      path: "/schedule",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
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
          className="w-6 h-6"
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

  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-black shadow-sm lg:shadow-none">
        <Navbar />
      </header>

      {/* 2. Dashboard Body */}
      <div className="flex flex-1 max-w-7xl mx-auto w-full">
        {/* --- DESKTOP SIDEBAR (Hidden on Mobile) --- */}
        <aside className="hidden lg:block w-64 border-r border-gray-100 dark:border-gray-800">
          <div className="sticky top-20 h-[calc(100vh-80px)] overflow-y-auto pt-10 pb-10 pl-6 pr-4">
            <SidebarContent />
          </div>
        </aside>

        {/* --- MAIN CONTENT --- */}
        {/* pb-20 added to prevent content from hiding behind the bottom tab bar on mobile */}
        <main className="flex-1 p-4 md:p-8 lg:p-10 bg-base-100 lg:bg-transparent pb-24 lg:pb-10">
          <Outlet />
          <ScrollToTop />
        </main>
      </div>

      {/* --- MOBILE BOTTOM TAB BAR (Visible only on Mobile) --- */}
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 lg:hidden flex justify-around items-center px-2 safe-area-pb">
        {mobileTabs.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-full h-full space-y-1 ${
                isActive
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`
            }
          >
            {/* Icon */}
            <span>{item.icon}</span>
            {/* Label */}
            <span className="text-[10px] font-medium">{item.name}</span>
          </NavLink>
        ))}
      </div>

      {/* Footer (Hidden on mobile if you want, or keep it - currently kept) */}
      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
};

export default ScheduleLayout;
