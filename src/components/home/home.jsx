/** @format */
import { IoMdArrowRoundForward } from "react-icons/io";
import CustomButton from "../custom-button/custom-button";
import { Link } from "react-router-dom";

import "./home.scss";

const Main = () => {
  return (
    <div className="main">
      <section className="section-1">
        <section className="glass-wrapper">
          <div className="me">
            <h1>
              <span>Hi, I'm Success Hycenth.</span>I'm a Web Developer and UI/UX
              designer.
            </h1>

            <CustomButton primary="true">
              <Link to="/about">Explore</Link>
              <IoMdArrowRoundForward className="arrow" />
            </CustomButton>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Main;
