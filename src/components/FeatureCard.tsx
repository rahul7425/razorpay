import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description , index}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow" data-aos="zoom-in-left" data-aos-delay={index*100}>
      <div className="flex items-start gap-4">
        {icon}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;