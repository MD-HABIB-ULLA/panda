import { FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const listData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Product",
      path: "/products",
    },
    {
      name: "About Us",
      path: "/aboutUs",
    },
    {
      name: "Contact Us",
      path: "/contactUs",
    },
    {
      name: "Log in",
      path: "/logIn",
    },
  ];
  const list = (
    <>
      {listData.map((listItem) => (
        <li key={listItem.path}>
          <NavLink
            to={listItem.path}
            className={({ isActive }) =>
              `px-4 py-2 mt-2 text-sm font-bold rounded-lgb  lg:mt-0 lg:ml-4 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-colors duration-500 ${
                isActive
                  ? "bg-[#FF2279] text-white"
                  : "bg-transparent text-black"
              }`
            }
          >
            {listItem.name}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 max-w-7xl m-auto justify-between gap-3 lg:px-0 px-3 duration-500">
        <div className="justify-start items-center flex-1 lg:space-x-4 flex flex-wrap lg:flex-nowrap lg:space-x-4">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  bg-white/10 lg:backdrop-blur-none backdrop-blur-lg lg:border-none lg:shadow-none border border-white/20  rounded-xl shadow-lg bg-gray-300 z-[1] mt-3 w-52 p-2 "
            >
              {list}
            </ul>
          </div>
          <Link to={"/"} className=" lg:px-3 flex gap-1 mr-4 text-xl ">
            <img src="https://i.ibb.co/f9DTcfx/Group-33188.png"  className="" alt="" />
            <div className="lg:text-2xl text-base font-bold uppercase">Panda</div>
          </Link>
          <div className="lg:w-full    flex-1 ">
            <label className="input  input-bordered flex items-center   rounded-full h-10">
              <input type="text" className="grow flex-1 w-full lg:w-auto" placeholder="Search" />
              <IoIosSearch/>
            </label>
          </div>
        </div>

        <div className="justify-end hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{list}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
