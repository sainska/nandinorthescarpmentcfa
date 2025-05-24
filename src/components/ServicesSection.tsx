
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Flame, 
  Truck, 
  Users, 
  Heart, 
  Search, 
  TreePine,
  Home,
  GraduationCap 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Flame,
      title: "Fire Suppression",
      description: "Rapid response to structure fires, bushfires, and emergency incidents with state-of-the-art equipment and trained personnel.",
      features: ["24/7 Emergency Response", "Advanced Equipment", "Trained Firefighters"]
    },
    {
      icon: Truck,
      title: "Emergency Response",
      description: "Comprehensive emergency services including road accident rescue, storm damage response, and hazardous material incidents.",
      features: ["Road Crash Rescue", "Storm Response", "Hazmat Support"]
    },
    {
      icon: Heart,
      title: "First Aid Services",
      description: "Emergency medical assistance and first aid support at community events and emergency incidents.",
      features: ["Medical Support", "Event Coverage", "CPR Training"]
    },
    {
      icon: Search,
      title: "Search & Rescue",
      description: "Specialized search and rescue operations for missing persons in wilderness and urban environments.",
      features: ["Wilderness Search", "Urban Rescue", "Drone Technology"]
    },
    {
      icon: TreePine,
      title: "Wildfire Prevention",
      description: "Proactive wildfire prevention through controlled burns, vegetation management, and community education.",
      features: ["Controlled Burns", "Fuel Reduction", "Risk Assessment"]
    },
    {
      icon: Home,
      title: "Property Protection",
      description: "Home safety inspections, fire prevention advice, and assistance with emergency preparedness planning.",
      features: ["Safety Inspections", "Emergency Planning", "Prevention Advice"]
    },
    {
      icon: Users,
      title: "Community Education",
      description: "Fire safety education programs for schools, businesses, and community groups.",
      features: ["School Programs", "Public Workshops", "Safety Demonstrations"]
    },
    {
      icon: GraduationCap,
      title: "Volunteer Training",
      description: "Comprehensive training programs for community members interested in joining our volunteer brigade.",
      features: ["Basic Training", "Advanced Skills", "Leadership Development"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-cfa-green-600 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive emergency services and community programs designed to protect lives, 
            property, and the environment in our region.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in group">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cfa-green-100 rounded-full mb-4 group-hover:bg-cfa-orange-100 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-cfa-green-600 group-hover:text-cfa-orange-600 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-cfa-orange-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-cfa-green-600 mb-4">
              Need Our Services?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              For emergencies call 000. For non-emergency services or information, contact our station directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                Emergency: 000
              </Button>
              <Button size="lg" variant="outline" className="border-cfa-green-600 text-cfa-green-600 hover:bg-cfa-green-600 hover:text-white px-8">
                Contact Station
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
