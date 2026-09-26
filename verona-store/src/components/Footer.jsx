import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            VÉRONA
          </Link>

          <p>
            Contemporary fashion for every generation.
            Designed with intention. Made for everyday
            life.
          </p>
        </div>

        <div className="footer-column">
          <h3>SHOP</h3>

          <Link to="/shop">All Collections</Link>
          <Link to="/shop">Men</Link>
          <Link to="/shop">Women</Link>
          <Link to="/shop">Kids</Link>
          <Link to="/shop">Shoes</Link>
          <Link to="/shop">Accessories</Link>
        </div>

        <div className="footer-column">
          <h3>ABOUT</h3>

          <a href="#about">Our Story</a>
          <a href="#about">Journal</a>
          <a href="#about">Sustainability</a>
          <a href="#about">Careers</a>
        </div>

        <div className="footer-column">
          <h3>HELP</h3>

          <a href="#contact">Contact</a>
          <a href="#shipping">Shipping & Delivery</a>
          <a href="#returns">Returns</a>
          <a href="#faq">FAQ</a>
        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © 2026 VÉRONA. All rights reserved.
        </span>

        <div className="footer-legal">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>

      </div>

    </footer>
  )
}

export default Footer