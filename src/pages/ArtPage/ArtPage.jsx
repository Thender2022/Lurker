
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import data from '../../data'

export default function ArtPage() {

    

    return (
        <div>
          <h2>Lurk Wurk</h2>
          <div className="products">
            {data.items.map(product => (
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
                  <button>Add-to-Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}
