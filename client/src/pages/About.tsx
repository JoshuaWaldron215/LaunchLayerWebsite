import { Link } from "wouter";

const About = () => {
  return (
    <main className="pt-24">
      {/* About Header */}
      <section className="py-20 px-8 bg-gradient-to-br from-secondary to-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the team behind LaunchLayer and learn about our mission to create beautiful, functional websites.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Meet LaunchLayer</h2>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              We're Aqeel and Josh — two creative developers who teamed up to help small businesses and creators bring their websites to life. At LaunchLayer, we blend design and code to launch clean, modern, mobile-friendly websites that work and wow.
            </p>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              Whether you're just getting started or need a fresh digital presence, we're here to make it simple, fast, and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="text-4xl text-accent mr-4">🚀</div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-xl mb-6 font-medium text-gray-700">
              We believe great websites shouldn't be complicated or expensive.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our goal is to help entrepreneurs, local businesses, and personal brands launch with confidence — using smart tools, fast workflows, and creative thinking to deliver powerful websites that get noticed.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center mb-6">
              <div className="text-4xl text-accent mr-4">👥</div>
              <h2 className="text-3xl font-bold">Who We Are</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Team Member 1 */}
            <div className="bg-secondary rounded-lg p-8 shadow-md">
              <div className="w-32 h-32 rounded-full bg-accent mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                JW
              </div>
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
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-secondary rounded-lg p-8 shadow-md">
              <div className="w-32 h-32 rounded-full bg-accent mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                AK
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Aqeel Khan</h3>
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
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="text-4xl text-accent mr-4">🔧</div>
              <h2 className="text-3xl font-bold">What We Do Best</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-1">Mobile-Responsive Websites</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-1">Clean Front-End Development</h3>
                <p className="text-sm text-gray-600">(HTML, CSS, JavaScript)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-1">WordPress Design & Customization</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-1">Lightning-Fast Landing Pages</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-1">Site Redesigns & Modernization</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-1">Fast Turnarounds with Smart Tools</h3>
                <p className="text-sm text-gray-600">(AI, Replit, WordPress, etc.)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="text-4xl text-accent mr-4">💼</div>
              <h2 className="text-3xl font-bold">Why Work With Us?</h2>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-accent mr-3 mt-1">✓</div>
                <p className="text-lg text-gray-700">Fast communication and no fluff</p>
              </li>
              <li className="flex items-start">
                <div className="text-accent mr-3 mt-1">✓</div>
                <p className="text-lg text-gray-700">Custom-built — no cookie-cutter templates</p>
              </li>
              <li className="flex items-start">
                <div className="text-accent mr-3 mt-1">✓</div>
                <p className="text-lg text-gray-700">Clear pricing and transparent process</p>
              </li>
              <li className="flex items-start">
                <div className="text-accent mr-3 mt-1">✓</div>
                <p className="text-lg text-gray-700">Designed to grow with you — not just look good</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-accent text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-5xl mb-6">📩</div>
          <h2 className="text-3xl font-bold mb-6">Ready to Launch?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We're accepting new projects!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="inline-block bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg transition-colors duration-300 font-medium">
              Contact Us
            </Link>
            <Link href="/contact" className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg transition-colors duration-300 font-medium">
              Request a Free Quote
            </Link>
          </div>
          <p className="text-xl opacity-90">
            Let's build something awesome together.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;