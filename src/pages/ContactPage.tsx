import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";
import contact from "../asstes/contact.jpg";
import { useEffect } from "react";
const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: "Phone Support",
      description: "24/7 available for urgent issues",
      contact: "+1 (555) 123-4567",
    },
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email Support",
      description: "Get response within 24 hours",
      contact: "support@payu-clone.com",
    },
    {
      icon: <MessageSquare className="text-blue-600" size={24} />,
      title: "Live Chat",
      description: "Available during business hours",
      contact: "Start a conversation",
    },
    {
      icon: <MapPin className="text-blue-600" size={34} />,
      title: "Office Location",
      description: " 123 Payment Street San Francisco, CA 94105 United States",
      contact: "",
    },
  ];
  
useEffect(()=>{
  window.scrollTo(0,0)
},[])
    
  
  return (
    <div className="">
      <section
        className="relative text-white py-24 h-[80vh] rounded-br-[4.8rem]"
        style={{
          backgroundImage: `url(${contact})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Blur Overlay */}
        <div
          className="absolute inset-0 bg-black/30 rounded-br-[4.8rem] backdrop-blur-sm"
          style={{
            zIndex: 0,
          }}
        ></div>
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black bg-opacity-100 rounded-br-[4.8rem]"
          style={{ zIndex: 0 }}
        ></div>

        {/* Content */}
        <div
          className="relative z-10 px-4 sm:px-6 lg:px-8 text-center flex items-center justify-center "
          data-aos="fade-up"
        >
          <div>
            <h1 className="text-6xl font-bold mb-6 tracking-tight">
              Contact us
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We're here to help with any questions you have
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto bg-slate-50 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="p-4 col-7 col-span-3">
            <div data-aos="fade-up">
              <h1 className="text-4xl font-bold py-6">Get in Touch</h1>
              <p className="text-xl mb-8 ">
                We're here to assist you with any questions or concerns. Reach
                out to us anytime through phone, email, chat, or visit our
                office for prompt and reliable support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm"
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  {method.icon}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{method.description}</p>
                    <p className="text-blue-600 font-medium">
                      {method.contact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-2xl col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Send us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
        <div>
          <div className="py-10 bg-slate-50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.121169986175!2d73.90618951442687!3d18.568575172551647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c131ed5b54a7%3A0xad718b8b2c93d36d!2sSky%20Vista!5e0!3m2!1sen!2sin!4v1654257749399!5m2!1sen!2sin"
              className="w-full h-[440px] rounded-xl shadow-md border-0 p-2"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
