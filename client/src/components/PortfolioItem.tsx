import { FC } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface PortfolioItemProps {
  id?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
}

const PortfolioItem: FC<PortfolioItemProps> = ({
  id,
  title,
  description,
  image,
  imageAlt,
  tags,
}) => {
  return (
    <div className="portfolio-item rounded-lg overflow-hidden shadow-md group">
      <Link href={id ? `/portfolio/${id}` : "#"}>
        <div className="block cursor-pointer">
          <div className="h-60 overflow-hidden relative">
            {image.startsWith('http') && (image.includes('shineworks') || image.includes('buckscountysoccer')) ? (
              <iframe 
                src={image} 
                title={title}
                className="w-full h-full border-0" 
                loading="lazy"
              />
            ) : (
              <img 
                src={image} 
                alt={imageAlt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <motion.div 
                className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                View Project
              </motion.div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="bg-secondary text-sm py-1 px-3 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioItem;
