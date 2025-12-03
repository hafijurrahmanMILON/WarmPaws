import { Link, NavLink } from "react-router";
import logo from "../assets/favicon.png";
import MyLink from "./MyLink";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import userIcon from "../assets/user.png";
import toast from "react-hot-toast";
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoPersonAddOutline,
} from "react-icons/io5";

const Navbar = () => {
  const { user, setUser, signOutFunc } = useContext(AuthContext);
  // console.log(user);

  const handleSignOut = () => {
    signOutFunc()
      .then(() => {
        toast.success("SignOut Successful");
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.message);
      });
  };
  return (
    <div className="navbar bg-white shadow-sm px-2 md:px-12 lg:px-42">
      <div className="navbar-start flex items-center gap-2">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 z-10 rounded-box w-48 text-neutral font-bold text-xl"
          >
            <li>
              <MyLink to="/">Home</MyLink>
            </li>
            <li>
              <MyLink to="/service">Services</MyLink>
            </li>
            {user && (
              <li>
                <MyLink to="profile">My Profile</MyLink>
              </li>
            )}
          </ul>
        </div>

        <div className="font-bold text-lg flex items-center md:gap-2">
          <img className="w-8 md:w-10" src={logo} alt="WarmPaws Logo" />
          <Link to="/" className="text-primary font-extrabold text-md  md:text-2xl font-primary">
            WarmPaws
          </Link>
        </div>
      </div>

      <div className="navbar-center">
        <ul className="hidden lg:flex menu menu-horizontal px-1 text-lg font-semibold">
          <li>
            <MyLink to="/">Home</MyLink>
          </li>
          <li>
            <MyLink to="/service">Services</MyLink>
          </li>
          <li>
            <MyLink to="/contact">Contact Us</MyLink>
          </li>
          {user && (
            <li>
              <MyLink to="profile">My Profile</MyLink>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end flex items-center space-x-2">
        {user ? (
          <div className="flex justify-center items-center gap-3">
            <div
              className="tooltip  tooltip-bottom"
              data-tip={user?.displayName || "Anonymous user"}
            >
              <img
                referrerPolicy="no-referrer"
                src={user?.photoURL || userIcon}
                onError={(e) => {
                  e.currentTarget.src = userIcon;
                }}
                className="h-12 w-12 object-cover  border-3 border-primary rounded-full"
                alt=""
              />
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 font-semibold text-sm md:text-lg py-2 px-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-xl shadow-lg  hover:from-amber-500 hover:to-orange-600"
            >
              <IoLogOutOutline />
              Log out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="flex items-center gap-2 font-semibold text-sm md:text-lg py-2 px-4 bg-white text-amber-600 border border-amber-200 rounded-xl shadow-lg  hover:bg-amber-50"
            >
              <IoLogInOutline />
              Login
            </Link>
            <Link
              to="/signup"
              className="flex items-center gap-2 font-semibold text-sm md:text-lg py-2 px-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-xl shadow-lg  hover:from-amber-500 hover:to-orange-600"
            >
              <IoPersonAddOutline />
              SignUp
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
{
  /* <div className="flex items-center">
  <Link
    to="/login"
    className="font-semibold text-sm md:text-lg py-2 px-2 md:px-4 bg-amber-400 text-white hover:bg-gradient-to-br from-amber-400 to-orange-500  rounded-l-xl"
  >
    Login
  </Link>
  <Link
    to="/signup"
    className="font-semibold text-sm md:text-lg py-2 px-2 md:px-3 bg-primary text-white hover:bg-gradient-to-br from-amber-400 to-orange-500  rounded-r-xl"
  >
    SignUp
  </Link>
</div>; */
}
