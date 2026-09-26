import { Link } from 'react-router-dom'
import products from '../data/products'
import ProductCard from './ProductCard'

const ProductSection = () => {
  const featuredProducts = products.slice(0, 4)

  return (
    <section className="featured-premium">

      <div className="featured-header">

        <div>
          <p>THE LATEST EDIT</p>

          <h2>
            Selected
            <br />
            for you.
          </h2>
        </div>

        <Link
          to="/shop"
          className="view-all"
        >
          VIEW ALL PRODUCTS →
        </Link>

      </div>

      <div className="featured-grid">

        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  )
}

export default ProductSection