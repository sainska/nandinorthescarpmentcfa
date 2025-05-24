
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Calendar, 
  Award, 
  Heart,
  Handshake,
  Star,
  Clock,
  MapPin
} from 'lucide-react';

const CommunitySection = () => {
  const programs = [
    {
      title: "Volunteer Firefighter Program",
      description: "Join our dedicated team of community volunteers. Full training provided.",
      badge: "Open Applications",
      badgeColor: "bg-green-100 text-green-800",
      icon: Users,
      requirements: ["18+ years old", "Basic fitness", "Commitment to training"]
    },
    {
      title: "Community Fire Safety",
      description: "Educational workshops and home safety inspections for residents.",
      badge: "Monthly Events",
      badgeColor: "bg-blue-100 text-blue-800",
      icon: Award,
      requirements: ["Free for residents", "All ages welcome", "Booking required"]
    },
    {
      title: "School Education Program",
      description: "Fire safety education and emergency preparedness for local schools.",
      badge: "Term Programs",
      badgeColor: "bg-purple-100 text-purple-800",
      icon: Heart,
      requirements: ["Primary & Secondary", "Interactive sessions", "Curriculum aligned"]
    },
    {
      title: "Business Fire Safety",
      description: "Workplace fire safety training and emergency evacuation planning.",
      badge: "Corporate Training",
      badgeColor: "bg-orange-100 text-orange-800",
      icon: Handshake,
      requirements: ["On-site training", "Certification provided", "Compliance support"]
    }
  ];

  const events = [
    {
      date: "Dec 15",
      time: "10:00 AM",
      title: "Open Day & Station Tours",
      location: "Fire Station",
      type: "Community Event"
    },
    {
      date: "Dec 20",
      time: "7:00 PM",
      title: "Fire Safety Workshop",
      location: "Community Hall",
      type: "Education"
    },
    {
      date: "Jan 10",
      time: "9:00 AM",
      title: "Volunteer Recruitment Drive",
      location: "Fire Station",
      type: "Recruitment"
    },
    {
      date: "Jan 25",
      time: "6:00 PM",
      title: "Emergency Preparedness Seminar",
      location: "Town Library",
      type: "Education"
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
            Building a safer, more prepared community through education, training, and volunteer opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
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
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Events */}
          <div>
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
            
            <Card className="p-6 mt-6 bg-cfa-green-50 border-cfa-green-200">
              <h4 className="text-xl font-semibold text-cfa-green-800 mb-3">
                Want to Get Involved?
              </h4>
              <p className="text-cfa-green-700 mb-4">
                Join our community of dedicated volunteers and make a real difference in fire safety and emergency response.
              </p>
              <Button className="bg-cfa-green-600 hover:bg-cfa-green-700 text-white">
                Volunteer Today
              </Button>
            </Card>
          </div>
        </div>

        {/* Community Stats */}
        <div className="bg-gradient-to-r from-cfa-green-600 to-cfa-green-500 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Community Impact</h3>
            <p className="text-cfa-green-100 text-lg">Making a difference in our community every day</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cfa-orange-300 mb-2">1,200+</div>
              <div className="text-cfa-green-100">People Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cfa-orange-300 mb-2">85</div>
              <div className="text-cfa-green-100">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cfa-orange-300 mb-2">450+</div>
              <div className="text-cfa-green-100">Emergency Responses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cfa-orange-300 mb-2">30+</div>
              <div className="text-cfa-green-100">Community Events</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
