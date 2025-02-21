export default function AuthorCard({ author }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="author-card">
        <div className="author-image">
          <div className={`author-profile-${author.profileImage}`}></div>
          <div className="author-social">
            {author.socialLinks.map((social, index) => (
              <a key={index} href={social.url} className="social-icon">
                <i className={`fab fa-${social.platform}`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="author-info">
          <h3>{author.name}</h3>
          <p className="author-genre">{author.genre}</p>
          <p className="author-bio">{author.bio}</p>
          <div className="author-stats">
            {author.stats.map((stat, index) => (
              <div key={index} className="stat">
                <span className="number">{stat.value}</span>
                <span className="label">{stat.label}</span>
              </div>
            ))}
          </div>
          <a href={author.profileUrl} className="btn btn-primary view-profile">
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}
