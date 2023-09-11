import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import './style.css'



export const MenuMobile = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav className="nav-mobile"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >
            {/* <motion.div className="background" variants={sidebar} /> */}
            <Navigation isOpen={isOpen} toggle={() => toggleOpen()} />
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
};
