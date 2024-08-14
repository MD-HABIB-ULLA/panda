import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import "./layout.css";

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
    </div>
  );
};

export default Layout;
