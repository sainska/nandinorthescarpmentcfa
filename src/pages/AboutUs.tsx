
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Target, Users } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-bg text-white">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}>
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                Learn about our organization, mission, and commitment to forest conservation and community development.
              </p>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-cfa-green-600 mb-6">Location of Nandi North Forest</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nandi North Forest is located in Nandi County, Kenya, spanning across 10,500.7 hectares. The forest is situated within 
                  the boundaries of North Nandi and Chesumei sub-counties, bordering South Nandi, Kakamega, and Malava forests.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At an altitude ranging from 1,900 to 2,250 meters above sea level, the forest represents a significant ecological 
                  zone within the Mau Complex, contributing to the region's biodiversity and water resources.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                  alt="Nandi North Forest Location" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <Shield className="h-16 w-16 mx-auto text-cfa-green-600 mb-4" />
                <h2 className="text-3xl font-bold text-cfa-green-600">Who We Are</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nandi North Escarpment Community Forest Association (CFA) is dedicated to sustainable forest management and conservation efforts 
                in Nandi County. Our mission is to promote environmental conservation while improving the livelihoods of local communities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Established in 2009, we represent the interests of forest-adjacent communities, including Kiptuiya, Kombe, Kaptel, Sangalo, 
                Kebulonik, Kurgung, Kamung'ei, Kipng'oror, and Chepterwai locations. We work closely with the Kenya Forest Service to implement 
                participatory forest management approaches that benefit both the ecosystem and local communities.
              </p>
            </div>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="bg-cfa-green-50 rounded-lg p-8 shadow-md">
                <div className="flex items-center justify-center w-16 h-16 bg-cfa-green-100 rounded-full mb-6 mx-auto">
                  <Target className="h-8 w-8 text-cfa-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-center text-cfa-green-600 mb-6">Our Vision</h3>
                <blockquote className="text-lg text-gray-700 leading-relaxed text-center italic">
                  "To have an empowered community that would effectively participate on participatory forest management."
                </blockquote>
              </div>

              {/* Mission */}
              <div className="bg-cfa-earth-50 rounded-lg p-8 shadow-md">
                <div className="flex items-center justify-center w-16 h-16 bg-cfa-earth-100 rounded-full mb-6 mx-auto">
                  <Users className="h-8 w-8 text-cfa-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-center text-cfa-green-600 mb-6">Our Mission</h3>
                <blockquote className="text-lg text-gray-700 leading-relaxed text-center italic">
                  "To support and promote sustainable management of Natural Resources in North Nandi Forest through planning, implementation, 
                  advocacy and transformation of community for equitable sharing of accrued benefits among all stakeholders."
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
