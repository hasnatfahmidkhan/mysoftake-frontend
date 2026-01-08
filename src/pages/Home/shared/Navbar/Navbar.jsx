import Logo from "../../../../component/Logo/Logo";
import { NavLink, useNavigate } from "react-router";
import SecondaryBtn from "../../../../component/SecondaryBtn/SecondaryBtn";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";

const Navbar = () => {
  const navigate = useNavigate();
  const publicLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Project", path: "/project" },
    { name: "Case Study", path: "/case-study" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  // Helper to close the dropdown when a link is clicked
  const closeMenu = () => {
    const elem = document.activeElement;
    if (elem) {
      elem.blur();
    }
  };

  return (
    <nav className="bg-primary shadow-sm py-2 relative z-50">
      <div className="navbar max-w-7xl mx-auto">
        {/* --- LEFT SIDE: LOGO --- */}
        <div className="navbar-start">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>

        {/* --- CENTER: DESKTOP MENU --- */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center px-1 gap-6">
            {publicLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-bold transition-all duration-300 text-white hover:border-b-2 hover:border-dotted hover:border-current ${
                      isActive ? "border-b-2 border-dotted border-current" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            {/* Language Dropdown */}
            <li>
              <LanguageDropdown />
            </li>
          </ul>
        </div>

        {/* --- RIGHT SIDE: MOBILE HAMBURGER MENU --- */}
        <div className="navbar-end">
          <div className="hidden lg:block">
            <SecondaryBtn
              onClick={() => navigate("/schedule")}
              buttonText={"Book Now"}
            />
          </div>
          <div className="dropdown dropdown-end lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Mobile Dropdown Content */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-base-content rounded-box z-50 mt-3 w-56 md:w-60 p-4 shadow-xl gap-2"
            >
              {/* Links */}
              {publicLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `font-bold text-base py-3 transition-all duration-300 hover:text-primary ${
                        isActive
                          ? "bg-blue-50 text-primary border-l-4 border-primary"
                          : ""
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}

              {/* Mobile "Book Now" Button */}
              <li className="mt-2">
                <SecondaryBtn buttonText={"Book Now"} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
