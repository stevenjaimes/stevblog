import { Link } from 'react-router-dom';
import { Post } from '../types/Post';

interface BlogCardProps extends Post {}

export const BlogCard = ({ id, title, excerpt, date, image_url, author, tags, read_time }: BlogCardProps) => {
  return (
    <Link to={`/post/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image_url} 
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = 'https://via.placeholder.com/800x400?text=Imagen+no+disponible';
            }}
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {title}
          </h2>
          <p className="text-gray-600 mb-4">
            {excerpt}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(tag => (
              <span 
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{author}</span>
            <div className="flex items-center space-x-2">
              <span>{read_time}</span>
              <span>•</span>
              <span>{new Date(date).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
