
import { Card } from '@/components/ui/card';

const CommunityForestSection = () => {
  return (
    <section id="community-forest" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-cfa-green-600 mb-6">
            Community Forest
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sustainable management and conservation of Nandi North Forest resources
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold text-cfa-green-600 mb-4">Kenya Forest Service Framework</h3>
              <p className="text-gray-700 leading-relaxed">
                The Kenya Forest Service (KFS) operates under the Forest Act No. 7 of 2005, revised under Act No. 34 of 2016, 
                which mandates local communities adjacent to forests to form Community Forest Associations (CFAs) and develop 
                forest management plans. This requirement enables effective community engagement in forest conservation and management.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-cfa-green-600 mb-4">Our Establishment</h3>
              <p className="text-gray-700 leading-relaxed">
                In Nandi North, the first Community Forest Association (CFA) was established in 2009 to support sustainable forest 
                conservation efforts. The association was formed by members of the forest-adjacent communities within Nandi County, 
                part of the Mau Complex. These communities include Kiptuiya, Kombe, Kaptel, Sangalo, Kebulonik, Kurgung, 
                Kamung'ei, Kipng'oror, and Chepterwai locations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-cfa-green-600 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Working in collaboration with the Kenya Forest Service, the CFA plays a crucial role in ensuring responsible 
                forest management and conservation while promoting sustainable utilization of forest resources.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-cfa-green-600 mb-4">Management Plan</h3>
              <p className="text-gray-700 leading-relaxed">
                The review of the North Nandi Participatory Forest Management Plan was conducted through a consultative process, 
                coordinated by the County Forest Conservator's office in Nandi, with financial support from the French Development 
                Agency (AFD) through the Green Belt Movement (GBM).
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                The process began on September 28, 2021, at the Forest Manager's compound in North Nandi, leading to the formation 
                of a Local Plan Review Team, including community members from six beats, KWS representatives, and the Forest Manager.
              </p>
            </div>
          </div>

          {/* Forest Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-md border-0 bg-cfa-green-50">
              <h3 className="text-2xl font-semibold text-cfa-green-600 mb-4">Nandi North Forest</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Nandi North Forest, covering 10,500.7 hectares in Nandi County, was declared a forest reserve in 1936 and later a 
                  central forest in 1964. It spans Nandi North and Chesumei sub-counties, bordering South Nandi, Kakamega, and 
                  Malava forests.
                </p>
                <p>
                  Managed by the Forest Station Manager with support from KFS staff, it lies at an altitude of 1,900–2,250 meters 
                  above sea level. The first Participatory Forest Management Plan (PFMP) was established after the 2005 Forests Act 
                  and launched in 2016, covering five years until 2020.
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-md border-0 bg-cfa-earth-50">
              <h3 className="text-2xl font-semibold text-cfa-green-600 mb-4">Review Process</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  The review involved key stakeholders assessing previous plans through literature reviews, surveys, direct 
                  observations, and community consultations. A Local Plan Review Team (LPRT) provided essential input, and trained 
                  enumerators conducted a socio-economic survey in November 2021.
                </p>
                <p>
                  The collected data was organized into various management programs, including forest conservation, plantation 
                  development, water resource management, eco-tourism, security, community participation, infrastructure, human 
                  resource development, and research.
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-md border-0 bg-cfa-orange-50">
              <h3 className="text-2xl font-semibold text-cfa-orange-600 mb-4">Five-Year Plan</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  The five-year plan includes estimated budgets for each activity, aiming to conserve and sustainably manage Nandi 
                  North Forest while improving the livelihoods of adjacent communities. It also emphasizes the role of women, youth, 
                  and people with disabilities in conservation efforts.
                </p>
                <blockquote className="italic border-l-4 border-cfa-green-500 pl-4 mt-4">
                  "Through protection, conservation, and sustainable utilization of Natural Resources for the betterment and 
                  empowerment of the community for present and future generations."
                </blockquote>
              </div>
            </Card>
          </div>
        </div>

        {/* Forest Resources Map */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-cfa-green-600">North Nandi Forest Resources Map</h3>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="North Nandi Forest Resources Map" 
              className="w-full h-auto object-cover aspect-[16/9]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityForestSection;
