import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from 'react';
import FeaturedBooks from '@/components/FeaturedBooks';
import Categories from '@/components/Categories';
import Features from '@/components/Features';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize AOS
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({
        once: true
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Info Den</title>
        <meta name="description" content="Info den - One stop solution for all your book needs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        {/* Hero Section */}
        <section className="hero-content">
        <div className="container text-center">
          <h1 className="text-3xl font-bold underline">Your Local Book Companion</h1>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-4">
              <form className="search-form">
                <div className="input-group position-relative">
                  <input type="text" className="form-control" placeholder="Search a book" />
                  <button className="btn btn-primary subscribe-btn" type="submit">
                    <i className="fas fa-search"></i>
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <p className="lead mb-4">Discover, Rent, or Buy Books with Easy Doorstep Delivery</p>
        </div>
        </section>

        {/* Featured Books Section */}
        <FeaturedBooks />

        {/* Categories Section */}
        <Categories />

        {/* Features Section */}
        <Features />

        {/* Why Choose Section */}
        <section data-aos="fade-up" className="why-choose-section py-5 " id="why-choose">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-6 text-center">
                <h2 className="section-title">Why Choose Info Den</h2>
                <p className="lead">Experience the future of book access with our innovative platform</p>
              </div>
            </div>
            <div className="row g-4">
              {[
                {
                  icon: 'fas fa-book-reader',
                  title: 'Flexible Options',
                  description: 'Choose between renting or buying books based on your needs and preferences',
                  features: ['Rent for short term', 'Buy for collection', 'Easy extensions'],
                  delay: 100
                },
                {
                  icon: 'fas fa-truck',
                  title: 'Quick Delivery',
                  description: 'Get your books delivered right to your doorstep with our efficient delivery network',
                  features: ['Same day delivery', 'Real-time tracking', 'Safe handling'],
                  delay: 200
                },
                {
                  icon: 'fas fa-shield-alt',
                  title: 'Secure System',
                  description: 'Experience worry-free transactions with our secure payment and rental system',
                  features: ['Safe payments', 'Verified vendors', 'Insured delivery'],
                  delay: 300
                },
                {
                  icon: 'fas fa-headset',
                  title: '24/7 Support',
                  description: 'Get assistance anytime with our dedicated customer support team',
                  features: ['Live chat', 'Quick response', 'Expert help'],
                  delay: 400
                }
              ].map((item, index) => (
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={item.delay} key={index}>
                  <div className="choose-card">
                    <div className="choose-icon">
                      <i className={item.icon}></i>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <div className="choose-hover">
                      <ul className="feature-list">
                        {item.features.map((feature, fIndex) => (
                          <li key={fIndex}><i className="fas fa-check"></i> {feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works py-5 " id="how-it-works">
          <div className="container text-center">
            <h2 className="text-center mb-5 section-title">How It Works</h2>
            <div className="row g-4">
              {[
                {
                  number: '1',
                  icon: 'fas fa-search',
                  title: 'Search',
                  description: 'Find your desired book using our smart search system',
                  delay: 100
                },
                {
                  number: '2',
                  icon: 'fas fa-hand-pointer',
                  title: 'Choose Option',
                  description: 'Select between renting or buying the book',
                  delay: 200
                },
                {
                  number: '3',
                  icon: 'fas fa-shopping-cart',
                  title: 'Place Order',
                  description: 'Complete the order with secure payment',
                  delay: 300
                },
                {
                  number: '4',
                  icon: 'fas fa-truck',
                  title: 'Doorstep Delivery',
                  description: 'Receive your book from our delivery agent',
                  delay: 400
                }
              ].map((step, index) => (
                <div className="col-md-3" data-aos="fade-up" data-aos-delay={step.delay} key={index}>
                  <div className="step-card">
                    <div className="step-number">{step.number}</div>
                    <div className="step-icon">
                      <span className={step.icon}></span>
                    </div>
                    <h4>{step.title}</h4>
                    <p className="">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="partner-section py-5 " id="partner">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-6 text-center">
                <h2 className="section-title">Partner With Us</h2>
                <p className="lead">Join our network of trusted book partners and expand your reach</p>
              </div>
            </div>
            <div className="row align-items-center g-4">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="partner-content">
                  <div className="partner-badge mb-3">
                    <span className="fas fa-store"></span>
                    For Book Vendors
                  </div>
                  <h3 className="mb-4">Grow Your Business With Us</h3>
                  <div className="partner-features">
                    {[
                      {
                        icon: 'fas fa-chart-line',
                        title: 'Expand Your Reach',
                        description: 'Connect with more readers through our platform'
                      },
                      {
                        icon: 'fas fa-truck',
                        title: 'Hassle-free Delivery',
                        description: 'We handle all logistics and delivery operations'
                      },
                      {
                        icon: 'fas fa-shield-alt',
                        title: 'Secure System',
                        description: 'Protected transactions and rental management'
                      }
                    ].map((feature, index) => (
                      <div className="feature-item" key={index}>
                        <span className="feature-icon">
                          <i className={feature.icon}></i>
                        </span>
                        <div className="feature-content">
                          <h5>{feature.title}</h5>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <a href="#" className="btn btn-primary btn-lg">
                      <i className="fas fa-handshake me-2"></i>
                      Become a Partner
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <div className="partner-card">
                  <div className="partner-stats row g-4">
                    {[
                      { icon: 'fas fa-users', count: '500+', label: 'Active Users' },
                      { icon: 'fas fa-book', count: '1000+', label: 'Books Listed' },
                      { icon: 'fas fa-store', count: '10+', label: 'Partner Vendors' },
                      { icon: 'fas fa-map-marker-alt', count: '5+', label: 'Cities Covered' }
                    ].map((stat, index) => (
                      <div className="col-6" key={index}>
                        <div className="stat-item">
                          <div className="stat-icon">
                            <i className={stat.icon}></i>
                          </div>
                          <h4>{stat.count}</h4>
                          <p>{stat.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section data-aos="fade-up">
          <div className="newsletter-section">
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <h3>Subscribe to Our Newsletter</h3>
                <p>Stay updated with our latest releases and special offers</p>
                <form className="newsletter-form">
                  <div className="input-group position-relative">
                    <input type="email" className="form-control" placeholder="Enter your email" />
                    <button className="btn btn-primary subscribe-btn" type="submit">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
