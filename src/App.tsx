import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ArchitecturePage from './Pages/ArchitecturePage';
import ViewMore from './Components/ViewMore';
import { CartItem } from './Data/Types';
import ContactPage from './Pages/ContactPage';
import FullDashboard from './Admin/DashboardLayOut';

const App:React.FC = () => {

  const [cartItems,setCartItems] = useState<CartItem[]>(()=>{
    const storedCart = localStorage.getItem('cart')
    return storedCart ? JSON.parse(storedCart): []
  })

  const addToCart =(item: CartItem)=>{
    setCartItems((prev)=>{
      const existingItem = prev.find((cartItems)=> cartItems.id === item.id)

      if(existingItem){
        return prev.map((cartItem)=>
        cartItem.id === item.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
        )
      } else{
        return [...prev, {...item, quantity: 1}]
      }
    })
  }

  const removeFromCart =(id: any)=>{
    setCartItems((prev)=>{
      return prev.flatMap(item => {
        if(item.id === id){
          if(item.quantity > 1){
            return {...item, quantity: item.quantity -1 }
          }else{
            return []
          }
        }
        return item
      })
    })
  }

  const deleteCart =()=>{
    setCartItems([])
    localStorage.removeItem('cart')
  }

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cartItems))
  },[cartItems])
  
  return (
        <Router>
        <NavBar cartItems ={cartItems} removeCart={removeFromCart} deleteCart={deleteCart}/>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/Designs' element ={<ArchitecturePage addToCart={addToCart}/>} />
          <Route path='/ViewMore/:id' element ={<ViewMore addToCart={addToCart} />} /> 
          <Route path='/Contact' element={<ContactPage />}/>
          <Route path = '/dashboard' element={<FullDashboard />}/>
        </Routes >
        <Footer />
        </Router>
  )
}

export default App
