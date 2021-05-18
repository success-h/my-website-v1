/** @format */

import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import "./side-bar.scss";

const Icon = styled.div`
  position: absolute;
  z-index: 2;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const SideBarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  color: #000d1a;
`;
const SideBarWrapper = styled.div``;

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <ul className="nav-menu">
          <li>
            <Link className="link" to="/works">
              Works
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;
