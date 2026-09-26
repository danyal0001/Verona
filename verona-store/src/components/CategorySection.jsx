import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'MEN',
    category: 'Men',
    image:
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'WOMEN',
    category: 'Women',
    image:
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'KIDS',
    category: 'Kids',
    image:
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'ACCESSORIES',
    category: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=1000&q=85',
  },
]

const CategorySection = () => {
  return (
    <section className="category-premium">

      <div className="section-intro">
        <p>EXPLORE VÉRONA</p>

        <h2>
          Find your
          <br />
          expression.
        </h2>
      </div>

      <div className="category-grid">

        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/shop?category=${category.category}`}
            className="category-card"
          >
            <img
              src={category.image}
              alt={category.name}
            />

            <div className="category-overlay">
              <span>{category.name}</span>
              <span className="category-arrow">
                →
              </span>
            </div>
          </Link>
        ))}

      </div>

    </section>
  )
}

export default CategorySection