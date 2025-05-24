import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  AlertTriangle,
  Car,
  Wifi,
  Users
} from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Emergency",
      primary: "000",
      secondary: "For life-threatening emergencies",
      urgent: true
    },
    {
      icon: Phone,
      title: "Fire Information Hotline",
      primary: "1800 240 667",
      secondary: "Current fire conditions & warnings",
      urgent: false
    },
    {
      icon: Phone,
      title: "Station Direct",
      primary: "(03) 5555 1234",
      secondary: "Non-emergency enquiries",
      urgent: false
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@escarpmentecho.cfa.vic.gov.au",
      secondary: "General enquiries & information",
      urgent: false
    }
  ];

  const stationInfo = [
    {
      icon: MapPin,
      title: "Station Address",
      details: ["123 Mountain View Road", "Escarpment Echo VIC 3000", "Australia"]
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: ["Emergency: 24/7", "Office: Mon-Fri 9AM-5PM", "Training: Wed 7PM-9PM"]
    },
    {
      icon: Car,
      title: "Parking",
      details: ["Free parking available", "Accessible spaces", "Visitor parking clearly marked"]
    },
    {
      icon: Users,
      title: "Facilities",
      details: ["Training room", "Community meeting space", "Equipment display area"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-cfa-green-600 mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch for emergency services, information, or to learn about volunteer opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            
            {/* Emergency Contact */}
            <Card className="p-6 mb-6 border-l-4 border-red-500 bg-red-50">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-red-900 mb-2">
                    Emergency Services
                  </h4>
                  <p className="text-red-800 mb-3">
                    For life-threatening emergencies, fire, medical emergencies, or immediate danger
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <Phone className="mr-2 h-4 w-4" />
                    Call 000 Now
                  </Button>
                </div>
              </div>
            </Card>

            {/* Other Contact Methods */}
            <div className="space-y-4">
              {contactInfo.slice(1).map((contact, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cfa-green-100 rounded-lg">
                      <contact.icon className="h-5 w-5 text-cfa-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-cfa-green-600 font-medium text-lg mb-1">
                        {contact.primary}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {contact.secondary}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Quick Contact Form */}
            <Card className="p-6 mt-8 bg-gray-50">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Quick Message
              </h4>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cfa-green-500 focus:border-transparent"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cfa-green-500 focus:border-transparent"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cfa-green-500 focus:border-transparent"
                />
                <textarea 
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cfa-green-500 focus:border-transparent"
                ></textarea>
                <Button className="w-full bg-cfa-green-600 hover:bg-cfa-green-700 text-white">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Station Information & Map */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Visit Our Station</h3>
            
            {/* Station Details */}
            <div className="space-y-6 mb-8">
              {stationInfo.map((info, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cfa-orange-100 rounded-lg">
                      <info.icon className="h-5 w-5 text-cfa-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h4>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <div className="relative h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 font-medium">Interactive Map</p>
                  <p className="text-gray-500 text-sm">123 Mountain View Road, Escarpment Echo</p>
                </div>
              </div>
              <div className="p-4 bg-cfa-green-50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-cfa-green-800">Get Directions</p>
                    <p className="text-sm text-cfa-green-600">Open in Google Maps</p>
                  </div>
                  <Button variant="outline" className="border-cfa-green-600 text-cfa-green-600 hover:bg-cfa-green-600 hover:text-white">
                    <MapPin className="mr-2 h-4 w-4" />
                    Directions
                  </Button>
                </div>
              </div>
            </Card>

            {/* Additional Info */}
            <Card className="p-6 mt-6 bg-cfa-green-600 text-white">
              <h4 className="text-xl font-semibold mb-3">Join Our Team</h4>
              <p className="text-cfa-green-100 mb-4">
                Interested in becoming a volunteer firefighter? We provide full training and support.
              </p>
              <Button className="bg-cfa-orange-500 hover:bg-cfa-orange-600 text-white">
                Volunteer Information
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
