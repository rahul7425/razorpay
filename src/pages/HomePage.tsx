import React from 'react';
import { CreditCard, ShieldCheck, Wallet, ArrowRight, Building2, Users, HelpCircle, BarChart2, Globe, Shield, BarChart, Lock } from 'lucide-react';
import PaymentForm from '../components/PaymentForm';
import FeatureCard from '../components/FeatureCard';
import HeroSection from '../components/HeroSection';
import Coustompage from './Coustompage.jsx';
import { Link } from 'react-router-dom';
import "./css/home.css";;
import img1 from "../asstes/contactus.webp"
import img2 from "../asstes/costs_hand.png"
import img3 from "../asstes/handshake.png"
import img4 from "../asstes/help.png"
import img5 from "../asstes/slider1.png"

const HomePage = () => {
  const features = [
    {
      icon: <CreditCard className="text-blue-600" />,
      title: "Multiple Payment Methods",
      description: "Accept credit cards, debit cards, UPI, net banking, and more payment methods."
    },
    {
      icon: <ShieldCheck className="text-blue-600" />,
      title: "Secure Transactions",
      description: "Advanced fraud prevention and security measures to protect your business."
    },
    {
      icon: <Wallet className="text-blue-600" />,
      title: "Quick Settlements",
      description: "Fast and reliable settlements directly to your bank account."
    }
  ];
  const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]

  return (
    <>
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Transform Your Business with Smart Payment Solutions
              </h1>
              <p className="text-xl mb-8">
                Accept payments globally, grow your business, and delight your customers with our secure payment gateway.
              </p>
              <div className="flex space-x-4">
                <Link to="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100">
                  Get Started
                </Link>
                <Link to="/contact" className="border border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600">
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80" 
                   alt="Payment Dashboard" 
                   className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PayU?</h2>
            <p className="text-xl text-gray-600">Everything you need to grow your business globally</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12 text-blue-600" />,
                title: "Global Reach",
                description: "Accept payments in 100+ currencies across 50+ countries"
              },
              {
                icon: <Shield className="w-12 h-12 text-blue-600" />,
                title: "Secure Payments",
                description: "PCI DSS Level 1 compliant with advanced fraud protection"
              },
              {
                icon: <CreditCard className="w-12 h-12 text-blue-600" />,
                title: "Multiple Payment Methods",
                description: "Support for cards, wallets, UPI, and local payment methods"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Solutions for Every Business</h2>
            <p className="text-xl text-gray-600">Tailored payment solutions to meet your specific needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce",
                description: "Complete payment solution for online stores",
                icon: <CreditCard className="w-8 h-8 text-blue-600" />
              },
              {
                title: "Marketplaces",
                description: "Split payments and automated settlements",
                icon: <Users className="w-8 h-8 text-blue-600" />
              },
              {
                title: "Subscriptions",
                description: "Recurring billing and subscription management",
                icon: <BarChart className="w-8 h-8 text-blue-600" />
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow">
                {solution.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <Link to={`/solutions/${solution.title.toLowerCase()}`} className="text-blue-600 flex items-center">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Easy Integration</h2>
              <p className="text-xl text-gray-600 mb-8">
                Get started quickly with our developer-friendly APIs and SDKs. Integrate payments into your website or app in minutes.
              </p>
              <div className="space-y-4">
                {[
                  "Ready-to-use UI components",
                  "Comprehensive documentation",
                  "Multiple integration options",
                  "24/7 developer support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Lock className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/developers" className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700">
                View Documentation
              </Link>
            </div>
            <div className="hidden md:block">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
                   alt="Developer Integration" 
                   className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-white mb-8">Join thousands of businesses that trust 7unique for their payment needs</p>
          <div className="flex justify-center space-x-4">
            <Link to="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100">
              Create Account
            </Link>
            <Link to="/contact" className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        
        <HeroSection />
        
        <div className="relative overflow-hidden bg-white mb-4">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Payment Solutions That Work For You
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  Whether you're a small business or a large enterprise, our payment gateway ensures secure, fast, and reliable transactions for your customers.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              alt="Payment processing"
                              src={img1}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt="Security"
                              src={img2}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt="Quick settlements"
                              src="https://media.istockphoto.com/id/1205581593/photo/businessman-hugs-indian-rupee-money-bags-granting-financing-business-project-or-education.webp?a=1&b=1&s=612x612&w=0&k=20&c=HLU4WYmxVaIM3-f1OVm6gpV2sQkknDsOisGKHJMpVYE="
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-60 overflow-hidden rounded-lg">
                            <img
                              alt="Business growth"
                              src="https://images.unsplash.com/photo-1534951009808-766178b47a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt="Global payments"
                              src="https://media.istockphoto.com/id/876774666/photo/businessman-counting-money-indian-rupee-currency-in-the-envelope-just-given-by-his-partner.webp?a=1&b=1&s=612x612&w=0&k=20&c=f2wsq6ihZAcEVNENhUIBXru92a88f1o5xp3d8m9MsBw="
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
        
        
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Make a Payment</h2>
            <PaymentForm />
          </div>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>
        <Coustompage/>

        <section className="bg-blue-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Join thousands of businesses using our payment solutions</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 mx-auto">
            Create Account <ArrowRight size={20} />
          </button>
        </section>
        <div className="bg-white py-24 sm:py-32 mt-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>

        {/* Additional sections here */}
        
      </div>
    </div>
    </>
  );
};

export default HomePage;
