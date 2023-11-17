import { Navigation } from '@/components/molecules/Navigation';
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
      </main>
    </div>
  );
};

export default Index;
