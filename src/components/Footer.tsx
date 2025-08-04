import { Link } from 'react-router-dom';
import { Shield, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
  <img src="/trexlogo.png" alt="Trexsource Logo" className="w-8 h-8" />
  <span className="text-xl font-bold">Trexsource</span>
</div>
            <p className="text-primary-foreground/80">
              Professional security services delivering complete protection for homes, businesses, and institutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/security-services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Security Services
                </Link>
              </li>
              <li>
                <Link to="/other-services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Other Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Security Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Security Guards</li>
              <li>CCTV Installation & Repair</li>
              <li>Event Security</li>
              <li>Private Security Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-primary-foreground/80">+234 812 784 0524</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-primary-foreground/80">
                    2, Olusosun Street, Oregun, Ikeja, Lagos
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-primary-foreground/80">info@trexsource.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Trexsource. All rights reserved. Professional Security Services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;