import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/HomePage'
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
            <Route path="/" element={<HomePage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
          <h1>Art Work</h1>
          <div className="products">
            {data.products.map(product => (
              <div className="product" key={product.slug}>
                <img src={product.image} alt={product.name} />
                <div class="product-info">
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </div>
  );
}


