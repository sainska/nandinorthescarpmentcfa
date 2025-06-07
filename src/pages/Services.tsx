import { useState, useEffect } from 'react';
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
  Footprints,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const ServicesPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const servicesList = [
    {
      icon: Users,
      title: "Forest Conservation",
      description: "Implementation of forest conservation programs, protection activities, and sustainable resource management."
    },
    {
      icon: Sprout,
      title: "Plantation Development",
      description: "Tree planting initiatives, nursery management, and rehabilitation of degraded forest areas."
    },
    {
      icon: GraduationCap,
      title: "Water Resource Management",
      description: "Protection of water catchment areas, spring conservation, and sustainable water resource utilization."
    },
    {
      icon: Heart,
      title: "Eco-Tourism Development",
      description: "Promotion of eco-tourism activities, nature trails development, and cultural heritage preservation."
    },
    {
      icon: Zap,
      title: "Security & Protection",
      description: "Forest protection programs, community policing, and prevention of illegal activities."
    },
    {
      icon: Globe,
      title: "Community Participation",
      description: "Stakeholder engagement, benefit sharing programs, and community development initiatives."
    },
    {
      icon: MapPin,
      title: "Infrastructure Development",
      description: "Development and maintenance of forest infrastructure, roads, and facilities."
    },
    {
      icon: Footprints,
      title: "Research & Development",
      description: "Environmental research, monitoring programs, and knowledge sharing initiatives."
    }
  ];

  const testimonials = [
    {
      quote: "Through protection, conservation, and sustainable utilization of Natural Resources for the betterment and empowerment of the community for present and future generations.",
      author: "Community Vision Statement",
      role: "Nandi North Escarpment CFA"
    },
    {
      quote: "The CFA has revolutionized community conservation. Our forest is thriving and our community is benefiting from sustainable resource management.",
      author: "Mr. William Keter",
      role: "Community Member"
    },
    {
      quote: "Working together with KFS and local communities has created a model for sustainable forest management that benefits everyone.",
      author: "Forest Management Team",
      role: "Nandi North CFA"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

        {/* Enhanced Testimonial Section */}
        <section className="py-16 bg-cfa-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cfa-green-600 mb-4">Community Feedback</h2>
            </div>

            <div className="max-w-4xl mx-auto relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white shadow-lg hover:bg-cfa-green-50 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6 text-cfa-green-600" />
                </button>
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white shadow-lg hover:bg-cfa-green-50 transition-colors"
                >
                  <ChevronRight className="h-6 w-6 text-cfa-green-600" />
                </button>
              </div>

              <div className="overflow-hidden">
                <div 
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  <div className="flex">
                    {testimonials.map((testimonial, index) => (
                      <div 
                        key={index}
                        className="w-full flex-shrink-0 px-4"
                      >
                        <Card className="bg-white rounded-lg p-8 shadow-md">
                          <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 bg-cfa-green-100 flex items-center justify-center">
                              <Users className="h-10 w-10 text-cfa-green-600" />
                            </div>
                            <blockquote className="text-xl text-gray-700 italic mb-6">
                              "{testimonial.quote}"
                            </blockquote>
                            <p className="font-semibold text-gray-900">{testimonial.author}</p>
                            <p className="text-cfa-green-600">{testimonial.role}</p>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      currentTestimonial === index ? 'bg-cfa-green-600' : 'bg-cfa-green-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
