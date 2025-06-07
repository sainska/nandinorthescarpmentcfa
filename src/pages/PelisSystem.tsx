import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Users, CheckCircle, ExternalLink, TreePine } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const PelisSystem = () => {
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerifyAndRedirect = async () => {
    setIsVerifying(true);
    try {
      // Simulate verification process
      await new Promise(resolve => setTimeout(resolve, 1500));
      window.location.href = 'https://snr-project-pelis-agroforest-system.vercel.app/';
    } catch (error) {
      toast({
        title: "Verification Failed",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Secure Platform",
      description: "End-to-end encryption and secure authentication for all users"
    },
    {
      icon: CheckCircle,
      title: "Verified Members",
      description: "All community members are verified and validated"
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Collaborative platform for sustainable forest management"
    },
    {
      icon: TreePine,
      title: "Forest Conservation",
      description: "Dedicated to preserving and protecting our forest resources"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-cfa-green-600 mb-6">
            PELIS Agroforestry System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access our secure, verified, and community-driven platform for sustainable forest management and agroforestry practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cfa-green-100 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-cfa-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto p-8 bg-white">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join PELIS?
            </h2>
            <p className="text-gray-600 mb-6">
              Click below to access our secure platform. You'll be redirected to our verified PELIS Agroforestry System website.
            </p>
            <Button
              size="lg"
              className="bg-cfa-green-600 hover:bg-cfa-green-700 text-white"
              onClick={handleVerifyAndRedirect}
              disabled={isVerifying}
            >
              {isVerifying ? (
                "Verifying..."
              ) : (
                <>
                  Access PELIS Platform
                  <ExternalLink className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            <p className="mt-4 text-sm text-gray-500">
              By accessing the platform, you agree to our terms of service and community guidelines.
            </p>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose PELIS?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-4">
              <div className="text-4xl font-bold text-cfa-green-600 mb-2">100%</div>
              <div className="text-gray-600">Secure Transactions</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-cfa-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Platform Support</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-cfa-green-600 mb-2">5000+</div>
              <div className="text-gray-600">Community Members</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PelisSystem; 