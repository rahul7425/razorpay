import React from 'react';
import { ShoppingCart, Building2, Globe2, Briefcase } from 'lucide-react';

const SolutionsPage = () => {
  const solutions = [
    {
      icon: <ShoppingCart className="text-blue-600" size={32} />,
      title: "E-commerce",
      description: "Complete payment solution for online stores with support for multiple payment methods, recurring billing, and fraud protection.",
      features: [
        "Shopping cart integration",
        "Multiple payment options",
        "Automated refunds",
        "Inventory management"
      ]
    },
    {
      icon: <Building2 className="text-blue-600" size={32} />,
      title: "Enterprise",
      description: "Customizable payment infrastructure for large organizations with high transaction volumes and specific compliance needs.",
      features: [
        "Custom integration",
        "Volume pricing",
        "Dedicated support",
        "Advanced reporting"
      ]
    },
    {
      icon: <Globe2 className="text-blue-600" size={32} />,
      title: "Marketplaces",
      description: "Split payments, multi-party settlements, and escrow services for marketplace platforms.",
      features: [
        "Split payments",
        "Automated payouts",
        "Vendor management",
        "Platform fees"
      ]
    },
    {
      icon: <Briefcase className="text-blue-600" size={32} />,
      title: "SaaS",
      description: "Subscription management and recurring billing solutions for software companies.",
      features: [
        "Subscription billing",
        "Usage-based pricing",
        "Customer portal",
        "Revenue analytics"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Solutions for Every Business</h1>
          <p className="text-xl text-gray-600">Tailored payment solutions to help your business grow</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                {solution.icon}
                <h2 className="text-2xl font-semibold text-gray-900">{solution.title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-3">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Not sure which solution is right for you?</h2>
          <p className="text-gray-600 mb-8">Our payment experts are here to help you find the perfect solution for your business.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;