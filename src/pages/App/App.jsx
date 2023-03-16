import './App.css';
import { useState, useEffect } from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/HomePage'
import ArtPage from '../ArtPage/ArtPage'
import ProductPage from '../ProductPage/ProductPage'
import * as ordersAPI from '../../utilities/orders-api'
import CheckOutPage from '../CheckOutPage/CheckOutPage';
import { getUserCart } from '../../utilities/userCart-api';



export default function App() {
  const [ user, setUser ] = useState(getUser())
  const [ userCart, setUserCart ] = useState(getUser())
  const [cart, setCart] = useState(null)
  const [userCartNotes, setUserCartNotes] = useState(null)
  const navigate = useNavigate()

  useEffect(function() {
    async function getCart() {
      const cart = await ordersAPI.getCart()
      setCart(cart) 
    }
    async function fetchUserCart() {
      const userCart = await getUserCart()
      setUserCart(userCart)
    }
    if(user) {
      getCart()
      fetchUserCart()
    } else {
      setCart(null)
    }
  }, [user])
  
  async function handleAddToCart(productId) {
    const cart = await ordersAPI.addItemToCart(productId)
    setCart(cart)
  }

  async function removeFromCart(productId) {
    const updatedCart = await ordersAPI.setItemQtyInCart(productId, 0)
    setCart(updatedCart)
  }

  async function checkOut() {
    const newCart = await ordersAPI.checkout()
    setCart(newCart)
    navigate("/ArtPage/ArtPage")
  }

  return (
    <div className="App">
      {
        user ?
        <>
        <main>
        <header>
          <Link to="/ArtPage/ArtPage">ART LURKER</Link>
        </header>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/ArtPage/ArtPage" element={<ArtPage handleAddToCart={handleAddToCart} removeFromCart={removeFromCart} cart={cart} />} />
            {/* <Route path="/product/:slug" element={<ProductPage />} /> */}
            <Route path="/" element={<HomePage />} />
            
            <Route path="/checkout" element={<CheckOutPage checkOut={checkOut} user={user} cart={cart} userCart={userCart} removeFromCart={removeFromCart} />} />
          </Routes>
        </main>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </div>
  );
}


