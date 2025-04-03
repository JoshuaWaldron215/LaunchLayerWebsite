import { Link } from "wouter";
import { services, features } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import SEO from "@/components/SEO";

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
      <section className="py-20 px-8 bg-gradient-to-br from-secondary to-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose LaunchLayer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with creative excellence to deliver web solutions that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 rounded-lg bg-secondary shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="text-accent text-3xl mb-4">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Service Packages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package to meet your business needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                price={service.price}
                icon={service.icon}
                popular={service.popular}
                features={service.features}
              />
            ))}
          </div>
          
          {/* Add-On Pricing Section */}
          <div className="mt-20 bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <div className="inline-block text-accent text-3xl mb-4">
                <i className="fas fa-puzzle-piece"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">Add-On Services</h3>
              <p className="text-gray-600">
                Enhance your website with these additional services
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <div>
                    <h4 className="font-medium">Monthly Maintenance</h4>
                    <p className="text-gray-500 text-sm">Regular updates, security patches, and content changes</p>
                  </div>
                  <div className="text-accent font-semibold">$50 – $75/month</div>
                </div>
                
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <div>
                    <h4 className="font-medium">Hosting Setup</h4>
                    <p className="text-gray-500 text-sm">Domain configuration, server setup, and deployment</p>
                  </div>
                  <div className="text-accent font-semibold">$50 – $75 (one-time)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to turning your vision into a successful digital reality.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-gray-600">
                We learn about your business, goals, and target audience to create a tailored strategy.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-3">Design</h3>
              <p className="text-gray-600">
                Our designers create visually appealing mockups that align with your brand identity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-gray-600">
                Our developers build your website with clean, efficient code and modern technologies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-3">Launch</h3>
              <p className="text-gray-600">
                After thorough testing, we deploy your site and provide ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-accent text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create a web solution that perfectly fits your business needs.
          </p>
          <Link href="/contact" className="inline-block bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg transition-colors duration-300 font-medium">
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
