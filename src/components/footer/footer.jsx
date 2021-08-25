/** @format */
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="content-wrap">
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
        <h3 className="my-name">SUCCESS HYCENTH</h3>
        <p>&copy; 2021 Success Hycenth</p>
      </div>
    </div>
  );
};

export default Footer;
