/** @format */
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";

import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="content-wrap">
        <ul className="icons">
          <li>
            <FaFacebook className='icon' />
          </li>
          <li>
            <FaGithub className='icon' />
          </li>
          <li>
            <FaLinkedin className='icon'/>
          </li>
        </ul>
        <h1 className="my-name">SUCCESS HYCENTH</h1>
        <p>&copy; 2021 Success Hycenth</p>
      </div>
    </div>
  );
};

export default Footer;
