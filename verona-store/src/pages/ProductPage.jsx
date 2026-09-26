import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../data/products'
import { useCart } from '../context/CartContext'

const ProductPage = () => {
  const { id } = useParams()
  const { addToCart } = useCart()

  const product = products.find(
    (product) => product.id === Number(id)
  )

  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setSelectedSize('')
    setSelectedColor('')
    setQuantity(1)
  }, [id])

  if (!product) {
    return (
      <main className="not-found">
        <p>PRODUCT NOT FOUND</p>

        <h1>
          We couldn't find that product.
        </h1>

        <Link to="/shop">
          RETURN TO SHOP
        </Link>
      </main>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select a size and color.')
      return
    }

    addToCart(
      product,
      selectedSize,
      selectedColor,
      quantity
    )
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 3)

  return (
    <main className="product-detail-page">

      {/* BREADCRUMB */}

      <div className="product-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/shop">Shop</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      {/* PRODUCT */}

      <section className="product-main">

        <div className="product-gallery">

          <div className="product-main-image">

            {product.badge && (
              <span className="product-detail-badge">
                {product.badge}
              </span>
            )}

            <img
              src={product.image}
              alt={product.name}
            />

          </div>

        </div>

        <div className="product-information">

          <p className="product-detail-category">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <p className="product-detail-price">
            ${product.price.toFixed(2)}
          </p>

          <div className="product-rating">
            <span>★★★★★</span>
            <span>4.9 / 5</span>
          </div>

          <p className="product-detail-description">
            {product.description}
          </p>

          {/* MATERIAL */}

          <div className="product-specification">
            <span>Material</span>
            <strong>{product.material}</strong>
          </div>

          {/* COLOR */}

          <div className="product-selection">

            <div className="selection-header">
              <span>Color</span>

              <strong>
                {selectedColor || 'Select a color'}
              </strong>
            </div>

            <div className="premium-color-options">

              {product.colors.map((color) => (
                <button
                  type="button"
                  key={color}
                  className={
                    selectedColor === color
                      ? 'selected'
                      : ''
                  }
                  onClick={() =>
                    setSelectedColor(color)
                  }
                >
                  {color}
                </button>
              ))}

            </div>

          </div>

          {/* SIZE */}

          <div className="product-selection">

            <div className="selection-header">
              <span>Size</span>

              <strong>
                {selectedSize || 'Select a size'}
              </strong>
            </div>

            <div className="premium-size-options">

              {product.sizes.map((size) => (
                <button
                  type="button"
                  key={size}
                  className={
                    selectedSize === size
                      ? 'selected'
                      : ''
                  }
                  onClick={() =>
                    setSelectedSize(size)
                  }
                >
                  {size}
                </button>
              ))}

            </div>

          </div>

          {/* QUANTITY */}

          <div className="product-selection">

            <div className="selection-header">
              <span>Quantity</span>
            </div>

            <div className="premium-quantity">

              <button
                type="button"
                onClick={() =>
                  setQuantity((current) =>
                    Math.max(1, current - 1)
                  )
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={() =>
                  setQuantity(
                    (current) => current + 1
                  )
                }
              >
                +
              </button>

            </div>

          </div>

          {/* ADD TO CART */}

          <button
            type="button"
            className="premium-add-cart"
            onClick={handleAddToCart}
          >
            <span>ADD TO CART</span>

            <span>
              $
              {(product.price * quantity).toFixed(2)}
            </span>
          </button>

          {/* SHIPPING NOTE */}

          <div className="product-service">

            <div>
              <strong>Free shipping</strong>
              <span>
                On orders over $150
              </span>
            </div>

            <div>
              <strong>Easy returns</strong>
              <span>
                30-day return policy
              </span>
            </div>

            <div>
              <strong>Secure checkout</strong>
              <span>
                Safe and simple ordering
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* PRODUCT STORY */}

      <section className="product-story">

        <div>
          <p>THE DETAILS</p>

          <h2>
            Made to become
            <br />
            an everyday essential.
          </h2>
        </div>

        <div className="product-story-text">
          <p>
            Every VÉRONA piece is designed around
            simplicity, versatility and comfort.
            We focus on timeless silhouettes that
            work across seasons rather than chasing
            short-lived trends.
          </p>

          <p>
            This piece is carefully selected as part
            of our latest collection and designed to
            complement the rest of your wardrobe.
          </p>
        </div>

      </section>

      {/* RELATED PRODUCTS */}

      {relatedProducts.length > 0 && (
        <section className="related-products">

          <div className="related-header">

            <div>
              <p>YOU MAY ALSO LIKE</p>

              <h2>
                Complete the look.
              </h2>
            </div>

            <Link to="/shop">
              VIEW ALL →
            </Link>

          </div>

          <div className="related-grid">

            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="related-card"
              >
                <div className="related-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="related-info">
                  <h3>{item.name}</h3>

                  <span>
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              </Link>
            ))}

          </div>

        </section>
      )}

    </main>
  )
}

export default ProductPage