import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, Zap, Clock, PieChart, Users, MessageSquare } from 'lucide-react';

export default function PaymentGateway() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Payment Gateway Solutions</h1>
              <p className="text-xl mb-8">Accept payments seamlessly with our secure and reliable payment gateway</p>
              <Link to="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100">
                Get Started
              </Link>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80" 
                alt="Payment Gateway" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to process payments globally</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-blue-600" />,
                title: "Secure Processing",
                description: "PCI DSS Level 1 compliance with 3D Secure authentication"
              },
              {
                icon: <Globe className="w-12 h-12 text-blue-600" />,
                title: "Global Coverage",
                description: "Accept payments in 100+ currencies worldwide"
              },
              {
                icon: <Zap className="w-12 h-12 text-blue-600" />,
                title: "Instant Setup",
                description: "Quick onboarding and easy integration process"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Integration Process</h2>
            <p className="text-xl text-gray-600">Get up and running in minutes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Sign Up", description: "Create your PayU account" },
              { step: "2", title: "Configure", description: "Set up your payment methods" },
              { step: "3", title: "Integrate", description: "Add our SDK to your site" },
              { step: "4", title: "Go Live", description: "Start accepting payments" }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Supported Payment Methods</h2>
            <p className="text-xl text-gray-600">Accept payments from customers worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Credit Cards", "Debit Cards", "UPI", "Net Banking",
              "Mobile Wallets", "EMI", "Pay Later", "International Cards"
            ].map((method, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg text-center">
                <p className="font-semibold">{method}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Real-time Analytics</h2>
              <p className="text-xl text-gray-600 mb-8">
                Track your business performance with powerful analytics and reporting tools
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Clock />, text: "Real-time transaction monitoring" },
                  { icon: <PieChart />, text: "Detailed payment analytics" },
                  { icon: <Users />, text: "Customer insights" },
                  { icon: <MessageSquare />, text: "Custom reports" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-blue-600">{item.icon}</div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
                alt="Analytics Dashboard" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise-grade Security</h2>
            <p className="text-xl text-gray-600">Your security is our top priority</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "PCI DSS Compliance",
                description: "Highest level of payment security standards"
              },
              {
                title: "Fraud Prevention",
                description: "AI-powered fraud detection and prevention"
              },
              {
                title: "Data Protection",
                description: "End-to-end encryption for all transactions"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-white mb-8">Join thousands of businesses using 7unique Payment Gateway</p>
          <div className="flex justify-center space-x-4">
            <Link to="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100">
              Create Account
            </Link>
            <Link to="/contact" className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}