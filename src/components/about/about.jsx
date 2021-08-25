/** @format */
import CustomButton from "../custom-button/custom-button";
import "./about.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <div className="content">
        <div className="text">
          <h1>Hello there, I'm Success Hycenth.</h1>
          <p>
            I’m a Front End Web Developer with 2years Learning experience, UI/UX
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
              <div>Javascript</div>
              <b>Web Technologies:</b> <br />
              <div>React.js</div>
              <div> HTML & CSS</div>
              <b>Design Tools:</b>
              <div>Figma</div>
              <div>Adobe Photoshop</div>
              <div>Corel Draw</div>
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
