import { Link } from "wouter";
import { motion } from "framer-motion";
import { services, features } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import SEO from "@/components/SEO";
import CostCalculator from "@/components/CostCalculator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  FadeIn, 
  ScaleIn, 
  Stagger, 
  StaggerItem, 
  ParallaxScroll, 
  TextReveal,
  HoverCard 
} from "@/components/animations";

const Services = () => {
  // JSON-LD for Services Page
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "Service",
      "position": index + 1,
      "name": service.title,
      "description": service.description,
      "offers": {
        "@type": "Offer",
        "price": service.price.replace(/[^0-9\-\+]/g, ''),
        "priceCurrency": "USD"
      },
      "provider": {
        "@type": "Organization",
        "name": "LaunchLayer",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Philadelphia",
          "addressRegion": "PA"
        }
      }
    }))
  };

  return (
    <main className="pt-24">
      <SEO 
        title="Web Development Services | LaunchLayer Philadelphia"
        description="Affordable web development packages from $150-$1050. Custom websites, e-commerce solutions, and monthly maintenance options for Philadelphia businesses."
        keywords="web development services, website packages, affordable web design, Philadelphia web developer, business website cost, e-commerce website, monthly website maintenance"
        ogTitle="Professional Web Development Services & Packages | LaunchLayer"
        ogDescription="Choose from our Starter ($150-$250), Standard ($300-$500), or Premium ($700-$1050+) packages. Custom web solutions for Philadelphia businesses of all sizes."
        jsonLd={servicesJsonLd}
      />
      {/* Services Header */}
      <section className="py-20 px-8 bg-gradient-to-br from-secondary to-primary overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <TextReveal 
            text="Our Services"
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
              Comprehensive web development solutions tailored to your specific needs.
            </p>
          </FadeIn>
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
                    whileHoverElevate={6}
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

      {/* Service Packages Section */}
      <section className="py-20 px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold mb-4">Our Service Packages</h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the perfect package to meet your business needs and budget.
              </p>
            </FadeIn>
          </div>

          <Stagger staggerDelay={0.25}>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <StaggerItem key={index} direction="up">
                  <ScaleIn initialScale={0.92} duration={0.5}>
                    <ServiceCard 
                      title={service.title}
                      description={service.description}
                      price={service.price}
                      icon={service.icon}
                      popular={service.popular}
                      features={service.features}
                    />
                  </ScaleIn>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
          
          {/* Add-On Pricing Section */}
          <FadeIn 
            direction="up" 
            delay={0.6} 
            className="mt-20"
          >
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-center mb-8">
                <div className="inline-block text-accent text-3xl mb-4">
                  <motion.i 
                    className="fas fa-puzzle-piece"
                    animate={{ rotate: [0, 15, -15, 10, -10, 5, -5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 0.8,
                      ease: "easeInOut" 
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Add-On Services</h3>
                <p className="text-gray-600">
                  Enhance your website with these additional services
                </p>
              </div>
              
              {/* Desktop view (md and up) - Always expanded */}
              <div className="max-w-2xl mx-auto hidden md:block">
                <Stagger staggerDelay={0.2}>
                  <div className="flex flex-col space-y-4">
                    <StaggerItem direction="right">
                      <motion.div 
                        className="flex justify-between items-center p-4 border-b border-gray-200"
                        whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.5)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <div>
                          <h4 className="font-medium">Analytics Reporting</h4>
                          <p className="text-gray-500 text-sm">Monthly Google Analytics summary</p>
                        </div>
                        <div className="text-accent font-semibold">$20/month</div>
                      </motion.div>
                    </StaggerItem>

                    <StaggerItem direction="right">
                      <motion.div 
                        className="flex justify-between items-center p-4 border-b border-gray-200"
                        whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.5)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <div>
                          <h4 className="font-medium">Hosting Setup</h4>
                          <p className="text-gray-500 text-sm">Domain configuration, server setup, and deployment</p>
                        </div>
                        <div className="text-accent font-semibold">$50 – $75 (one-time)</div>
                      </motion.div>
                    </StaggerItem>

                    <StaggerItem direction="right">
                      <motion.div 
                        className="flex justify-between items-center p-4 border-b border-gray-200"
                        whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.5)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <div>
                          <h4 className="font-medium">SEO Starter Pack</h4>
                          <p className="text-gray-500 text-sm">Keywords, meta tags, image alt text, Google indexing</p>
                        </div>
                        <div className="text-accent font-semibold">$50 – $75 (one-time)</div>
                      </motion.div>
                    </StaggerItem>

                    <StaggerItem direction="right">
                      <motion.div 
                        className="flex justify-between items-center p-4 border-b border-gray-200"
                        whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.5)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <div>
                          <h4 className="font-medium">Monthly Maintenance</h4>
                          <p className="text-gray-500 text-sm">Regular updates, security patches, and content changes</p>
                        </div>
                        <div className="text-accent font-semibold">$50 – $75/month</div>
                      </motion.div>
                    </StaggerItem>

                    <StaggerItem direction="right">
                      <motion.div 
                        className="flex justify-between items-center p-4 border-b border-gray-200"
                        whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.5)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <div>
                          <h4 className="font-medium">Rush Delivery</h4>
                          <p className="text-gray-500 text-sm">Need your site fast? Get prioritized delivery in 48–72 hours</p>
                        </div>
                        <div className="text-accent font-semibold">$75 – $125 (one-time)</div>
                      </motion.div>
                    </StaggerItem>
                  </div>
                </Stagger>
              </div>
              
              {/* Mobile view (smaller than md) - Collapsible accordion */}
              <div className="max-w-2xl mx-auto md:hidden">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem value="analytics" className="border border-gray-200 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                      <div className="flex justify-between items-center w-full pr-2">
                        <div>
                          <h4 className="font-medium text-left">Analytics Reporting</h4>
                          <p className="text-accent font-semibold text-sm text-left">$20/month</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 text-gray-600">
                      <p className="text-gray-500 text-sm">Monthly Google Analytics summary</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="hosting" className="border border-gray-200 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                      <div className="flex justify-between items-center w-full pr-2">
                        <div>
                          <h4 className="font-medium text-left">Hosting Setup</h4>
                          <p className="text-accent font-semibold text-sm text-left">$50 – $75 (one-time)</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 text-gray-600">
                      <p className="text-gray-500 text-sm">Domain configuration, server setup, and deployment</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="seo" className="border border-gray-200 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                      <div className="flex justify-between items-center w-full pr-2">
                        <div>
                          <h4 className="font-medium text-left">SEO Starter Pack</h4>
                          <p className="text-accent font-semibold text-sm text-left">$50 – $75 (one-time)</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 text-gray-600">
                      <p className="text-gray-500 text-sm">Keywords, meta tags, image alt text, Google indexing</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="maintenance" className="border border-gray-200 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                      <div className="flex justify-between items-center w-full pr-2">
                        <div>
                          <h4 className="font-medium text-left">Monthly Maintenance</h4>
                          <p className="text-accent font-semibold text-sm text-left">$50 – $75/month</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 text-gray-600">
                      <p className="text-gray-500 text-sm">Regular updates, security patches, and content changes</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="rush" className="border border-gray-200 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                      <div className="flex justify-between items-center w-full pr-2">
                        <div>
                          <h4 className="font-medium text-left">Rush Delivery</h4>
                          <p className="text-accent font-semibold text-sm text-left">$75 – $125 (one-time)</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 text-gray-600">
                      <p className="text-gray-500 text-sm">Need your site fast? Get prioritized delivery in 48–72 hours</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Project Cost Calculator Section */}
      <section className="py-20 px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold mb-4">Project Cost Calculator</h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get an instant estimate for your web development project
              </p>
            </FadeIn>
          </div>
          
          <FadeIn direction="up" delay={0.4}>
            <CostCalculator />
          </FadeIn>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A streamlined approach to turning your vision into a successful digital reality.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connected line visualization (visible on medium screens and up) */}
            <motion.div 
              className="absolute top-8 left-1/2 transform -translate-x-1/2 h-0.5 bg-accent hidden md:block" 
              style={{ width: 'calc(100% - 100px)' }}
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2,
                delay: 0.2,
                ease: "easeOut"
              }}
            />
            
            <Stagger staggerDelay={0.3}>
              <StaggerItem direction="up">
                <div className="text-center relative">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1
                    }}
                    viewport={{ once: true }}
                  >
                    1
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">Discovery</h3>
                  <p className="text-gray-600">
                    We learn about your business, goals, and target audience to create a tailored strategy.
                  </p>
                </div>
              </StaggerItem>
              
              <StaggerItem direction="up">
                <div className="text-center relative">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1
                    }}
                    viewport={{ once: true }}
                  >
                    2
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">Design</h3>
                  <p className="text-gray-600">
                    Our designers create visually appealing mockups that align with your brand identity.
                  </p>
                </div>
              </StaggerItem>
              
              <StaggerItem direction="up">
                <div className="text-center relative">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1
                    }}
                    viewport={{ once: true }}
                  >
                    3
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">Development</h3>
                  <p className="text-gray-600">
                    Our developers build your website with clean, efficient code and modern technologies.
                  </p>
                </div>
              </StaggerItem>
              
              <StaggerItem direction="up">
                <div className="text-center relative">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1
                    }}
                    viewport={{ once: true }}
                  >
                    4
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">Launch</h3>
                  <p className="text-gray-600">
                    After thorough testing, we deploy your site and provide ongoing support.
                  </p>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-accent text-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's create a web solution that perfectly fits your business needs.
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
                Contact Us Today
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default Services;
