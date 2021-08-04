/** @format */
import { useState } from "react";
import Works from "../../components/works/works";
import { WORKS_DATA } from "./works-data";
import "./works.scss";

const WorkPage = () => {
  const [workData] = useState(WORKS_DATA);
  return (
    <div className="works">
      <div className="space"></div>
      {workData.map(({ name, text, id, imageUrl, site, source }) => (
        <Works
          key={id}
          name={name}
          text={text}
          imageUrl={imageUrl}
          site={site}
          source={source}
        />
      ))}
    </div>
  );
};

export default WorkPage;
