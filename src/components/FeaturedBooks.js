import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import BookCard from './BookCard';

const featuredBooks = [
  {
    id: 'book1',
    title: 'The Art of Fiction',
    author: 'John Gardner',
    rating: 4.5,
    currentPrice: '24.99',
    originalPrice: '29.99',
    discount: 20,
    coverClass: 'book-cover-1'
  },
  {
    id: 'book2',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    rating: 5.0,
    currentPrice: '19.99',
    originalPrice: '23.99',
    discount: 15,
    coverClass: 'book-cover-2'
  },
  {
    id: 'book3',
    title: 'Atomic Habits',
    author: 'James Clear',
    rating: 4.0,
    currentPrice: '22.99',
    originalPrice: '27.99',
    discount: 25,
    coverClass: 'book-cover-3'
  },
  {
    id: 'book4',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    rating: 4.5,
    currentPrice: '21.99',
    originalPrice: '28.99',
    discount: 30,
    coverClass: 'book-cover-4'
  }
];

const FeaturedBooks = () => {
  return (
    <section className="featured-books" id="featured-books">
      <div className='container text-center'>
        <h2 className="section-title ">Featured Books</h2>
        <div className="position-relative book-wrap">
          <Swiper
            modules={[Navigation, Pagination]}
            className="featured-swiper"
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            speed={1500}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {featuredBooks.map((book) => (
              <SwiperSlide key={book.id}>
                <BookCard book={book} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-btn-wrap d-flex align-items-center w-100 position-absolute justify-content-between">
            <div className="swiper-button-prev swiper-btn"></div>
            <div className="swiper-button-next swiper-btn"></div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
