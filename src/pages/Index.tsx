
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CommunityForestSection from '@/components/CommunityForestSection';
import ServicesSection from '@/components/ServicesSection';
import CommunitySection from '@/components/CommunitySection';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CommunityForestSection />
      <ServicesSection />
      <CommunitySection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
