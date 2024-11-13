import React from 'react';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: "Phone Support",
      description: "24/7 available for urgent issues",
      contact: "+1 (555) 123-4567"
    },
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email Support",
      description: "Get response within 24 hours",
      contact: "support@payu-clone.com"
    },
    {
      icon: <MessageSquare className="text-blue-600" size={24} />,
      title: "Live Chat",
      description: "Available during business hours",
      contact: "Start a conversation"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">We're here to help with any questions you have</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="grid gap-8 mb-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
                  {method.icon}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                    <p className="text-gray-600 mb-2">{method.description}</p>
                    <p className="text-blue-600 font-medium">{method.contact}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-600" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Office Location</h3>
                  <p className="text-gray-600">
                    123 Payment Street<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;