
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, MapPin, Clock, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-shadow">
              Protecting Our
              <span className="block text-cfa-orange-400">Community</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              Dedicated to fire prevention, emergency response, and community safety in the Escarpment Echo region.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-cfa-orange-500 hover:bg-cfa-orange-600 text-white text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Emergency: 000
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cfa-green-600 text-lg px-8 py-4">
                Learn More
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-cfa-orange-400">24/7</div>
                <div className="text-sm text-gray-300">Emergency Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cfa-orange-400">150+</div>
                <div className="text-sm text-gray-300">Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cfa-orange-400">25k</div>
                <div className="text-sm text-gray-300">People Protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cfa-orange-400">30+</div>
                <div className="text-sm text-gray-300">Years Service</div>
              </div>
            </div>
          </div>

          {/* Emergency Info Cards */}
          <div className="space-y-6 animate-slide-in-right">
            <Card className="p-6 bg-white/95 backdrop-blur border-0 shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Contact</h3>
                  <p className="text-gray-600 mb-3">For life-threatening emergencies</p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Call 000 Now
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur border-0 shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cfa-orange-100 rounded-full">
                  <MapPin className="h-6 w-6 text-cfa-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fire Danger Rating</h3>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      MODERATE
                    </span>
                    <span className="text-gray-600">Today</span>
                  </div>
                  <p className="text-gray-600 text-sm">Check conditions before outdoor activities</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur border-0 shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cfa-green-100 rounded-full">
                  <Clock className="h-6 w-6 text-cfa-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Station Hours</h3>
                  <div className="space-y-1 text-gray-600">
                    <p><strong>Emergency:</strong> 24/7</p>
                    <p><strong>Office:</strong> Mon-Fri 9AM-5PM</p>
                    <p><strong>Training:</strong> Wed 7PM-9PM</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
