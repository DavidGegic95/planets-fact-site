import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const TextContent = ({ view, currentPlanetObject }) => {
  return (
    <div className="text-content">
      <AnimatePresence view={view}>
        <motion.div
          className="motion-text-div"
          key={view}
          initial={{
            opacity: 0,
            scaleY: 1.2,
            transition: { duration: 2, delay: 0 },
          }}
          animate={{
            opacity: 1,
            scaleY: 1,
            transition: { duration: 1, delay: 1 },
          }}
          exit={{
            opacity: 0,
            scaleY: 1.2,
            transition: { duration: 1, delay: 0 },
          }}
        >
          {view === "planet" && (
            <p className="motion-text" key={view}>
              {currentPlanetObject.overview.content}
            </p>
          )}
          {view === "internal" && (
            <p className="motion-text" key={view}>
              {currentPlanetObject.structure.content}
            </p>
          )}
          {view === "geology" && (
            <p className="motion-text" key={view}>
              {currentPlanetObject.geology.content}
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextContent;
