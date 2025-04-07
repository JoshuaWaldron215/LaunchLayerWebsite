import { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  jsonLd?: Record<string, any>;
}

const defaultSEO = {
  title: 'LaunchLayer - Professional Web Development Services',
  description: 'Professional web development and design services for modern businesses. We help you launch your online presence with custom, responsive websites and applications.',
  keywords: 'web development, web design, website creation, responsive design, professional websites, website development',
  ogTitle: 'LaunchLayer - Expert Web Development Services',
  ogDescription: 'Get your business online with professional, responsive, and engaging websites built by experienced developers.',
};

const SEO: React.FC<SEOProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  ogTitle = defaultSEO.ogTitle,
  ogDescription = defaultSEO.ogDescription,
  jsonLd,
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Helper function to create or update meta tags
    const setMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    // Helper function to create or update Open Graph meta tags
    const setOgMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    // Update meta description
    setMetaTag('description', description);
    
    // Update meta keywords
    if (keywords) {
      setMetaTag('keywords', keywords);
    }
    
    // Update Open Graph meta tags
    if (ogTitle) {
      setOgMetaTag('og:title', ogTitle);
    }
    
    if (ogDescription) {
      setOgMetaTag('og:description', ogDescription);
    }
    
    // Set other common OG tags
    setOgMetaTag('og:type', 'website');
    setOgMetaTag('og:url', window.location.href);
    
    // Add or update JSON-LD structured data
    if (jsonLd) {
      let script = document.getElementById('json-ld');
      if (!script) {
        script = document.createElement('script');
        script.id = 'json-ld';
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }
    
    return () => {
      document.title = defaultSEO.title;
      // Remove JSON-LD on unmount
      if (jsonLd) {
        const script = document.getElementById('json-ld');
        if (script) {
          document.head.removeChild(script);
        }
      }
    };
  }, [title, description, keywords, ogTitle, ogDescription, jsonLd]);

  return null;
};

export default SEO;