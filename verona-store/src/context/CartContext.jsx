import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

const getCartItemKey = (item) => {
  return `${item.id}-${item.size || 'default'}-${item.color || 'default'}`
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('verona-cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('verona-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (
    product,
    size,
    color,
    quantity = 1
  ) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) =>
          item.id === product.id &&
          item.size === size &&
          item.color === color
      )

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id &&
          item.size === size &&
          item.color === color
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        )
      }

      return [
        ...currentCart,
        {
          ...product,
          size,
          color,
          quantity,
        },
      ]
    })
  }

  const removeFromCart = (itemToRemove) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) =>
          getCartItemKey(item) !==
          getCartItemKey(itemToRemove)
      )
    )
  }

  const increaseQuantity = (itemToIncrease) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        getCartItemKey(item) ===
        getCartItemKey(itemToIncrease)
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    )
  }

  const decreaseQuantity = (itemToDecrease) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          getCartItemKey(item) ===
          getCartItemKey(itemToDecrease)
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  )

  const shippingCost =
    cartTotal === 0
      ? 0
      : cartTotal >= 150
        ? 0
        : 12

  const orderTotal = cartTotal + shippingCost

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartCount,
        cartTotal,
        shippingCost,
        orderTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}