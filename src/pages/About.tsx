import { AboutHero } from '../components/about/AboutHero';
import { AboutContent } from '../components/about/AboutContent';
import { TechStack } from '../components/about/TechStack';

export const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <AboutContent />
      <TechStack />
    </div>
  );
};