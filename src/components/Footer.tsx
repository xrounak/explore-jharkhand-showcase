import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8" />
              <span className="text-xl font-bold">Jharkhand Tourism</span>
            </div>
            <p className="text-gray-300 mb-4">
              Discover the natural beauty and rich cultural heritage of Jharkhand. 
              Experience eco-tourism at its finest with waterfalls, forests, and tribal traditions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/destinations" className="hover:text-white transition-colors">Destinations</a></li>
              <li><a href="/itinerary" className="hover:text-white transition-colors">Plan Your Trip</a></li>
              <li><a href="/marketplace" className="hover:text-white transition-colors">Marketplace</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 651 2446441</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@jharkhnadtourism.gov.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Ranchi, Jharkhand</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Facebook className="h-6 w-6 hover:text-accent cursor-pointer transition-colors" />
            <Twitter className="h-6 w-6 hover:text-accent cursor-pointer transition-colors" />
            <Instagram className="h-6 w-6 hover:text-accent cursor-pointer transition-colors" />
          </div>
          <p className="text-gray-300 text-center">
            © 2024 Jharkhand Tourism. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;