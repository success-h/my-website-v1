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
            I’m a Front End Web Developer with 3years Learning experience, UI/UX
            Designer, and a Social Media lover. <br /> <br /> I have worked on
            many personal projects independently to build up my skils, I enjoy
            being challanged.
            <br /> <br />
            <h2>From Nobody to Becoming a Web Developer</h2>
            <p>
              I finished High School 2018, with my previous knowledge of
              computer I got a job in a printing firm at <b>Kay Digitals</b>, I
              helped clients to better illustrate a picture of their ideas with
              softwares like Adobe PhotoShop, Corel Draw and Adobe Illustrator.
              <br /> Kay Digitals is a printing firm that is mostly focused on
              dsigns and digital image printings DI, and other forms of
              printing, I worked for months then I resigned to start my carrier
              as a self taught software developer
            </p>
            <br />
            <h2>Technoogy Stack</h2>
            <p>
              <b>Programming Languages:</b> <br />
              <li>Javascript</li>
              <b>Web Technologies:</b> <br />
              <li>React.js</li>
              <li> HTML & CSS</li>
              <b>Design Tools:</b>
              <li>Figma</li>
              <li>Adobe Photoshop</li>
              <li>Corel Draw</li>
            </p>
            <br />
          </p>
          <CustomButton className="button" primary="true">
            <Link to="/contact"> Hire Me</Link>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default About;
