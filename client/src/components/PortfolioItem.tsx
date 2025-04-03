import { FC } from "react";

interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
}

const PortfolioItem: FC<PortfolioItemProps> = ({
  title,
  description,
  image,
  imageAlt,
  tags,
}) => {
  return (
    <div className="portfolio-item rounded-lg overflow-hidden shadow-md group">
      <div className="h-60 overflow-hidden">
        <img 
          src={image} 
          alt={imageAlt} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
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
  );
};

export default PortfolioItem;
