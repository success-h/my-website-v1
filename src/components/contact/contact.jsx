/** @format */
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";
import "./contact.scss";
import CustomButton from "../custom-button/custom-button";

const Contact = () => {
  return (
    <div className="glass">
      <div className="wrapper">
        <div className="wrap">
          <div className="success">
            <h2>Success Hycenth</h2>
          </div>
          <a href="mailto: successhycenth8@gmail.com?subject = Feedback&body = Message">
            <CustomButton primary="true" className="btn">
              Email Me
            </CustomButton>
          </a>

          <p>you can also find me on</p>
          <div className="icons">
            <FaFacebook className="icon">
              <a href=""></a>
            </FaFacebook>
            <FaGithub className="icon">
              <a href=""></a>
            </FaGithub>
            <FaLinkedin className="icon">
              <a href=""></a>
            </FaLinkedin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
