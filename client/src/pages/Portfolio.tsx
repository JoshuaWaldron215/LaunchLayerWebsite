import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { portfolioItems } from "@/lib/data";
import PortfolioItem from "@/components/PortfolioItem";
import SocialProofSection from "@/components/SocialProofSection";
import { 
  FadeIn, 
  ScaleIn, 
  Stagger, 
  StaggerItem, 
  ParallaxScroll, 
  TextReveal,
  HoverCard
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

  // Set document title directly
  useEffect(() => {
    document.title = "Web Development Portfolio | LaunchLayer Philadelphia";
    return () => {
      document.title = "LaunchLayer - Professional Web Development Services";
    };
  }, []);

  return (
    <main className="pt-24">
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
                        id={item.id}
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

      {/* Social Proof Section */}
      <SocialProofSection />

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
