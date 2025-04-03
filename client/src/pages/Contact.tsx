import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
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

const Contact = () => {
  // JSON-LD for Contact Page
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "LaunchLayer",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Philadelphia",
        "addressRegion": "PA",
        "addressCountry": "US"
      },
      "telephone": "(215) 207-5885",
      "email": "hello@launchlayer.com",
      "url": "https://launchlayer.com",
      "sameAs": [
        "https://twitter.com/launchlayer",
        "https://linkedin.com/company/launchlayer",
        "https://instagram.com/launchlayer"
      ]
    }
  };

  return (
    <main className="pt-24">
      <SEO 
        title="Contact LaunchLayer | Philadelphia Web Development Services"
        description="Get in touch with LaunchLayer's web development team in Philadelphia. Request a quote for your custom website project or call us at (215) 207-5885."
        keywords="contact web developer, Philadelphia web design contact, website quote, custom website pricing, LaunchLayer contact, web development consultation"
        ogTitle="Contact LaunchLayer | Get a Free Web Development Quote"
        ogDescription="Ready to launch your website? Contact our Philadelphia-based web development team for a free quote. Call (215) 207-5885 or fill out our contact form."
        jsonLd={contactJsonLd}
      />
      {/* Contact Header */}
      <section className="py-20 px-8 bg-gradient-to-br from-secondary to-primary overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <TextReveal 
            text="Contact Us"
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
              Have a project in mind? Get in touch with our team to discuss how we can help bring your vision to life.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn direction="right" delay={0.2}>
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
                <p className="text-gray-600 mb-8">
                  Fill out the form and we'll get back to you within 24 hours. Alternatively, you can reach us directly using the contact information below.
                </p>
                
                <Stagger staggerDelay={0.15}>
                  <div className="space-y-6">
                    {[
                      { 
                        icon: "fas fa-map-marker-alt", 
                        title: "Location", 
                        text: "Philadelphia, PA" 
                      },
                      { 
                        icon: "fas fa-envelope", 
                        title: "Email", 
                        text: "hello@launchlayer.com" 
                      },
                      { 
                        icon: "fas fa-phone-alt", 
                        title: "Phone", 
                        text: "(215) 207-5885" 
                      }
                    ].map((item, index) => (
                      <StaggerItem key={index} direction="left">
                        <motion.div 
                          className="flex items-start"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div 
                            className="text-accent text-xl mt-1 mr-4"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: 0.2 * index,
                              type: "spring", 
                              stiffness: 200 
                            }}
                          >
                            <i className={item.icon}></i>
                          </motion.div>
                          <div>
                            <h4 className="font-bold mb-1">{item.title}</h4>
                            <p className="text-gray-600">{item.text}</p>
                          </div>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </div>
                </Stagger>
                
                <FadeIn direction="up" delay={0.6}>
                  <div className="mt-10">
                    <h4 className="font-bold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      {[
                        { icon: "fab fa-twitter", url: "https://twitter.com", delay: 0.1 },
                        { icon: "fab fa-linkedin-in", url: "https://linkedin.com", delay: 0.2 },
                        { icon: "fab fa-instagram", url: "https://instagram.com", delay: 0.3 }
                      ].map((social, index) => (
                        <motion.a 
                          key={index}
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-accent hover:text-accent/80 text-xl transition-colors duration-300"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ 
                            delay: 0.7 + social.delay, 
                            duration: 0.5, 
                            type: "spring" 
                          }}
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: 5, 
                            transition: { duration: 0.2 } 
                          }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <i className={social.icon}></i>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </FadeIn>
            
            <ScaleIn initialScale={0.95} duration={0.6} delay={0.3}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <ContactForm />
              </motion.div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full h-full"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195724.69211078184!2d-75.26273745!3d39.97765820000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20PA%2C%20USA!5e0!3m2!1sen!2s!4v1701360356522!5m2!1sen!2s" 
            className="w-full h-full border-0" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="LaunchLayer Philadelphia Location"
            aria-label="Map showing LaunchLayer Philadelphia location"
          ></iframe>
        </motion.div>
      </section>
    </main>
  );
};

export default Contact;
