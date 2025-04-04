import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { FadeIn, TextReveal } from '@/components/animations';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

interface ProjectDetailProps {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  challenge?: string;
  solution?: string;
  results?: string;
  features?: string[];
  technologies?: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  relatedProjects?: Array<{
    id: string;
    title: string;
    image: string;
  }>;
  url?: string;
}

const ProjectDetail = ({
  id,
  title,
  description,
  image,
  imageAlt,
  tags,
  challenge,
  solution,
  results,
  features,
  technologies,
  testimonial,
  relatedProjects,
  url,
}: ProjectDetailProps) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Debug effect to log image URL
  useEffect(() => {
    console.log("Project ID:", id);
    console.log("Project Image URL:", image);
    console.log("Image includes 'buckscountysoccer':", image.includes('buckscountysoccer'));
  }, [id, image]);

  // Main content below

  return (
    <div className="bg-white">
      {/* Back to Portfolio Link - Fixed at the top with better visibility */}
      <div className="bg-gradient-to-br from-secondary to-primary pt-6 pb-4 px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/portfolio" className="inline-flex items-center text-base font-medium bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md transition-colors cursor-pointer shadow-md">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Project Header */}
      <section className="pt-6 pb-20 px-8 bg-gradient-to-br from-secondary to-primary overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <TextReveal 
                text={title}
                tag="h1"
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
                duration={0.8}
              />
              <FadeIn direction="up" delay={0.3}>
                <p className="text-lg text-white/90 mb-8">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 text-white rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {url && (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-white text-primary hover:bg-white/90">
                      View Live Website
                    </Button>
                  </a>
                )}
              </FadeIn>
            </div>
            <FadeIn direction="left">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                {id === 'destination-imagination-dms' ? (
                  <div className="aspect-video">
                    <iframe 
                      src="https://destination-imagination-redesign.vercel.app/" 
                      title={title}
                      className="w-full h-full border-0" 
                      loading="lazy"
                    />
                  </div>
                ) : image.startsWith('http') && (image.includes('shineworks') || image.includes('buckscountysoccer')) ? (
                  <div className="aspect-video">
                    <iframe 
                      src={image} 
                      title={title}
                      className="w-full h-full border-0" 
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <img 
                    src={image} 
                    alt={imageAlt} 
                    className="w-full h-auto" 
                  />
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Project Screenshots Section */}
      <section className="py-16 sm:py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold mb-10 sm:mb-12 text-center">
              Project Screenshots
            </h2>
          </FadeIn>
          
          {id === 'destination-imagination-dms' ? (
            // Only show "Before" screenshots for Destination Imagination project
            <FadeIn direction="up">
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-8 text-center">Before the Redesign</h3>
                
                {/* Scrollable container for mobile */}
                <div className="md:hidden relative overflow-x-auto pb-4">
                  <div className="flex space-x-4 px-2 w-[800px]">
                    {[
                      '/images/destination-imagination/before1.png',
                      '/images/destination-imagination/before2.png',
                      '/images/destination-imagination/before3.png'
                    ].map((img, idx) => (
                      <div 
                        key={idx} 
                        className="border border-gray-200 rounded-lg p-4 bg-white shadow-lg flex-1"
                      >
                        <div className="h-[240px] overflow-hidden">
                          <img 
                            src={img} 
                            alt={`Original Design Screenshot ${idx+1}`}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center text-sm text-gray-400 mt-2 italic px-2">
                    ← Swipe to see more screenshots →
                  </div>
                </div>
                
                {/* Desktop grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-6">
                  {[
                    '/images/destination-imagination/before1.png',
                    '/images/destination-imagination/before2.png',
                    '/images/destination-imagination/before3.png'
                  ].map((img, idx) => (
                    <div 
                      key={idx} 
                      className="border border-gray-200 rounded-lg p-4 bg-white shadow-lg"
                    >
                      <div className="h-[240px] overflow-hidden">
                        <img 
                          src={img} 
                          alt={`Original Design Screenshot ${idx+1}`}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <p className="text-center mt-8 text-gray-600 max-w-2xl mx-auto">
                  These screenshots show the original interface before our redesign - cluttered, complex, and difficult to navigate.
                  The live site embedded at the top of this page demonstrates our modern, user-friendly solution.
                </p>
              </div>
            </FadeIn>
          ) : (
            // Standard layout for other projects
            <>
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                {/* Primary Screenshot */}
                <FadeIn direction="up" delay={0.2}>
                  <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-lg">
                    {image.startsWith('http') && (image.includes('shineworks') || image.includes('buckscountysoccer')) ? (
                      <div className="aspect-video">
                        <iframe 
                          src={image} 
                          title={`${title} - Desktop View`}
                          className="w-full h-full border-0 rounded-lg" 
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <img 
                        src={image} 
                        alt={`${title} - Desktop View`}
                        className="w-full rounded-lg"
                      />
                    )}
                    <p className="text-center mt-4 text-gray-600">
                      Desktop view
                    </p>
                  </div>
                </FadeIn>
                
                {/* Secondary Screenshot - Mobile View */}
                <FadeIn direction="up" delay={0.4}>
                  <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-lg">
                    {image.startsWith('http') && (image.includes('shineworks') || image.includes('buckscountysoccer')) ? (
                      <div className="aspect-[9/16] max-w-[300px] mx-auto">
                        <iframe 
                          src={image} 
                          title={`${title} - Mobile View`}
                          className="w-full h-full border-0 rounded-lg" 
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <img 
                        src={image} 
                        alt={`${title} - Responsive Mobile View`}
                        className="w-full rounded-lg"
                      />
                    )}
                    <p className="text-center mt-4 text-gray-600">
                      Responsive mobile design
                    </p>
                  </div>
                </FadeIn>
              </div>
              
              <FadeIn direction="up" delay={0.6}>
                <p className="text-center mt-8 text-gray-600 max-w-2xl mx-auto">
                  These screenshots showcase the project's design and functionality across different devices.
                </p>
              </FadeIn>
            </>
          )}
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-16 sm:py-20 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8 sm:mb-10">
            <div className="flex flex-wrap sm:flex-nowrap space-x-4 sm:space-x-8 justify-center sm:justify-start">
              {['overview', 'challenge', 'solution', 'results'].map((tab) => (
                <button
                  key={tab}
                  className={`pb-3 sm:pb-4 px-1 font-medium text-base sm:text-lg capitalize border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="prose prose-lg max-w-none">
            {activeTab === 'overview' && (
              <div>
                <p>{description}</p>
                {features && (
                  <>
                    <h3>Key Features</h3>
                    <ul>
                      {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}
                {technologies && (
                  <>
                    <h3>Technologies Used</h3>
                    <div className="flex flex-wrap gap-2 not-prose mb-8">
                      {technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {activeTab === 'challenge' && challenge && (
              <div>
                <h3>The Challenge</h3>
                <p>{challenge}</p>
              </div>
            )}

            {activeTab === 'solution' && solution && (
              <div>
                <h3>Our Solution</h3>
                <p>{solution}</p>
              </div>
            )}

            {activeTab === 'results' && results && (
              <div>
                <h3>The Results</h3>
                <p>{results}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {testimonial && (
        <section className="py-14 sm:py-16 px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 sm:p-10">
                <blockquote className="text-xl text-center italic font-light text-gray-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-center">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects && relatedProjects.length > 0 && (
        <section className="py-14 sm:py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Related Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/portfolio/${project.id}`} className="block group cursor-pointer h-full">
                    <div className="relative overflow-hidden rounded-lg shadow-md h-full bg-white border border-gray-100">
                      <div className="aspect-video overflow-hidden">
                        {project.id === 'destination-imagination-dms' ? (
                          <iframe 
                            src="https://destination-imagination-redesign.vercel.app/" 
                            title={project.title}
                            className="w-full h-full border-0" 
                            loading="lazy"
                          />
                        ) : project.image.startsWith('http') && (project.image.includes('shineworks') || project.image.includes('buckscountysoccer')) ? (
                          <iframe 
                            src={project.image} 
                            title={project.title}
                            className="w-full h-full border-0" 
                            loading="lazy"
                          />
                        ) : (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-8 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to start your own project?</h2>
            <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our expertise in web development and design.
            </p>
            <Link href="/contact" className="inline-block">
              <Button className="bg-white text-primary hover:bg-white/90 text-lg px-6 sm:px-8 py-4 sm:py-6">
                Get in Touch
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;