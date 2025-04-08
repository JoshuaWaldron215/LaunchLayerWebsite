import { useEffect } from 'react';
import { useLocation } from 'wouter';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  jsonLd?: Record<string, any>;
}

const defaultSEO = {
  title: 'LaunchLayer - Professional Web Development Services',
  description: 'Professional web development and design services for modern businesses. We help you launch your online presence with custom, responsive websites and applications.',
  keywords: 'web development, web design, website creation, responsive design, professional websites, website development, affordable web design, freelance web developer, small business websites',
  ogTitle: 'LaunchLayer - Expert Web Development Services',
  ogDescription: 'Get your business online with professional, responsive, and engaging websites built by experienced developers.',
  ogImage: '/images/launchlayer-og-image.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'LaunchLayer - Professional Web Development Services',
  twitterDescription: 'Get your business online with professional, responsive, and engaging websites built by experienced developers.',
  twitterImage: '/images/launchlayer-twitter-card.jpg'
};

/**
 * SEO Component for optimizing pages for search engines and social sharing
 * 
 * This component manages all meta tags, Open Graph tags, Twitter Card tags,
 * canonical URLs, and structured data for improved SEO performance.
 * 
 * @param {Object} props - Component props
 */
const SEO: React.FC<SEOProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  ogTitle = defaultSEO.ogTitle,
  ogDescription = defaultSEO.ogDescription,
  ogImage = defaultSEO.ogImage,
  ogType = defaultSEO.ogType,
  twitterCard = defaultSEO.twitterCard,
  twitterTitle = defaultSEO.twitterTitle,
  twitterDescription = defaultSEO.twitterDescription,
  twitterImage = defaultSEO.twitterImage,
  canonical,
  jsonLd,
}) => {
  const [location] = useLocation();
  
  // Base URL for the site (replace with actual domain in production)
  const baseUrl = 'https://launchlayer.com';
  const fullUrl = `${baseUrl}${location}`;

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

    // Helper function to create or update Twitter Card meta tags
    const setTwitterMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    // Update meta description and keywords
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    
    // Update robots meta tag to allow indexing
    setMetaTag('robots', 'index, follow');
    
    // Update Open Graph meta tags
    setOgMetaTag('og:title', ogTitle);
    setOgMetaTag('og:description', ogDescription);
    setOgMetaTag('og:type', ogType);
    setOgMetaTag('og:url', fullUrl);
    setOgMetaTag('og:image', ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`);
    setOgMetaTag('og:site_name', 'LaunchLayer');
    
    // Update Twitter Card meta tags
    setTwitterMetaTag('twitter:card', twitterCard);
    setTwitterMetaTag('twitter:title', twitterTitle);
    setTwitterMetaTag('twitter:description', twitterDescription);
    setTwitterMetaTag('twitter:image', twitterImage.startsWith('http') ? twitterImage : `${baseUrl}${twitterImage}`);
    
    // Add canonical link tag
    const canonicalUrl = canonical || fullUrl;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);
    
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
  }, [
    title, description, keywords, 
    ogTitle, ogDescription, ogImage, ogType, 
    twitterCard, twitterTitle, twitterDescription, twitterImage,
    canonical, jsonLd, fullUrl, location, baseUrl
  ]);

  return null;
};

export default SEO;