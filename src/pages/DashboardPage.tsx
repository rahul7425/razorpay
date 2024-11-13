import React from 'react';
import { BarChart3, DollarSign, Users, ArrowUpRight } from 'lucide-react';
import TransactionList from '../components/TransactionList';
import DashboardCard from '../components/DashboardCard';

const DashboardPage = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$124,563.00",
      change: "+12.5%",
      icon: <DollarSign className="text-green-500" />
    },
    {
      title: "Transactions",
      value: "2,543",
      change: "+8.2%",
      icon: <BarChart3 className="text-blue-500" />
    },
    {
      title: "Active Customers",
      value: "1,234",
      change: "+15.3%",
      icon: <Users className="text-purple-500" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <ArrowUpRight size={20} />
            Export Report
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <DashboardCard key={index} {...stat} />
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Recent Transactions</h2>
          <TransactionList />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;