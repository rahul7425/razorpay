import { Link } from "react-router-dom";
import services from "../asstes/services.jpg";
import { ArrowRight } from "lucide-react";
import payin from "../asstes/p1.png"
import payout from "../asstes/p2.png"
import { useEffect } from "react";
export default function Services() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className="bg-gray-50 text-gray-800">
    {/* Header Section */}
    <section
      className="relative text-white py-24 h-[80vh] rounded-br-[4.8rem] "
      style={{
        backgroundImage: `url(${services})`,
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
        className="relative z-10 px-4 sm:px-6 lg:px-8 text-center"
        data-aos="fade-up"
      >
        <div className="flex  flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Secure, fast, and reliable payment solutions for your business.
          </p>
        </div>
      </div>
    </section>

    {/* Services Overview Section */}
    <section className="py-16 container mx-auto px-6 lg:px-20">
      <div className="text-center mb-10" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-700">
          Services We Offer
        </h2>
        <p className="text-gray-700 mt-4">
          Explore our comprehensive payment solutions tailored to meet your
          business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl m-auto">
        {/* Pay-In Overview */}
        <div className="bg-white shadow-lg rounded-lg p-6 " data-aos="fade-right">
          <div className="">
          <div className="mb-4  flex  gap-5">
            <i className="fas fa-wallet text-2xl text-blue-600"></i> {/* Icon for Pay-In */}
            <h3 className="text-2xl font-semibold text-gray-700 mb-2 flex items-center">
            Pay-In Services
          </h3>
          </div>
          <div>
          
          <p className="text-gray-600 mb-4">
            Enable seamless customer payments with our secure and versatile
            solutions.
          </p>
          </div>
          </div>
          <Link
                to="#payIn"
                className="text-blue-600 flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("payIn")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
        </div>

        {/* Pay-Out Overview */}
        <div className="bg-white shadow-lg rounded-lg p-6 " data-aos="fade-left">
          <div className="">
          <div className="mb-4 text-blue-600 flex gap-5">
            <i className="fas fa-paper-plane text-2xl"></i>{" "}
            {/* Icon for Pay-Out */}
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            Pay-Out Services
          </h3>
          </div>
          <div>
         
          <p className="text-gray-600 mb-4">
            Disburse funds effortlessly to employees, vendors, and customers.
          </p>
          </div>
          </div>
          <Link
                to="#payOut"
                className="text-blue-600 flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("payOut")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
        </div>
      </div>
    </section>

    <section id="payIn" className="py-16 container mx-auto px-6 lg:px-20">
      <div className="flex flex-col-reverse items-center lg:flex-row gap-16 lg:items-center lg:justify-center">
        <div className="lg:w-4/6">
          <h2 className="text-4xl font-bold text-gray-800 mb-6" data-aos="fade-up">
            Pay-In Services in Detail
          </h2>
          <p className="text-gray-700 mb-6" data-aos="fade-right">
            Enable your customers to make payments effortlessly. We provide
            seamless integration with multiple payment methods such as credit
            cards, UPI, and wallets.
          </p>
          <div data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-4">Core Features:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Real-time payment processing</li>
            <li>Multi-currency support</li>
            <li>Fraud prevention tools</li>
            <li>Customizable checkout experience</li>
          </ul>
          </div>
          <div data-aos="fade-right">
          <h3 className="text-2xl font-semibold mb-4">Detailed Benefits:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Integration with popular e-commerce platforms for seamless
              operations
            </li>
            <li>Advanced encryption ensuring data security</li>
            <li>
              Support for subscription-based payments for recurring revenue
            </li>
            <li>Developer-friendly API for quick integration</li>
          </ul>
          </div>
        </div>
        <div className="flex justify-center items-center md:w-2/6 max-md:px-10 max-md:w-1/3" data-aos="fade-left">
          <img
            className="  transform hover:scale-105 transition duration-300"
            src={payin}
            alt="Pay-In Service"
          />
        </div>
      </div>
    </section>

    {/* Detailed Pay-Out Section */}
    <section id="payOut" className="py-16 container mx-auto px-6 lg:px-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center" >
    {/* Image Section */}
    <div className="flex justify-center items-center" data-aos="fade-left">
      <img
        className="w-2/3 transform hover:scale-105 transition duration-300"
        src={payout}
        alt="Pay-Out Service"
      />
    </div>
    {/* Content Section */}
    <div>
      <h2 className="text-4xl font-bold text-gray-800 mb-6" data-aos="fade-up">
        Pay-Out Services in Detail
      </h2>
      <p className="text-gray-700 mb-6" data-aos="fade-left">
        Disburse funds to your employees, vendors, or customers quickly and securely.
      </p>
      <div data-aos="fade-up">
      <h3 className="text-2xl font-semibold mb-4">Core Features:</h3>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Bank transfers</li>
        <li>Instant payouts</li>
        <li>Batch processing</li>
        <li>Detailed reports and reconciliation</li>
      </ul>
      </div>
      <div data-aos="fade-left">
      <h3 className="text-2xl font-semibold mb-4">Detailed Benefits:</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Automated bulk payments for efficiency</li>
        <li>Real-time notifications for transaction updates</li>
        <li>Compliance with local and international regulations</li>
        <li>Customizable payout schedules to match business needs</li>
      </ul>
      </div>
    </div>
  </div>
</section>


    {/* Features Section */}
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div
    className="bg-white shadow-lg p-4 rounded-lg"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <div className="mb-4 flex gap-4">
      <i className="fas fa-expand-alt text-2xl text-blue-600"></i>
      <h3 className="text-xl font-semibold mb-2">Scalability</h3>
    </div>
    <p className="text-gray-600">
      Handle any volume of transactions effortlessly.
    </p>
  </div>

  <div
    className="bg-white shadow-lg p-4 rounded-lg"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    <div className="mb-4 flex gap-4">
      <i className="fas fa-lock text-2xl text-blue-600"></i>
      <h3 className="text-xl font-semibold mb-2">Security</h3>
    </div>
    <p className="text-gray-600">
      Advanced encryption and fraud detection ensure safety.
    </p>
  </div>

  <div
    className="bg-white shadow-lg p-4 rounded-lg"
    data-aos="fade-up"
    data-aos-delay="500"
  >
    <div className="mb-4 flex gap-4">
      <i className="fas fa-headset text-3xl text-blue-600"></i>
      <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
    </div>
    <p className="text-gray-600">
      24/7 dedicated support for all your queries.
    </p>
  </div>

  <div
    className="bg-white shadow-lg p-4 rounded-lg"
    data-aos="fade-up"
    data-aos-delay="700"
  >
    <div className="mb-4 flex gap-4">
      <i className="fas fa-chart-line text-3xl text-blue-600"></i>
      <h3 className="text-xl font-semibold mb-2">Analytics</h3>
    </div>
    <p className="text-gray-600">
      Detailed insights to optimize your financial operations.
    </p>
  </div>
</div>

      </div>
    </section>

    {/* Additional Features Section */}
    <section className="py-16 container mx-auto px-6 lg:px-20">
<div className="text-center mb-10" data-aos="fade-up">
  <h2 className="text-3xl font-bold">Additional Features</h2>
  <p className="text-gray-600 mt-4">
    Discover more benefits of using our payment gateway.
  </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  {/* Integration Flexibility */}
  <div className="bg-white shadow-md p-6 rounded-lg" data-aos="fade-up" data-aos-delay="100">
    <div className="mb-4 flex gap-4 items-center">
      <i className="fas fa-cogs text-3xl text-blue-600"></i>
      <h3 className="text-xl font-semibold">Integration Flexibility</h3>
    </div>
    <p className="text-gray-600">
      Easily integrate with popular e-commerce platforms and CRMs.
    </p>
  </div>

  {/* Global Reach */}
  <div className="bg-white shadow-md p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
    <div className="mb-4 flex gap-4 items-center">
      <i className="fas fa-globe text-3xl text-blue-600"></i>
      <h3 className="text-xl font-semibold">Global Reach</h3>
    </div>
    <p className="text-gray-600">
      Expand your business with support for international payments.
    </p>
  </div>

  {/* Recurring Payments */}
  <div className="bg-white shadow-md p-6 rounded-lg" data-aos="fade-up" data-aos-delay="300">
    <div className="mb-4 flex gap-4 items-center">
      <i className="fas fa-redo text-3xl text-blue-600"></i>
      <h3 className="text-xl font-semibold">Recurring Payments</h3>
    </div>
    <p className="text-gray-600">
      Set up subscriptions and automate billing for your customers.
    </p>
  </div>

  {/* Mobile Optimization */}
  <div className="bg-white shadow-md p-6 rounded-lg" data-aos="fade-up" data-aos-delay="400">
    <div className="mb-4 flex gap-4 items-center">
      <i className="fas fa-mobile-alt text-3xl text-blue-600"></i>
      <h3 className="text-xl font-semibold">Mobile Optimization</h3>
    </div>
    <p className="text-gray-600">
      Offer a seamless payment experience across all devices.
    </p>
  </div>

  {/* Transparent Pricing */}
  <div className="bg-white shadow-md p-6 rounded-lg" data-aos="fade-up" data-aos-delay="500">
    <div className="mb-4 flex gap-4 items-center">
      <i className="fas fa-tags text-3xl text-blue-600"></i>
      <h3 className="text-xl font-semibold">Transparent Pricing</h3>
    </div>
    <p className="text-gray-600">
      No hidden fees, only pay for what you use.
    </p>
  </div>

  {/* Developer-Friendly */}
  <div className="bg-white shadow-md p-6 rounded-lg" data-aos="fade-up" data-aos-delay="600">
    <div className="mb-4 flex gap-4 items-center">
      <i className="fas fa-code text-3xl text-blue-600"></i>
      <h3 className="text-xl font-semibold">Developer-Friendly</h3>
    </div>
    <p className="text-gray-600">
      Comprehensive API documentation for easy integration.
    </p>
  </div>
</div>

</section>



    {/* Testimonials Section */}
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-10" >
          <h2 className="text-3xl font-bold" data-aos="fade-left">What Our Clients Say</h2>
          <p className="text-gray-600 mt-4" data-aos="fade-right">
            See how we’ve helped businesses achieve success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  {/* Testimonial 1 */}
  <div
    className="bg-white shadow-md p-6 rounded-lg"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <p className="text-gray-700 italic">
      "This payment gateway has transformed our business. Transactions are smooth and secure."
    </p>
    <p className="text-gray-600 mt-4 font-semibold">- John Doe, CEO</p>
  </div>

  {/* Testimonial 2 */}
  <div
    className="bg-white shadow-md p-6 rounded-lg"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <p className="text-gray-700 italic">
      "We love the detailed analytics and fast payouts. Highly recommend!"
    </p>
    <p className="text-gray-600 mt-4 font-semibold">- Jane Smith, CFO</p>
  </div>

  {/* Testimonial 3 */}
  <div
    className="bg-white shadow-md p-6 rounded-lg"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    <p className="text-gray-700 italic">
      "The customer support team is outstanding. They’ve helped us every step of the way."
    </p>
    <p className="text-gray-600 mt-4 font-semibold">- Emily Johnson, Business Owner</p>
  </div>
</div>

      </div>
    </section>

    {/* Call-to-Action Section */}
    <section className="bg-slate-100 text-gray-800 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold" data-aos="fade-left">Get Started Today</h2>
        <p className="mt-4 text-lg" data-aos="fade-right">
          Join thousands of businesses that trust our payment gateway
          solutions.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-100" data-aos="zoom-in">
          Contact Us
        </button>
      </div>
    </section>
  </div>
  )
}
