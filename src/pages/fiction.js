import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useCart } from '@/context/CartContext';
import AddToCartButton from '@/components/AddToCartButton';

// Book data - In a real app, this would come from an API
const books = [
  {
    id: 1,
    title: 'The Crystal Kingdom',
    author: 'Elena Moonweaver',
    genre: 'Fantasy & Magic',
    rating: 4.5,
    reviews: 128,
    currentPrice: '24.99',
    originalPrice: '29.99',
    description: 'A spellbinding tale of magic, mystery, and ancient prophecies where a young sorceress discovers her true destiny.',
    coverType: 'fantasy',
    series: 'The Enchanted Realms',
    releaseDate: '2024'
  },
  {
    id: 2,
    title: 'Nebula Dreams',
    author: 'Alexander Starling',
    genre: 'Sci-Fi & Space',
    rating: 5.0,
    reviews: 245,
    currentPrice: '29.99',
    originalPrice: '34.99',
    description: 'Journey through the cosmos in this mind-bending space odyssey that challenges the very nature of reality.',
    coverType: 'scifi',
    series: 'The Cosmic Chronicles',
    releaseDate: '2024'
  },
  {
    id: 3,
    title: 'Shadows in the Mist',
    author: 'Victoria Blackwood',
    genre: 'Mystery & Thriller',
    rating: 4.0,
    reviews: 189,
    currentPrice: '19.99',
    originalPrice: '24.99',
    description: 'Unravel the secrets hidden in the foggy streets of Victorian London in this gripping detective story.',
    coverType: 'mystery',
    series: 'The Gaslight Mysteries',
    releaseDate: '2023'
  },
  {
    id: 4,
    title: 'Hearts Aflame',
    author: 'Isabella Rose',
    genre: 'Romance & Drama',
    rating: 4.8,
    reviews: 312,
    currentPrice: '22.99',
    originalPrice: '27.99',
    description: 'A passionate tale of love, betrayal, and redemption set against the backdrop of Renaissance Italy.',
    coverType: 'fantasy',
    series: 'The Eternal Love Saga',
    releaseDate: '2024'
  },
  {
    id: 5,
    title: 'The Lost City',
    author: 'Marcus Adventure',
    genre: 'Adventure & Action',
    rating: 4.7,
    reviews: 156,
    currentPrice: '25.99',
    originalPrice: '30.99',
    description: 'Follow an intrepid archaeologist on a thrilling quest to discover an ancient civilization\'s greatest secret.',
    coverType: 'mystery',
    series: 'The Explorer\'s Chronicles',
    releaseDate: '2024'
  },
  {
    id: 6,
    title: 'The Queen\'s Gambit',
    author: 'Elizabeth Tudor',
    genre: 'Historical Tales',
    rating: 4.6,
    reviews: 203,
    currentPrice: '23.99',
    originalPrice: '28.99',
    description: 'Experience the intrigue and romance of the Tudor court through the eyes of a cunning lady-in-waiting.',
    coverType: 'fantasy',
    series: 'Royal Intrigues',
    releaseDate: '2023'
  }
];

const genres = [
  'Fantasy & Magic',
  'Sci-Fi & Space',
  'Mystery & Thriller',
  'Romance & Drama',
  'Adventure & Action',
  'Historical Tales'
];

const featuredSeries = [
  {
    id: 1,
    name: 'The Enchanted Realms',
    description: 'A magical series full of wonder and adventure',
    bookCount: 3,
    icon: '🏰'
  },
  {
    id: 2,
    name: 'The Cosmic Chronicles',
    description: 'Epic space adventures across the galaxy',
    bookCount: 4,
    icon: '🚀'
  },
  {
    id: 3,
    name: 'The Gaslight Mysteries',
    description: 'Victorian-era detective stories',
    bookCount: 5,
    icon: '🔍'
  }
];

const readingStats = [
  {
    id: 1,
    title: 'Active Readers',
    value: '10K+',
    icon: '👥'
  },
  {
    id: 2,
    title: 'Books Read',
    value: '50K+',
    icon: '📚'
  },
  {
    id: 3,
    title: 'Reading Hours',
    value: '100K+',
    icon: '⏰'
  }
];

