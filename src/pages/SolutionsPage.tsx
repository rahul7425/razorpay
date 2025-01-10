import {
  ShoppingCart,
  Building2,
  Globe2,
  Briefcase,
  Compass,
  BookOpenText,
  ShieldPlus,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import solution from "../asstes/solution.jpg";
import python from "../asstes/python.png";
import react from "../asstes/react.png";
import node from "../asstes/node.png";
import flutter from "../asstes/flutter.webp";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const SolutionsPage = () => {
  const solutions = [
    {
      icon: <ShoppingCart size={32} />,
      title: "E-commerce",
      description:
        "Complete payment solution for online stores with support for multiple payment methods, recurring billing, and fraud protection.",
      features: [
        "Shopping cart integration",
        "Multiple payment options",
        "Automated refunds",
        "Inventory management",
      ],
    },
    {
      icon: <Building2 size={32} />,
      title: "Enterprise",
      description:
        "Customizable payment infrastructure for large organizations with high transaction volumes and specific compliance needs.",
      features: [
        "Custom integration",
        "Volume pricing",
        "Dedicated support",
        "Advanced reporting",
      ],
    },
    {
      icon: <Globe2 size={32} />,
      title: "Marketplaces",
      description:
        "Split payments, multi-party settlements, and escrow services for marketplace platforms.",
      features: [
        "Split payments",
        "Automated payouts",
        "Vendor management",
        "Platform fees",
      ],
    },
    {
      icon: <Briefcase size={32} />,
      title: "SaaS",
      description:
        "Subscription management and recurring billing solutions for software companies.",
      features: [
        "Subscription billing",
        "Usage-based pricing",
        "Customer portal",
        "Revenue analytics",
      ],
    },
  ];
useEffect(()=>{
  window.scrollTo(0,0)
},[])
  return (
    <div className="">
      <section
        className="relative text-white py-24 h-[80vh] rounded-br-[4.8rem] "
        style={{
          backgroundImage: `url(${solution})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Blur Overlay */}
        <div
          className="absolute inset-0 bg-black/50 rounded-br-[4.8rem]"
          style={{
            zIndex: 0,
          }}
        ></div>
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
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            Solutions for Every Industry
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Simplify payments for Travel, EdTech, and Insurance sectors with
            tailored solutions designed to accelerate your business growth.
          </p>
        </div>
      </section>

      <div className="">
        {/* Solutions Section */}
        <section id="solutions" className="py-16 bg-gray-100">
          <h2 className="text-4xl font-bold text-center mb-10">
            Explore Our Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Travel",
                description:
                  "Enable multi-currency transactions and seamless cancellations.",
                image: <Compass size={38} />,
              },
              {
                title: "EdTech",
                description:
                  "Simplify subscription billing and automated invoices.",
                image: <BookOpenText size={38} />,
              },
              {
                title: "Insurance",
                description: "Secure recurring payments and fraud detection.",
                image: <ShieldPlus size={38} />,
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                <div key={index} className=" flex gap-4 ">
                  <div className=" w-16 h-16 flex justify-center items-center text-blue-600">
                    {solution.image}
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="text-2xl font-semibold">{solution.title}</h3>

                    <p className="text-gray-700 mt-2 mb-4">
                      {solution.description}
                    </p>
                  </div>
                </div>
                <Link
                  to={`/solutions/${solution.title.toLowerCase()}`}
                  className="text-blue-600 flex items-center"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>
        <div className="">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.5} // Default for small screens
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000, // Slide changes every 3 seconds
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 1.5, spaceBetween: 30 }, // For tablets
              1024: { slidesPerView: 2, spaceBetween: 40 }, // For desktops
            }}
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            {solutions.map((solution, index) => (
              <SwiperSlide key={index}>
                <div className="py-6">
                  <div className="bg-white p-8 rounded-xl shadow-lg relative">
                    {/* Icon in the top-right corner */}
                    <div className="absolute top-[-20px] right-[20px] text-white w-16 h-16 flex justify-center items-center bg-blue-500 rounded-lg shadow-md">
                      {solution.icon}
                    </div>

                    {/* Responsive layout */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 w-full">
                      {/* Left Section */}
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                          {solution.title}
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                          {solution.description}
                        </p>
                      </div>

                      {/* Right Section */}
                      <div className="flex-1">
                        <ul className="space-y-4">
                          {solution.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              {/* Bullet Point */}
                              <div className="flex-shrink-0 w-3 h-3 mt-1 rounded-full bg-blue-600"></div>
                              {/* Feature Text */}
                              <span className="text-sm md:text-base leading-relaxed">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Integration Section */}
        <section id="integration" className="py-16 bg-white">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800" data-aos="fade-up">
            Seamless Integration
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8 px-4" data-aos="fade-up">
            Easily integrate our payment gateway into your platform with robust
            APIs and SDKs. Get started with just a few lines of code and enjoy a
            hassle-free payment experience.
          </p>

          {/* Platform Logos */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[react, node, python, flutter].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Platform Logo"
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
                data-aos="fade-up"
                data-aos-delay={index * 300}
              />
            ))}
          </div>

          {/* Integration Features */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200" data-aos="zoom-in">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Why Choose Our Integration?
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Quick setup with minimal code.</li>
                <li>
                  Comprehensive APIs and SDKs for all major languages and
                  platforms.
                </li>
                <li>
                  Sandbox environment for testing without real transactions.
                </li>
                <li>Real-time Webhooks for event-driven notifications.</li>
                <li>
                  Ready-to-use plugins for platforms like WooCommerce and
                  Shopify.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200" data-aos="zoom-in">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Security You Can Trust
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>PCI DSS Level 1 Compliance for secure transactions.</li>
                <li>End-to-end SSL encryption for data protection.</li>
                <li>Tokenization to ensure sensitive data remains safe.</li>
                <li>Fraud detection and two-factor authentication support.</li>
              </ul>
            </div>
          </div>

          {/* Sample Code Snippet */}
          <div className="max-w-4xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md mt-10 px-4 sm:px-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Example Code: JavaScript/Node.js
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto text-sm">
              {`const axios = require('axios');

const paymentData = {
  amount: 5000, // Amount in smallest currency unit
  currency: "USD",
  description: "Payment for Order #12345",
};

axios.post("https://api.paysmart.com/v1/payments", paymentData, {
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
  },
})
.then(response => {
  console.log("Payment Success:", response.data);
})
.catch(error => {
  console.error("Payment Error:", error.response.data);
});`}
            </pre>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="text-center mt-8">
          <Link to="/docs">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500 transition-colors duration-200" data-aos="zoom-in-right">
              Explore Documentation
            </button>
            </Link>
            <Link to="/contact">
            <button className="ml-4 bg-gray-200 text-blue-600 px-6 py-3 rounded border border-blue-600 hover:bg-gray-300 transition-colors duration-200" data-aos="zoom-in-left">
              
              Contact Developer Support
              
            </button>
            </Link>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "John Doe",
                feedback:
                  "PaySmart has streamlined our payment processes for international clients.",
                company: "TravelPro",
              },
              {
                name: "Jane Smith",
                feedback:
                  "The subscription billing feature is a lifesaver for our EdTech platform.",
                company: "Learnify",
              },
              {
                name: "Raj Patel",
                feedback:
                  "Secure and reliable payments make handling insurance claims effortless.",
                company: "InsureHub",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg text-center"
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                <p className="italic text-gray-700 mb-4">
                  "{testimonial.feedback}"
                </p>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "How secure is the payment gateway?",
                  answer:
                    "We use industry-standard encryption and fraud detection to ensure security.",
                },
                {
                  question: "What industries do you support?",
                  answer:
                    "We specialize in Travel, EdTech, and Insurance but cater to all industries.",
                },
                {
                  question: "Is there developer support available?",
                  answer:
                    "Yes, our documentation and team are here to assist with integration.",
                },
                {
                  question:
                    "Can I customize the payment experience for my customers?",
                  answer:
                    "Yes, our payment gateway allows full customization of the checkout experience to match your brand’s look and feel.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg"
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  <div className="flex items-start">
                    <HelpCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="my-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" data-aos="fade-up">
            Not sure which solution is right for you?
          </h2>
          <p className="text-gray-600 mb-8" data-aos="fade-left">
            Our payment experts are here to help you find the perfect solution
            for your business.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors" data-aos="zoom-out">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
