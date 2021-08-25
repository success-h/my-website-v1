/** @format */

import CustomButton from "../custom-button/custom-button";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./works.scss";

const Works = ({ name, text, imageUrl, site, source }) => {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 400 });
  }, []);

  return (
    <body id="container" data-aos="fade-up">
      <div className="image">
        <img src={imageUrl} alt="image" />
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
      <div id="buttons">
        <button primary="true" className="button">
          <a href={site}>View Site</a>
        </button>
        <button id="button">
          <a href={source}>Source</a>
        </button>
      </div>
    </body>
  );
};

export default Works;
