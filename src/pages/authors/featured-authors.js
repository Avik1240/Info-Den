import AuthorCard from "@/components/AuthorCard";
import Head from 'next/head';

export default function FeaturedAuthors() {
  const featuredAuthors = [
    {
      name: "Sarah Mitchell",
      genre: "Mystery & Thriller",
      bio: "Bestselling author of the Detective Claire Series",
      profileImage: "4",
      socialLinks: [
        { platform: "twitter", url: "#" },
        { platform: "instagram", url: "#" },
        { platform: "facebook", url: "#" },
      ],
      stats: [
        { value: "12", label: "Books" },
        { value: "5M", label: "Readers" },
        { value: "4.8", label: "Rating" },
      ],
      profileUrl: "#",
    },
    {
      name: "James Wilson",
      genre: "Science Fiction",
      bio: "Creator of the acclaimed 'Nova Chronicles'",
      profileImage: "5",
      socialLinks: [
        { platform: "twitter", url: "#" },
        { platform: "instagram", url: "#" },
        { platform: "facebook", url: "#" },
      ],
      stats: [
        { value: "9", label: "Books" },
        { value: "3M", label: "Readers" },
        { value: "4.9", label: "Rating" },
      ],
      profileUrl: "#",
    },
    {
      name: "Maria Garcia",
      genre: "Romance",
      bio: "International bestselling author of 'Love in Paris'",
      profileImage: "6",
      socialLinks: [
        { platform: "twitter", url: "#" },
        { platform: "instagram", url: "#" },
        { platform: "facebook", url: "#" },
      ],
      stats: [
        { value: "15", label: "Books" },
        { value: "7M", label: "Readers" },
        { value: "4.7", label: "Rating" },
      ],
      profileUrl: "#",
    },
  ];

  return (
    <>
      <Head>
        <title>Featured Authors - Info Den</title>
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
              <h1 className="display-4 fw-bold mb-4">Featured Authors</h1>
              <p className="lead mb-4">
                Meet our most celebrated authors who have captivated millions of
                readers worldwide with their extraordinary storytelling
                abilities.
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
            {featuredAuthors.map((author, index) => (
              <AuthorCard key={index} author={author} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
