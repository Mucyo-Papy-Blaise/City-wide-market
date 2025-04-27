import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ArchitecturePage from './Pages/ArchitecturePage';
import ViewMore from './Components/ViewMore';

const App:React.FC = () => {

  const [cartItems,setCartItems] = useState<any[]>([])

  const addToCart =(item: any)=>{
    setCartItems((prev)=>[...prev,item])
  }

  const removeFromCart =(id: any)=>{
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }
  return (
    <Router>
      <NavBar cartItems ={cartItems} removeCart={removeFromCart}/>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/Designs' element ={<ArchitecturePage addToCart={addToCart}/>} />
        <Route path='/ViewMore/:id' element ={<ViewMore />} /> 
      </Routes >
      <Footer />
    </Router>
  )
}

export default App
