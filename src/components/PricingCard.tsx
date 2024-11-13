import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ name, price, features, isPopular = false }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 relative ${isPopular ? 'ring-2 ring-blue-600' : ''}`}>
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <div className="mb-4">
          {price === 'Custom' ? (
            <span className="text-4xl font-bold text-gray-900">Custom</span>
          ) : (
            <>
              <span className="text-4xl font-bold text-gray-900">${price}</span>
              <span className="text-gray-600">/month</span>
            </>
          )}
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="text-green-500 flex-shrink-0" size={20} />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
        isPopular 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      }`}>
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;