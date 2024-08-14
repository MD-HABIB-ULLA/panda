import { FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const listData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Product",
      path: "/product",
    },
    {
      name: "About Us",
      path: "/aboutUs",
    },
    {
      name: "Contact Us",
      path: "/contactUs",
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
        <div className="justify-start flex-1 lg:space-x-4 flex">
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
          <Link to={"/"} className=" px-3 flex gap-1  text-xl">
            <img src="https://i.ibb.co/f9DTcfx/Group-33188.png"  className="" alt="" />
            <div className="lg:text-2xl text-xl font-bold uppercase">Panda</div>
          </Link>
          <div className="lg:w-full  ml-3 flex-1 ">
            <label className="input  input-bordered flex items-center gap-2  rounded-full h-10">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
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
