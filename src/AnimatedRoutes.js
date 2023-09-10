import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Main from "./pages/Main/Main";
import Planet from "./pages/Planet/Planet";

// import Home from "./Home";
// import About from "./About";

const AnimatedRoutes = ({ mercuryRef, venusRef, earthRef, marsRef, jupiterRef, saturnRef, uranusRef, neptuneRef, setPlanetState }) => {
    const location = useLocation();

    return (
        <AnimatePresence initial={false} wait>
            <Routes location={location} key={location.pathname}  >
                <Route path='/' element={<Main
                    setPlanetState={setPlanetState}
                    mercuryRef={mercuryRef}
                    venusRef={venusRef}
                    earthRef={earthRef}
                    marsRef={marsRef}
                    jupiterRef={jupiterRef}
                    saturnRef={saturnRef}
                    uranusRef={uranusRef}
                    neptuneRef={neptuneRef}

                />} />
                <Route path='/:planet' element={<Planet setPlanetState={setPlanetState} />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;