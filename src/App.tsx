import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import PricingPage from './pages/PricingPage';
import DashboardPage from './pages/DashboardPage';
import DocsPage from './pages/DocsPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import Partner from './pages/Partner';
import PaymentGateway from './pages/PaymentGateway';
import { useEffect } from 'react';
import Aos from "aos";
import "../node_modules/aos/dist/aos.css"
import Test from './pages/test';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Services from './pages/services';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/paymentgateway" element={<PaymentGateway />} />
            <Route path="/test" element={<Test />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;