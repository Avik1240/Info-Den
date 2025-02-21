import { useCart } from '@/context/CartContext';
import AddToCartButton from './AddToCartButton';

const BookCard = ({ book }) => {
  const { addToCart } = useCart();
  const { id, title, author, rating, currentPrice, originalPrice, discount, coverClass } = book;

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`star-${i}`} className="fas fa-star"></span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half-star" className="fas fa-star-half-alt"></span>);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-star-${i}`} className="far fa-star"></span>);
    }

    return stars;
  };

  return (
    <div className="book-card" data-book-id={id}>
      <div className={`book-image ${coverClass}`}>
        {discount && <span className="discount">-{discount}%</span>}
      </div>
      <div className="book-details">
        <h3>{title}</h3>
        <p className="author">{author}</p>
        <div className="rating">
          {renderStars(rating)}
          <span>{rating}</span>
        </div>
        <div className="price">
          <span className="current">${currentPrice}</span>
          <span className="original">${originalPrice}</span>
        </div>
        <AddToCartButton book={book} />
      </div>
    </div>
  );
};

export default BookCard;
