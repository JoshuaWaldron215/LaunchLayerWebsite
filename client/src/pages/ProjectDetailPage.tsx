import { useParams } from 'wouter';
import { useEffect, useState } from 'react';
import { portfolioItems } from '@/lib/data';
import ProjectDetail from '@/components/ProjectDetail';
import SEO from '@/components/SEO';
import NotFound from './not-found';

// Expanded portfolio data with more details
const expandedPortfolioData = portfolioItems.map(item => ({
  ...item,
  challenge: `For the ${item.title} project, we faced challenges with creating a responsive design that worked across all devices while maintaining fast load times and a clean user experience.`,
  solution: `We implemented a mobile-first design approach with progressive enhancement, optimized images, and utilized modern front-end techniques to ensure fast loading and a seamless user experience across devices.`,
  results: `The redesigned ${item.title} website saw a 40% increase in mobile engagement, 25% longer session duration, and a 15% improvement in conversion rates within the first month after launch.`,
  features: [
    'Fully responsive design across all devices',
    'Optimized page load times with lazy loading',
    'Interactive UI elements for improved user engagement',
    'Integrated content management system',
    'Advanced analytics and conversion tracking'
  ],
  technologies: [
    'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Node.js'
  ],
  testimonial: {
    quote: `The team at LaunchLayer delivered beyond our expectations. The new website perfectly captures our brand and has significantly improved our online presence.`,
    author: 'Jane Smith',
    position: `CEO, ${item.title.split(' ')[0]}`
  },
  relatedProjects: portfolioItems
    .filter(relatedItem => relatedItem.id !== item.id)
    .slice(0, 3)
    .map(relatedItem => ({
      id: relatedItem.id,
      title: relatedItem.title,
      image: relatedItem.image
    }))
}));

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [mounted, setMounted] = useState(false);
  const project = expandedPortfolioData.find(item => item.id === id);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Mark component as mounted to safely use Helmet
    setMounted(true);
  }, [id]);
  
  if (!project) {
    return <NotFound />;
  }
  
  // Create JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${project.title} - LaunchLayer Portfolio Case Study`,
    "description": project.description,
    "image": project.image,
    "mainEntity": {
      "@type": "CreativeWork",
      "name": project.title,
      "description": project.description,
      "creator": {
        "@type": "Organization",
        "name": "LaunchLayer",
        "url": "https://launchlayer.com"
      },
      "keywords": project.tags.join(", ")
    }
  };

  // Only use SEO component after client-side mount to prevent repl.it context errors
  return (
    <>
      {mounted && (
        <SEO 
          title={`${project.title} - LaunchLayer Portfolio Case Study`}
          description={`Explore how LaunchLayer helped ${project.title} with custom web development solutions. View our case study and results.`}
          keywords={`${project.title}, web development case study, ${project.tags.join(", ")}, philadelphia web developer`}
          ogTitle={`${project.title} - Web Development Case Study`}
          ogDescription={project.description}
          ogImage={project.image}
          jsonLd={jsonLd}
        />
      )}
      <ProjectDetail {...project} />
    </>
  );
};

export default ProjectDetailPage;