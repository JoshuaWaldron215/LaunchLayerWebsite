import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { FadeIn, TextReveal } from '@/components/animations';

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
}: ProjectDetailProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Main content below

  return (
    <div className="bg-white">
      {/* Project Header */}
      <section className="py-20 px-8 bg-gradient-to-br from-secondary to-primary overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/portfolio" className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white mb-6 transition-colors cursor-pointer">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 mr-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Portfolio
              </Link>
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
                <Button className="bg-white text-primary hover:bg-white/90">
                  View Live Website
                </Button>
              </FadeIn>
            </div>
            <FadeIn direction="left">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={image} 
                  alt={imageAlt} 
                  className="w-full h-auto" 
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Project Screenshots Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Project Screenshots
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Primary Screenshot */}
            <FadeIn direction="up" delay={0.2}>
              <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-lg">
                <img 
                  src={image} 
                  alt={`${title} - Main View`}
                  className="w-full rounded-lg"
                />
                <p className="text-center mt-4 text-gray-600">
                  Main view
                </p>
              </div>
            </FadeIn>
            
            {/* Secondary Screenshot (using same image for demo) */}
            <FadeIn direction="up" delay={0.4}>
              <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-lg">
                <img 
                  src={image} 
                  alt={`${title} - Responsive View`}
                  className="w-full rounded-lg"
                />
                <p className="text-center mt-4 text-gray-600">
                  Responsive design
                </p>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn direction="up" delay={0.6}>
            <p className="text-center mt-8 text-gray-600 max-w-2xl mx-auto">
              These screenshots showcase the project's design and functionality across different devices.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="border-b border-gray-200 mb-10">
            <div className="flex space-x-8">
              {['overview', 'challenge', 'solution', 'results'].map((tab) => (
                <button
                  key={tab}
                  className={`pb-4 px-1 font-medium text-lg capitalize border-b-2 transition-colors ${
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
        <section className="py-20 px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <blockquote className="text-xl text-center italic font-light text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-center">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects && relatedProjects.length > 0 && (
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/portfolio/${project.id}`} className="block group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg shadow-md">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <h3 className="text-white font-bold">{project.title}</h3>
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
      <section className="py-20 px-8 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold mb-6">Ready to start your own project?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our expertise in web development and design.
            </p>
            <Link href="/contact" className="inline-block">
              <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
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