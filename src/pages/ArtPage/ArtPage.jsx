import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import * as itemsAPI from '../../utilities/items-api'

export default function ArtPage({handleAddToCart, cart, removeFromCart}) {
  const [items, setItems] = useState([])
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll()
      setItems(items)
    }
    getItems()
  }, [])

    return (
        <div>
          
          <div className="products">
            {items.map(product => (
              <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
                </Link>
                <div className="product-info">
                  <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                  </Link>
                  <p>
                    <strong>${product.price}</strong>
                  </p>
                  {
                    cart.lineItems.some(lineItem => lineItem.item.name === product.name) ?
                    <button onClick={() => removeFromCart(product._id)}>Remove-from-Cart</button>
                    : <button onClick={() => handleAddToCart(product._id)} >Add-to-Cart</button>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}
