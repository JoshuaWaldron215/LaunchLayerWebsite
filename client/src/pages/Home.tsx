import { Link } from "wouter";
import { features, testimonials } from "@/lib/data";
import TestimonialCard from "@/components/TestimonialCard";
import SEO from "@/components/SEO";

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
      <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-32 px-8 bg-gradient-to-br from-secondary to-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Launch Your Digital Presence with Expert Web Development
              </h1>
              <p className="text-lg mb-8 text-gray-600 max-w-lg">
                We design and develop custom web solutions that bring your vision to life, combining beautiful design with powerful functionality.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/services" className="bg-accent hover:bg-accent/80 text-white px-8 py-4 rounded-lg transition-colors duration-300 text-center font-medium">
                  Our Services
                </Link>
                <Link href="/portfolio" className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-lg transition-colors duration-300 text-center font-medium">
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Web development team working together" 
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>
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

      {/* Testimonials Section */}
      <section className="py-20 px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it — hear from our satisfied clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-accent text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can help you achieve your digital goals with a custom web solution.
          </p>
          <Link href="/contact" className="inline-block bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg transition-colors duration-300 font-medium">
            Get in Touch Today
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
