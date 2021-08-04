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
            <a href="https://web.facebook.com/sucesshycenth">
              <FaFacebook className="icon" />
            </a>
            <a href="https://github.com/success-h">
              <FaGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/hycenth-success-a57556204/">
              <FaLinkedin className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
