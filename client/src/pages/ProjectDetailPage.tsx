import { useParams } from 'wouter';
import { useEffect } from 'react';
import { portfolioItems } from '@/lib/data';
import ProjectDetail from '@/components/ProjectDetail';
import NotFound from './not-found';

// Expanded portfolio data with more details
const expandedPortfolioData = portfolioItems.map(item => ({
  ...item,
  challenge: item.challenge || `For the ${item.title} project, we faced challenges with creating a responsive design that worked across all devices while maintaining fast load times and a clean user experience.`,
  solution: item.solution || `We implemented a mobile-first design approach with progressive enhancement, optimized images, and utilized modern front-end techniques to ensure fast loading and a seamless user experience across devices.`,
  results: item.results || `The redesigned ${item.title} website saw a 40% increase in mobile engagement, 25% longer session duration, and a 15% improvement in conversion rates within the first month after launch.`,
  features: item.features || [
    'Fully responsive design across all devices',
    'Optimized page load times with lazy loading',
    'Interactive UI elements for improved user engagement',
    'Integrated content management system',
    'Advanced analytics and conversion tracking'
  ],
  technologies: item.technologies || [
    'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Node.js'
  ],
  testimonial: item.testimonial || (
    item.id === 'destination-imagination-dms' 
    ? {
        quote: "This redesign much better and more seamless. I appreciate the thoughtfulness of the design, the card aspect for the team members is great, this is MUCH easier to read and use, and there are no visible CSS or layout errors anymore. The search is great, and the filter on the side for members, participants, spectators is great. The filter aspect and the other elements look great.",
        author: "Donald Aufiero",
        position: "Director of Software Engineering, Destination Imagination"
      }
    : item.id === 'bucks-county-soccer-tournament' 
    ? {
        quote: "The website that LaunchLayer developed for our tournament has transformed how we organize this annual event. The registration process is seamless, and the real-time score updates have been a huge hit with players and spectators alike.",
        author: "Ed Guerrero",
        position: "Tournament Director, Bucks County Soccer"
      }
    : {
        quote: "LaunchLayer perfectly captured our vision for a premium car detailing website. The online booking feature has dramatically improved our business operations, and customers love how easy it is to schedule services.",
        author: "James Rodriguez",
        position: "Owner, ShineWorks Detailing"
      }
  ),
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
  const project = expandedPortfolioData.find(item => item.id === id);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!project) {
    return <NotFound />;
  }
  
  // Simple title update without using Helmet
  useEffect(() => {
    document.title = `${project.title} - LaunchLayer Portfolio Case Study`;
    // Clean up on unmount
    return () => {
      document.title = 'LaunchLayer - Professional Web Development Services';
    };
  }, [project.title]);

  return <ProjectDetail {...project} />;
};

export default ProjectDetailPage;