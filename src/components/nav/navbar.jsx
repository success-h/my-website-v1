/** @format */
import { Link, NavLink } from "react-router-dom";
import Bars from "../../image/bars.png";
import styled from "styled-components";
import Sidebar from "../side-bar/side-bar";
import { BsMoon } from "react-icons/bs";
import CustomButton from "../custom-button/custom-button";
import "./navbar.scss";

const MenuBars = styled.p`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 30px;
    width: 30px;
    right: 0;
    top: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-50%, 45%);
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
`;
const Navbar = ({ toggle, theme }) => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <CustomButton className="toggle-theme" onClick={theme} primary="true">
          <BsMoon />
        </CustomButton>
        <Link className="nav-logo" to="/">
          SUCC=>SS
        </Link>
      </div>

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

      <MenuBars className="menu-bar" onClick={toggle} />
    </div>
  );
};

export default Navbar;
