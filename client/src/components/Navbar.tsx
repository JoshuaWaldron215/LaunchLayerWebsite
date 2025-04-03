import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing location
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home", exact: true },
    { path: "/services", label: "Services", exact: false },
    { path: "/portfolio", label: "Portfolio", exact: false },
    { path: "/about", label: "About", exact: false },
    { path: "/contact", label: "Contact", exact: false },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 bg-white z-50 transition-shadow duration-300",
      scrolled ? "shadow-md" : ""
    )}>
      <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-accent text-3xl">
            <i className="fas fa-layer-group"></i>
          </div>
          <span className="text-xl font-bold text-gray-800">LaunchLayer</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={cn(
                "nav-link font-medium text-gray-700 hover:text-accent",
                (link.exact ? location === link.path : location.startsWith(link.path)) ? "active" : ""
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="bg-accent hover:bg-accent/80 text-white px-6 py-2 rounded-lg transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full border-t border-gray-200">
          <div className="flex flex-col px-8 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={cn(
                  "nav-link font-medium py-2 text-gray-700 hover:text-accent",
                  (link.exact ? location === link.path : location.startsWith(link.path)) ? "active" : ""
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="bg-accent hover:bg-accent/80 text-white px-6 py-3 rounded-lg transition-colors duration-300 text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
