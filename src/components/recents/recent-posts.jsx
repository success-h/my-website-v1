/** @format */
import Button from "../custom-button/custom-button";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./recent-posts.scss";

const RecentPosts = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 150 });
  }, []);
  return (
    <section className="sec-3">
      <div className="container" data-aos="zoom-in-right">
        <div className="recent-cont">
          <h2>Recent Posts</h2>
          <Button className="button">See all</Button>
        </div>

        <div className="grid-container-layout">
          <div
            className="post-container"
            data-aos="zoom-in-up"
            data-aos-duration="1000">
            <div className="post-image">
              <img src="" alt="" />
            </div>

            <div className="post-text">
              <h1>How to Setup ssh-keygen in Github</h1>

              <div className="profile">
                <div className="profile-image"></div>
                <div className="profile-text">
                  <h3>Success Hycenth</h3>
                </div>
              </div>
            </div>
          </div>
          <div
            className="post-container"
            data-aos="zoom-in-up"
            data-aos-duration="1000">
            <div className="post-image">
              <img src="" alt="" />
            </div>

            <div className="post-text">
              <h1>How to Setup ssh-keygen in Github</h1>

              <div className="profile">
                <div className="profile-image"></div>
                <div className="profile-text">
                  <h3>Success Hycenth</h3>
                </div>
              </div>
            </div>
          </div>

          <div
            className="post-container"
            data-aos="zoom-in-up"
            data-aos-duration="1000">
            <div className="post-image">
              <img src="" alt="" />
            </div>

            <div className="post-text">
              <h1>How to Setup ssh-keygen in Github</h1>

              <div className="profile">
                <div className="profile-image"></div>
                <div className="profile-text">
                  <h3>Success Hycenth</h3>
                </div>
              </div>
            </div>
          </div>

          <div
            className="post-container"
            data-aos="zoom-in-up"
            data-aos-duration="1000">
            <div className="post-image">
              <img src="" alt="" />
            </div>

            <div className="post-text">
              <h1>How to Setup ssh-keygen in Github</h1>

              <div className="profile">
                <div className="profile-image"></div>
                <div className="profile-text">
                  <h3>Success Hycenth</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
