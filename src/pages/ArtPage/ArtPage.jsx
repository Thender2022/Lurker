
import { useEffect } from 'react';
import data from '../../data'

export default function ArtPage() {

    

    return (
        <div>
          <h2>Lurk Wurk</h2>
          <div className="products">
            {data.products.map(product => (
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
                </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                  </a>
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
