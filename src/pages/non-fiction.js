import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Head from 'next/head';
import AddToCartButton from '../components/AddToCartButton';

const NonFictionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const { addToCart } = useCart();

  const books = [
    {
      id: 'nf1',
      title: 'Think and Grow Rich',
      author: 'Napoleon Hill',
      rating: 4.8,
      currentPrice: '19.99',
      originalPrice: '24.99',
      discount: 20,
      category: 'Self Help',
      coverClass: 'book-cover-1'
    },
    {
      id: 'nf2',
      title: 'A Brief History of Time',
      author: 'Stephen Hawking',
      rating: 4.9,
      currentPrice: '24.99',
      originalPrice: '29.99',
      discount: 15,
      category: 'Science',
      coverClass: 'book-cover-2'
    },
    {
      id: 'nf3',
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      rating: 4.7,
      currentPrice: '21.99',
      originalPrice: '26.99',
      discount: 18,
      category: 'History',
      coverClass: 'book-cover-3'
    }
  ];

  const funFacts = [
    { icon: 'fas fa-brain', number: '500+', label: 'Expert Authors' },
    { icon: 'fas fa-book', number: '1000+', label: 'Research Papers' },
    { icon: 'fas fa-users', number: '1M+', label: 'Readers' },
    { icon: 'fas fa-award', number: '100+', label: 'Awards' }
  ];

  const featuredTopics = [
    { emoji: '🧠', name: 'Psychology', description: 'Understanding the Mind' },
    { emoji: '🌍', name: 'History', description: 'Learning from the Past' },
    { emoji: '🔬', name: 'Science', description: 'Exploring the Universe' },
    { emoji: '📈', name: 'Business', description: 'Path to Success' }
  ];

  const categories = ['All Categories', 'Science', 'History', 'Business', 'Psychology', 'Self Help'];

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
        <title>Non-Fiction Books - Info Den</title>
        <meta name="description" content="Explore our vast collection of non-fiction books across various genres" />
      </Head>
      {/* Hero Section */}
      <section className="non-fiction-hero">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4">Expand Your Knowledge</h1>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-4">
              <form className="search-form" onSubmit={handleSearch}>
                <div className="input-group position-relative">
                  <input type="text" className="form-control" placeholder="Search for knowledge..." />
                  <button className="btn btn-primary subscribe-btn" type="submit">
                    <i className="fas fa-search me-2"></i>
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <p className="lead mb-4">Discover insights from the world's leading experts and thinkers</p>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="container">
        <nav className="category-nav">
          <ul className="list-unstyled d-flex justify-content-center mb-0 flex-wrap">
            {categories.map((category) => (
              <li key={category} className="mx-2">
                <button
                  className={selectedCategory === category ? 'active' : ''}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
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
              <div className="non-fiction-card">
                <span className="category-tag">{book.category}</span>
                <div className="book-image-wrapper">
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
          <h2 className="text-center mb-5">Knowledge Impact</h2>
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

      {/* Featured Topics */}
      <section className="featured-topics">
        <div className="container">
          <h2 className="text-center mb-5">Explore Topics</h2>
          <div className="row">
            {featuredTopics.map((topic, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="topic-card">
                  <div className="topic-image">{topic.emoji}</div>
                  <h3 className="topic-name">{topic.name}</h3>
                  <p className="topic-description">{topic.description}</p>
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
              <h3 className="section-title">Stay Informed!</h3>
              <p className="lead mb-4">Get weekly updates on new releases, author insights, and exclusive content! 📚</p>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <div className="input-group position-relative">
                  <input type="email" className="form-control" placeholder="Enter your email" />
                  <button className="btn btn-primary subscribe-btn" type="submit">
                    <i className="fas fa-paper-plane me-2"></i>
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NonFictionPage;
