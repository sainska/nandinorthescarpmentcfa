
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, AlertTriangle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Community', href: '#community' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <AlertTriangle className="h-4 w-4" />
          <span>Emergency: 000 | Fire Information Hotline: 1800 240 667</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-cfa-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">CFA</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-cfa-green-600">Escarpment Echo</h1>
                <p className="text-xs text-gray-600">Community Fire Authority</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-cfa-green-600 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cfa-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Emergency Contact Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button className="bg-cfa-orange-500 hover:bg-cfa-orange-600 text-white flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Emergency: 000
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-gray-700 hover:text-cfa-green-600 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-4 pt-2">
                  <Button className="w-full bg-cfa-orange-500 hover:bg-cfa-orange-600 text-white flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Emergency: 000
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
