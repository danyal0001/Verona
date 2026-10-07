import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategorySection from './components/CategorySection'
import ProductSection from './components/ProductSection'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import Shop from './pages/Shop'
import CheckoutPage from './pages/CheckoutPage'
import PromoSection from './components/PromoSection'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function ScrollToTop() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [pathname, search])

  return null
}

function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <ProductSection />
      <PromoSection />
      <Newsletter />
    </>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App