import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import "./layout.css";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Shared/Footer";

const Layout = () => {
  return (
    <div
      style={{
        scrollBehavior: "smooth",
      }}
      className="custom-scrollbar"
    >
      <Navbar />
     
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
