import React from 'react';
import { Link } from 'react-router-dom';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, no surprises.
          </p>
          <div className="inline-flex p-1 bg-blue-700 rounded-lg">
            <button className="px-4 py-2 bg-white text-blue-600 rounded-md font-semibold">Monthly</button>
            <button className="px-4 py-2 text-white">Annual (Save 20%)</button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "₹999",
                description: "Perfect for small businesses",
                features: [
                  "2.5% per transaction",
                  "Standard support",
                  "Basic analytics",
                  "5 team members",
                  "API access"
                ]
              },
              {
                name: "Professional",
                price: "₹2,499",
                description: "For growing businesses",
                popular: true,
                features: [
                  "1.9% per transaction",
                  "Priority support",
                  "Advanced analytics",
                  "Unlimited team members",
                  "Custom integration"
                ]
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large organizations",
                features: [
                  "Custom pricing",
                  "24/7 dedicated support",
                  "Enterprise analytics",
                  "Custom solutions",
                  "Account manager"
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-lg shadow-lg p-8 ${plan.popular ? 'border-2 border-blue-600' : 'border border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-6 transform -translate-y-1/2">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Popular</div>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-blue-600 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/signup"
                  className={`block text-center py-3 px-6 rounded-md font-semibold ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Compare Plans</h2>
            <p className="text-xl text-gray-600">Detailed comparison of all features</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-t border-gray-200">
                  <th className="py-4 px-6 text-left">Features</th>
                  <th className="py-4 px-6 text-center">Starter</th>
                  <th className="py-4 px-6 text-center">Professional</th>
                  <th className="py-4 px-6 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Transaction Fee",
                  "Payment Methods",
                  "Support",
                  "Analytics",
                  "Team Members",
                  "API Access",
                  "Custom Integration",
                  "Dedicated Manager"
                ].map((feature, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-4 px-6">{feature}</td>
                    <td className="py-4 px-6 text-center">
                      <Check className="w-5 h-5 text-blue-600 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="w-5 h-5 text-blue-600 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="w-5 h-5 text-blue-600 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "How does the pricing work?",
                a: "Our pricing is based on a combination of monthly subscription and per-transaction fees. The specific rates depend on your chosen plan."
              },
              {
                q: "Can I change plans later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                q: "Are there any hidden fees?",
                a: "No, we believe in complete transparency. All fees are clearly stated in your plan details."
              },
              {
                q: "What payment methods are supported?",
                a: "We support all major credit cards, debit cards, UPI, net banking, and various digital wallets."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl text-white p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Enterprise Solutions</h2>
                <p className="text-xl mb-8">
                  Need a custom solution? Let's build something perfect for your business.
                </p>
                <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100">
                  Contact Sales <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80" 
                  alt="Enterprise Solutions" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Start Accepting Payments Today</h2>
          <p className="text-xl text-gray-600 mb-8">No credit card required. Get started with a 14-day free trial.</p>
          <Link to="/signup" className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700">
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}