// Book Card Component
const BookCard = ({ book }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<i key={`empty-star-${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  return (
    <div className="col-lg-4 col-md-6">
      <div className="fiction-card">
        <span className="genre-badge">{book.genre}</span>
        <div className="book-image">
          <div className={`book-cover-${book.coverType}`} style={{ height: '300px' }}></div>
          <div className="quick-view">
            <button className="btn btn-primary btn-sm">Quick Preview</button>
          </div>
        </div>
        <div className="book-content">
          <h4>{book.title}</h4>
          <p className="book-author">By {book.author}</p>
          <div className="book-rating">
            {renderStars(book.rating)}
            <span className="ms-2">({book.rating}) · {book.reviews} reviews</span>
          </div>
          <p className="text-muted">{book.description}</p>
          <div className="book-meta">
            <span className="series">{book.series}</span>
            <span className="release-date">{book.releaseDate}</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="price">
              <span className="book-price">${book.currentPrice}</span>
              {book.originalPrice && <span className="original">${book.originalPrice}</span>}
            </div>
            <AddToCartButton book={book} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Featured Series Card Component
const SeriesCard = ({ series }) => (
  <div className="col-lg-4 col-md-6">
    <div className="series-card">
      <div className="series-image">{series.icon}</div>
      <h3 className="series-title">{series.name}</h3>
      <p className="series-description">{series.description}</p>
      <div className="series-meta">
        <span>{series.bookCount} Books in Series</span>
      </div>
    </div>
  </div>
);

// Reading Stats Card Component
const StatCard = ({ stat }) => (
  <div className="col-lg-4 col-md-6">
    <div className="stat-card">
      <div className="stat-icon">{stat.icon}</div>
      <div className="stat-number">{stat.value}</div>
      <div className="stat-title">{stat.title}</div>
    </div>
  </div>
);

export default function Fiction() {
  const [selectedGenre, setSelectedGenre] = useState('All Realms');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  // Filter books based on genre and search query
  useEffect(() => {
    let filtered = books;
    
    if (selectedGenre !== 'All Realms') {
      filtered = filtered.filter(book => book.genre === selectedGenre);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(book => 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredBooks(filtered);
  }, [selectedGenre, searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality is already handled by the useEffect
  };

  return (
    <>
      <Head>
        <title>Fiction Books - Info Den</title>
        <meta name="description" content="Explore our vast collection of fiction books across various genres" />
      </Head>

      <section className="fiction-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-4 fw-bold mb-4">Enter the World of Fiction</h1>
              <p className="lead mb-4">Where imagination knows no bounds, and every page turn leads to a new adventure</p>
              <div className="search-container mb-5">
                <form className="search-form" onSubmit={handleSearch}>
                  <div className="input-group position-relative">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Search for magical adventures..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                      <i className="fas fa-search"></i>
                      Discover
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="genre-filter">
          <div className="d-flex flex-wrap justify-content-center">
            <button
              className={selectedGenre === 'All Realms' ? 'active' : ''}
              onClick={() => setSelectedGenre('All Realms')}
            >
              All Genres
            </button>
            {genres.map((genre) => (
              <button
                key={genre}
                className={selectedGenre === genre ? 'active' : ''}
                onClick={() => setSelectedGenre(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        <div className="row g-4 mt-4">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {filteredBooks.length > 0 && (
          <div className="text-center mt-5 mb-5">
            <button className="load-more-btn">
              Discover More Tales
              <i className="fas fa-magic ms-2"></i>
            </button>
          </div>
        )}
      </div>

      {/* Featured Series Section */}
      <section className="featured-series">
        <div className="container">
          <h2 className="text-center section-title mb-5">Epic Series to Explore</h2>
          <div className="row g-4">
            {featuredSeries.map(series => (
              <SeriesCard key={series.id} series={series} />
            ))}
          </div>
        </div>
      </section>

      {/* Reading Stats Section */}
      <section className="reading-stats">
        <div className="container">
          <h2 className="text-center section-title mb-5">Our Reading Community</h2>
          <div className="row g-4">
            {readingStats.map(stat => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="section-title">Stay Updated</h2>
              <p className="mb-4">Subscribe to receive updates about new releases and special offers</p>
              <form className="search-form">
                <div className="input-group">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter your email address"
                  />
                  <button className="subscribe-btn" type="submit">
                    <i className="fas fa-paper-plane"></i>
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
}
