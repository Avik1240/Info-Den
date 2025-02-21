import AuthorCard from "@/components/AuthorCard";
import Head from 'next/head';

export default function NewAuthors() {
  const newAuthors = [
    {
      name: "Emily Chen",
      genre: "Young Adult",
      bio: "Breakout author of 'Digital Dreams'",
      profileImage: "1",
      socialLinks: [
        { platform: "twitter", url: "#" },
        { platform: "instagram", url: "#" },
        { platform: "facebook", url: "#" },
      ],
      stats: [
        { value: "2", label: "Books" },
        { value: "500K", label: "Readers" },
        { value: "4.7", label: "Rating" },
      ],
      profileUrl: "#",
    },
    {
      name: "Marcus Thompson",
      genre: "Fantasy",
      bio: "Rising star with 'The Crystal Prophecy'",
      profileImage: "2",
      socialLinks: [
        { platform: "twitter", url: "#" },
        { platform: "instagram", url: "#" },
        { platform: "facebook", url: "#" },
      ],
      stats: [
        { value: "3", label: "Books" },
        { value: "300K", label: "Readers" },
        { value: "4.6", label: "Rating" },
      ],
      profileUrl: "#",
    },
    {
      name: "Sophia Patel",
      genre: "Literary Fiction",
      bio: "Debut novelist of 'Whispers in the Wind'",
      profileImage: "3",
      socialLinks: [
        { platform: "twitter", url: "#" },
        { platform: "instagram", url: "#" },
        { platform: "facebook", url: "#" },
      ],
      stats: [
        { value: "1", label: "Books" },
        { value: "200K", label: "Readers" },
        { value: "4.8", label: "Rating" },
      ],
      profileUrl: "#",
    },
  ];

  return (
    <>
      <Head>
        <title>New Authors - Info Den</title>
        <meta
          name="description"
          content="Explore our vast collection of academic books across various subjects"
        />
      </Head>
      {/* Hero Section */}
      <section className="author-hero py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">New Authors</h1>
              <p className="lead mb-4">
                Discover the fresh voices shaping the future of literature.
                These emerging talents bring unique perspectives and innovative
                storytelling to our collection.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="author-hero-image">
                <div className="floating-cards">
                  <div className="card-1"></div>
                  <div className="card-2"></div>
                  <div className="card-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authors Grid */}
      <section className="authors-grid py-5 bg-darker">
        <div className="container">
          <div className="row g-4">
            {newAuthors.map((author, index) => (
              <AuthorCard key={index} author={author} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
