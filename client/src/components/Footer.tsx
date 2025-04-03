import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-[#1A202C] text-white pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-white text-3xl">
                <i className="fas fa-layer-group"></i>
              </div>
              <span className="text-xl font-bold">LaunchLayer</span>
            </div>
            <p className="text-gray-400 mb-6">
              We design and develop custom web solutions that help businesses succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">Web Development</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">E-commerce</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">CMS Implementation</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">UI/UX Design</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">SEO Optimization</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">Our Work</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>123 Tech Avenue, Suite 400<br/>San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3"></i>
                <span>hello@launchlayer.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3"></i>
                <span>(415) 555-1234</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LaunchLayer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
