import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const TransactionList = () => {
  const transactions = [
    {
      id: 1,
      type: 'payment',
      description: 'Payment from John Doe',
      amount: '+$2,500.00',
      date: '2024-03-15',
      status: 'completed'
    },
    {
      id: 2,
      type: 'refund',
      description: 'Refund to Sarah Smith',
      amount: '-$150.00',
      date: '2024-03-14',
      status: 'completed'
    },
    {
      id: 3,
      type: 'payment',
      description: 'Payment from Tech Corp',
      amount: '+$5,000.00',
      date: '2024-03-14',
      status: 'pending'
    },
    {
      id: 4,
      type: 'payment',
      description: 'Payment from Jane Wilson',
      amount: '+$750.00',
      date: '2024-03-13',
      status: 'completed'
    }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 text-gray-600 font-medium">Transaction</th>
            <th className="text-left py-3 px-4 text-gray-600 font-medium">Amount</th>
            <th className="text-left py-3 px-4 text-gray-600 font-medium">Date</th>
            <th className="text-left py-3 px-4 text-gray-600 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-3 px-4">
                <div className="flex items-center gap-3">
                  {transaction.type === 'payment' ? (
                    <ArrowDownRight className="text-green-500" size={20} />
                  ) : (
                    <ArrowUpRight className="text-red-500" size={20} />
                  )}
                  <span className="text-gray-900">{transaction.description}</span>
                </div>
              </td>
              <td className={`py-3 px-4 ${
                transaction.type === 'payment' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.amount}
              </td>
              <td className="py-3 px-4 text-gray-600">
                {transaction.date}
              </td>
              <td className="py-3 px-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  transaction.status === 'completed'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;