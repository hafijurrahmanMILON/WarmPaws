import { Link, NavLink } from "react-router";
import logo from "../assets/favicon.png";
import MyLink from "./MyLink";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import userIcon from "../assets/user.png";
import toast from "react-hot-toast";

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
    <div className="navbar px-2 md:px-42">
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
            <li>
              <MyLink to="profile">My Profile</MyLink>
            </li>
          </ul>
        </div>

        <div className="font-bold text-lg flex items-center md:gap-2">
          <img className="w-8 md:w-10" src={logo} alt="WarmPaws Logo" />
          <p className="text-primary font-extrabold text-md  md:text-2xl font-primary">
            WarmPaws
          </p>
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
            <MyLink to="profile">My Profile</MyLink>
          </li>
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
              className="btn rounded-full font-semibold text-md md:text-xl  py-2 md:p-5 bg-primary text-white hover:bg-gradient-to-br from-amber-400 to-orange-500"
            >
              Log out
            </button>
          </div>
        ) : (
          <div>
            <Link
              to="/login"
              className="btn rounded-full font-semibold text-md md:text-xl  py-2 md:p-5 bg-primary text-white hover:bg-gradient-to-br from-amber-400 to-orange-500"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
