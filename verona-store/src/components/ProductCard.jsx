import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card"
    >
      <div className="product-card-image">

        {product.badge && (
          <span className="product-badge">
            {product.badge}
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      <div className="product-info">

        <h3>{product.name}</h3>

        <p>{product.category}</p>

        <p className="product-price">
          ${product.price.toFixed(2)}
        </p>

      </div>
    </Link>
  )
}

export default ProductCard