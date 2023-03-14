import './App.css';
import { useState, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/HomePage'
import ArtPage from '../ArtPage/ArtPage'
import ProductPage from '../ProductPage/ProductPage'
import * as ordersAPI from '../../utilities/orders-api'



export default function App() {
  const [ user, setUser ] = useState(getUser())
  const [cart, setCart] = useState(null)

  useEffect(function() {
    async function getCart() {
      const cart = await ordersAPI.getCart()
      setCart(cart) 
    }
    if(user) {
      getCart()
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

  async function handleChangeQty( itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  return (
    <div className="App">
      {
        user ?
        <>
        <main>
        <header>
          {/* <Link to="/">Lurker</Link> */}
          <NavBar user={user} setUser={setUser} />
        </header>
          <Routes>
            <Route path="/ArtPage/ArtPage" element={<ArtPage handleAddToCart={handleAddToCart} removeFromCart={removeFromCart} cart={cart} />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </main>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </div>
  );
}


