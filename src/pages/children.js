import { useState } from 'react';
import Head from 'next/head';
import { useCart } from '../context/CartContext';
import AddToCartButton from '../components/AddToCartButton';

const ChildrenPage = () => {
  const [selectedAge, setSelectedAge] = useState('All Ages');
  const { addToCart } = useCart();

  const books = [
    {
      id: 'child1',
      title: 'The Magic Tree House',
      author: 'Mary Pope Osborne',
      rating: 4.5,
      currentPrice: '12.99',
      originalPrice: '14.99',
      discount: 15,
      ageGroup: '6-8',
      coverClass: 'book-cover-1'
    },
    {
      id: 'child2',
      title: 'Goodnight Moon',
      author: 'Margaret Wise Brown',
      rating: 4.0,
      currentPrice: '9.99',
      originalPrice: '11.99',
      discount: 20,
      ageGroup: '3-5',
      coverClass: 'book-cover-2'
    },
    {
      id: 'child3',
      title: 'Bridge to Terabithia',
      author: 'Katherine Paterson',
      rating: 4.8,
      currentPrice: '14.99',
      originalPrice: '16.99',
      discount: 10,
      ageGroup: '9-12',
      coverClass: 'book-cover-3'
    }
  ];

  const funFacts = [
    { icon: 'fas fa-book-reader', number: '1000+', label: 'Magic Stories' },
    { icon: 'fas fa-star', number: '50+', label: 'Award Winners' },
    { icon: 'fas fa-smile', number: '100K+', label: 'Happy Readers' },
    { icon: 'fas fa-paint-brush', number: '200+', label: 'Illustrators' }
  ];

  const characters = [
    { emoji: '🦁', name: 'Leo the Brave Lion', book: 'The Jungle Tales' },
    { emoji: '🧚', name: 'Sparkle the Fairy', book: 'Magic Garden' },
    { emoji: '🐉', name: 'Puff the Dragon', book: 'Dragon Friends' },
    { emoji: '🐰', name: 'Hop the Rabbit', book: 'Forest Adventures' }
  ];

  const ageGroups = ['All Ages', '0-2 Years', '3-5 Years', '6-8 Years', '9-12 Years'];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Implement newsletter subscription
  };

  return (
    <>
      <Head>
        <title>Children Books - Info Den</title>
        <meta name="description" content="Explore our vast collection of children books across various age groups" />
      </Head>
      {/* Hero Section */}
      <section className="children-hero">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4">Discover Magic in Every Page!</h1>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-4">
              <form className="search-form" onSubmit={handleSearch}>
                <div className="input-group position-relative">
                  <input type="text" className="form-control" placeholder="Search for magical stories..." />
                  <button className="btn btn-primary subscribe-btn" type="submit">
                    <i className="fas fa-search me-2"></i>
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <p className="lead mb-4">Join our wonderful world of stories, adventures, and imagination</p>
        </div>
      </section>

      {/* Age Group Navigation */}
      <div className="container">
        <nav className="age-group-nav">
          <ul className="list-unstyled d-flex justify-content-center mb-0 flex-wrap">
            {ageGroups.map((age) => (
              <li key={age} className="mx-2">
                <button
                  className={selectedAge === age ? 'active' : ''}
                  onClick={() => setSelectedAge(age)}
                >
                  {age}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Books Grid */}
      <section className="container py-5">
        <div className="row">
          {books.map((book) => (
            <div key={book.id} className="col-lg-4 col-md-6">
              <div className="book-card">
                <span className="age-badge">Ages {book.ageGroup}</span>
                <div className="book-image">
                  <div className={book.coverClass} data-title={book.title}></div>
                </div>
                <div className="book-content">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">By {book.author}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="price">
                      <span className="current">${book.currentPrice}</span>
                      {book.discount && (
                        <span className="original">${book.originalPrice}</span>
                      )}
                    </div>
                    <AddToCartButton book={book} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="fun-facts-section">
        <div className="container">
          <h2 className="text-center mb-5">Fun Reading Facts</h2>
          <div className="row">
            {funFacts.map((fact, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="fun-fact-card">
                  <div className="fun-fact-icon">
                    <i className={fact.icon}></i>
                  </div>
                  <div className="fun-fact-number">{fact.number}</div>
                  <div className="fun-fact-label">{fact.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Characters */}
      <section className="featured-characters">
        <div className="container">
          <h2 className="text-center mb-5">Meet Our Magical Friends</h2>
          <div className="row">
            {characters.map((character, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="character-card">
                  <div className="character-image">{character.emoji}</div>
                  <h3 className="character-name">{character.name}</h3>
                  <p className="character-book">from "{character.book}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h3 className="section-title">Join Our Story Club!</h3>
              <p className="lead mb-4">Get weekly updates on new adventures, magical tales, and special surprises! 🎉</p>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <div className="input-group position-relative">
                  <input type="email" className="form-control" placeholder="Enter parent's email" />
                  <button className="btn btn-primary subscribe-btn" type="submit">
                    <i className="fas fa-paper-plane me-2"></i>
                    Subscribe
                  </button>
                </div>
                <small className="text-muted mt-2 d-block">Parents will be notified of all communications</small>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChildrenPage;
