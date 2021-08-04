/** @format */

import CustomButton from "../custom-button/custom-button";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./works.scss";

const Works = ({ name, text, imageUrl, site, source }) => {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 150 });
  }, []);

  return (
    <body id="container" data-aos="fade-up">
      <div className="image">
        <img src={imageUrl} />
        <h1>{name}</h1>
      </div>
      <div className="text">
        <div id="text-container">
          <h3>{name.toUpperCase()}</h3>
          <p>{text}</p>
        </div>
        <div className="buttons">
          <CustomButton primary="true" className="button">
            <a href={site}>View Site</a>
          </CustomButton>
          <CustomButton id="button">
            <a href={source}>Source</a>
          </CustomButton>
        </div>
      </div>
    </body>
  );
};

export default Works;
