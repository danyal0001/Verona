import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const CheckoutPage = () => {
  const {
    cart,
    cartTotal,
    shippingCost,
    orderTotal,
    clearCart,
  } = useCart()

  const [paymentMethod, setPaymentMethod] =
    useState('card')

  const [submitted, setSubmitted] = useState(false)
  const [orderNumber, setOrderNumber] = useState('')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'Pakistan',

    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newOrderNumber = `VRN-${Date.now()
      .toString()
      .slice(-6)}`

    setOrderNumber(newOrderNumber)
    setSubmitted(true)

    clearCart()
  }

  if (submitted) {
    return (
      <main className="order-success">
        <div className="success-icon">✓</div>

        <p className="checkout-eyebrow">
          ORDER CONFIRMED
        </p>

        <h1>Thank You For Your Order</h1>

        <p>
          Your VÉRONA order has been successfully placed.
        </p>

        <div className="order-number">
          <span>ORDER NUMBER</span>
          <strong>{orderNumber}</strong>
        </div>

        <p className="demo-note">
          This is a portfolio demonstration.
          No real payment has been processed.
        </p>

        <Link
          to="/shop"
          className="continue-shopping"
        >
          CONTINUE SHOPPING
        </Link>
      </main>
    )
  }

  if (cart.length === 0) {
    return (
      <main className="empty-checkout">
        <p className="checkout-eyebrow">
          CHECKOUT
        </p>

        <h1>Your Cart Is Empty</h1>

        <p>
          Add some products before proceeding to
          checkout.
        </p>

        <Link
          to="/shop"
          className="continue-shopping"
        >
          SHOP COLLECTION
        </Link>
      </main>
    )
  }

  return (
    <main className="checkout-page">
      <div className="checkout-main">

        <div className="checkout-header">
          <p>SECURE CHECKOUT</p>

          <h1>Complete Your Order</h1>
        </div>

        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >

          {/* CUSTOMER INFORMATION */}

          <section className="checkout-section">
            <div className="section-heading">
              <span>01</span>

              <h2>Customer Information</h2>
            </div>

            <div className="form-grid">

              <div className="form-group">
                <label htmlFor="firstName">
                  First Name
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">
                  Last Name
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>
          </section>

          {/* SHIPPING */}

          <section className="checkout-section">
            <div className="section-heading">
              <span>02</span>

              <h2>Shipping Address</h2>
            </div>

            <div className="form-grid">

              <div className="form-group full-width">
                <label htmlFor="address">
                  Street Address
                </label>

                <input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House number and street name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">
                  City
                </label>

                <input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="state">
                  State / Province
                </label>

                <input
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="postalCode">
                  Postal Code
                </label>

                <input
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="country">
                  Country
                </label>

                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option>Pakistan</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Italy</option>
                </select>
              </div>

            </div>
          </section>

          {/* PAYMENT */}

          <section className="checkout-section">
            <div className="section-heading">
              <span>03</span>

              <h2>Payment</h2>
            </div>

            <p className="payment-note">
              Demo checkout — no real payment will
              be processed.
            </p>

            <div className="payment-methods">

              <label
                className={
                  paymentMethod === 'card'
                    ? 'payment-method active'
                    : 'payment-method'
                }
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={
                    paymentMethod === 'card'
                  }
                  onChange={() =>
                    setPaymentMethod('card')
                  }
                />

                <span>Credit / Debit Card</span>
              </label>

              <label
                className={
                  paymentMethod === 'cod'
                    ? 'payment-method active'
                    : 'payment-method'
                }
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={
                    paymentMethod === 'cod'
                  }
                  onChange={() =>
                    setPaymentMethod('cod')
                  }
                />

                <span>Cash on Delivery</span>
              </label>

            </div>

            {paymentMethod === 'card' && (
              <div className="card-fields">

                <div className="form-group full-width">
                  <label htmlFor="cardName">
                    Name on Card
                  </label>

                  <input
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="cardNumber">
                    Card Number
                  </label>

                  <input
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="4242 4242 4242 4242"
                    inputMode="numeric"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="expiry">
                    Expiry Date
                  </label>

                  <input
                    id="expiry"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    placeholder="MM / YY"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cvc">
                    CVC
                  </label>

                  <input
                    id="cvc"
                    name="cvc"
                    value={formData.cvc}
                    onChange={handleChange}
                    placeholder="123"
                    inputMode="numeric"
                    required
                  />
                </div>

              </div>
            )}
          </section>

          <button
            type="submit"
            className="place-order-button"
          >
            PLACE ORDER — $
            {orderTotal.toFixed(2)}
          </button>

        </form>
      </div>

      {/* ORDER SUMMARY */}

      <aside className="checkout-summary">

        <div className="checkout-summary-header">
          <p>YOUR ORDER</p>
          <span>{cart.length} item(s)</span>
        </div>

        <div className="checkout-products">
          {cart.map((item) => (
            <div
              className="checkout-product"
              key={`${item.id}-${item.size}-${item.color}`}
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <div>
                <h3>{item.name}</h3>

                <p>
                  {item.color} / {item.size}
                </p>

                <p>
                  Qty: {item.quantity}
                </p>
              </div>

              <strong>
                $
                {(item.price * item.quantity).toFixed(
                  2
                )}
              </strong>
            </div>
          ))}
        </div>

        <div className="checkout-totals">

          <div>
            <span>Subtotal</span>
            <span>
              ${cartTotal.toFixed(2)}
            </span>
          </div>

          <div>
            <span>Shipping</span>

            <span>
              {shippingCost === 0
                ? 'Free'
                : `$${shippingCost.toFixed(2)}`}
            </span>
          </div>

          <div className="checkout-grand-total">
            <span>Total</span>

            <strong>
              ${orderTotal.toFixed(2)}
            </strong>
          </div>

        </div>

        <Link
          to="/cart"
          className="edit-cart"
        >
          ← EDIT CART
        </Link>

      </aside>
    </main>
  )
}

export default CheckoutPage