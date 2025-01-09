import React, { useState } from 'react';
import { CreditCard, Calendar, Lock } from 'lucide-react';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    amount: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Processing payment:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <div >
            <input
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.cardNumber}
              onChange={handleChange}
              maxLength={19}
            />
            <CreditCard className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <div className="">
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.expiryDate}
                onChange={handleChange}
                maxLength={5}
              />
              <Calendar className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVV
            </label>
            <div className="">
              <input
                type="password"
                name="cvv"
                placeholder="123"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.cvv}
                onChange={handleChange}
                maxLength={4}
              />
              <Lock className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Holder Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <div className="">
            <span className="absolute left-3 top-2 text-gray-500">$</span>
            <input
              type="text"
              name="amount"
              placeholder="0.00"
              className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Pay Now
      </button>

      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
        <Lock size={16} />
        <span>Secured by SSL encryption</span>
      </div>
    </form>
  );
};

export default PaymentForm;