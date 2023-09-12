import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import "./style.css";

export const MenuMobile = ({ isOpen, setIsOpen }) => {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className="nav-mobile"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <Navigation isOpen={isOpen} toggle={() => setIsOpen((prev) => !prev)} />
      <MenuToggle toggle={() => setIsOpen((prev) => !prev)} />
    </motion.nav>
  );
};
