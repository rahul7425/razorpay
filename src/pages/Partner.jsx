import React, { useEffect, useState } from 'react';
import './css/partner.css';

const testimonials = [
  {
    name: "Anurag Avula",
    title: "CEO, Shopmatic",
    quote: "The PayU onboarding experience is simple, quick, and provides an extensive suite of payment methods.",
  },
  {
    name: "Raju Vegesna",
    title: "Chief Evangelist, Zoho Corporation",
    quote: "Our association with PayU helps Indian businesses reach more customers & grow their business.",
  },
  {
    name: "Vibgyor Services",
    title: "Technical Service Provider",
    quote: "We offer payment gateway integration as a service and highly recommend this partner program.",
  },
];

const Partner = () => {
  const [current, setCurrent] = useState(0);

  // Auto-cycle testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="partner-page">
     

      <main className="main-content">
        {/* Intro Section */}
        <section className="intro-section">
          <h1>Partner with 7UNIQUE</h1>
          <p>Join, Refer, Earn. Become a partner today and help businesses find the best payment solutions.</p>
          <button className="join-button">Join as a Partner</button>
        </section>

        {/* Steps to Partner */}
        <section className="steps-section">
          <h2>How to Partner with Us</h2>
          <div className="steps-cards">
            <div className="step-card">Sign Up as a Partner</div>
            <div className="step-card">Refer Clients to 7UNIQUE</div>
            <div className="step-card">Earn Commissions</div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="benefits-section">
          <h2>Why Partner with Us</h2>
          <p>We empower our partners with industry-leading tools, resources, and support to boost their success.</p>
          <div className="benefits-cards">
            <div className="benefit-card">Priority Support</div>
            <div className="benefit-card">High Commissions</div>
            <div className="benefit-card">Marketing Resources</div>
            <div className="benefit-card">Custom Integrations</div>
          </div>
        </section>

        {/* Testimonial Slider */}
        <section className="testimonials-section">
          <h2>What Our Partners Say</h2>
          <div className="testimonial">
            <h3>{testimonials[current].name}</h3>
            <h4>{testimonials[current].title}</h4>
            <blockquote>{testimonials[current].quote}</blockquote>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Partner;
