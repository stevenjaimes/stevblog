import { Tag } from 'lucide-react';
import { Category } from '../../types/Category';
import { CategoryBadge } from './CategoryBadge';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategoryChange: (categorySlug: string | null) => void;
}

export const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Tag className="w-5 h-5 text-purple-600" />
        <h2 className="text-lg font-semibold text-gray-900">Categorías</h2>
      </div>
      
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            !selectedCategory
              ? 'bg-purple-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Todos
        </button>
        
        {categories.map((category) => (
          <CategoryBadge
            key={category.id}
            category={category}
            isSelected={selectedCategory === category.slug}
            onClick={() => onCategoryChange(category.slug)}
          />
        ))}
      </div>

      {selectedCategory && (
        <div className="mt-4 text-sm text-gray-600">
          {categories.find(cat => cat.slug === selectedCategory)?.description}
        </div>
      )}
    </div>
  );
};