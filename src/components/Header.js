import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const { cartItems, getItemCount } = useCart();
  const [cartCount, setCartCount] = useState(0);

  // Update cart count whenever cartItems changes
  useEffect(() => {
    setCartCount(getItemCount());
  }, [cartItems, getItemCount]);

  const handleClickOutside = useCallback((event) => {
    if (!event.target.closest('.nav-item.dropdown')) {
      setOpenDropdown(null);
    }
  }, []);

  const handleDropdownClick = (e, dropdownName) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <header>
      <nav className="navbar navbar-expand-xl navbar-dark">
        <div className="container position-relative">
          <Link href="/" className="navbar-brand">
            InfoDen
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto topnav">
              <li className="nav-item dropdown">
                <a 
                  className={`nav-link dropdown-toggle ${openDropdown === 'categories' ? 'show' : ''}`}
                  href="#"
                  onClick={(e) => handleDropdownClick(e, 'categories')}
                  role="button"
                >
                  Categories
                </a>
                <ul className={`dropdown-menu ${openDropdown === 'categories' ? 'show' : ''}`}>
                  <li><Link href="/fiction" className="dropdown-item">Fiction</Link></li>
                  <li><Link href="/non-fiction" className="dropdown-item">Non-Fiction</Link></li>
                  <li><Link href="/academic" className="dropdown-item">Academic</Link></li>
                  <li><Link href="/children" className="dropdown-item">Children</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className={`nav-link dropdown-toggle ${openDropdown === 'authors' ? 'show' : ''}`}
                  href="#"
                  onClick={(e) => handleDropdownClick(e, 'authors')}
                  role="button"
                >
                  Authors
                </a>
                <ul className={`dropdown-menu ${openDropdown === 'authors' ? 'show' : ''}`}>
                  <li>
                    <Link 
                      href="/authors/featured-authors" 
                      className="dropdown-item"
                      onClick={() => setOpenDropdown(null)}
                    >
                      Featured Authors
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/authors/new-authors" 
                      className="dropdown-item"
                      onClick={() => setOpenDropdown(null)}
                    >
                      New Authors
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/authors/award-winners" 
                      className="dropdown-item"
                      onClick={() => setOpenDropdown(null)}
                    >
                      Award Winners
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav cart-link">
            <li className="nav-item">
              <Link href="/cart" className="nav-link position-relative">
                <span className="fas fa-shopping-cart"></span>
                <span className="cart-count">{cartCount}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
