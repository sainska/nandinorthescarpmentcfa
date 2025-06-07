import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, AlertTriangle, Bell, ChevronLeft, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);

  // Sample notifications - in a real app, these would come from an API
  const notifications = [
    {
      type: 'event',
      message: 'Tree Planting Day this Saturday at North Nandi Forest - Join Us!',
      icon: '🌳'
    },
    {
      type: 'update',
      message: 'New Forest Management Plan approved - View Details',
      icon: '📋'
    },
    {
      type: 'alert',
      message: 'Environmental Conservation Workshop next week - Register Now',
      icon: '🎓'
    }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto rotate notifications
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 5000); // Change notification every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextNotification = () => {
    setCurrentNotification((prev) => (prev + 1) % notifications.length);
  };

  const prevNotification = () => {
    setCurrentNotification((prev) => (prev - 1 + notifications.length) % notifications.length);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'PELIS System', href: '/pelis' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <div className="sticky top-0 z-50">
      {/* Updates & Notifications Banner */}
      <div className="bg-gradient-to-r from-cfa-green-600 to-cfa-green-500 text-white py-2 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={prevNotification}
              className="hidden sm:block hover:bg-white/10 rounded-full p-1 transition-colors"
              aria-label="Previous notification"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            
            <div className="flex items-center justify-center gap-2 text-sm font-medium overflow-hidden">
              <Bell className="h-4 w-4 flex-shrink-0" />
              <div className="animate-fade-in whitespace-nowrap overflow-hidden text-ellipsis">
                <span className="mr-2">{notifications[currentNotification].icon}</span>
                {notifications[currentNotification].message}
              </div>
            </div>

            <button 
              onClick={nextNotification}
              className="hidden sm:block hover:bg-white/10 rounded-full p-1 transition-colors"
              aria-label="Next notification"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-cfa-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">CFA</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-cfa-green-600">Nandi North Escarpment</h1>
                <p className="text-xs text-gray-600">Community Forest Association</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-cfa-green-600 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cfa-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button className="bg-cfa-orange-500 hover:bg-cfa-orange-600 text-white flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Contact Us
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
                  <Link
                    key={item.name}
                    to={item.href}
                    className="px-4 py-2 text-gray-700 hover:text-cfa-green-600 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-2">
                  <Button className="w-full bg-cfa-orange-500 hover:bg-cfa-orange-600 text-white flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Contact Us
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
