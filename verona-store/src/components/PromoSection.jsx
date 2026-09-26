import { Link } from 'react-router-dom'

const PromoSection = () => {
  return (
    <section className="promo-section">
      <div className="promo-image">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85"
          alt="VÉRONA fashion collection"
        />
      </div>

      <div className="promo-content">
        <p className="promo-eyebrow">
          THE VÉRONA EDIT
        </p>

        <h2>
          Designed for
          <br />
          every generation.
        </h2>

        <p>
          Discover carefully selected pieces that
          balance contemporary design with timeless
          simplicity.
        </p>

        <Link to="/shop" className="promo-button">
          EXPLORE THE COLLECTION
        </Link>
      </div>
    </section>
  )
}

export default PromoSection