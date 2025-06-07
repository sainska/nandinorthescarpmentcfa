import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock, 
  User, 
  AlertTriangle,
  Info,
  Award,
  ArrowRight,
  TreePine,
  Shield
} from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      type: "alert",
      badge: "Conservation Alert",
      badgeColor: "bg-red-100 text-red-800",
      title: "Critical Forest Protection Notice",
      excerpt: "Urgent notice: Increased monitoring of forest boundaries due to recent encroachment attempts. Community vigilance required.",
      date: "December 12, 2024",
      author: "Forest Conservation Officer",
      urgent: true,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      type: "news",
      badge: "Community",
      badgeColor: "bg-blue-100 text-blue-800",
      title: "New Forest Rangers Join Team",
      excerpt: "Our forest protection team welcomes five new rangers equipped with modern conservation technology.",
      date: "December 10, 2024",
      author: "CFA Secretary",
      urgent: false,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      type: "achievement",
      badge: "Achievement",
      badgeColor: "bg-green-100 text-green-800",
      title: "Community Conservation Awards",
      excerpt: "Local community members recognized for outstanding contributions to forest conservation efforts.",
      date: "December 8, 2024",
      author: "CFA Chairman",
      urgent: false,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      type: "info",
      badge: "Education",
      badgeColor: "bg-purple-100 text-purple-800",
      title: "Summer Fire Safety Campaign Begins",
      excerpt: "Join us for our annual summer fire safety campaign featuring free home inspections and safety workshops throughout the region.",
      date: "December 5, 2024",
      author: "Education Officer",
      urgent: false,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      type: "news",
      badge: "Training",
      badgeColor: "bg-orange-100 text-orange-800",
      title: "Advanced Rescue Training Completed",
      excerpt: "Our team has successfully completed advanced technical rescue training, enhancing our capabilities for complex emergency situations.",
      date: "December 1, 2024",
      author: "Training Officer",
      urgent: false,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      type: "community",
      badge: "Event",
      badgeColor: "bg-yellow-100 text-yellow-800",
      title: "Open Day Draws Record Crowds",
      excerpt: "Our recent community open day was a huge success with over 500 visitors learning about fire safety and emergency preparedness.",
      date: "November 28, 2024",
      author: "Community Liaison",
      urgent: false,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'alert':
        return Shield;
      case 'achievement':
        return Award;
      default:
        return TreePine;
    }
  };

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-cfa-green-600 mb-6">
            News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed about forest conservation alerts, community events, and CFA activities.
          </p>
        </div>

        {/* Featured Alert */}
        {news.find(item => item.urgent) && (
          <Card className="mb-12 border-l-4 border-red-500 bg-red-50 p-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-red-100 rounded-full">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <Badge className="bg-red-100 text-red-800">URGENT</Badge>
                  <span className="text-sm text-red-600">Active Alert</span>
                </div>
                <h3 className="text-2xl font-bold text-red-900 mb-3">
                  {news.find(item => item.urgent)?.title}
                </h3>
                <p className="text-red-800 text-lg mb-4">
                  {news.find(item => item.urgent)?.excerpt}
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Read Full Alert
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.filter(item => !item.urgent).map((item, index) => {
            const IconComponent = getIcon(item.type);
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={item.badgeColor}>
                      {item.badge}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-r from-cfa-green-600 to-cfa-green-500 text-white">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Stay Informed</h3>
              <p className="text-cfa-green-100 mb-6 text-lg">
                Subscribe to our newsletter for the latest conservation alerts, community news, and environmental updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0"
                />
                <Button className="bg-cfa-orange-500 hover:bg-cfa-orange-600 text-white px-6 py-3 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-cfa-green-200 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
