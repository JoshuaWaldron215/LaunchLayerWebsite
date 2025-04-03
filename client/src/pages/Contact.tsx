import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";

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
      <section className="py-20 px-8 bg-gradient-to-br from-secondary to-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Get in touch with our team to discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
              <p className="text-gray-600 mb-8">
                Fill out the form and we'll get back to you within 24 hours. Alternatively, you can reach us directly using the contact information below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-accent text-xl mt-1 mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-gray-600">Philadelphia, PA</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-accent text-xl mt-1 mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-600">hello@launchlayer.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-accent text-xl mt-1 mr-4">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-600">(215) 207-5885</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 text-xl transition-colors duration-300">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 text-xl transition-colors duration-300">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 text-xl transition-colors duration-300">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195724.69211078184!2d-75.26273745!3d39.97765820000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20PA%2C%20USA!5e0!3m2!1sen!2s!4v1701360356522!5m2!1sen!2s" 
          className="w-full h-full border-0" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="LaunchLayer Philadelphia Location"
          aria-label="Map showing LaunchLayer Philadelphia location"
        ></iframe>
      </section>
    </main>
  );
};

export default Contact;
