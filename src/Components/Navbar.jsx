import { Link, NavLink } from "react-router";
import logo from "../assets/favicon.png";
import MyLink from "./MyLink";

const Navbar = () => {
  return (
    <div className="navbar  shadow-md px-4 md:px-8">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-neutral font-medium"
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

        <button className="font-bold text-lg flex items-center gap-2">
          <img className="w-10" src={logo} alt="WarmPaws Logo" />
          <p className="text-primary font-extrabold text-2xl font-primary">
            WarmPaws
          </p>
        </button>
      </div>

      <div className="navbar-end flex items-center space-x-2">
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

        <Link
          to="/login"
          className="btn  bg-primary text-white hover:bg-accent"
        >
          Login
        </Link>
        {/* <button className="btn btn-sm bg-secondary text-neutral hover:bg-primary">
          Register
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
