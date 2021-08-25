/** @format */
import { Link } from "react-router-dom";
import Sidebar from "../side-bar/side-bar";
// import { BsMoon } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

import "./navbar.css";
import mylogo from "../../image/mylogo.svg";

const Navbar = ({ toggle, theme }) => {
  return (
    <div className="navbar">
      <Link className="nav-logo" to="/">
        <img className="logo" src={mylogo} alt="" />
      </Link>

      <div className="links-container">
        <Link className="link" to="/about">
          About
        </Link>

        <Link className="link" to="/works">
          Works
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
        <Sidebar />
      </div>

      <BiMenu className="toggle-theme" onClick={toggle} />
    </div>
  );
};

export default Navbar;
