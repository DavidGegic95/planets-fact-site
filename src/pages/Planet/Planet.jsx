import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './planet.css'
// import img from '../../assets/path'
import { ReactComponent as YourSvg } from '../../assets/path.svg';
import { AnimatePresence, motion } from "framer-motion"
import Image from '../../components/Image/Image';
import TextContent from '../../components/TextContent/TextContent';
let data = require('../../data.json')



const Planet = ({ setPlanetState }) => {
    const [isClicked, setIsClicked] = useState(false)
    let currentPlanetObject;
    let { planet } = useParams()
    const [view, setView] = useState("planet")
    useEffect(() => {
        setPlanetState(planet)
        console.log(planet);
    }, [planet])



    const currentPlanet = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    data.forEach((current) => {
        if (current.name === currentPlanet(planet)) {
            currentPlanetObject = current

        }
    })

    function butttonFocus1() {
        if (view === 'planet') return `button-focus-${planet}`
    }
    function butttonFocus2() {
        if (view === 'internal') return `button-focus-${planet}`
    }
    function butttonFocus3() {
        if (view === 'geology') return `button-focus-${planet}`
    }

    return (

        <div className='planet'>
            <div className='grid'>

                <motion.div className='img-motion-div'


                    initial={{ opacity: 0, x: 0, scale: 0, transition: { duration: 2, delay: 2.2, to: 0 }, rotate: 360 }}
                    animate={{ opacity: 1, x: 0, scale: 1, transition: { duration: 1, from: 1 }, rotate: 360 }}
                    exit={{ opacity: 0, x: -100, scale: 0, transition: { duration: 1, to: 0 }, rotate: 90 }}


                >
                    <Image isClicked={isClicked} view={view} planet={planet} />


                </motion.div>
                {/* </div> */}



                <motion.div className='motion-div-section'
                    initial={{ opacity: 0, x: 100, transition: { duration: 2, delay: 0 } }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 1.2 } }}
                    exit={{ opacity: 0, x: 100, transition: { duration: 1, delay: 0 } }}
                >
                    <section className='section-planet'>
                        <div className='h1&&text'>
                            <h1>{currentPlanetObject.name}</h1>

                            <AnimatePresence>


                                {view === "planet" &&
                                    <>
                                        <TextContent currentPlanetObject={currentPlanetObject} view={view} />


                                        <div className='wikipedia-div'>
                                            <span>
                                                Source:
                                            </span>
                                            <a className='wiki-link' target={"_blank"} rel={"noreferrer"} href={currentPlanetObject.overview.source}>Wikipedia
                                                <YourSvg /></a>
                                        </div>
                                    </>}

                                {view === "internal" &&
                                    <>
                                        <TextContent currentPlanetObject={currentPlanetObject} view={view} />
                                        <div className='wikipedia-div'>
                                            <span>
                                                Source:
                                            </span>
                                            <a className='wiki-link' target={"_blank"} rel={"noreferrer"} href={currentPlanetObject.structure.source}>Wikipedia
                                                <YourSvg /></a>
                                        </div>
                                    </>}
                                {view === "geology" &&
                                    <>

                                        <TextContent currentPlanetObject={currentPlanetObject} view={view} />
                                        <div className='wikipedia-div'>
                                            <span>
                                                Source:
                                            </span>
                                            <a className='wiki-link' target={"_blank"} rel={"noreferrer"} href={currentPlanetObject.geology.source}>Wikipedia
                                                <YourSvg /></a>

                                        </div>
                                    </>}
                            </AnimatePresence>
                        </div>

                        <div className='buttons-section'>

                            <button onClick={() => setView("planet") || setIsClicked(true)} className={`button1 ${butttonFocus1()}`}><span className='button-numbers'>01</span> OVERVIEW</button>
                            <button onClick={() => setView("internal") || setIsClicked(true)} className={`button2 ${butttonFocus2()}`}><span className='button-numbers'>02</span>  <span className='mobile-hidden-span' >INTERNAL</span> STRUCTURE</button>
                            <button onClick={() => setView("geology") || setIsClicked(true)} className={`button3 ${butttonFocus3()}`}><span className='button-numbers'>03</span>  <span className='mobile-hidden-span'>SURFACE</span>GEOLOGY</button>
                        </div>

                    </section>
                </motion.div>
                <div className='buttons-section-mobile'>

                    <button onClick={() => setView("planet") || setIsClicked(true)} className={`button1 ${butttonFocus1()}`}>OVERVIEW</button>
                    <button onClick={() => setView("internal") || setIsClicked(true)} className={`button2 ${butttonFocus2()}`}><span className='mobile-hidden-span' >INTERNAL</span> STRUCTURE</button>
                    <button onClick={() => setView("geology") || setIsClicked(true)} className={`button3 ${butttonFocus3()}`}>SURFACE GEOLOGY</button>
                </div>
            </div>

            <motion.div className='motion-info-blocks'
                initial={{ opacity: 0, y: 100, transition: { duration: 2, delay: 0 } }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                exit={{ opacity: 0, y: 100, transition: { duration: 1, delay: 0 } }}
            >

                <div className='planet-info-blocks'>
                    <div className='planet-info-block'>
                        <p className='info-p'>ROTATION TIME</p>
                        <p className='info-data'>{currentPlanetObject.rotation}</p>
                    </div>
                    <div className='planet-info-block'>
                        <p className='info-p'>REVOLUTION TIME</p>
                        <p className='info-data'>{currentPlanetObject.revolution}</p>

                    </div>
                    <div className='planet-info-block'>
                        <p className='info-p'>RADIUS</p>
                        <p className='info-data'>{currentPlanetObject.radius}</p>

                    </div>
                    <div className='planet-info-block'>
                        <p className='info-p'>AVERAGE TEMP.</p>
                        <p className='info-data'>{currentPlanetObject.temperature}</p>
                    </div>


                </div>
            </motion.div>



        </div >

    )
}

export default Planet