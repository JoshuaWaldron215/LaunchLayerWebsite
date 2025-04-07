import { Link } from "wouter";
import { motion } from "framer-motion";
import { features, testimonials, faqs } from "@/lib/data";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import SEO from "@/components/SEO";
import { 
  FadeIn, 
  ScaleIn, 
  Stagger, 
  StaggerItem, 
  ParallaxScroll, 
  TextReveal,
  HoverCard 
} from "@/components/animations";

const Home = () => {
  // JSON-LD structured data for HomePage
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "LaunchLayer",
    "url": "https://launchlayer.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://launchlayer.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "description": "Professional web development and design services for modern businesses. We help you launch your online presence with custom, responsive websites and applications.",
    "publisher": {
      "@type": "Organization",
      "name": "LaunchLayer",
      "logo": {
        "@type": "ImageObject",
        "url": "https://launchlayer.com/logo.png"
      }
    }
  };

  return (
    <main>
      <SEO 
        title="LaunchLayer - Professional Web Development Services in Philadelphia"
        description="LaunchLayer provides expert web development solutions for businesses in Philadelphia. Launch your digital presence with our custom websites and applications."
        keywords="web development Philadelphia, custom websites, business websites, responsive design, web applications, Philadelphia web design"
        jsonLd={homeJsonLd}
      />
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-32 px-8 bg-gradient-to-br from-secondary to-primary overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <TextReveal 
                text="Launch Your Digital Presence with Expert Web Development"
                tag="h1"
                className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                duration={0.7}
                delay={0.2}
              />
              <FadeIn 
                direction="up" 
                delay={0.5} 
                className="text-lg mb-8 text-gray-600 max-w-lg"
              >
                <p>
                  We design and develop custom web solutions that bring your vision to life, combining beautiful design with powerful functionality.
                </p>
              </FadeIn>
              <FadeIn 
                direction="up" 
                delay={0.7}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Link href="/services" className="bg-accent hover:bg-accent/80 text-white px-8 py-4 rounded-lg transition-colors duration-300 text-center font-medium">
                  Our Services
                </Link>
                <Link href="/portfolio" className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-lg transition-colors duration-300 text-center font-medium">
                  View Portfolio
                </Link>
              </FadeIn>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <ScaleIn 
                delay={0.3} 
                duration={0.8}
                initialScale={0.85}
              >
                <ParallaxScroll direction="down" speed={0.15}>
                  <img 
                    src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Web development team working together" 
                    className="rounded-lg shadow-lg w-full max-w-md"
                  />
                </ParallaxScroll>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold mb-4">Why Choose LaunchLayer</h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We combine technical expertise with creative excellence to deliver web solutions that exceed expectations.
              </p>
            </FadeIn>
          </div>

          <Stagger staggerDelay={0.15}>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <StaggerItem key={index} direction="up">
                  <HoverCard 
                    whileHoverScale={1.03} 
                    whileHoverElevate={8}
                    className="h-full"
                  >
                    <div className="p-8 rounded-lg bg-secondary shadow-md h-full">
                      <div className="text-accent text-3xl mb-4">
                        <i className={feature.icon}></i>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it — hear from our satisfied clients.
              </p>
            </FadeIn>
          </div>

          <Stagger staggerDelay={0.2}>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <StaggerItem key={index} direction="up" distance={40}>
                  <ScaleIn initialScale={0.95} duration={0.7}>
                    <TestimonialCard 
                      quote={testimonial.quote}
                      author={testimonial.author}
                      position={testimonial.position}
                      image={testimonial.image}
                    />
                  </ScaleIn>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion 
            faqs={faqs.slice(0, 4)} 
            title="Frequently Asked Questions"
            description="Find answers to common questions about our web development services"
          />
          <div className="text-center mt-8">
            <Link 
              href="/contact"
              className="inline-block bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
            >
              Ask Us a Question
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-8 bg-accent text-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how we can help you achieve your digital goals with a custom web solution.
            </p>
          </FadeIn>
          <FadeIn 
            direction="up" 
            delay={0.4}
            className="inline-block"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link 
                href="/contact" 
                className="inline-block bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg transition-colors duration-300 font-medium"
              >
                Get in Touch Today
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default Home;
