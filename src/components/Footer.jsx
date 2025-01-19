import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">TasteFusion</h2>
            <p className="text-gray-600">
              Delivering happiness with every meal. Experience the best in food delivery.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<FaInstagram size={20} />} />
              <SocialLink href="#" icon={<FaTwitter size={20} />} />
              <SocialLink href="#" icon={<FaFacebook size={20} />} />
              <SocialLink href="#" icon={<FaGithub size={20} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink text="Home" to="/" />
              <FooterLink text="About Us" to="/about" />
              <FooterLink text="Contact" to="/contact" />
              <FooterLink text="Terms & Conditions" to="/terms" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: support@tastefusion.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Food Street, Cuisine City, FC 12345</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} TasteFusion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white transition-colors duration-200"
  >
    {icon}
  </a>
);

const FooterLink = ({ text, to }) => (
  <li>
    <Link
      to={to}
      className="text-gray-600 hover:text-green-500 transition-colors duration-200"
    >
      {text}
    </Link>
  </li>
);

export default Footer;
