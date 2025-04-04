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
    id: "shineworks-detailing",
    title: "ShineWorks Detailing",
    description: "Premium mobile car detailing service website with responsive design and online booking system.",
    image: "https://shineworksdetailing.replit.app/",
    imageAlt: "ShineWorks Detailing website screenshot",
    tags: ["Automotive", "React", "TypeScript", "Tailwind CSS"],
    challenge: "ShineWorks needed a professional website that showcased their premium mobile car detailing services while allowing customers to easily book appointments. The site needed to look exceptional on both desktop and mobile devices.",
    solution: "We developed a sleek, modern website with a mobile-first approach that highlights their services with high-quality imagery. The booking system integrates with their calendar, making appointment scheduling seamless for both customers and staff.",
    results: "Since launching the new website, ShineWorks has seen a 65% increase in online bookings and improved customer engagement. The mobile-optimized design has significantly increased conversions from smartphone users.",
    features: [
      "Online booking and appointment scheduling system",
      "Service package showcase with detailed pricing",
      "Before/after gallery with customer transformations",
      "Mobile-first responsive design",
      "Client testimonials and reviews integration"
    ],
    technologies: [
      "React", 
      "TypeScript", 
      "Tailwind CSS", 
      "Framer Motion",
      "Custom APIs"
    ],
    testimonial: {
      quote: "LaunchLayer perfectly captured our vision for a premium car detailing website. The online booking feature has dramatically improved our business operations, and customers love how easy it is to schedule services.",
      author: "James Rodriguez",
      position: "Owner, ShineWorks Detailing"
    },
    url: "https://shineworksdetailing.replit.app/",
    relatedProjects: [
      {
        id: "bucks-county-soccer-tournament",
        title: "Bucks County Soccer Tournament",
        image: "/images/bucks-county-soccer.png"
      }
    ]
  },
  {
    id: "bucks-county-soccer-tournament",
    title: "Bucks County Soccer Tournament",
    description: "Professional tournament website with team registration, match scheduling, and real-time results tracking.",
    image: "https://buckscountysoccertournament.com/",
    imageAlt: "Bucks County Soccer Tournament website screenshot",
    tags: ["Sports", "React", "TypeScript", "Tailwind CSS"],
    challenge: "The client needed a comprehensive tournament management system that could handle team registrations, match scheduling, and live score updates. The previous solution was manual and inefficient, causing delays and confusion for participants.",
    solution: "We developed a responsive web application with a user-friendly interface that automates the tournament management process. The system features real-time updates for match results, an intuitive bracket visualization, and a streamlined registration process.",
    results: "The new platform increased participant satisfaction by 87% and reduced administrative workload by 65%. Online registrations increased by 40% compared to the previous year's tournament.",
    features: [
      "Automated team registration and payment system",
      "Dynamic tournament brackets with real-time updates",
      "Responsive design optimized for mobile viewing from the field",
      "Administrative dashboard for tournament director",
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
      author: "Ed Guerrero",
      position: "Tournament Director, Bucks County Soccer"
    },
    url: "https://buckscountysoccertournament.com/",
    relatedProjects: [
      {
        id: "shineworks-detailing",
        title: "ShineWorks Detailing",
        image: "https://shineworksdetailing.replit.app/"
      }
    ]
  },
  {
    id: "destination-imagination-dms",
    title: "Destination Imagination DMS Redesign",
    description: "This redesign focused on improving the mobile experience, layout clarity, and performance of the Destination Imagination DMS system. The original design was cluttered and difficult to navigate on mobile devices.",
    image: "/images/destination-imagination/DI-Logo-Blog.jpg",
    imageAlt: "Destination Imagination logo",
    tags: ["UI/UX", "Redesign", "Responsive Design", "Education"],
    challenge: "The original Destination Imagination DMS system had an outdated, cluttered interface that was particularly difficult to use on mobile devices. Event participants and administrators struggled with the complex navigation, resulting in decreased engagement and increased support requests.",
    solution: "We redesigned the entire user interface with a focus on simplicity, clarity, and mobile-first design principles. The new design features an intuitive navigation system, streamlined forms, and a modern, accessible interface that works beautifully across all device sizes.",
    results: "The redesigned DMS system has significantly improved user satisfaction with improved usability on mobile, cleaner navigation, and overall improved design from the original. Administrators report completing tasks in half the time compared to the old system.",
    features: [
      "Fully responsive design optimized for all device sizes",
      "Streamlined navigation with clear visual hierarchy",
      "Simplified form completion process",
      "Interactive data visualizations and dashboards",
      "Improved accessibility compliance",
      "Modern, clean aesthetic with focus on readability"
    ],
    technologies: [
      "React", 
      "TypeScript", 
      "Tailwind CSS", 
      "Material UI", 
      "Responsive Design"
    ],
    testimonial: {
      quote: "This redesign much better and more seamless. I appreciate the thoughtfulness of the design, the card aspect for the team members is great, this is MUCH easier to read and use, and there are no visible CSS or layout errors anymore. The search is great, and the filter on the side for members, participants, spectators is great. The filter aspect and the other elements look great.",
      author: "Donald Aufiero",
      position: "Director of Software Engineering, Destination Imagination"
    },
    url: "https://destination-imagination-redesign.vercel.app/",
    relatedProjects: [
      {
        id: "shineworks-detailing",
        title: "ShineWorks Detailing",
        image: "https://shineworksdetailing.replit.app/"
      },
      {
        id: "bucks-county-soccer-tournament",
        title: "Bucks County Soccer Tournament",
        image: "https://buckscountysoccertournament.com/"
      }
    ]
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
    author: "Ed Guerrero",
    position: "Tournament Director, Bucks County Soccer",
    image: "",
  },
  {
    quote: "LaunchLayer perfectly captured our vision for a premium car detailing website. The online booking feature has dramatically improved our business operations, and customers love how easy it is to schedule services.",
    author: "James Rodriguez",
    position: "Owner, ShineWorks Detailing",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    quote: "This redesign much better and more seamless. I appreciate the thoughtfulness of the design, the card aspect for the team members is great, this is MUCH easier to read and use, and there are no visible CSS or layout errors anymore. The search is great, and the filter on the side for members, participants, spectators is great. The filter aspect and the other elements look great.",
    author: "Donald Aufiero",
    position: "Director of Software Engineering, Destination Imagination",
    image: "/images/donald-aufiero.jpg",
  },
];
