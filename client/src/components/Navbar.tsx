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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 z-10">
          <div className="text-accent text-2xl sm:text-3xl">
            <i className="fas fa-layer-group"></i>
          </div>
          <span className="text-lg sm:text-xl font-bold text-gray-800">LaunchLayer</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={cn(
                "nav-link font-medium text-gray-700 hover:text-accent text-sm lg:text-base whitespace-nowrap",
                (link.exact ? location === link.path : location.startsWith(link.path)) ? "active font-semibold" : ""
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="bg-accent hover:bg-accent/80 text-white px-4 lg:px-6 py-2 rounded-lg transition-colors duration-300 text-sm lg:text-base whitespace-nowrap"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-10">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-800 focus:outline-none p-2"
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20">
          <div className="flex flex-col px-6 py-6 space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={cn(
                  "nav-link font-medium py-2 text-lg text-center text-gray-700 hover:text-accent",
                  (link.exact ? location === link.path : location.startsWith(link.path)) ? "active font-semibold" : ""
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="block bg-accent hover:bg-accent/80 text-white px-6 py-4 rounded-lg transition-colors duration-300 text-center text-lg font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
