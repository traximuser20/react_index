import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.jsx";
import ProfileLogo from "../../assets/profileLogo.jsx";

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white shadow-xl fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="h-full w-10 p-103">
                <Logo />
              </Link>
            </div>

            <div className="hidden md:flex space-x-4 items-center">
              <Link to="/home" className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
              <Link to="/shop" className="text-gray-700 hover:text-blue-500">
                Shop
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-500">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </Link>
              <Link
                to="/SignIn"
                state={{ background: location }}
                className="text-gray-700 hover:text-blue-500"
              >
                <ProfileLogo />
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-500 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/SignIn"
              state={{ background: location }}
              className="block text-gray-700 hover:text-blue-500"
            >
              <div className="border-black border rounded max-w-44 shadow-md hover:shadow-xl pt-1 mb-2">
                <div className="mx-auto flex items-center justify-center">
                  <ProfileLogo />
                  <div>SignIn / SignUp</div>
                </div>
              </div>
            </Link>
            <Link to="/" className="block text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link
              to="/shop"
              className="block text-gray-700 hover:text-blue-500"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-blue-500"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-blue-500"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
