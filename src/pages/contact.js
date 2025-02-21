import { useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Import Leaflet dynamically since it requires window object
const MapComponent = dynamic(() => import('../components/MapComponent'), {
  ssr: false,
  loading: () => <div style={{ height: '400px', background: '#f0f0f0' }}>Loading map...</div>
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('sending');

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('');
        e.target.reset();
      }, 2000);
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>Contact Us - Info Den</title>
        <meta name="description" content="Get in touch with Info Den. We'd love to hear from you!" />
        <link 
          rel="stylesheet" 
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>

      <div className="hero-section">
        <div className="container">
          <div className="hero-content contact-top">
            <h1>Get in Touch</h1>
            <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-0">
              <div className="col-lg-4">
                <div className="contact-sidebar">
                  <h3 className="mb-4">Contact Information</h3>
                  <div className="contact-info-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <h5>Our Location</h5>
                      <p>123 Book Street, Reading City, RC 12345</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <i className="fas fa-phone-alt"></i>
                    <div>
                      <h5>Phone Number</h5>
                      <p>(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <h5>Email Address</h5>
                      <p>info@bookstore.com</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <i className="fas fa-clock"></i>
                    <div>
                      <h5>Working Hours</h5>
                      <p>
                        Mon - Fri: 9:00 AM - 6:00 PM<br />
                        Sat: 10:00 AM - 4:00 PM<br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                  <div className="social-links">
                    <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="contact-main">
                  <h2 className="mb-4">Send us a Message</h2>
                  <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">First Name</label>
                          <input type="text" className="form-control" placeholder="John" required />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Last Name</label>
                          <input type="text" className="form-control" placeholder="Doe" required />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Email Address</label>
                          <input type="email" className="form-control" placeholder="john@example.com" required />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Phone Number</label>
                          <input type="tel" className="form-control" placeholder="(123) 456-7890" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <select className="form-control" required>
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Customer Support</option>
                        <option value="business">Business Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <input type="text" className="form-control" placeholder="How can we help you?" />
                    </div>
                    <button 
                      type="submit" 
                      className="btn-submit" 
                      disabled={isSubmitting}
                    >
                      {submitStatus === 'sending' ? (
                        <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                      ) : submitStatus === 'success' ? (
                        <><i className="fas fa-check"></i> Message Sent!</>
                      ) : (
                        <>Send Message <i className="fas fa-paper-plane ms-2"></i></>
                      )}
                    </button>
                  </form>

                  <div className="map-container">
                    <MapComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
