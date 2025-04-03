import { Link } from "wouter";
import { portfolioItems } from "@/lib/data";
import PortfolioItem from "@/components/PortfolioItem";
import SEO from "@/components/SEO";

const Portfolio = () => {
  // JSON-LD for Portfolio Page
  const portfolioJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "headline": "LaunchLayer Web Development Portfolio - 50+ Successful Projects",
    "description": "Browse our portfolio of 50+ web development projects with a 99% client satisfaction rate. See examples of our custom websites, e-commerce solutions, and more.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": portfolioItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": item.title,
          "description": item.description,
          "image": item.image,
          "creator": {
            "@type": "Organization",
            "name": "LaunchLayer"
          }
        }
      }))
    }
  };

  return (
    <main className="pt-24">
      <SEO 
        title="Web Development Portfolio | LaunchLayer Philadelphia"
        description="View our portfolio of 50+ successful web development projects completed over 5+ years with a 99% client satisfaction rate. Custom websites built in Philadelphia, PA."
        keywords="web design portfolio, website examples, web developer projects, Philadelphia web design samples, responsive website gallery, business website portfolio"
        ogTitle="LaunchLayer Portfolio: 50+ Successful Web Projects"
        ogDescription="See real examples of our web development work across various industries. Responsive designs, e-commerce solutions, and business websites showcasing our expertise."
        jsonLd={portfolioJsonLd}
      />
      {/* Portfolio Header */}
      <section className="py-20 px-8 bg-gradient-to-br from-secondary to-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioItem 
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                imageAlt={item.imageAlt}
                tags={item.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted By</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've had the pleasure of working with a diverse range of clients across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 place-items-center">
            <div className="text-5xl text-gray-400 hover:text-accent transition-colors duration-300">
              <i className="fab fa-amazon"></i>
            </div>
            <div className="text-5xl text-gray-400 hover:text-accent transition-colors duration-300">
              <i className="fab fa-microsoft"></i>
            </div>
            <div className="text-5xl text-gray-400 hover:text-accent transition-colors duration-300">
              <i className="fab fa-spotify"></i>
            </div>
            <div className="text-5xl text-gray-400 hover:text-accent transition-colors duration-300">
              <i className="fab fa-slack"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">50+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">99%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">5+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-accent text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Create Your Next Project</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Ready to join our growing list of satisfied clients? Contact us today to discuss your project.
          </p>
          <Link href="/contact" className="inline-block bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg transition-colors duration-300 font-medium">
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
