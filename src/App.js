import './App.css';
import Header from './components/Header/Header';
import { useRef, useState } from 'react';
import AnimatedRoutes from './AnimatedRoutes';



function App() {
  const mercuryRef = useRef(null)
  const venusRef = useRef(null)
  const earthRef = useRef(null)
  const marsRef = useRef(null)
  const jupiterRef = useRef(null)
  const saturnRef = useRef(null)
  const uranusRef = useRef(null)
  const neptuneRef = useRef(null)
  const [planetState, setPlanetState] = useState('')

  return (
    <div className="App">
      <Header
        planetState={planetState}
        mercuryRef1={mercuryRef}
        venusRef1={venusRef}
        marsRef1={marsRef}
        earthRef1={earthRef}
        jupiterRef1={jupiterRef}
        saturnRef1={saturnRef}
        uranusRef1={uranusRef}
        neptuneRef1={neptuneRef}
      />

      <AnimatedRoutes
        setPlanetState={setPlanetState}
        mercuryRef={mercuryRef}
        venusRef={venusRef}
        earthRef={earthRef}
        marsRef={marsRef}
        jupiterRef={jupiterRef}
        saturnRef={saturnRef}
        uranusRef={uranusRef}
        neptuneRef={neptuneRef} />

    </div>
  );
}

export default App;
