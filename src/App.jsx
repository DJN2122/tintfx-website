import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/style.css'
import Home from './pages/Home'
import Automotive from './pages/Automotive';
import ArchitecturalService from './pages/ArchitecturalService';
import VehicleWraps from './pages/VehicleWraps';
import VanBrandingSigns from './pages/VanBrandingSigns';
import Gallery from './pages/Gallery';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/automotive" element={<Automotive />} />
          <Route path="/architectural-service" element={<ArchitecturalService />} />
          <Route path="/vehicle-wraps" element={<VehicleWraps />} />
          <Route path="/van-branding-signs" element={<VanBrandingSigns />} />
          <Route path="/gallery" element={<Gallery />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
