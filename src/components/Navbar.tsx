import { Link } from "react-router-dom";
import img1 from "../asstes/SEVENUNIQUE NEW.png";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 sticky top-0 shadow-lg py-2 z-30">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={img1} className="h-10 w-12" alt="7UNIQUE LOGO" />
          {/* <span className="text-gray-800 self-center text-2xl font-semibold whitespace-nowrap">
            7UNIQUE
          </span> */}
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-1 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
         <div
          className="hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to="/paymentgateway"
                className="text-gray-600 hover:text-blue-700 block py-2 px-3 md:p-0"
              >
                Gateway
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="text-gray-600 hover:text-blue-700 block py-2 px-3 md:p-0"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/docs"
                className="text-gray-600 hover:text-blue-700 block py-2 px-3 md:p-0"
              >
                Developers
              </Link>
            </li>
             {/* <div className="relative inline-block text-left group text-gray-600 hover:text-gray-900 py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                Services & Product
                <div className="absolute hidden group-hover:block right-0  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="">
                    
                    
                  </div>
                </div>
              </div>*/}
            <li className="relative inline-block text-left  group">
              <button className="text-gray-600 hover:text-blue-700 block py-2 px-3 md:p-0">
                Services & Product
              </button>
              {/* Dropdown */}
              <div className="absolute hidden group-hover:block bg-white  shadow-lg rounded-lg  w-48">
                <Link
                  to="/services"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-700"
                >
                  Services
                </Link>
                <Link
                  to="/product"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-700"
                >
                  Products
                </Link>
              </div>
            </li>
            <li>
              <Link
                to="/solutions"
                className="text-gray-600 hover:text-blue-700 block py-2 px-3 md:p-0"
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-blue-700 block py-2 px-3 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
