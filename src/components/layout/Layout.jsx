import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import { Navbar } from "../Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
