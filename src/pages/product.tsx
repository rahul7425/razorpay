import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product from "../asstes/product.jpg";
import bank1 from "../asstes/bank logo/1.png";
import bank2 from "../asstes/bank logo/2.png";
import bank3 from "../asstes/bank logo/3.png";
import bank4 from "../asstes/bank logo/4.png";
import bank5 from "../asstes/bank logo/5.png";
import bank6 from "../asstes/bank logo/6.png";
import bank7 from "../asstes/bank logo/7.png";
import bank8 from "../asstes/bank logo/8.png";
import bank from "../asstes/bank.png";
import receipt from "../asstes/receipt.png";
import service from "../asstes/sustainability.png";
import travel from "../asstes/check_12293600.png";
import levelGateway from "../asstes/Asset 27.png";
import APIGateway from "../asstes/Asset 28.png";
import asset from "../asstes/Asset 30.png";
import { useEffect, useState } from "react";
{
  /* <TicketsPlane /> */
}

const logos = [bank1, bank2, bank3, bank4, bank5, bank6, bank7, bank8];
const industries = [
  {
    name: "Kiosk Banking",
    image: bank,
    description: [
      "Explore smarter solutions.",
      "Multiple options available.",
      "Secure and efficient user experience.",
    ],
  },
  {
    name: "G2C Service",
    image: service,
    description: [
      "Simplify government-to-citizen services.",
      "Fast and reliable access to public services.",
      "Improve government service delivery.",
    ],
  },
  {
    name: "Bills & Utilities",
    image: receipt,
    description: [
      "Pay your bills quickly and securely.",
      "Manage your utilities with ease.",
      "Explore flexible payment options.",
    ],
  },
  {
    name: "Travel & Ticketing",
    image: travel,
    description: [
      "Book your travel tickets seamlessly.",
      "Explore global travel options.",
      "Access exclusive travel deals.",
    ],
  },
];
function Products() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className="space-y-16">
      <section
        className="relative text-white py-24 h-[80vh] rounded-br-[4.8rem] "
        style={{
          backgroundImage: `url(${product})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Blur Overlay */}
        <div
          className="absolute inset-0 bg-black/50 rounded-br-[4.8rem] "
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
            Seamless and Secure Payment Gateway Solutions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our Payment Gateway offers a fast, secure, and seamless solution for
            processing online payments, ensuring smooth transactions for
            businesses and customers alike.
          </p>
        </div>
      </section>
      {/* Section 1: Brand Logos */}
      
      <section className="container mx-auto pt-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#005b96]" data-aos="fade-up">
            PROUDLY <span className="text-gray-900">ASSOCIATED WITH</span>
          </h2>
        </div>
        <div className="relative">
          {logos.length > 0 ? (
            <Slider {...settings}>
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center p-4"
                >
                  <img
                    src={logo}
                    alt={`Bank Logo ${index + 1}`}
                    className="h-20 sm:h-20 md:h-22 lg:h-35 w-full object-contain"
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <p>No logos available.</p>
          )}
        </div>
      </section>

      {/* Section 2: Industries We Serve */}
      <section className="container mx-auto py-10 ">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-[#005b96]" data-aos="fade-up">
            INDUSTRIES <span className="text-gray-900">WE SERVE</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
              data-aos="fade-up"
                data-aos-delay={index * 300}
            >
              <div className="flex items-center justify-center">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-16 h-16  mb-4"
                />
              </div>
              <h6 className="text-xl font-semibold mb-2">{industry.name}</h6>
              <ul className="list-disc pl-5 text-gray-600">
                {industry.description.map((item, idx) => (
                  <li className="list-none" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Corporate Solutions */}
      <section className="bg-gray-50 pt-16 ">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#005b96]" data-aos="fade-up">
            <span className="text-[#011f4b]">CORPORATE</span> SOLUTIONS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div className=" mb-8 lg:mb-0  flex justify-center " data-aos="zoom-in-right">
            <img src={levelGateway} alt="White Level" className="w-2/3" />
          </div>
          <div className=" px-6 items-center">
            <h3 className="text-3xl font-semibold mb-2" data-aos="fade-left">
              Our White-Level <span className="text-blue-800">Gateway</span>
            </h3>
            <p className="text-base text-gray-600" data-aos="zoom-in">
              Our White label solutions will offer you advantages of exclusivity
              of your brand. It is fully integrated and ready-made, which makes
              branding very easy. As the startups or multi-national
              corporations,<br></br>you’ll be free from concerns about needing
              to spend time and money on research and development.
              <br />
              You can add your own branding and identity, and get back to
              business and The result: You can focus on building your brand and
              selling your services while simplifying the conversion path for
              your customers.
              <br />
              In addition to this white label gateway services can be customized
              as per your specific product requirements and business model.
            </p>
            <p className="text-[#005b96] py-4">
              Get in touch with us if you wish to become a payments brand with
              your own corporate identity
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: API Gateway */}
      <section className="py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div className=" px-6 items-center">
            <h2 className="text-3xl font-semibold mb-2 text-[#005b96]" data-aos="fade-right">
              OUR API <span className="text-gray-900">GATEWAY</span>
            </h2>
            <p className="text-base text-gray-600" data-aos="zoom-in">
              We provide modular, lightweight and comprehensive API Solutions
              for financial services.
              <br /> Use them to offer for Banking, payments, and utilities for
              users via any application.
              <br />
              Our APIs are working behind the scenes to provide you richer
              digital transactions and transformation. If you want to provide
              the best experience for your users then our API Solutions gives
              you innovative solutions in compounding the wide range of
              exclusive products and its offering for best customer experience.
              <br />
              We are committed to deliver seamlessly integrated user experiences
              for any type of organisation to start it immediately.
            </p>
            <p className="text-[#005b96] py-4">
              Get in touch with us if you wish to become a payments brand with
              your own corporate identity
            </p>
          </div>
          <div className="mb-8 lg:mb-0  flex justify-center " data-aos="fade-left">
            <img src={APIGateway} alt="API Banner" className="w-2/3" />
          </div>
        </div>
      </section>

      {/* Section 5: Why Us */}
      <section className="bg-gray-100 px-8 md:px-12 lg:px-16">
        <div className="container mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-semibold text-[#005b96] mb-4">
            WHY US?
          </h2>
          <p className="text-lg text-gray-600">
            Here’s why we are the best choice for your payment gateway needs.
          </p>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {[
            {
              title: "Secure Transactions",
              description:
                "Our payment solutions ensure the highest level of security.",
              image: <i className="fas fa-lock text-2xl text-blue-600"></i>,
            },
            {
              title: "Easy Integration",
              description:
                "We provide simple integration for your existing systems.",
              image: <i className="fas fa-cogs text-3xl text-blue-600"></i>,
            },
            {
              title: "24/7 Support",
              description:
                "Our team is always available to assist you with any queries.",
              image: <i className="fas fa-headset text-3xl text-blue-600"></i>,
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 " data-aos="fade-up"
            data-aos-delay={index * 300}>
              <div className="flex gap-4">
                {feature.image}
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              </div>
              <p className="text-lg text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: About Us */}
      <section className="container mx-auto py-10">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-4xl font-semibold text-[#005b96] mb-4">
            About Us
          </h2>
          <p className="text-4xl font-bold text-black">
            Revolutionizing the payment gateway industry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section with Text */}
          <div className="flex flex-col">
            <div className="flex items-center justify-center gap-4">
              <h1 className="text-9xl font-extrabold text-[#005b96]">50</h1>
              <h3 className="text-3xl font-semibold text-black" data-aos="fade-right">
                YEARS OF COMBINED EXPERTISE
              </h3>
            </div>
            <p className="text-xl font-bold text-black py-4" data-aos="zoom-in">
              We’ve been triumphing all these 50 years. Sacrifices are made up
              with success.
            </p>
            <button className="border-2 border-blue-500 rounded-md py-2 px-6 w-fit text-blue-500 hover:text-white hover:bg-blue-500">
              Learn More
            </button>
          </div>

          {/* Accordion Section */}
          <div className="flex justify-center items-center mt-16">
            <div className="border rounded-lg  w-full">
              {/* Accordion Item 1 */}
              <div className=" border rounded-lgborder border-black dark:border-black rounded-lg">
                <button
                  type="button"
                  className={`flex items-center justify-between w-full py-3 px-5 font-semibold bg-orange-500  border-black dark:border-black dark:text-gray-400 gap-3
                  ${openIndex === 1 ? "rounded-t-lg" : "rounded-lg"}`}
                  onClick={() => handleToggle(1)}
                  aria-expanded={openIndex === 1}
                >
                  <span className="text-black text-xl">About Our Company</span>
                </button>
                {openIndex === 1 && (
                  <div className="py-5 px-5 border-black ">
                    <p className="mb-2 text-gray-600 ">
                      The Digital industry & Its fast-growing list of products
                      and services made a difference and resulted in the Launch
                      of “7UNIQUE”. 7UNIQUE a brand name of Vidual
                      Communications India Pvt Ltd headquartered in Jaipur,
                      India, we are a young and dynamic company specializing in
                      digital products & its Value-Added Services in association
                      with leading brands in India. Vidual Communications
                      provides all kinds of digital products and Convergence
                      partnerships. Led by a team with unrivaled experience in
                      service convergence and service continuity, our services
                      provide a competitive, cost-effective and robust
                      inter-working platform designed to enable seamless
                      payments mobility across multiple ecosystems with absolute
                      transparency & best service levels and capabilities We
                      assure a “Win-Win” relationship with Supplier, Govt.,
                      Banks, Aggregators, Merchants, and Customers.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion Item 2 */}
              <div className=" border rounded-lgborder border-black dark:border-black rounded-lg">
                <button
                  type="button"
                  className={`flex items-center justify-between w-full py-3 px-5 font-semibold bg-orange-500  dark:text-gray-400 gap-3
                  ${openIndex === 2 ? "rounded-t-lg" : "rounded-lg"}`}
                  onClick={() => handleToggle(2)}
                  aria-expanded={openIndex === 2}
                >
                  <span className="text-black text-xl">Vision</span>
                </button>
                {openIndex === 2 && (
                  <div className="py-5 px-5">
                    <p className="mb-2 text-gray-600 ">
                      To provide a range of services at affordable cost to
                      consumer’s at their doorstep through a vibrant delivery
                      mechanism. To be the respected organization for providing
                      outstanding, creative and effective services.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion Item 3 */}
              <div className=" border border-black dark:border-black rounded-lg">
                <button
                  type="button"
                  className={`flex items-center justify-between w-full py-3 px-5 font-semibold bg-orange-500   dark:text-gray-400 gap-3
                  ${openIndex === 3 ? "rounded-t-lg" : "rounded-lg"}`}
                  onClick={() => handleToggle(3)}
                  aria-expanded={openIndex === 3}
                >
                  <span className="text-black text-xl">Mission</span>
                </button>
                {openIndex === 3 && (
                  <div className="py-5 px-5  border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-600 ">
                      Improving Expertise and Skills of an Individual & teams
                      associated with the organization to grow their present &
                      future through Financial Inclusion, Literacy.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: What We Do */}
      <section className="py-16 bg-gray-50 px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center" data-aos="flip-right">
            <img src={asset} alt="WhatDo?" className=" h-[80vh] mb-4" />
          </div>
          <div className="flex flex-col justify-center  text-black text-lg">
          <h2 className="text-4xl font-bold text-[#005b96] mb-2" data-aos="fade-up">
            WHAT WE DO
          </h2>
          <p data-aos="fade-up">
            We offer a wide range of services and banking solutions to meet your
            needs.
          </p>
            <p className="my-4">
              We provide payment gateway solutions for businesses of all sizes.
            </p>

            <p data-aos="fade-up">
              Our services also focus on financial inclusion for underbanked
              populations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
