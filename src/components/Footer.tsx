import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  AlertTriangle,
  Shield,
  Heart
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "Emergency Services", href: "#services" },
    { name: "Forest Conservation", href: "#community" },
    { name: "Environmental Tips", href: "#community" },
    { name: "Community Programs", href: "#contact" },
    { name: "News & Updates", href: "#news" }
  ];

  const resources = [
    { name: "Forest Management Plans", href: "#" },
    { name: "Emergency Response", href: "#" },
    { name: "Weather Alerts", href: "#" },
    { name: "Community Guidelines", href: "#" },
    { name: "Training Resources", href: "#" }
  ];

  return (
    <footer className="bg-cfa-green-800 text-white">
      {/* Emergency Banner */}
      <div className="bg-red-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-6 text-center">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-semibold">Emergency: 1548</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-red-400"></div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Forest Info: +254721733902</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-cfa-orange-500 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Nandi North Escarpment</h3>
                <p className="text-cfa-green-200">Community Forest Association</p>
              </div>
            </div>
            <p className="text-cfa-green-100 mb-6 leading-relaxed">
              Dedicated to sustainable forest management and conservation efforts in Nandi County. 
              Working in collaboration with the Kenya Forest Service since 2009 to promote environmental 
              conservation while improving the livelihoods of local communities.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-cfa-orange-400" />
                <span className="text-cfa-green-100">Chomisia, Kapsabet, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cfa-orange-400" />
                <span className="text-cfa-green-100">+254721733902</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cfa-orange-400" />
                <span className="text-cfa-green-100">support@nandinorthescarpmentcfa.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-cfa-green-200 hover:text-cfa-orange-300 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    className="text-cfa-green-200 hover:text-cfa-orange-300 transition-colors duration-200"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Additional Info */}
        <div className="border-t border-cfa-green-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-cfa-green-700 rounded-lg hover:bg-cfa-orange-500 transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-cfa-green-700 rounded-lg hover:bg-cfa-orange-500 transition-colors duration-200">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-cfa-green-700 rounded-lg hover:bg-cfa-orange-500 transition-colors duration-200">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-cfa-green-700 rounded-lg hover:bg-cfa-orange-500 transition-colors duration-200">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end space-x-2 mb-3">
                <Heart className="h-5 w-5 text-cfa-orange-400" />
                <span className="text-cfa-green-100">Serving communities since 2009</span>
              </div>
              <p className="text-cfa-green-200 text-sm">
                In Partnership with Kenya Forest Service
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-cfa-green-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm">
            <p className="text-cfa-green-300 mb-2 md:mb-0">
              © 2024 Nandi North Escarpment Community Forest Association. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-cfa-green-300 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-cfa-green-300 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-cfa-green-300 hover:text-white transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
