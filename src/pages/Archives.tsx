import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileDown, Calendar, FileText, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const Archives = () => {
  const { toast } = useToast();
  const [downloadingFile, setDownloadingFile] = useState<string | null>(null);

  const handleDownload = async (fileName: string, downloadUrl: string) => {
    if (!downloadUrl) {
      toast({
        title: "Error",
        description: "Download link not available.",
        variant: "destructive"
      });
      return;
    }

    setDownloadingFile(fileName);
    try {
      // Here you would add your actual file download logic
      // For now, we'll simulate a download
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Success",
        description: `${fileName} downloaded successfully.`
      });
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to download ${fileName}. Please try again later.`,
        variant: "destructive"
      });
    } finally {
      setDownloadingFile(null);
    }
  };

  const documents = [
    {
      title: "CFA Brief History",
      description: "A brief history on the formation of CFA.",
      icon: FileText,
      downloadUrl: "/documents/cfa-brief-history.pdf"
    },
    {
      title: "CFA Proposal Plan",
      description: "A CFA proposal plan for five years management.",
      icon: FileText,
      downloadUrl: "/documents/cfa-proposal-plan.pdf"
    },
    {
      title: "Form A",
      description: "An application for registration of a society in Kenya.",
      icon: FileText,
      downloadUrl: "/documents/form-a.pdf"
    },
    {
      title: "Form B",
      description: "Notification of registered office or postal address of society Kenya.",
      icon: FileText,
      downloadUrl: "/documents/form-b.pdf"
    },
    {
      title: "Zonation Map",
      description: "A map showing zonation of Nandi North Forest.",
      icon: Map,
      downloadUrl: "/documents/zonation-map.pdf"
    },
    {
      title: "Infrastructure Map",
      description: "A map showing Nandi North Infrastructure.",
      icon: Map,
      downloadUrl: "/documents/infrastructure-map.pdf"
    },
    {
      title: "Hydrological Map",
      description: "A map showing Nandi North Hydrology.",
      icon: Map,
      downloadUrl: "/documents/hydrological-map.pdf"
    },
    {
      title: "Policy Guidelines",
      description: "CFA Latest forestry management policies.",
      icon: FileText,
      downloadUrl: "/documents/policy-guidelines.pdf"
    },
    {
      title: "Event Brochure",
      description: "Upcoming environmental events schedule.",
      icon: Calendar,
      downloadUrl: "/documents/event-brochure.pdf"
    }
  ];

  const events = [
    {
      title: "Tree Planting Campaign",
      date: "March 15, 2025",
      location: "Nandi Forest Reserve",
      description: "Join us in planting 10,000 trees to restore our ecosystem!"
    },
    {
      title: "International Forest Tree Planting Day",
      date: "March 21, 2025",
      location: "St. Joseph Elite School, Kiptangus",
      description: "Celebration with Nandi North Escarpment CFA participating in North Nandi Forest."
    },
    {
      title: "Wildlife Conservation Summit",
      date: "April 25, 2025",
      location: "KFS Conference Hall",
      description: "Discussion on preserving biodiversity and herbal plants."
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Archives</h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                Access important documents, past events, and resources related to our conservation efforts.
              </p>
            </div>
          </div>
        </section>

        {/* E-Documents Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cfa-green-600 mb-4">E-Documents</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Download important documents related to our operations and planning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{doc.title}</h3>
                      <p className="text-gray-600 mb-4">{doc.description}</p>
                    </div>
                    <Button 
                      onClick={() => handleDownload(doc.title, doc.downloadUrl)}
                      disabled={downloadingFile === doc.title}
                      className="w-full bg-cfa-green-600 hover:bg-cfa-green-700 text-white"
                    >
                      {downloadingFile === doc.title ? "Downloading..." : "Download"}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16 bg-cfa-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cfa-green-600 mb-4">Upcoming & Past Events</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay informed about our conservation events and activities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-all duration-300 border border-gray-200 bg-white">
                  <div className="flex items-center gap-4 mb-4 text-cfa-orange-600">
                    <Calendar className="h-8 w-8" />
                    <div>
                      <span className="text-lg font-semibold">{event.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-700 font-medium mb-2">
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p className="text-gray-600">{event.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-cfa-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <blockquote className="text-xl italic">
              "Through protection, conservation, and sustainable utilization of Natural Resources for the betterment and 
              empowerment of the community for present and future generations."
            </blockquote>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Archives;
