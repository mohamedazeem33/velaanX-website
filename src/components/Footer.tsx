import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-dark text-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                <Leaf className="w-6 h-6 text-forest-dark" />
              </div>
              <span className="font-display text-2xl font-bold">velaanX</span>
            </div>
            <p className="text-cream/70 mb-6">
              Connecting local farmers with communities. Fresh produce, 
              fair prices, sustainable farming.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-cream/70 hover:text-cream transition-colors">
                  Browse Products
                </Link>
              </li>
              <li>
                <Link to="/farmers" className="text-cream/70 hover:text-cream transition-colors">
                  Our Farmers
                </Link>
              </li>
              <li>
                <a href="#" className="text-cream/70 hover:text-cream transition-colors">
                  Become a Seller
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 hover:text-cream transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-cream/70 hover:text-cream transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 hover:text-cream transition-colors">
                  Delivery Info
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 hover:text-cream transition-colors">
                  Returns Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 hover:text-cream transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-cream/70">
                <MapPin className="w-5 h-5 text-golden" />
                <span>Madurai, TamilNadu</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70">
                <Phone className="w-5 h-5 text-golden" />
                <span>+91 9655732612</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70">
                <Mail className="w-5 h-5 text-golden" />
                <span>velaanx@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 text-center text-cream/50">
          <p>© 2025 FarmFresh. All rights reserved. Supporting local farmers, one order at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
