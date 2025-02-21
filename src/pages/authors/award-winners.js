import AuthorCard from '@/components/AuthorCard';
import Head from 'next/head';

export default function AwardWinners() {
  const awardWinningAuthors = [
    {
      name: "Robert Anderson",
      genre: "Literary Fiction",
      bio: "Pulitzer Prize winner for 'The Echo of Silence' (2024)",
      profileImage: "7",
      socialLinks: [
        { platform: "twitter", url: "#" },
        { platform: "instagram", url: "#" },
        { platform: "facebook", url: "#" }
      ],
      stats: [
        { value: "8", label: "Books" },
        { value: "3", label: "Awards" },
        { value: "4.9", label: "Rating" }
      ],
      profileUrl: "#"
    },
    {
      name: "Elena Martinez",
      genre: "Historical Fiction",
      bio: "National Book Award winner for 'Threads of Time' (2023)",
      profileImage: "8",
      socialLinks: [
        { platform: "twitter", url: "#" },
        { platform: "instagram", url: "#" },
        { platform: "facebook", url: "#" }
      ],
      stats: [
        { value: "6", label: "Books" },
        { value: "2", label: "Awards" },
        { value: "4.8", label: "Rating" }
      ],
      profileUrl: "#"
    },
    {
      name: "David Kim",
      genre: "Contemporary Fiction",
      bio: "Man Booker Prize winner for 'The Glass Garden' (2024)",
      profileImage: "9",
      socialLinks: [
        { platform: "twitter", url: "#" },
        { platform: "instagram", url: "#" },
        { platform: "facebook", url: "#" }
      ],
      stats: [
        { value: "5", label: "Books" },
        { value: "2", label: "Awards" },
        { value: "4.9", label: "Rating" }
      ],
      profileUrl: "#"
    }
  ];

  return (
    <>
          <Head>
        <title>Award Winners - Info Den</title>
        <meta name="description" content="Explore our vast collection of academic books across various subjects" />
      </Head>
      {/* Hero Section */}
      <section className="author-hero py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Award Winners</h1>
              <p className="lead mb-4">
                Celebrating excellence in literature. These distinguished authors have been recognized 
                for their outstanding contributions to the literary world.
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
            {awardWinningAuthors.map((author, index) => (
              <AuthorCard key={index} author={author} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
