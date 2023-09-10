import * as React from "react";
import { motion } from "framer-motion";
import { ReactComponent as Arrow } from '../../assets/mobile-menu-arrow.svg';
import { useNavigate } from 'react-router-dom'




const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const colors = ["#419EBB", "#EDA249", "#6f2ed6", "#D14C32", "#D83A34", "#CD5120", "#1ec2a4", "#2d68f0"];
const names = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

export const MenuItem = ({ i, toggle }) => {
    const navigate = useNavigate();

    const style = { backgroundColor: `${colors[i]}`, borderRadius: '50%', width: '20px', height: '20px' };
    const name = names[i]
    return (
        <motion.li onClick={() => navigate(`/${name}`) || toggle()}
            variants={variants}
            whileTap={{ scale: 0.95 }}
        >
            <div className="planet-circle-menu" style={style} />
            <p className="text-menu-planet">{name}</p>
            <Arrow className="arrow-menu" />


        </motion.li >
    );
};
