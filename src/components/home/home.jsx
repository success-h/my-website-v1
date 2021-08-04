/** @format */
import { IoMdArrowRoundForward } from "react-icons/io";
import { useEffect } from "react";
import CustomButton from "../custom-button/custom-button";
import Aos from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

import "./home.scss";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 150 });
  }, []);
  return (
    <div className="main">
      <section className="section-1">
        <section className="glass-wrapper" data-aos="fade-up">
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
