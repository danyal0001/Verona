import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero-premium">

      <div className="hero-premium-image">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=90"
          alt="VÉRONA new fashion collection"
        />

        <div className="hero-image-label">
          VÉRONA / 2026
        </div>
      </div>

      <div className="hero-premium-content">

        <p className="hero-eyebrow">
          AUTUMN / WINTER 2026
        </p>

        <h1>
          Style for
          <br />
          every generation.
        </h1>

        <p className="hero-description">
          Contemporary essentials designed around
          individuality, comfort and timeless style.
        </p>

        <div className="hero-actions">
          <Link
            to="/shop?category=Men"
            className="hero-button hero-button-dark"
          >
            SHOP MEN
          </Link>

          <Link
            to="/shop?category=Women"
            className="hero-button hero-button-light"
          >
            SHOP WOMEN
          </Link>
        </div>

      </div>

    </section>
  )
}

export default Hero