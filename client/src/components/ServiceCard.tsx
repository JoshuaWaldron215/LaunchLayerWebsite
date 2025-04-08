import { FC } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface ServiceFeature {
  name: string;
  included: boolean;
}

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: string;
  popular?: boolean;
  features: ServiceFeature[];
  deliveryTime?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  description,
  price,
  icon,
  popular = false,
  features,
  deliveryTime,
}) => {
  return (
    <div className={cn(
      "service-card bg-white rounded-lg shadow-md p-8 transition-all duration-300",
      popular ? "border-2 border-accent relative" : ""
    )}>
      {popular && (
        <div className="absolute top-0 right-0 bg-accent text-white py-1 px-4 text-sm rounded-bl-lg rounded-tr-md font-medium">
          POPULAR
        </div>
      )}
      <div className="text-center p-4 rounded-full bg-accent/10 inline-block mb-6">
        <i className={`${icon} text-accent text-2xl`}></i>
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="bg-secondary p-4 rounded mb-6">
        <div className="text-3xl font-bold text-accent mb-2">{price}</div>
        <p className="text-sm text-gray-600">One-time payment</p>
        {deliveryTime && (
          <div className="mt-2 flex items-center">
            <i className="fas fa-clock text-gray-500 mr-2 text-sm"></i>
            <p className="text-sm text-gray-600">{deliveryTime}</p>
          </div>
        )}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className={cn(
            "flex items-start",
            !feature.included ? "text-gray-400" : ""
          )}>
            <i className={cn(
              "fas mt-1 mr-3",
              feature.included ? "fa-check text-accent" : "fa-times"
            )}></i>
            <span>{feature.name}</span>
          </li>
        ))}
      </ul>
      <Link href="/contact" className="block text-center bg-accent hover:bg-accent/80 text-white px-6 py-3 rounded-lg transition-colors duration-300">
        Get Started
      </Link>
    </div>
  );
};

export default ServiceCard;
