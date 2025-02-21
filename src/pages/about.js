import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>About Us - Info Den</title>
        <meta name="description" content="Learn about Info Den's mission to revolutionize book access through our innovative rent-or-buy model" />
      </Head>

      <div className="container-fluid p-0">
        {/* Hero Section */}
        <div className="about-hero position-relative py-5">
          <div className="container">
            <div className="row align-items-center min-vh-50">
              <div className="col-lg-6" data-aos="fade-right">
                <h1 className="display-4 mb-4">Revolutionizing Book Access</h1>
                <p className="lead mb-4">
                  We're making books more accessible through our innovative rent-or-buy
                  model, bringing the convenience of food delivery to the world of books.
                </p>
                <div className="d-flex gap-3">
                  <Link href="#our-story" className="btn btn-primary">
                    Learn More
                  </Link>
                  <Link href="#contact" className="btn btn-outline-primary">
                    Contact Us
                  </Link> 
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <div className="hero-image-wrapper">
                  <div className="hero-overlay"></div>
                  <img
                    src="https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg"
                    alt="About Hero"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-3">
              <div className="stat-card" data-aos="fade-up">
                <i className="fas fa-book stat-icon"></i>
                <div className="counter">1000+</div>
                <p>Books Available</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card" data-aos="fade-up" data-aos-delay="100">
                <i className="fas fa-users stat-icon"></i>
                <div className="counter">500+</div>
                <p>Happy Readers</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-store stat-icon"></i>
                <div className="counter">10+</div>
                <p>Partner Vendors</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-truck stat-icon"></i>
                <div className="counter">20+</div>
                <p>Delivery Agents</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div id="our-story" className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <div className="story-image-wrapper">
                <div className="story-overlay"></div>
                <img
                  src="https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg"
                  alt="Our Story"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="mb-4">Our Story</h2>
              <p className="mb-4">
                We started with a simple idea: make books as accessible as ordering food. Our
                platform combines the convenience of online shopping with the flexibility of rentals,
                making reading more affordable and sustainable.
              </p>
              <div className="features-grid">
                <div className="feature-item about-feature-item">
                  <i className="fas fa-book"></i>
                  <div>
                    <h5>Rent or Buy</h5>
                    <p>Choose what works best for you</p>
                  </div>
                </div>
                <div className="feature-item about-feature-item">
                  <i className="fas fa-shield-alt"></i>
                  <div>
                    <h5>Secure System</h5>
                    <p>Protected by security deposits</p>
                  </div>
                </div>
                <div className="feature-item about-feature-item">
                  <i className="fas fa-truck"></i>
                  <div>
                    <h5>Quick Delivery</h5>
                    <p>Dedicated delivery network</p>
                  </div>
                </div>
                <div className="feature-item about-feature-item">
                  <i className="fas fa-handshake"></i>
                  <div>
                    <h5>Vendor Partnership</h5>
                    <p>Growing network of book partners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-darker py-5">
          <div className="container">
            <h2 className="text-center mb-5">Our Values</h2>
            <div className="row g-4">
              <div className="col-md-4" data-aos="fade-up">
                <div className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-book-reader"></i>
                  </div>
                  <h4>Accessibility</h4>
                  <p>Making books accessible through flexible rental and purchase options</p>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-hand-holding-heart"></i>
                  </div>
                  <h4>Community</h4>
                  <p>Building a network of readers and trusted book vendors</p>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h4>Trust</h4>
                  <p>Ensuring secure and reliable service for all users</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div id="team" className="container py-5">
          <h2 className="text-center mb-5">Our Team</h2>
          <div className="row g-4">
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
              <div className="team-card">
                <div className="team-img-wrapper">
                  <img
                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
                    alt="Sarah Johnson"
                    className="img-fluid"
                  />
                </div>
                <h5 className="mt-4">Sarah Johnson</h5>
                <p className="text-primary mb-2">Founder & CEO</p>
                <p className="mb-3">Leading our mission to revolutionize book access</p>
                <div className="social-links d-flex align-items-center justify-content-center z-1 position-relative">
                  <a href="#" className="social-link-box">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="social-link-box">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
              <div className="team-card">
                <div className="team-img-wrapper">
                  <img
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                    alt="Michael Chen"
                    className="img-fluid"
                  />
                </div>
                <h5 className="mt-4">Michael Chen</h5>
                <p className="text-primary mb-2">Operations Head</p>
                <p className="mb-3">Managing our delivery network and vendor partnerships</p>
                <div className="social-links d-flex align-items-center justify-content-center z-1 position-relative">
                  <a href="#" className="social-link-box">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="social-link-box">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
              <div className="team-card">
                <div className="team-img-wrapper">
                  <img
                    src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg"
                    alt="Emily Rodriguez"
                    className="img-fluid"
                  />
                </div>
                <h5 className="mt-4">Emily Rodriguez</h5>
                <p className="text-primary mb-2">Customer Experience</p>
                <p className="mb-3">Ensuring smooth rental and return processes</p>
                <div className="social-links d-flex align-items-center justify-content-center z-1 position-relative">
                  <a href="#" className="social-link-box">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="social-link-box">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="400">
              <div className="team-card">
                <div className="team-img-wrapper">
                  <img
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                    alt="David Smith"
                    className="img-fluid"
                  />
                </div>
                <h5 className="mt-4">David Smith</h5>
                <p className="text-primary mb-2">Vendor Relations</p>
                <p className="mb-3">Growing our network of book partners</p>
                <div className="social-links d-flex align-items-center justify-content-center z-1 position-relative">
                  <a href="#" className="social-link-box">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="social-link-box">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
