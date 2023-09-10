import React, { useEffect } from 'react'
import './main.css'
import RotatingPlanet from '../../components/RotatingPlanet/RotatingPlanet'
// import Header from '../../components/Header/Header'
import { AnimatePresence, motion } from "framer-motion"


const Main = ({ mercuryRef, venusRef, earthRef, marsRef, jupiterRef, saturnRef, uranusRef, neptuneRef, setPlanetState }) => {



    useEffect(() => {
        setPlanetState("")

    }, [])




    return (
        // <AnimatePresence>
        <motion.div initial={{ opacity: 0, scale: 0.00001, transition: { duration: 2 } }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <div className='main'>


                <div className='sun'></div>
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
        // </AnimatePresence>
    )
}

export default Main 