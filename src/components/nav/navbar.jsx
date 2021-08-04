/** @format */
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../side-bar/side-bar";
import { BsMoon } from "react-icons/bs";
import "./navbar.css";
import mylogo from "../../image/mylogo.svg";


const StyledLink = styled(NavLink)`
  text-decoration: none;
`;
const Navbar = ({ toggle, theme }) => {
  return (
    <div className="navbar">
      <Link className="nav-logo" to="/">
        <img className="logo" src={mylogo} alt="" />
      </Link>

      <div className="links-container">
        <StyledLink className="link" to="/about">
          About
        </StyledLink>

        <StyledLink className="link" to="/works">
          Works
        </StyledLink>
        <StyledLink className="link" to="/contact">
          Contact
        </StyledLink>
        <Sidebar />
      </div>

      <div className="menu-bar">
        <BsMoon id="toggle-theme" onClick={theme} primary="true" />
        <div className="toggle-theme" onClick={toggle}>x</div>
      </div>
    </div>
  );
};

export default Navbar;
