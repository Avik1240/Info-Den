import { useState } from 'react';
import Head from 'next/head';
import { useCart } from '../context/CartContext';
import AddToCartButton from '../components/AddToCartButton';

const AcademicPage = () => {
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const { addToCart } = useCart();

  const books = [
    {
      id: 'acad1',
      title: 'Advanced Calculus',
      author: 'Dr. Sarah Johnson',
      rating: 4.8,
      currentPrice: '49.99',
      originalPrice: '59.99',
      discount: 15,
      subject: 'Mathematics',
      coverClass: 'book-cover-math'
    },
    {
      id: 'acad2',
      title: 'Quantum Physics',
      author: 'Prof. Michael Chen',
      rating: 4.7,
      currentPrice: '54.99',
      originalPrice: '64.99',
      discount: 20,
      subject: 'Science',
      coverClass: 'book-cover-science'
    },
    {
      id: 'acad3',
      title: 'Data Structures',
      author: 'Dr. Alex Rivera',
      rating: 4.9,
      currentPrice: '44.99',
      originalPrice: '54.99',
      discount: 10,
      subject: 'Technology',
      coverClass: 'book-cover-tech'
    },
    {
      id: 'acad4',
      title: 'Engineering Mechanics',
      author: 'Prof. Emily Zhang',
      rating: 4.6,
      currentPrice: '59.99',
      originalPrice: '69.99',
      discount: 15,
      subject: 'Engineering',
      coverClass: 'book-cover-eng'
    }
  ];

  const funFacts = [
    { icon: 'fas fa-graduation-cap', number: '1000+', label: 'Academic Titles' },
    { icon: 'fas fa-users', number: '500+', label: 'Expert Authors' },
    { icon: 'fas fa-book-reader', number: '100K+', label: 'Students' },
    { icon: 'fas fa-university', number: '200+', label: 'Universities' }
  ];

  const featuredTopics = [
    { emoji: '🔬', name: 'Research Methods', field: 'Research' },
    { emoji: '🧮', name: 'Statistical Analysis', field: 'Statistics' },
    { emoji: '🧪', name: 'Lab Techniques', field: 'Science' },
    { emoji: '💻', name: 'Programming', field: 'Computer Science' }
  ];

  const subjects = ['All Subjects', 'Mathematics', 'Science', 'Technology', 'Engineering', 'Medicine'];

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
        <title>Academic Books - Info Den</title>
        <meta name="description" content="Explore our vast collection of academic books across various subjects" />
      </Head>

      {/* Hero Section */}
      <section className="academic-hero">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4">Elevate Your Knowledge!</h1>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-4">
              <form className="search-form" onSubmit={handleSearch}>
                <div className="input-group position-relative">
                  <input type="text" className="form-control" placeholder="Search academic resources..." />
                  <button className="btn btn-primary subscribe-btn" type="submit">
                    <i className="fas fa-search me-2"></i>
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <p className="lead mb-4">Discover comprehensive academic resources for every field of study</p>
        </div>
      </section>

      {/* Subject Navigation */}
      <div className="container">
        <nav className="subject-nav">
          <ul className="list-unstyled d-flex justify-content-center mb-0 flex-wrap">
            {subjects.map((subject) => (
              <li key={subject} className="mx-2">
                <button
                  className={selectedSubject === subject ? 'active' : ''}
                  onClick={() => setSelectedSubject(subject)}
                >
                  {subject}
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
                <span className="subject-badge">{book.subject}</span>
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
          <h2 className="text-center mb-5">Academic Excellence</h2>
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
          <h2 className="text-center mb-5">Featured Topics</h2>
          <div className="row">
            {featuredTopics.map((topic, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="topic-card">
                  <div className="topic-image">{topic.emoji}</div>
                  <h3 className="topic-name">{topic.name}</h3>
                  <p className="topic-field">Field: {topic.field}</p>
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
              <h3 className="section-title">Join Our Academic Community!</h3>
              <p className="lead mb-4">Get weekly updates on new publications, research papers, and academic resources! 📚</p>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <div className="input-group position-relative">
                  <input type="email" className="form-control" placeholder="Enter your academic email" />
                  <button className="btn btn-primary subscribe-btn" type="submit">
                    <i className="fas fa-paper-plane me-2"></i>
                    Subscribe
                  </button>
                </div>
                <small className="text-muted mt-2 d-block">Stay updated with the latest in academia</small>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcademicPage;
