import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { 
  Users, 
  Calendar, 
  Award, 
  Heart,
  Handshake,
  Star,
  Clock,
  MapPin,
  TreePine,
  Sprout,
  GraduationCap,
  Globe,
  Loader2
} from 'lucide-react';

const CommunitySection = () => {
  const { toast } = useToast();
  const [isJoining, setIsJoining] = useState(false);

  const handleJoin = async () => {
    setIsJoining(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Welcome!",
        description: "Thank you for joining our community. We'll be in touch soon.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process your request. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsJoining(false);
    }
  };

  const programs = [
    {
      title: "Forest Conservation Program",
      description: "Join our dedicated team of community forest guardians. Training provided on sustainable forest management.",
      badge: "Open Enrollment",
      badgeColor: "bg-green-100 text-green-800",
      icon: TreePine,
      requirements: ["18+ years old", "Local resident", "Commitment to conservation"]
    },
    {
      title: "Tree Nursery Management",
      description: "Learn and participate in tree nursery operations and seedling production.",
      badge: "Ongoing Program",
      badgeColor: "bg-blue-100 text-blue-800",
      icon: Sprout,
      requirements: ["Basic agriculture knowledge", "Regular availability", "Hands-on participation"]
    },
    {
      title: "Environmental Education",
      description: "Educational programs on forest conservation and environmental protection for schools and communities.",
      badge: "Regular Sessions",
      badgeColor: "bg-purple-100 text-purple-800",
      icon: GraduationCap,
      requirements: ["All ages welcome", "Interactive learning", "Community focused"]
    },
    {
      title: "Community Development",
      description: "Sustainable livelihood programs and community-based forest enterprises.",
      badge: "Active Projects",
      badgeColor: "bg-orange-100 text-orange-800",
      icon: Globe,
      requirements: ["Local community member", "Group participation", "Sustainable practices"]
    }
  ];

  const events = [
    {
      date: "Dec 15",
      time: "9:00 AM",
      title: "Tree Planting Day",
      location: "North Nandi Forest",
      type: "Conservation"
    },
    {
      date: "Dec 20",
      time: "2:00 PM",
      title: "Environmental Workshop",
      location: "Community Center",
      type: "Education"
    },
    {
      date: "Jan 10",
      time: "10:00 AM",
      title: "Forest Management Training",
      location: "CFA Office",
      type: "Training"
    },
    {
      date: "Jan 25",
      time: "8:00 AM",
      title: "Community Forest Day",
      location: "Various Locations",
      type: "Community"
    }
  ];

  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-cfa-green-600 mb-6">
            Community Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building a sustainable future through community-based forest management and conservation initiatives.
          </p>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Users className="mr-3 h-8 w-8 text-cfa-orange-500" />
            Programs & Training
          </h3>
          <div className="space-y-6">
            {programs.map((program, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-cfa-orange-500">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-cfa-green-100 rounded-lg">
                      <program.icon className="h-5 w-5 text-cfa-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">{program.title}</h4>
                  </div>
                  <Badge className={program.badgeColor}>
                    {program.badge}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-2">
                  {program.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <Star className="h-3 w-3 text-cfa-orange-500 mr-2" />
                      {req}
                    </div>
                  ))}
                </div>
                <Button className="mt-4 bg-cfa-green-600 hover:bg-cfa-green-700 text-white">
                  Join Program
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Events */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Calendar className="mr-3 h-8 w-8 text-cfa-orange-500" />
            Upcoming Events
          </h3>
          <div className="space-y-4">
            {events.map((event, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-center">
                    <div className="bg-cfa-orange-500 text-white rounded-lg p-3 min-w-[4rem]">
                      <div className="text-sm font-medium">{event.date.split(' ')[0]}</div>
                      <div className="text-xs opacity-90">{event.date.split(' ')[1]}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{event.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {event.type}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-cfa-green-600" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-cfa-green-600" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-cfa-green-600 to-cfa-green-500 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Community Impact</h3>
              <p className="text-cfa-green-100 text-lg">Making a difference in forest conservation every day</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cfa-orange-300 mb-2">10,500+</div>
                <div className="text-cfa-green-100">Hectares Protected</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cfa-orange-300 mb-2">9+</div>
                <div className="text-cfa-green-100">Communities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cfa-orange-300 mb-2">1000+</div>
                <div className="text-cfa-green-100">Trees Planted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cfa-orange-300 mb-2">15+</div>
                <div className="text-cfa-green-100">Active Projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Card className="p-8 bg-cfa-green-50 border-none">
            <h4 className="text-xl font-semibold text-cfa-green-800 mb-3">
              Want to Get Involved?
            </h4>
            <p className="text-cfa-green-700 mb-4">
              Join our community of dedicated volunteers and make a real difference in forest conservation and environmental protection.
            </p>
            <Button 
              className="bg-cfa-green-600 hover:bg-cfa-green-700 text-white"
              onClick={handleJoin}
              disabled={isJoining}
            >
              {isJoining ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Joining...
                </>
              ) : (
                'Join Us Today'
              )}
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
