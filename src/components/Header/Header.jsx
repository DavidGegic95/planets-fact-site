import React from "react";
import { Link } from "react-router-dom";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import "./header.css";
import { useState } from "react";

const Header = ({
  mercuryRef1,
  venusRef1,
  earthRef1,
  marsRef1,
  saturnRef1,
  jupiterRef1,
  uranusRef1,
  neptuneRef1,
  planetState,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeNeptune = () => {
    neptuneRef1?.current?.classList?.add("neptune-on-hover");
  };
  const changeBackNeptune = () => {
    neptuneRef1?.current?.classList?.remove("neptune-on-hover");
  };
  const changeMercury = () => {
    mercuryRef1?.current?.classList?.add("mercury-on-hover");
  };
  const changeBackMercury = () => {
    mercuryRef1?.current?.classList?.remove("mercury-on-hover");
  };
  const changeVenus = () => {
    venusRef1.current?.classList?.add("venus-on-hover");
  };
  const changeBackVenus = () => {
    venusRef1.current?.classList?.remove("venus-on-hover");
  };
  const changeEarth = () => {
    earthRef1?.current?.classList?.add("earth-on-hover");
  };
  const changeBackEarth = () => {
    earthRef1?.current?.classList?.remove("earth-on-hover");
  };
  const changeMars = () => {
    marsRef1?.current?.classList?.add("mars-on-hover");
  };
  const changeBackMars = () => {
    marsRef1?.current?.classList?.remove("mars-on-hover");
  };
  const changeJupiter = () => {
    jupiterRef1?.current?.classList?.add("jupiter-on-hover");
  };
  const changeBackJupiter = () => {
    jupiterRef1?.current?.classList?.remove("jupiter-on-hover");
  };
  const changeSaturn = () => {
    saturnRef1?.current?.classList?.add("saturn-on-hover");
  };
  const changeBackSaturn = () => {
    saturnRef1?.current?.classList?.remove("saturn-on-hover");
  };

  const changeUranus = () => {
    uranusRef1?.current?.classList?.add("uranus-on-hover");
  };
  const changeBackUranus = () => {
    uranusRef1?.current?.classList?.remove("uranus-on-hover");
  };
  return (
    <div className="header-wrapper">
      <header>
        <Link
          onClick={() => setIsOpen(false)}
          className="header-home-button"
          to="/"
        >
          THE PLANETS
        </Link>
        <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
        <nav className="none-mobile-nav">
          <div
            onMouseOver={changeMercury}
            onMouseLeave={changeBackMercury}
            className="mercury-header-div"
          >
            <div
              className={`mercury-line ${
                planetState === "mercury" ? "mercury-line-hover" : ""
              }`}
            ></div>

            <Link to="/mercury">MERCURY</Link>
          </div>
          <div
            onMouseOver={changeVenus}
            onMouseLeave={changeBackVenus}
            className="venus-header-div"
          >
            <div
              className={`venus-line ${
                planetState === "venus" ? "venus-line-hover" : ""
              }`}
            ></div>
            <Link to="/venus">VENUS</Link>
          </div>

          <div
            onMouseOver={changeEarth}
            onMouseLeave={changeBackEarth}
            className="earth-header-div"
          >
            <div
              className={`earth-line ${
                planetState === "earth" ? "earth-line-hover" : ""
              }`}
            ></div>
            <Link to="/earth">EARTH</Link>
          </div>
          <div
            onMouseOver={changeMars}
            onMouseLeave={changeBackMars}
            className="mars-header-div"
          >
            <div
              className={`mars-line ${
                planetState === "mars" ? "mars-line-hover" : ""
              }`}
            ></div>
            <Link to="/mars">MARS</Link>
          </div>
          <div
            onMouseOver={changeJupiter}
            onMouseLeave={changeBackJupiter}
            className="jupiter-header-div"
          >
            <div
              className={`jupiter-line ${
                planetState === "jupiter" ? "jupiter-line-hover" : ""
              }`}
            ></div>
            <Link to="/jupiter">JUPITER</Link>
          </div>
          <div
            onMouseOver={changeSaturn}
            onMouseLeave={changeBackSaturn}
            className="saturn-header-div"
          >
            <div
              className={`saturn-line ${
                planetState === "saturn" ? "saturn-line-hover" : ""
              }`}
            ></div>
            <Link to="/saturn">SATURN</Link>
          </div>
          <div
            onMouseOver={changeUranus}
            onMouseLeave={changeBackUranus}
            className="uranus-header-div"
          >
            <div
              className={`uranus-line ${
                planetState === "uranus" ? "uranus-line-hover" : ""
              }`}
            ></div>
            <Link to="/uranus">URANUS</Link>
          </div>
          <div
            onMouseLeave={changeBackNeptune}
            onMouseOver={changeNeptune}
            className="neptune-header-div"
          >
            <div
              className={`neptune-line ${
                planetState === "neptune" ? "neptune-line-hover" : ""
              }`}
            ></div>
            <Link to="/neptune">NEPTUNE</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
