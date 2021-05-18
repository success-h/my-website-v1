/** @format */
import CustomButton from "../custom-button/custom-button";
import "./about.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const profileImage = require("../../image/profile.jpg");

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1700, offset: 300 });
  }, []);
  return (
    <div className="about-container">
      <div className="content">
        <img
          className="image"
          src={profileImage.default}
          data-aos="slide-left"
        />

        <div className="text" data-aos="fade-up">
          <h1>Hello there, I'm Success Hycenth.</h1>
          <p>
            I’m a Web Developer with 2years of experience, UI/UX Designer, and a
            Social Media lover. <br /> <br /> I have worked with a number of
            client, both independently and through agencies, sometimes am
            fortunate to win some awards & recorgnition Currently improving
            customer & user experiences as a Lead developer in a Real Estate
            Project.
            <br /> <br /> I spend most of my free time improving my coding
            skills, I also hit the Jym, and do some other fun activities when I
            don't feel like coding. <br /> <br /> Occasionally, I enjoy building
            solutions for both organizations and open-source.
          </p>
          <CustomButton className="button" primary="true">
            {" "}
            <Link to="/contact"> Hire Me</Link>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default About;
