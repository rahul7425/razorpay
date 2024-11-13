import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Products</h3>
              <Link to={"/paymentgateway"}>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Payment Gateway</a></li>

              <li><a href="#" className="hover:text-white transition-colors">Payment Links</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Subscriptions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marketplace</a></li>
            </ul>
              </Link>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Solutions</h3>
            <Link to={"/solutions"}>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SaaS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marketplaces</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
            </ul>
            </Link>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <Link to={"/resources"}>
            <ul className="space-y-2">

              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
            </Link>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <Link to={"/"}>
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              </Link>
              <Link to={"/docs"}>
              <li><a href="#" className="hover:text-white transition-colors">Devloper</a></li>
              </Link>
              <Link to={"/pricing"}>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </Link>
              <Link to={"/partner"}>
              <li><a href="#" className="hover:text-white transition-colors">Partner</a></li>
              </Link>
             
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              © 2024 7UNIQUE Clone. All rights reserved.
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;