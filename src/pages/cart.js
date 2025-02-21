import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [subtotal, setSubtotal] = useState(0);
  const shipping = subtotal > 0 ? 5.99 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  useEffect(() => {
    setSubtotal(getCartTotal());
  }, [cartItems, getCartTotal]);

  const handleQuantityChange = (bookId, newQuantity) => {
    if (newQuantity >= 0 && newQuantity <= 99) {
      updateQuantity(bookId, newQuantity);
    }
  };

  return (
    <div className="container cart-container">
      <div className="row">
        <div className="col-lg-8">
          <div className="cart-card mb-4">
            <div className="cart-header">
              <h4>Shopping Cart</h4>
            </div>
            <div className="card-body">
              {cartItems.length === 0 ? (
                <div className="cart-empty">
                  <i className="fas fa-shopping-cart"></i>
                  <h5>Your cart is empty</h5>
                  <p className="text-muted">Add some books to your cart and they will appear here</p>
                  <Link href="/" className="btn btn-primary">
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div className="cart-items">
                  {cartItems.map((item, index) => (
                    <div 
                      key={item.id} 
                      className="cart-item" 
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="row align-items-center">
                        <div className="col-3 col-md-2">
                          {item.image ? (
                            <Image 
                              src={item.image} 
                              alt={item.title}
                              width={100}
                              height={150}
                              className="img-fluid"
                            />
                          ) : (
                            <div className="placeholder-image">
                              <i className="fas fa-book fa-3x text-light d-flex align-items-center justify-content-center h-100"></i>
                            </div>
                          )}
                        </div>
                        <div className="col-9 col-md-4">
                          <h5 className="mb-2">{item.title}</h5>
                          <p className="text-muted mb-1">{item.author}</p>
                          <p className="text-primary mb-0">${parseFloat(item.currentPrice).toFixed(2)} each</p>
                        </div>
                        <div className="col-6 col-md-3 mt-3 mt-md-0">
                          <div className="quantity">
                            <button 
                              type="button" 
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            >
                              <i className="fas fa-minus"></i>
                            </button>
                            <input 
                              type="number" 
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                              min="1"
                              max="99"
                            />
                            <button 
                              type="button" 
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                        </div>
                        <div className="col-4 col-md-2 text-end mt-3 mt-md-0">
                          <p className="h5 mb-0">
                            ${(parseFloat(item.currentPrice) * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <div className="col-2 col-md-1 text-end mt-3 mt-md-0">
                          <button 
                            type="button" 
                            className="remove-item"
                            onClick={() => removeFromCart(item.id)}
                            title="Remove from cart"
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="cart-card">
            <div className="cart-header">
              <h4>Order Summary</h4>
            </div>
            <div className="order-summary">
              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span className="subtotal">${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Shipping</span>
                <span className="shipping">${shipping.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Tax</span>
                <span className="tax">${tax.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <strong>Total</strong>
                <strong className="total">${total.toFixed(2)}</strong>
              </div>
              <button 
                className="checkout-button w-100 mt-3" 
                disabled={cartItems.length === 0}
              >
                <span>Proceed to Checkout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
