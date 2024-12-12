import { BlogCard } from '../BlogCard';
import { Post } from '../../types/Post';

interface BlogGridProps {
  posts: Post[];
}

export const BlogGrid = ({ posts }: BlogGridProps) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow">
        <p className="text-gray-600">No hay posts disponibles para esta categoría.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
};