import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import About from "../pages/About/About";
import Service from "../pages/Service/Service";
import Project from "../pages/Project/Project";
import CaseStudy from "../pages/CaseStudy/CaseStudy";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import ScheduleLayout from "../Layouts/DashboardLayout/ScheduleLayout";
import Schedule from "../pages/Schedule/Schedule";
import Availability from "../pages/Availability/Availability";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/service",
        Component: Service,
      },
      {
        path: "/project",
        Component: Project,
      },
      {
        path: "/case-study",
        Component: CaseStudy,
      },
      {
        path: "/contact-us",
        Component: ContactUs,
      },
    ],
  },
  {
    path: "/schedule",
    Component: ScheduleLayout,
    children: [
      {
        index: true,
        Component: Schedule,
      },
      {
        path: "availability",
        Component: Availability,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);
