import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

const defaultSEO = {
  title: 'LaunchLayer - Professional Web Development Services',
  description: 'Professional web development and design services for modern businesses. We help you launch your online presence with custom, responsive websites and applications.',
};

const SEO: React.FC<SEOProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    return () => {
      document.title = defaultSEO.title;
    };
  }, [title, description]);

  return null;
};

export default SEO;