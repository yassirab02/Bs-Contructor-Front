import React from "react";
import logo from "../assets/Bs-logo.jpg";
import { FaInstagram, FaFacebook } from "react-icons/fa";
const Footer = () => {
  const footerNavs = [
    {
      href: "/home",
      name: "Home",
    },
    {
      href: "/services",
      name: "Services",
    },
    {
      href: "/projects",
      name: "Projects",
    },
    {
      href: "/about-us",
      name: "About us",
    },
  ];

  return (
    <footer className="pt-10 bg-gray-500/55">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
            <img src={logo} className="w-32" />
            <p className="max-w-md">
              Nulla auctor metus vitae lectus iaculis, vel euismod massa
              efficitur.
            </p>
            <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
              {footerNavs.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-800 hover:text-gray-500 duration-150"
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex items-end">
            <div className="mt-3 flex space-x-4">
              <a
                href="https://www.instagram.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-4xl hover:text-red-700" />
              </a>
              <a
                href="https://www.facebook.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-4xl hover:text-blue-700" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-3 py-3 border-t md:text-center">
          <p>© 2024 Bs Constructor Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
