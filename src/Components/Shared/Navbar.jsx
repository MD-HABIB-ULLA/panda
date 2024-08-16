import { FaBars } from "react-icons/fa6";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { AuthContext } from "../../Provider/AuthProvider";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchText, setSearchText] = useState("");
  const handleSubmitBtn = (e) => {
    e.preventDefault();

    // If you're not on the product page, redirect to the product page
    if (location.pathname !== "/products") {
      navigate(`/products?search=${searchText}`);
    } else {
      // If you're already on the product page, update the URL to include the search term
      navigate(`${location.pathname}?search=${searchText}`);
    }
  };
  // console.log(user);
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
              className="menu menu-sm dropdown-content  bg-white/10 lg:backdrop-blur-none backdrop-blur-lg lg:border-none lg:shadow-none border border-white/20  rounded-xl shadow-lg bg-gray-300 z-40 mt-3 w-52 p-2 "
            >
              {list}
              <li className=" py-2 mt-2 text-sm font-bold rounded-lgb  lg:mt-0 lg:ml-4 hover:text-gray-900  rounded-lg transition-colors duration-500  ">
                {user ? (
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className=" ">
                      Profile
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    >
                      <li className="hover:normal- hover:bg-none">
                        <div className="avatar mx-auto ">
                          <div className="ring-[#FF2279] ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                            <img src={user.photoURL} />
                          </div>
                        </div>
                      </li>
                      <li className="text-center">{user.displayName}</li>
                      <li
                        className="text-center text-error"
                        onClick={() => signOutUser()}
                      >
                        Log out{" "}
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link to={"/logIn"}>Log In</Link>
                )}
              </li>
            </ul>
          </div>
          <Link to={"/"} className=" lg:px-3 flex gap-1 mr-4 text-xl ">
            <img
              src="https://i.ibb.co/f9DTcfx/Group-33188.png"
              className=""
              alt=""
            />
            <div className="lg:text-2xl text-base font-bold uppercase">
              Panda
            </div>
          </Link>
          <form
            className="lg:w-full    flex-1 "
            onSubmit={handleSubmitBtn}
            action=""
          >
            <div className="lg:w-full   ">
              <label className="input  input-bordered flex items-center   rounded-full h-10">
                <input
                  type="text"
                  className="grow flex-1 w-full lg:w-auto"
                  placeholder="Search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />

                <button type="submit" className="">
                  <IoIosSearch className="cursor-pointer" />
                </button>
              </label>
            </div>{" "}
          </form>
        </div>

        <div className="justify-end hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 items-center">
            {list}
            <li className=" py-2 mt-2 text-sm font-bold rounded-lgb  lg:mt-0 lg:ml-4 hover:text-gray-900  rounded-lg transition-colors duration-500  ">
              {user ? (
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div tabIndex={0} role="button" className=" ">
                    Profile
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li className="hover:normal- hover:bg-none">
                      <div className="avatar mx-auto ">
                        <div className="ring-[#FF2279] ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                          <img src={user.photoURL} />
                        </div>
                      </div>
                    </li>
                    <li className="text-center">{user.displayName}</li>
                    <li
                      className="text-center text-error"
                      onClick={() => signOutUser()}
                    >
                      Log out{" "}
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to={"/logIn"}>Log In</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
