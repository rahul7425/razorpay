import React from 'react';
import { Code, Book, Terminal } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

const DocsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">API Documentation</h1>
          <p className="text-xl text-gray-600">Everything you need to integrate our payment solution</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="flex items-center gap-2 text-2xl font-bold mb-4">
              <Terminal size={24} className="text-blue-600" />
              Quick Start
            </h2>
            <p className="mb-4">Get started with our payment gateway in minutes.</p>
            <CodeBlock
              language="bash"
              code="npm install @payu/client-sdk"
            />
          </section>

          <section className="mb-12">
            <h2 className="flex items-center gap-2 text-2xl font-bold mb-4">
              <Code size={24} className="text-blue-600" />
              Integration Example
            </h2>
            <CodeBlock
              language="javascript"
              code={`
import { PayuClient } from '@payu/client-sdk';

const payu = new PayuClient({
  apiKey: 'your-api-key',
  environment: 'sandbox'
});

// Create a payment
const payment = await payu.createPayment({
  amount: '100.00',
  currency: 'USD',
  description: 'Test payment'
});`}
            />
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-2xl font-bold mb-4">
              <Book size={24} className="text-blue-600" />
              API Reference
            </h2>
            <p>Explore our comprehensive API reference to learn more about available endpoints and features.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;