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
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 bg-primary z-50 transition-shadow duration-300",
      scrolled ? "shadow-md" : ""
    )}>
      <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-accent text-3xl">
            <i className="fas fa-layer-group"></i>
          </div>
          <span className="text-xl font-bold text-text">LaunchLayer</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={cn(
                "nav-link font-medium",
                location === link.path ? "active" : ""
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
            className="text-text focus:outline-none"
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary w-full border-t border-gray-200">
          <div className="flex flex-col px-8 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={cn(
                  "nav-link font-medium py-2",
                  location === link.path ? "active" : ""
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
