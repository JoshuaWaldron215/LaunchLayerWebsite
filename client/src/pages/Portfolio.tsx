import { Link } from "wouter";
import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/data";
import PortfolioItem from "@/components/PortfolioItem";
import SEO from "@/components/SEO";
import { 
  FadeIn, 
  ScaleIn, 
  Stagger, 
  StaggerItem, 
  ParallaxScroll, 
  TextReveal,
  HoverCard,
  CountUpAnimation
} from "@/components/animations";

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
      <section className="py-20 px-8 bg-gradient-to-br from-secondary to-primary overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <TextReveal 
            text="Our Portfolio"
            tag="h1"
            className="text-4xl md:text-5xl font-bold mb-6"
            duration={0.8}
            delay={0.1}
          />
          <FadeIn 
            direction="up" 
            delay={0.5} 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            <p>
              Explore our recent projects and see how we've helped businesses transform their digital presence.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <Stagger staggerDelay={0.15}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <StaggerItem key={index} direction="up">
                  <ScaleIn 
                    initialScale={0.9} 
                    duration={0.7}
                  >
                    <HoverCard whileHoverScale={1.03} whileHoverElevate={10}>
                      <PortfolioItem 
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        imageAlt={item.imageAlt}
                        tags={item.tags}
                      />
                    </HoverCard>
                  </ScaleIn>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold mb-4">Trusted By</h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We've had the pleasure of working with a diverse range of clients across multiple industries.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 place-items-center">
            {[
              { icon: "fab fa-amazon", delay: 0.1 },
              { icon: "fab fa-microsoft", delay: 0.2 },
              { icon: "fab fa-spotify", delay: 0.3 },
              { icon: "fab fa-slack", delay: 0.4 }
            ].map((item, index) => (
              <FadeIn key={index} direction="up" delay={item.delay}>
                <motion.div 
                  className="text-5xl text-gray-400 hover:text-accent transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [-5, 5, 0],
                    transition: { 
                      rotate: { duration: 0.5, ease: "easeInOut" } 
                    }
                  }}
                >
                  <i className={item.icon}></i>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <Stagger staggerDelay={0.2}>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { number: "50+", text: "Projects Completed" },
                { number: "99%", text: "Client Satisfaction" },
                { number: "5+", text: "Years Experience" }
              ].map((stat, index) => (
                <StaggerItem key={index} direction="up">
                  <div>
                    <motion.div 
                      className="text-5xl font-bold text-accent mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          duration: 0.8,
                          ease: "easeOut"
                        }
                      }}
                      viewport={{ once: true }}
                    >
                      <CountUpAnimation 
                        targetNumber={stat.number} 
                        duration={2} 
                      />
                    </motion.div>
                    <motion.p 
                      className="text-gray-600"
                      initial={{ opacity: 0 }}
                      whileInView={{ 
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                          delay: 0.3
                        }
                      }}
                      viewport={{ once: true }}
                    >
                      {stat.text}
                    </motion.p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-accent text-white">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold mb-6">Let's Create Your Next Project</h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Ready to join our growing list of satisfied clients? Contact us today to discuss your project.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact" 
                className="inline-block bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg transition-colors duration-300 font-medium"
              >
                Start Your Project
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
