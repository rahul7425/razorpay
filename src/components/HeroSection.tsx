import React from 'react';
import { Shield, Globe, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="text-center py-16 mb-16">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Accept Payments <span className="text-blue-600">Anywhere</span>
      </h1>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        Simple, secure payment solutions to help your business grow. Accept payments from customers around the world.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Get Started
        </button>
        <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
          Contact Sales
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-duration="1000">
          <Shield className="text-blue-600 mb-4" size={32} />
          <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
          <p className="text-gray-600">Bank-grade security for all transactions</p>
        </div>
        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-duration="2000">
          <Globe className="text-blue-600 mb-4" size={32} />
          <h3 className="text-lg font-semibold mb-2">Global Coverage</h3>
          <p className="text-gray-600">Accept payments from 100+ countries</p>
        </div>
        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-duration="3000">
          <Zap className="text-blue-600 mb-4" size={32} />
          <h3 className="text-lg font-semibold mb-2">Instant Setup</h3>
          <p className="text-gray-600">Go live in minutes, not days</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;