import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import { useCategories } from '../hooks/useCategories';
import { BlogHeader } from '../components/blog/BlogHeader';
import { CategoryFilter } from '../components/blog/CategoryFilter';
import { BlogGrid } from '../components/blog/BlogGrid';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ErrorMessage } from '../components/ui/ErrorMessage';

export const Blog = () => {
  const { categorySlug } = useParams();
  const { posts, loading: postsLoading, error: postsError } = usePosts();
  const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categorySlug || null);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = !selectedCategory || post.category_slug === selectedCategory;
      const matchesSearch = !searchQuery || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  if (postsLoading || categoriesLoading) {
    return <LoadingSpinner />;
  }

  if (postsError || categoriesError) {
    return <ErrorMessage error={postsError || categoriesError} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <BlogHeader 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <BlogGrid posts={filteredPosts} />
          </div>
        </div>
      </div>
    </div>
  );
};