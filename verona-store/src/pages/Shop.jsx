import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

const Shop = () => {
  const [category, setCategory] = useState('All')
  const [searchParams] = useSearchParams()

const initialSearch =
  searchParams.get('search') || ''

const [search, setSearch] =
  useState(initialSearch) 
  const [sort, setSort] = useState('featured')

  const categories = [
    'All',
    'Men',
    'Women',
    'Kids',
    'Shoes',
    'Accessories',
  ]

  let filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === 'All' ||
      product.category === category

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())

    return matchesCategory && matchesSearch
  })

  if (sort === 'low') {
    filteredProducts.sort(
      (a, b) => a.price - b.price
    )
  }

  if (sort === 'high') {
    filteredProducts.sort(
      (a, b) => b.price - a.price
    )
  }

  if (sort === 'name') {
    filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    )
  }

  return (
    <main className="shop-page">
      <section className="shop-header">
        <p>VÉRONA COLLECTION</p>

        <h1>SHOP ALL</h1>

        <p className="shop-description">
          Discover contemporary pieces designed
          for every generation.
        </p>
      </section>

      <section className="shop-controls">
        <div className="category-buttons">
          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? 'active'
                  : ''
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="shop-tools">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

          <select
            value={sort}
            onChange={(event) =>
              setSort(event.target.value)
            }
          >
            <option value="featured">
              Featured
            </option>

            <option value="low">
              Price: Low to High
            </option>

            <option value="high">
              Price: High to Low
            </option>

            <option value="name">
              Name
            </option>
          </select>
        </div>
      </section>

      <section className="shop-results">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <div className="no-products">
            <h2>No products found</h2>

            <p>
              Try another search or category.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}

export default Shop