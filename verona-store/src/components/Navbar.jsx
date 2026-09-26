import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const { cartCount } = useCart()

  const [searchOpen, setSearchOpen] =
    useState(false)

  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  const handleSearch = (event) => {
    event.preventDefault()

    if (!search.trim()) {
      return
    }

    navigate(
      `/shop?search=${encodeURIComponent(search)}`
    )

    setSearchOpen(false)
  }

  return (
    <>
      <nav className="navbar">

        <Link to="/" className="logo">
          VÉRONA
        </Link>

        <div className="nav-links">
          <Link to="/shop">Shop</Link>
         <Link to="/shop?category=Men">
      Men
    </Link>

    <Link to="/shop?category=Women">
      Women
    </Link>

    <Link to="/shop?category=Kids">
      Kids
    </Link>

    <Link to="/shop?category=Accessories">
      Accessories
    </Link>
        </div>

        <div className="nav-actions">

          <button
            className="nav-search"
            onClick={() => setSearchOpen(true)}
          >
            Search
          </button>

          <Link to="/cart" className="nav-cart">
            Cart ({cartCount})
          </Link>

        </div>

      </nav>

      {searchOpen && (
        <div className="search-overlay">

          <div className="search-overlay-inner">

            <button
              className="search-close"
              onClick={() => setSearchOpen(false)}
            >
              ×
            </button>

            <p>SEARCH VÉRONA</p>

            <form onSubmit={handleSearch}>
              <input
                autoFocus
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />

              <button type="submit">
                SEARCH
              </button>
            </form>

          </div>

        </div>
      )}
    </>
  )
}

export default Navbar