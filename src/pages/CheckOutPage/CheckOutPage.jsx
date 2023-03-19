import {Link} from "react-router-dom"
import CartNotesForm from "../../components/CartNotesForm/CartNotesForm"
import NoteCard from "../../components/NoteCard/NoteCard"

export default function CheckOutPage({ cart, checkOut, removeFromCart, user, userCart }) {
    return (
        <>
          <h1>CheckOutPage</h1>
          <CartNotesForm userCart={userCart} />
          {/* {userCart.cartNotes.map((note, idx) => (
          <NoteCard note={note} key={idx} />
          ))} */}
          <div className="products">
            {cart.lineItems.map(product => (
              <div className="product" key={product.item.slug}>
                <Link to={`/product/${product.item.slug}`}>
                <img src={product.item.image} alt={product.item.name} />
                </Link>
                <div className="product-info">
                  <Link to={`/product/${product.item.slug}`}>
                  <p>{product.item.name}</p>
                  </Link>
                  <p>
                    <strong>${product.item.price}</strong>
                  </p>
                  <button onClick={() => removeFromCart(product.item._id)}>Remove-from-Cart</button>
                </div>
              </div>
            ))}
          </div>
          <button onClick={checkOut}>CheckOut</button>
        </>
    )
}