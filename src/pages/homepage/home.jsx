/** @format */
import "./home.css";
import { SliderDataOne } from "../../data/image-data";

import Main from "../../components/home/home";

function HomePage() {
  return (
    <div className="home">
      <Main imageData={SliderDataOne} />
    </div>
  );
}

export default HomePage;
