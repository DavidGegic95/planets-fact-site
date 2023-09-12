import React, { useEffect } from "react";
import "./main.css";
import RotatingPlanet from "../../components/RotatingPlanet/RotatingPlanet";
import { motion } from "framer-motion";

const Main = ({
  mercuryRef,
  venusRef,
  earthRef,
  marsRef,
  jupiterRef,
  saturnRef,
  uranusRef,
  neptuneRef,
  setPlanetState,
}) => {
  useEffect(() => {
    setPlanetState("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="main-motion-div"
      initial={{ opacity: 0, scale: 0.00001, transition: { duration: 2 } }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="main">
        <div className="sun"></div>
        <RotatingPlanet ref1={mercuryRef} planet={"mercury"} />
        <RotatingPlanet ref1={venusRef} planet={"venus"} />
        <RotatingPlanet ref1={earthRef} planet={"earth"} />
        <RotatingPlanet ref1={marsRef} planet={"mars"} />
        <RotatingPlanet ref1={jupiterRef} planet={"jupiter"} />
        <RotatingPlanet ref1={saturnRef} planet={"saturn"} />
        <RotatingPlanet ref1={uranusRef} planet={"uranus"} />
        <RotatingPlanet ref1={neptuneRef} planet={"neptune"} />
      </div>
    </motion.div>
  );
};

export default Main;
