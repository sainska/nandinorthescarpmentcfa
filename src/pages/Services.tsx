import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { 
  GraduationCap,
  TreePine,
  Users,
  Heart,
  Sprout,
  Zap, // Replaced Energy with Zap which is a similar lightning/energy icon
  Globe,
  MapPin,
  Footprints
} from 'lucide-react';

const ServicesPage = () => {
  const servicesList = [
    {
      icon: Users,
      title: "Community Workshops",
      description: "Environmental Awareness Campaigns, Community Training, and Policy Advocacy."
    },
    {
      icon: Sprout,
      title: "Tree Planting Events",
      description: "Reforestation, Agroforestry Promotion, and Rehabilitation of Degraded Areas."
    },
    {
      icon: GraduationCap,
      title: "Conservation Education",
      description: "Biodiversity Conservation, Water Resource Protection, and Sustainable Harvesting."
    },
    {
      icon: Heart,
      title: "Volunteer Opportunities",
      description: "Forest Protection, Participatory Forest Management, and Stakeholder Collaboration."
    },
    {
      icon: Zap, // Changed from Energy to Zap
      title: "Sustainability Programs",
      description: "Alternative Energy Sources, Sustainable Livelihoods, and Beekeeping Initiatives."
    },
    {
      icon: Globe,
      title: "Community Outreach",
      description: "Eco-Tourism Development, Firewood Collection Management, and Gender Inclusion."
    },
    {
      icon: MapPin,
      title: "Tourist Attraction & Guide",
      description: "Experience guided tours of our natural landscapes, showcasing unique attractions and cultural heritage."
    },
    {
      icon: Footprints,
      title: "Wildlife Conservation",
      description: "Dedicated efforts to protect wildlife through innovative conservation programs and active community involvement."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-bg text-white">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}>
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                Discover how we contribute to forest conservation, community empowerment, and sustainable development.
              </p>
            </div>
          </div>
        </section>

        {/* Services List Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cfa-green-600 mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide a variety of services aimed at forest conservation, community empowerment, and sustainable development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-cfa-green-100 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-cfa-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-cfa-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cfa-green-600 mb-4">Community Feedback</h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Community Member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <blockquote className="text-xl text-gray-700 italic mb-4">
                    "The CFA has revolutionized community conservation. Our forest is thriving!"
                  </blockquote>
                  <p className="font-semibold text-gray-900">Mr. Wiliam Keter</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <blockquote className="text-lg text-cfa-green-700 italic">
                "Through protection, conservation, and sustainable utilization of Natural Resources for the betterment and 
                empowerment of the community for present and future generations."
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
