import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import img1 from '../asstes/SEVENUNIQUE NEW.png'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
          
            <img src={img1} alt=""  style={{width:"6%"}} />
            <span className="text-xl font-bold text-gray-800">7UNIQUE</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8" >
            <Link to="/paymentgateway" className="text-gray-600 hover:text-gray-900">Gateway</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link to="/docs" className="text-gray-600 hover:text-gray-900">Developers</Link>
            <Link to="/resources" className="text-gray-600 hover:text-gray-900">Resources</Link>
            <Link to="/solutions" className="text-gray-600 hover:text-gray-900">Solutions</Link>
            <Link to="/partner" className="text-gray-600 hover:text-gray-900">Partner</Link>
          </div>

          <div className="flex items-center gap-4 ml-4 mr-4">
           
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg  hover:bg-blue-700 transition-colors" style={{width:"150px"}}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;