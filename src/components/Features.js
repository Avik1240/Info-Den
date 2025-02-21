const features = [
  {
    number: '01',
    icon: 'fas fa-truck',
    title: 'Express Delivery',
    description: '24-48 hour delivery guaranteed',
    delay: 100
  },
  {
    number: '02',
    icon: 'fas fa-undo',
    title: 'Easy Returns',
    description: '30-day money-back guarantee',
    delay: 200
  },
  {
    number: '03',
    icon: 'fas fa-headset',
    title: '24/7 Support',
    description: 'Always here to help you',
    delay: 300
  },
  {
    number: '04',
    icon: 'fas fa-gift',
    title: 'Rewards Program',
    description: 'Earn points with every purchase',
    delay: 400
  }
];

const Features = () => {
  return (
    <section data-aos="fade-up" className="features-wrap" id="features">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6 text-center">
            <h2 className="section-title text-center">Our Features</h2>
            <p className="lead text-gray-text">Discover what makes us different</p>
          </div>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              className="feature-item" 
              data-aos="zoom-in" 
              data-aos-delay={feature.delay}
              key={index}
            >
              <div className="feature-content">
                <div className="feature-number">{feature.number}</div>
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <div className="feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
              <div className="feature-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
