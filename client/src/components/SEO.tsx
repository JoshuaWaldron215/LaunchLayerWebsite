import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterCreator?: string;
  jsonLd?: Record<string, any>;
}

const defaultSEO = {
  title: 'LaunchLayer - Professional Web Development Services',
  description: 'Professional web development and design services for modern businesses. We help you launch your online presence with custom, responsive websites and applications.',
  keywords: 'web development, web design, responsive websites, Philadelphia, professional website, digital presence, custom websites',
  ogTitle: 'LaunchLayer - Web Development and Design Services',
  ogDescription: 'Transform your online presence with our expert web development services. Custom-designed websites for businesses in Philadelphia and beyond.',
  ogImage: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  twitterCard: 'summary_large_image',
  twitterCreator: '@launchlayer',
};

const SEO: React.FC<SEOProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  canonicalUrl,
  keywords = defaultSEO.keywords,
  ogTitle = defaultSEO.ogTitle,
  ogDescription = defaultSEO.ogDescription,
  ogImage = defaultSEO.ogImage,
  twitterCard = defaultSEO.twitterCard,
  twitterCreator = defaultSEO.twitterCreator,
  jsonLd,
}) => {
  // Format JSON-LD
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : '';

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content="LaunchLayer" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">{jsonLdString}</script>
      )}
    </Helmet>
  );
};

export default SEO;