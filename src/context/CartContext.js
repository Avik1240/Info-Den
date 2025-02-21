import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'cartItems';

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        // Ensure we always have an array
        setCartItems(Array.isArray(parsedCart) ? parsedCart : []);
      }
    } catch (error) {
      console.error('Error loading cart:', error);
      localStorage.removeItem(CART_STORAGE_KEY);
      setCartItems([]);
    }
    setIsInitialized(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
      } catch (error) {
        console.error('Error saving cart:', error);
      }
    }
  }, [cartItems, isInitialized]);

  const addToCart = useCallback((book) => {
    if (!book || !book.id) {
      console.error('Invalid book data:', book);
      return;
    }

    setCartItems(prevItems => {
      // Ensure prevItems is an array
      const items = Array.isArray(prevItems) ? prevItems : [];
      
      const existingItem = items.find(item => item.id === book.id);
      if (existingItem) {
        return items.map(item =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...book, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((bookId) => {
    setCartItems(prevItems => {
      // Ensure prevItems is an array
      const items = Array.isArray(prevItems) ? prevItems : [];
      return items.filter(item => item.id !== bookId);
    });
  }, []);

  const updateQuantity = useCallback((bookId, quantity) => {
    if (quantity < 1) {
      // Remove the item if quantity is less than 1
      removeFromCart(bookId);
      return;
    }
    setCartItems(prevItems => {
      // Ensure prevItems is an array
      const items = Array.isArray(prevItems) ? prevItems : [];
      return items.map(item =>
        item.id === bookId ? { ...item, quantity } : item
      );
    });
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getCartTotal = useCallback(() => {
    // Ensure cartItems is an array
    const items = Array.isArray(cartItems) ? cartItems : [];
    return items.reduce((total, item) => {
      const price = parseFloat(item.currentPrice) || 0;
      return total + (price * (item.quantity || 1));
    }, 0);
  }, [cartItems]);

  const getItemCount = useCallback(() => {
    // Ensure cartItems is an array
    const items = Array.isArray(cartItems) ? cartItems : [];
    return items.reduce((total, item) => total + (item.quantity || 1), 0);
  }, [cartItems]);

  const value = {
    cartItems: Array.isArray(cartItems) ? cartItems : [],
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getItemCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
