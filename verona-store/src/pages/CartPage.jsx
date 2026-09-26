import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const CartPage = () => {
  const {
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  cartTotal,
  shippingCost,
  orderTotal,
} = useCart()

  if (cart.length === 0) {
    return (
      <main className="empty-cart">
        <h1>Your cart is empty</h1>

        <p>
          Looks like you haven't added anything yet.
        </p>

        <Link to="/" className="continue-shopping">
          CONTINUE SHOPPING
        </Link>
      </main>
    )
  }

  return (
    <main className="cart-page">
      <div className="cart-content">
        <div className="cart-header">
          <p>YOUR SHOPPING BAG</p>
          <h1>Your Cart</h1>
        </div>

        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-info">
                <p className="product-category">
                  {item.category}
                </p>

               <h2>{item.name}</h2>

                <p className="cart-variant">
                Color: {item.color}
                </p>

                <p className="cart-variant">
                Size: {item.size}
                </p>

                <p>${item.price.toFixed(2)}</p>

                <div className="cart-quantity">
                  <button
                   onClick={() => decreaseQuantity(item)}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-button"
                 onClick={() => removeFromCart(item)}
                >
                  REMOVE
                </button>
              </div>

              <p className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <aside className="cart-summary">
        <h2>SUMMARY</h2>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>

        <div className="summary-row">
        <span>Shipping</span>

        <span>
            {shippingCost === 0
            ? 'Free'
            : `$${shippingCost.toFixed(2)}`}
        </span>
        </div>

       <div className="summary-total">
        <span>Total</span>
        <span>${orderTotal.toFixed(2)}</span>
        </div>

       <Link
            to="/checkout"
            className="checkout-button"
            >
            PROCEED TO CHECKOUT
            </Link>
      </aside>
    </main>
  )
}

export default CartPage