import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/HomePage'
import ArtPage from '../ArtPage/ArtPage'
import ProductPage from '../ProductPage/ProductPage'
import data from '../../data';



export default function App() {
  const [ user, setUser ] = useState(getUser())

  return (
    <div className="App">
      {
        user ?
        <>
        <header>
          <a href="/">Lurker</a>
        </header>
        <main>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/ArtPage/ArtPage" element={<ArtPage />} />
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


