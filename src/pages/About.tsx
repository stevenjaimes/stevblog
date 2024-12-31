import { AboutHero } from '../components/about/AboutHero';
import { AboutContent } from '../components/about/AboutContent';
import { TechStack } from '../components/about/TechStack';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <AboutContent />
      <TechStack />
    </div>
  );
};

export default  About;