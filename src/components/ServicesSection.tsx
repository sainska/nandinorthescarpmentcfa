import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  TreePine,
  Users,
  Sprout,
  Leaf,
  ShieldCheck,
  Store,
  GraduationCap,
  Laptop
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: TreePine,
      title: "PELIS Agroforestry",
      description: "Join our Plantation Establishment and Livelihood Improvement Scheme for sustainable forest management and community development.",
      features: ["Secure Registration", "Digital Management", "Community Benefits"]
    },
    {
      icon: Laptop,
      title: "Digital Platform",
      description: "Access our advanced digital forest management platform for seamless operations and monitoring.",
      features: ["Online Registration", "Payment System", "Resource Management"]
    },
    {
      icon: Store,
      title: "Forest Marketplace",
      description: "Connect with buyers and sellers in our integrated marketplace for sustainable forest products.",
      features: ["Product Listings", "Secure Transactions", "Quality Control"]
    },
    {
      icon: ShieldCheck,
      title: "Forest Protection",
      description: "Comprehensive forest protection services including monitoring, conservation, and sustainable management.",
      features: ["24/7 Monitoring", "Rapid Response", "Conservation Plans"]
    },
    {
      icon: Sprout,
      title: "Plantation Management",
      description: "Expert guidance and support for establishing and managing forest plantations sustainably.",
      features: ["Site Planning", "Species Selection", "Growth Monitoring"]
    },
    {
      icon: Leaf,
      title: "Environmental Services",
      description: "Environmental impact assessment and ecosystem services management for sustainable forestry.",
      features: ["Impact Assessment", "Biodiversity", "Carbon Credits"]
    },
    {
      icon: Users,
      title: "Community Programs",
      description: "Engaging community programs for sustainable forest management and livelihood improvement.",
      features: ["Training Programs", "Support Groups", "Resource Sharing"]
    },
    {
      icon: GraduationCap,
      title: "Capacity Building",
      description: "Training and development programs for community members in forest management and conservation.",
      features: ["Technical Training", "Best Practices", "Leadership Skills"]
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
            Advanced digital forest management services and community programs designed for 
            sustainable forest conservation and community development.
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
              Join PELIS Agroforestry
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Register for our digital platform to access forest management tools and community resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cfa-green-600 hover:bg-cfa-green-700 text-white px-8">
                Register Now
              </Button>
              <Button size="lg" variant="outline" className="border-cfa-green-600 text-cfa-green-600 hover:bg-cfa-green-600 hover:text-white px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
