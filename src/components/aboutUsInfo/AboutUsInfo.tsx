import React from "react";
import "./AboutUsInfo.css";

interface infoProps {
  title: string;
  desc: string;
}

const AboutUsInfo: React.FC<infoProps> = ({ title, desc }) => {
  return (
    <div className="about-us-info">
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
};

export default AboutUsInfo;
