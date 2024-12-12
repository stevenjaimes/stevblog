import { usePosts } from '../hooks/usePosts';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturedPosts } from '../components/home/FeaturedPosts';
import { Categories } from '../components/Categories';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { NewsletterSection } from '../components/home/NewsletterSection';

export const Home = () => {
  const { posts, loading, error } = usePosts();
  const featuredPosts = posts.slice(0, 3);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <p className="text-red-700">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturedPosts posts={featuredPosts} />
      
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto px-4">
            <Categories />
          </div>
        </div>
      </section>
      
      <FeaturesSection />
      <NewsletterSection />
    </div>
  );
};