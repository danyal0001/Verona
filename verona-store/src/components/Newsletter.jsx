import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!email.trim()) {
      return
    }

    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="newsletter">
      <div className="newsletter-inner">

        <p className="newsletter-eyebrow">
          STAY IN THE KNOW
        </p>

        <h2>
          Join the VÉRONA
          <br />
          community.
        </h2>

        <p>
          Be the first to discover new collections,
          exclusive edits and seasonal releases.
        </p>

        {submitted ? (
          <div className="newsletter-success">
            Thank you for joining VÉRONA.
          </div>
        ) : (
          <form
            className="newsletter-form"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
            />

            <button type="submit">
              SUBSCRIBE
            </button>
          </form>
        )}

      </div>
    </section>
  )
}

export default Newsletter