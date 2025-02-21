import { useState, useCallback, useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function AddToCartButton({ book }) {
  const { addToCart, updateQuantity, cartItems, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(0);

  // Check if book is already in cart and update quantity
  useEffect(() => {
    const cartItem = cartItems.find(item => item.id === book.id);
    setQuantity(cartItem ? cartItem.quantity : 0);
  }, [cartItems, book.id]);

  const handleAddToCart = useCallback(() => {
    addToCart({ ...book, image: null });
    setQuantity(1);
  }, [addToCart, book]);

  const handleQuantityChange = useCallback((change) => {
    const newQuantity = Math.max(0, quantity + change);
    if (newQuantity === 0) {
      removeFromCart(book.id);
    } else {
      updateQuantity(book.id, newQuantity);
    }
    setQuantity(newQuantity);
  }, [book.id, quantity, updateQuantity, removeFromCart]);

  if (quantity > 0) {
    return (
      <div className="quantity-controls d-flex align-items-center justify-content-center">
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => handleQuantityChange(-1)}
          title="Remove one"
        >
          <i className="fas fa-minus"></i>
        </button>
        <span className="mx-2 quantity-display">{quantity}</span>
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => handleQuantityChange(1)}
          title="Add one more"
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
    );
  }

  return (
    <button
      className="btn btn-primary add-to-cart"
      onClick={handleAddToCart}
      title="Add to cart"
    >
      <i className="fas fa-cart-plus"></i> Add to Cart
    </button>
  );
}
