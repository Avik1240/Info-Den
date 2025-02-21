import Link from 'next/link';

const categories = [
  {
    icon: 'fas fa-book',
    title: 'Fiction',
    description: 'Explore our collection of novels and stories',
    link: '/',
    delay: 100
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Academic',
    description: 'Textbooks and educational materials',
    link: '/',
    delay: 200
  },
  {
    icon: 'fas fa-brain',
    title: 'Self-Help',
    description: 'Books for personal development',
    link: '/',
    delay: 300
  },
  {
    icon: 'fas fa-child',
    title: 'Children',
    description: 'Books for young readers',
    link: '/',
    delay: 400
  }
];

const Categories = () => {
  return (
    <section className="categories-section" data-aos="fade-up" id="categories">
      <div className='container text-center'>
        <h2 className="text-center mb-5 section-title">Browse Categories</h2>
        <div className="row">
          {categories.map((category, index) => (
            <div 
              className="col-md-3" 
              data-aos="fade-up" 
              data-aos-delay={category.delay}
              key={index}
            >
              <Link href={category.link} className="category-card">
                <span className={category.icon}></span>
                <h5>{category.title}</h5>
                <p>{category.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
