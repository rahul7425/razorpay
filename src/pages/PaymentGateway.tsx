// import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Globe,
  Zap,
  Clock,
  PieChart,
  Users,
  MessageSquare,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import signUp from "../asstes/signUp.svg";
import configure from "../asstes/configure.svg";
import integration from "../asstes/integrate.svg";
import live from "../asstes/live.svg";
import line from "../asstes/line.svg";
import paymentGateway from "../asstes/payment-gateway.png";
import paymentsolution from "../asstes/payment-solution.jpg";
import { useEffect } from "react";
export default function PaymentGateway() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className="">
      {/* Hero Section */}
      <section
  className="relative text-white py-24 h-[80vh] rounded-br-[4.8rem]"
  style={{
    backgroundImage: `url(${paymentsolution})`,
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
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 items-center" data-aos='fade-up'>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-6">Payment Gateway Solutions</h1>
        <p className="text-xl mb-8">
          Accept payments seamlessly with our secure and reliable payment
          gateway
        </p>
        <Link
          to="/signup"
          className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-500 hover:text-white"
        >
          Get Started
        </Link>
      </div>
      <div className="hidden md:block"></div>
    </div>
  </div>
</section>

      {/* Features Grid */}
      <section className="py-10 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos='fade-left'>
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600" data-aos='fade-right'>
              Everything you need to process payments globally
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-blue-600" />,
                title: "Secure Processing",
                description:
                  "PCI DSS Level 1 compliance with 3D Secure authentication",
              },
              {
                icon: <Globe className="w-12 h-12 text-blue-600" />,
                title: "Global Coverage",
                description: "Accept payments in 100+ currencies worldwide",
              },
              {
                icon: <Zap className="w-12 h-12 text-blue-600" />,
                title: "Instant Setup",
                description: "Quick onboarding and easy integration process",
              },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg flex gap-4" data-aos="fade-up" data-aos-delay={index * 300}>
                <div>{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-left">
              Simple Integration Process
            </h2>
            <p className="text-xl text-gray-600" data-aos="fade-right">
              Get up and running in minutes
            </p>
          </div>
          <section className=" mx-auto py-5 relative">
            <div className="flex justify-between items-start text-center relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay={100}>
                <img src={signUp} alt="Sign Up" className="w-40 mb-3" />
                <div className="rounded bg-red-100 text-red-800 px-3 py-1 mb-3">
                  Step 1
                </div>
                <p className="text-lg font-semibold text-gray-900">Sign Up</p>
                <p className="text-sm text-gray-600 px-4">
                  Create your PayU account
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay={200}>
                <img
                  src={configure}
                  alt="Configure"
                  className="w-40 h-38 mb-3"
                />
                <div className=" rounded bg-indigo-100 text-indigo-800 px-3 py-1 mb-3">
                  Step 2
                </div>
                <p className="text-lg font-semibold text-gray-900">Configure</p>
                <p className="text-sm text-gray-600 px-4">
                  Set up your payment methods
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay={300}>
                <img
                  src={integration}
                  alt="Integration"
                  className="w-40 h-38 mb-3"
                />
                <div className="rounded bg-yellow-100 text-yellow-800 px-3 py-1 mb-3">
                  Step 3
                </div>
                <p className="text-lg font-semibold text-gray-900">Integrate</p>
                <p className="text-sm text-gray-600 px-4">
                  Add our SDK to your site
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay={400}>
                <img src={live} alt="Go Live" className="w-40 h-38 mb-3" />
                <div className="rounded bg-purple-100 text-purple-800 px-3 py-1 mb-3">
                  Step 4
                </div>
                <p className="text-lg font-semibold text-gray-900">Go Live</p>
                <p className="text-sm text-gray-600 px-4">
                  Start accepting payments
                </p>
              </div>
            </div>

            {/* Decorative line */}
            <div
              className="absolute  inset-0 bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${line})`,
                zIndex: 0,
                margin: "0 164px",
              }}
            ></div>
          </section>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-10 bg-slate-50">
        <div className="px-4 sm:px-6 lg:px-8 max-lg:flex max-lg:flex-col-reverse lg:flex  w-full">
          <div className="mt-20 lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-start">
              Supported Payment Methods
            </h2>
            <p className="text-xl text-gray-600 text-start">
              Payment gateway that offers your clients the most extensive range
              of payment options, including EMIs, BNPL, UPI, Wallets, Debit
              Cards, and Net Banking.
            </p>
            <div className="text-start mt-10">
              {/* Grid Layout for Large Screens */}
              <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex gap-4 shadow-lg rounded-lg p-6 bg-white m-4" data-aos="zoom-in-right">
                  <div>icon</div>
                  <div>
                    <p className="text-gray-500">
                      Thrill clients with more than 150 payment options
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 shadow-lg rounded-lg p-6 bg-white m-4" data-aos="zoom-in-left">
                  <div>icon</div>
                  <div>
                    <p className="text-gray-500">
                      Accept payments in multiple currencies seamlessly
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 shadow-lg rounded-lg p-6 bg-white m-4" data-aos="zoom-in-right">
                  <div>icon</div>
                  <div>
                    <p className="text-gray-500">
                      Secure transactions with advanced fraud detection
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 shadow-lg rounded-lg p-6 bg-white m-4" data-aos="zoom-in-left">
                  <div>icon</div>
                  <div>
                    <p className="text-gray-500">
                      Integrate with ease using our APIs
                    </p>
                  </div>
                </div>
              </div>

              {/* Swiper Slider for Small Screens */}
              <div className="lg:hidden">
                <Swiper
                  effect="coverflow"
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={1.5}
                  spaceBetween={1}
                  coverflowEffect={{
                    rotate: 40,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  modules={[EffectCoverflow]}
                  className="mySwiper"
                >
                  {/* Slide 1 */}
                  <SwiperSlide>
                    <div className="flex gap-4 shadow-lg rounded-lg p-6 bg-white m-4">
                      <div>icon</div>
                      <div>
                        <p className="text-gray-500">
                          Thrill clients with more than 150 payment options
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Slide 2 */}
                  <SwiperSlide>
                    <div className="flex gap-4 shadow-lg rounded-lg p-6 bg-white m-4">
                      <div>icon</div>
                      <div>
                        <p className="text-gray-500">
                          Accept payments in multiple currencies seamlessly
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Slide 3 */}
                  <SwiperSlide>
                    <div className="flex gap-4 shadow-lg rounded-lg p-6 bg-white m-4">
                      <div>icon</div>
                      <div>
                        <p className="text-gray-500">
                          Secure transactions with advanced fraud detection
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Slide 4 */}
                  <SwiperSlide>
                    <div className="flex gap-4 shadow-lg rounded-lg p-6 bg-white m-4">
                      <div>icon</div>
                      <div>
                        <p className="text-gray-500">
                          Integrate with ease using our APIs
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="hidden md:h-full md:flex md:justify-center md:items-center" data-aos="fade-up-left">
            <img src={paymentGateway} alt="Integration" className=" mb-3 " />
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-aos="fade-right">
                Real-time Analytics
              </h2>
              <p className="text-xl text-gray-600 mb-8" data-aos="fade-up">
                Track your business performance with powerful analytics and
                reporting tools
              </p>
              <div className="space-y-4" data-aos="fade-up">
                {[
                  { icon: <Clock />, text: "Real-time transaction monitoring" },
                  { icon: <PieChart />, text: "Detailed payment analytics" },
                  { icon: <Users />, text: "Customer insights" },
                  { icon: <MessageSquare />, text: "Custom reports" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-blue-600">{item.icon}</div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block" data-aos="zoom-in-left">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                alt="Analytics Dashboard"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-left">
              Enterprise-grade Security
            </h2>
            <p className="text-xl text-gray-600" data-aos="fade-right">
              Your security is our top priority
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "PCI DSS Compliance",
                description: "Highest level of payment security standards",
              },
              {
                title: "Fraud Prevention",
                description: "AI-powered fraud detection and prevention",
              },
              {
                title: "Data Protection",
                description: "End-to-end encryption for all transactions",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg flex gap-4 shadow-md"
                data-aos="fade-up" data-aos-delay={index*300}
              >
                <div>
                  <Shield className="w-12 h-12 text-blue-600 mb-4" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8" data-aos="fade-up">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8" data-aos="fade-up">
            Join thousands of businesses using 7unique Payment Gateway
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/signup"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-500 hover:text-white"
              data-aos="fade-right"
            >
              Create Account
            </Link>
            <Link
              to="/contact" data-aos="fade-left"
              className="border bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-500 hover:text-white"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
