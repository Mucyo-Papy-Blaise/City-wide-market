import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './Pages/LandingPage'
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ArchitecturePage from './Pages/ArchitecturePage';

const App:React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element = {<LandingPage />} />
        <Route path='/Designs' element ={<ArchitecturePage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
