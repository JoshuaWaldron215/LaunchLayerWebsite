// Service Data
export const services = [
  {
    title: "Starter Package",
    description: "Perfect for small businesses looking to establish a simple online presence.",
    price: "$150 – $250",
    icon: "fas fa-rocket",
    popular: false,
    features: [
      { name: "1-page website", included: true },
      { name: "Landing page", included: true },
      { name: "Contact form", included: true },
      { name: "Mobile responsive", included: true },
      { name: "SEO optimization", included: false },
      { name: "Content management", included: false },
    ],
  },
  {
    title: "Standard Package",
    description: "Ideal for businesses requiring a complete web presence with essential features.",
    price: "$300 – $500",
    icon: "fas fa-star",
    popular: true,
    features: [
      { name: "3-5 page website", included: true },
      { name: "Home, About, Services, Contact", included: true },
      { name: "Responsive design", included: true },
      { name: "Basic SEO setup", included: true },
      { name: "Content management", included: true },
      { name: "E-commerce functionality", included: false },
    ],
  },
  {
    title: "Premium Package",
    description: "Comprehensive solution for established businesses with advanced needs.",
    price: "$700 – $1050+",
    icon: "fas fa-crown",
    popular: false,
    features: [
      { name: "Full website", included: true },
      { name: "Advanced SEO optimization", included: true },
      { name: "Analytics integration", included: true },
      { name: "Blog setup", included: true },
      { name: "E-commerce ready", included: true },
      { name: "Custom features", included: true },
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
    id: "bucks-county-soccer-tournament",
    title: "Bucks County Soccer Tournament",
    description: "Professional tournament website with team registration, match scheduling, and real-time results tracking.",
    image: "/images/bucks-county-soccer.png",
    imageAlt: "Bucks County Soccer Tournament website screenshot",
    tags: ["Sports", "React", "TypeScript", "Tailwind CSS"],
    challenge: "The client needed a comprehensive tournament management system that could handle team registrations, match scheduling, and live score updates. The previous solution was manual and inefficient, causing delays and confusion for participants.",
    solution: "We developed a responsive web application with a user-friendly interface that automates the tournament management process. The system features real-time updates for match results, an intuitive bracket visualization, and a streamlined registration process.",
    results: "The new platform increased participant satisfaction by 87% and reduced administrative workload by 65%. Online registrations increased by 40% compared to the previous year's tournament.",
    features: [
      "Automated team registration and payment system",
      "Dynamic tournament brackets with real-time updates",
      "Responsive design optimized for mobile viewing from the field",
      "Administrative dashboard for tournament organizers",
      "Integrated weather updates and field condition reports"
    ],
    technologies: [
      "React", 
      "TypeScript", 
      "Tailwind CSS", 
      "React Query", 
      "AWS Hosting"
    ],
    testimonial: {
      quote: "The website that LaunchLayer developed for our tournament has transformed how we organize this annual event. The registration process is seamless, and the real-time score updates have been a huge hit with players and spectators alike.",
      author: "Michael Torres",
      position: "Tournament Director, Bucks County Soccer"
    }
  },
  {
    id: "metro-realty",
    title: "MetroRealty",
    description: "Property listing website with advanced search and interactive map integration.",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Real estate website project",
    tags: ["Real Estate", "Vue.js", "Google Maps API"],
  },
  {
    id: "fintrack-pro",
    title: "FinTrack Pro",
    description: "Financial dashboard with real-time data visualization and reporting tools.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Financial analytics dashboard project",
    tags: ["Fintech", "React", "D3.js"],
  },
  {
    id: "bistro-37",
    title: "Bistro 37",
    description: "Restaurant website with online reservation system and digital menu.",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Restaurant website project",
    tags: ["Restaurant", "WordPress", "Custom Theme"],
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    description: "SaaS product website with interactive demos and subscription management.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "SaaS product website project",
    tags: ["SaaS", "Next.js", "Stripe"],
  },
  {
    id: "edusphere",
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
    quote: "The website that LaunchLayer developed for our tournament has transformed how we organize this annual event. The registration process is seamless, and the real-time score updates have been a huge hit with players and spectators alike.",
    author: "Michael Torres",
    position: "Tournament Director, Bucks County Soccer",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
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
