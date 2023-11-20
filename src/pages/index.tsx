import { Navigation } from '@/components/molecules/Navigation';
import Experiences from '@/components/organisms/Experiences';
import Hero from '@/components/organisms/Hero';
import Posts from '@/components/organisms/Posts';

const Index = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
        <Posts />
        <Experiences />
      </main>
    </div>
  );
};

export default Index;
