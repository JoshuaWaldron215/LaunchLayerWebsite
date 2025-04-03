import { FC } from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  image: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  image,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="text-accent mb-4">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      <p className="mb-6 italic text-gray-600">
        "{quote}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={author} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-gray-600">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
