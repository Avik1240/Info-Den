// Third-party styles first
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Custom styles last to override third-party styles
import "@/styles/globals.css";
import "@/styles/responsive.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/styles/authors.css';
import '@/styles/fiction.css';
import '../styles/children.css';
import '@/styles/non-fiction.css';
import '../styles/academic.css';
import '../styles/about.css';
import '@/styles/cart.css';

import { useEffect } from 'react';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function App({ Component, pageProps }) {
  useEffect(() => {
    // Import Bootstrap and Popper.js on the client side
    if (typeof window !== 'undefined') {
      require('@popperjs/core');
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <CartProvider>
      <div id="wrapper">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
