import React, { useEffect } from "react";
import {
  BookOpen,
  FileText,
  PlayCircle,
  Users,
  LifeBuoy,
  Laptop,
} from "lucide-react";
import "./css/resources.css";
import Resource from "../asstes/resources.jpg";
const ResourcesPage = () => {
  const resources = [
    {
      category: "Documentation",
      icon: <BookOpen className="text-blue-600" size={32} />,
      items: [
        {
          title: "Getting Started Guide",
          description: "Learn the basics of integrating our payment solution",
        },
        {
          title: "API Reference",
          description: "Detailed documentation of our API endpoints",
        },
        {
          title: "SDKs & Libraries",
          description: "Official SDKs for various programming languages",
        },
      ],
    },
    {
      category: "Guides & Tutorials",
      icon: <FileText className="text-blue-600" size={32} />,
      items: [
        {
          title: "Integration Tutorials",
          description: "Step-by-step guides for common integrations",
        },
        {
          title: "Best Practices",
          description: "Security and optimization recommendations",
        },
        {
          title: "Sample Projects",
          description: "Example implementations and code samples",
        },
      ],
    },
    {
      category: "Video Resources",
      icon: <PlayCircle className="text-blue-600" size={32} />,
      items: [
        {
          title: "Video Tutorials",
          description: "Visual guides for implementation",
        },
        {
          title: "Webinars",
          description: "Educational sessions and product updates",
        },
        {
          title: "Developer Tips",
          description: "Quick tips and tricks for developers",
        },
      ],
    },
    {
      category: "Community",
      icon: <Users className="text-blue-600" size={32} />,
      items: [
        {
          title: "Developer Forum",
          description: "Connect with other developers",
        },
        {
          title: "Blog",
          description: "Latest updates and technical articles",
        },
        {
          title: "Support Center",
          description: "Get help from our support team",
        },
      ],
    },
    {
      category: "Support & Help",
      icon: <LifeBuoy className="text-blue-600" size={32} />,
      items: [
        {
          title: "Help Center",
          description: "Browse articles and common issues",
        },
        {
          title: "Contact Us",
          description: "Get in touch with our team for assistance",
        },
        {
          title: "Troubleshooting",
          description: "Find solutions to common problems",
        },
      ],
    },
    {
      category: "Developer Tools",
      icon: <Laptop className="text-blue-600" size={32} />,
      items: [
        {
          title: "SDK Setup",
          description: "Instructions for setting up SDKs",
        },
        {
          title: "API Access",
          description: "How to get API keys for your account",
        },
        {
          title: "Webhooks Integration",
          description: "Learn to set up webhooks for real-time notifications",
        },
      ],
    },
  ];

  useEffect(()=>{
    window.scrollBy(0,0)
  },[])
  return (
    <div className="">
      <section
        className="relative text-white py-24 h-[80vh] rounded-br-[4.8rem]"
        style={{
          backgroundImage: `url(${Resource})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90 rounded-br-[4.8rem]"
          style={{ zIndex: 0 }}
        ></div>

        {/* Content */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-aos="fade-up"
        >
          <h1 className="text-5xl font-bold mb-6 tracking-tight">Resources</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Everything you need to build and grow with 7unique
          </p>
        </div>
      </section>
      <div className="max-w-6xl mx-auto py-10">
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((section, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                {section.icon}
                <h2 className="text-2xl font-semibold text-gray-900">
                  {section.category}
                </h2>
              </div>

              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Additional Help?</h2>
          <p className="mb-8">
            Our support team is available 24/7 to assist you with any questions
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
