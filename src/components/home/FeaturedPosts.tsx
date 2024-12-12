import { Link } from 'react-router-dom';
import { BlogCard } from '../BlogCard';
import { ChevronRight } from 'lucide-react';
import { Post } from '../../types/Post';

interface FeaturedPostsProps {
  posts: Post[];
}

export const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Últimos Posts
              </h2>
              <p className="text-gray-600">
                Descubre nuestros artículos más recientes
              </p>
            </div>
            {posts.length > 3 && (
              <Link 
                to="/blog" 
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
              >
                Ver todos
                <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            )}
          </div>
          
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-gray-600">No hay posts disponibles.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};