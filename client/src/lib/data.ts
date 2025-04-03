// Service Data
export const services = [
  {
    title: "Starter Package",
    description: "Perfect for small businesses looking to establish their online presence.",
    price: "$1,499",
    icon: "fas fa-rocket",
    popular: false,
    features: [
      { name: "Responsive 5-page website", included: true },
      { name: "Mobile-friendly design", included: true },
      { name: "Contact form integration", included: true },
      { name: "Basic SEO setup", included: true },
      { name: "E-commerce functionality", included: false },
      { name: "Custom animations", included: false },
    ],
  },
  {
    title: "Business Package",
    description: "Comprehensive solution for growing businesses with advanced features.",
    price: "$3,999",
    icon: "fas fa-star",
    popular: true,
    features: [
      { name: "Responsive 10-page website", included: true },
      { name: "Custom design & branding", included: true },
      { name: "Content management system", included: true },
      { name: "Advanced SEO optimization", included: true },
      { name: "E-commerce functionality", included: true },
      { name: "Custom animations", included: false },
    ],
  },
  {
    title: "Premium Package",
    description: "Full-featured solution with advanced customization and integrations.",
    price: "$7,999",
    icon: "fas fa-crown",
    popular: false,
    features: [
      { name: "Unlimited pages", included: true },
      { name: "Premium custom design", included: true },
      { name: "Advanced CMS with training", included: true },
      { name: "Comprehensive SEO package", included: true },
      { name: "Full e-commerce solution", included: true },
      { name: "Custom animations & interactions", included: true },
    ],
  },
];

// Features Data
export const features = [
  {
    icon: "fas fa-code",
    title: "Clean Code",
    description: "We write maintainable, well-structured code that scales with your business needs.",
  },
  {
    icon: "fas fa-paint-brush",
    title: "Beautiful Design",
    description: "Our interfaces are visually stunning, focusing on user experience and conversions.",
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Responsive Layout",
    description: "Your site will work flawlessly across all devices, from desktop to mobile.",
  },
];

// Portfolio Items
export const portfolioItems = [
  {
    title: "Alpine Outdoors",
    description: "E-commerce store with custom product filtering and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "E-commerce store project",
    tags: ["E-commerce", "React", "Shopify"],
  },
  {
    title: "MetroRealty",
    description: "Property listing website with advanced search and interactive map integration.",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Real estate website project",
    tags: ["Real Estate", "Vue.js", "Google Maps API"],
  },
  {
    title: "FinTrack Pro",
    description: "Financial dashboard with real-time data visualization and reporting tools.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Financial analytics dashboard project",
    tags: ["Fintech", "React", "D3.js"],
  },
  {
    title: "Bistro 37",
    description: "Restaurant website with online reservation system and digital menu.",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Restaurant website project",
    tags: ["Restaurant", "WordPress", "Custom Theme"],
  },
  {
    title: "TaskFlow",
    description: "SaaS product website with interactive demos and subscription management.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "SaaS product website project",
    tags: ["SaaS", "Next.js", "Stripe"],
  },
  {
    title: "EduSphere",
    description: "Online learning platform with course management and student progress tracking.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Education platform project",
    tags: ["Education", "React", "Firebase"],
  },
];

// Testimonials Data
export const testimonials = [
  {
    quote: "LaunchLayer transformed our outdated website into a modern, user-friendly platform that has significantly increased our online conversions. Their team was professional and responsive throughout the entire process.",
    author: "Sarah Johnson",
    position: "CEO, Alpine Outdoors",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    quote: "Working with LaunchLayer was a game-changer for our business. They developed a custom e-commerce solution that has streamlined our operations and improved our customer experience dramatically.",
    author: "David Miller",
    position: "Founder, MetroRealty",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    quote: "The team at LaunchLayer exceeded our expectations at every turn. Their attention to detail and technical expertise resulted in a product that perfectly aligned with our vision.",
    author: "Jennifer Lee",
    position: "CTO, FinTrack Pro",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
];
