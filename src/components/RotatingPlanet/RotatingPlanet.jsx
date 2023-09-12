import React from "react";
import { Link } from "react-router-dom";

const RotatingPlanet = ({ planet, ref1 }) => {
  return (
    <Link to={`/${planet}`}>
      <div ref={ref1} className={`${planet}`}>
        <div className={`${planet}Img`}></div>
      </div>
    </Link>
  );
};

export default RotatingPlanet;
