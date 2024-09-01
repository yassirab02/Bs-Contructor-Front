import { Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import { IonIcon } from '@ionic/react';
import { GrLanguage } from "react-icons/gr";
import logo from "../assets/Bs-logo.jpg";
import { navItems, serviceItems } from "./constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const serviceMenuTimer = useRef(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleMouseEnter = () => {
    if (serviceMenuTimer.current) {
      clearTimeout(serviceMenuTimer.current);
    }
    setServiceMenuOpen(true);
  };

  const handleMouseLeave = () => {
    serviceMenuTimer.current = setTimeout(() => {
      setServiceMenuOpen(false);
    }, 200);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-gray-500/55 backdrop-blur-md">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight"><a href="/home">Bs Constructor</a></span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={item.label === "Services" ? handleMouseEnter : null}
                onMouseLeave={item.label === "Services" ? handleMouseLeave : null}
              >
                <a href={item.href} className="hover:text-orange-600 flex items-center">
                  {item.label}
                  {item.label === "Services" && (
                    <IonIcon 
                      name={serviceMenuOpen ? "chevron-up-outline" : "chevron-down-outline"} 
                      className="ml-2 mt-1"
                    />
                  )}
                </a>
                {item.label === "Services" && serviceMenuOpen && (
                  <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-white/85 border border-gray-200 rounded-lg shadow-lg">
                    {serviceItems.map((service, idx) => (
                      <li key={idx} className="px-4 py-2 border-b-2 border-gray-500 hover:bg-orange-500 rounded-lg">
                        <a href={service.href} className="block text-gray-900">{service.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-8 font-semibold rounded-md"
            >
              Contact
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="w-full mt-2 flex-1 justify-self-center left-0 pl-4 pb-3 pt-5 md:pl-0 md:pt-0  absolute md:static bg-gray-200/95 md:block md:pb-0 md:mt-0">
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navItems.map((item, index) => (
                <li key={index} className="py-1 px-2 rounded-lg hover:bg-orange-500">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 justify-center">
              <a
                href="/contact"
                className="mt-2 py-2 px-40 font-semibold rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
