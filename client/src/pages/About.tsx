import { Link } from "wouter";
import { motion } from "framer-motion";
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

const About = () => {
  // JSON-LD for About Page
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "LaunchLayer",
      "description": "We're Aqeel and Josh — two creative developers who teamed up to help small businesses and creators bring their websites to life. At LaunchLayer, we blend design and code to launch clean, modern, mobile-friendly websites that work and wow.",
      "url": "https://launchlayer.com",
      "foundingDate": "2018",
      "foundingLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Philadelphia",
          "addressRegion": "PA"
        }
      },
      "founders": [
        {
          "@type": "Person",
          "name": "Josh Waldron",
          "jobTitle": "Co-Founder & Lead Developer",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Philadelphia",
            "addressRegion": "PA"
          }
        },
        {
          "@type": "Person",
          "name": "Aqeel Bacchus",
          "jobTitle": "Co-Founder & Lead Developer",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Scranton",
            "addressRegion": "PA"
          }
        }
      ]
    }
  };

  return (
    <main className="pt-24">
      <SEO 
        title="About LaunchLayer | Philadelphia Web Development Team"
        description="Meet Josh and Aqeel, the team behind LaunchLayer - a web development agency in Philadelphia with 5+ years of experience creating custom websites for small businesses."
        keywords="web developer Philadelphia, about LaunchLayer, web design team, Josh Waldron, Aqeel Bacchus, web development company, responsive website designer, Pennsylvania web developers"
        ogTitle="About the LaunchLayer Team | Philadelphia Web Developers"
        ogDescription="Meet the developers behind LaunchLayer - a Philadelphia-based web development team specializing in custom websites for small businesses and entrepreneurs."
        ogImage="/about-og-image.svg"
        twitterTitle="Meet the LaunchLayer Web Development Team"
        twitterDescription="Josh from Philadelphia and Aqeel from Scranton - the team behind LaunchLayer with 5+ years of experience in custom website development."
        twitterImage="/about-twitter-card.svg"
        canonical="https://launchlayer.com/about"
        jsonLd={aboutJsonLd}
      />
      {/* About Header */}
      <section className="py-20 px-8 bg-gradient-to-br from-secondary to-primary overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <TextReveal 
            text="About Us"
            tag="h1"
            className="text-4xl md:text-5xl font-bold mb-6"
            duration={0.8}
            delay={0.1}
          />
          <FadeIn 
            direction="up" 
            delay={0.5} 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            <p>
              Meet the team behind LaunchLayer and learn about our mission to create beautiful, functional websites.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold mb-6">Meet LaunchLayer</h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                We're Aqeel and Josh — two creative developers who teamed up to help small businesses and creators bring their websites to life. At LaunchLayer, we blend design and code to launch clean, modern, mobile-friendly websites that work and wow.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Whether you're just getting started or need a fresh digital presence, we're here to make it simple, fast, and stress-free.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <ParallaxScroll speed={0.1} direction="up">
              <div className="flex items-center mb-6">
                <motion.div 
                  className="text-4xl text-accent mr-4"
                  initial={{ rotate: -10, scale: 0.9 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  🚀
                </motion.div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
            </ParallaxScroll>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-xl mb-6 font-medium text-gray-700">
                We believe great websites shouldn't be complicated or expensive.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our goal is to help entrepreneurs, local businesses, and personal brands launch with confidence — using smart tools, fast workflows, and creative thinking to deliver powerful websites that get noticed.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto mb-12">
            <FadeIn direction="up">
              <div className="flex items-center mb-6">
                <motion.div 
                  className="text-4xl text-accent mr-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0] 
                  }}
                  transition={{ 
                    duration: 2, 
                    ease: "easeInOut", 
                    repeat: Infinity, 
                    repeatDelay: 5 
                  }}
                >
                  👥
                </motion.div>
                <h2 className="text-3xl font-bold">Who We Are</h2>
              </div>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Team Member 1 */}
            <ScaleIn duration={0.7}>
              <motion.div 
                className="bg-secondary rounded-lg p-8 shadow-md" 
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-32 h-32 rounded-full bg-accent mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  JW
                </motion.div>
                <h3 className="text-2xl font-bold text-center mb-2">Josh Waldron</h3>
                <p className="text-center text-accent font-medium mb-4">Co-Founder & Lead Developer</p>
                <p className="text-center mb-4">
                  <span className="inline-flex items-center">
                    <span className="mr-2">📍</span> Based in Philadelphia, PA
                  </span>
                </p>
                <div className="border-t border-gray-200 my-4 pt-4">
                  <p className="italic text-gray-700">
                    <span className="text-2xl mr-2">💬</span> "I love turning clean designs into responsive, high-performance websites. When I'm not coding, I'm probably working out or working on side projects."
                  </p>
                </div>
              </motion.div>
            </ScaleIn>
            
            {/* Team Member 2 */}
            <ScaleIn duration={0.7} delay={0.2}>
              <motion.div 
                className="bg-secondary rounded-lg p-8 shadow-md" 
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-32 h-32 rounded-full bg-accent mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  AK
                </motion.div>
                <h3 className="text-2xl font-bold text-center mb-2">Aqeel Bacchus</h3>
                <p className="text-center text-accent font-medium mb-4">Co-Founder & Lead Developer</p>
                <p className="text-center mb-4">
                  <span className="inline-flex items-center">
                    <span className="mr-2">📍</span> Based in Scranton, PA
                  </span>
                </p>
                <div className="border-t border-gray-200 my-4 pt-4">
                  <p className="italic text-gray-700">
                    <span className="text-2xl mr-2">💬</span> "I'm passionate about creating sleek, intuitive interfaces that help businesses stand out. I enjoy blending design with function — and building sites people are proud to share."
                  </p>
                </div>
              </motion.div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <FadeIn direction="up">
              <div className="flex items-center mb-8">
                <motion.div 
                  className="text-4xl text-accent mr-4"
                  whileInView={{ rotate: [0, 15, -15, 10, -5, 0] }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  🔧
                </motion.div>
                <h2 className="text-3xl font-bold">What We Do Best</h2>
              </div>
            </FadeIn>
            
            <Stagger staggerDelay={0.1}>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Mobile-Responsive Websites" },
                  { title: "Clean Front-End Development", subtitle: "(HTML, CSS, JavaScript)" },
                  { title: "Lightning-Fast Landing Pages" },
                  { title: "Site Redesigns & Modernization" }
                ].map((service, index) => (
                  <StaggerItem key={index} direction="up">
                    <motion.div 
                      className="bg-white p-6 rounded-lg shadow-sm"
                      whileHover={{ 
                        scale: 1.03, 
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
                      }}
                    >
                      <h3 className="font-medium mb-1">{service.title}</h3>
                      {service.subtitle && (
                        <p className="text-sm text-gray-600">{service.subtitle}</p>
                      )}
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <FadeIn direction="up">
              <div className="flex items-center mb-8">
                <motion.div 
                  className="text-4xl text-accent mr-4"
                  initial={{ y: 5 }}
                  animate={{ y: [-5, 5] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut" 
                  }}
                >
                  💼
                </motion.div>
                <h2 className="text-3xl font-bold">Why Work With Us?</h2>
              </div>
            </FadeIn>
            
            <Stagger staggerDelay={0.2}>
              <ul className="space-y-4">
                {[
                  "Fast communication and no fluff",
                  "Custom-built — no cookie-cutter templates",
                  "Clear pricing and transparent process",
                  "Designed to grow with you — not just look good"
                ].map((item, index) => (
                  <StaggerItem key={index} direction="left">
                    <motion.li 
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="text-accent mr-3 mt-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 10, 
                          delay: 0.3 + (index * 0.1) 
                        }}
                      >
                        ✓
                      </motion.div>
                      <p className="text-lg text-gray-700">{item}</p>
                    </motion.li>
                  </StaggerItem>
                ))}
              </ul>
            </Stagger>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-accent text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            className="text-5xl mb-6"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 10 
            }}
            viewport={{ once: true }}
          >
            <motion.span
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -10, 0, 10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatDelay: 1 
              }}
              style={{ display: "inline-block" }}
            >
              📩
            </motion.span>
          </motion.div>
          
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold mb-6">Ready to Launch?</h2>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              We're accepting new projects!
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg transition-colors duration-300 font-medium"
                >
                  Contact Us
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg transition-colors duration-300 font-medium"
                >
                  Request a Free Quote
                </Link>
              </motion.div>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4}>
            <p className="text-xl opacity-90">
              Let's build something awesome together.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default About;