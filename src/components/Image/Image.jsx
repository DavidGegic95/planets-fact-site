import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Image = ({ view, planet }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="image-component-motion-div"
        key={view}
        initial={{
          opacity: 0,
          scale: 0,
          transition: { duration: 2, to: 0, delay: 0 },
          rotate: 360,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 1, from: 0, delay: 1 },
          rotate: 360,
        }}
        exit={{
          opacity: 0,
          scale: 0,
          transition: { duration: 1, to: 0 },
          rotate: 90,
        }}
      >
        {view === "planet" && (
          <div
            key={planet}
            className={
              view === "internal"
                ? `planet-div-${planet}-internal`
                : `planet-div-${planet}-planet`
            }
          ></div>
        )}

        {view === "internal" && (
          <div
            key={planet}
            className={
              view === "internal"
                ? `planet-div-${planet}-internal`
                : `planet-div-${planet}-planet`
            }
          ></div>
        )}
        {view === "geology" && (
          <>
            <div
              key={planet}
              className={
                view === "internal"
                  ? `planet-div-${planet}-internal`
                  : `planet-div-${planet}-planet`
              }
            >
              <div
                className={`planet-div-${planet}-geology geology-position`}
              ></div>
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Image;
