import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    {
      title: "Navigation",
      links: [
        { href: "#categories", text: "Categories" },
        { href: "#featured-books", text: "Featured Books" },
        { href: "#features", text: "Features" }
      ]
    },
    {
      title: "Company",
      links: [
        { href: "/about", text: "About Us" },
        { href: "/contact", text: "Contact Us" },
        { href: "/terms", text: "Terms & Conditions" },
        { href: "/privacy", text: "Privacy Policy" }
      ]
    }
  ];

  const socialLinks = [
    { platform: "facebook", icon: "fab fa-facebook-f", href: "#" },
    { platform: "twitter", icon: "fab fa-twitter", href: "#" },
    { platform: "instagram", icon: "fab fa-instagram", href: "#" },
    { platform: "linkedin", icon: "fab fa-linkedin-in", href: "#" }
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {quickLinks.map((section, index) => (
            <div key={index} className="col-md-4">
              <ul className="list-unstyled footer-ul">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('#') ? (
                      <a href={link.href} className="quick-links">
                        {link.text}
                      </a>
                    ) : (
                      <Link href={link.href} className="quick-links">
                        {link.text}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-md-4">
            <div className="social-wrap d-flex align-items-center justify-content-end">
              <h5 className="mb-0">Connect:</h5>
              <div className="social-links d-flex align-items-center ms-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="social-link-box"
                    aria-label={`Follow us on ${social.platform}`}
                  >
                    <span className={social.icon}></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">&copy; {currentYear} InfoDen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
