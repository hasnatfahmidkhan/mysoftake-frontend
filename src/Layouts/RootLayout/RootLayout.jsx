import { Outlet } from "react-router";
import Navbar from "../../pages/Home/shared/Navbar/Navbar";
import Footer from "../../pages/Home/shared/Footer/Footer";
import ScrollToTop from "../../component/ScrollToTop/ScrollToTop";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 ">
        <Outlet />
        <ScrollToTop />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
