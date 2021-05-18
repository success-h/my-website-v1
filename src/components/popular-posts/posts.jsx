/** @format */

import "./posts.scss";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Posts = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 150 });
  }, []);
  return (
    <div className="section">
      <div className="glass-blur2"></div>
      <div className="glass" data-aos="fade-up">
        <p className="text">Popular Posts</p>
        <div className="grid-container">
          <div className="card" id="card-image"></div>
          <div className="card" id="card-image2"></div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
