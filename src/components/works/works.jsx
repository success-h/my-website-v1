import CustomButton from "../custom-button/custom-button";
import { useEffect } from "react";
import "./works.scss";

const Works = ({ name, text, imageUrl, site, source, alt }) => {
  return (
    <body id="container">
      <div className="image">
        <img src={imageUrl} alt={alt} />
        <h3>{name}</h3>
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
