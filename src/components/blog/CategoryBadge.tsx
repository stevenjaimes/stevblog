import { Category } from '../../types/Category';

interface CategoryBadgeProps {
  category: Category;
  isSelected?: boolean;
  onClick?: () => void;
}

export const CategoryBadge = ({ category, isSelected, onClick }: CategoryBadgeProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
        isSelected
          ? `text-white shadow-lg`
          : `text-gray-700 hover:bg-opacity-80 hover:-translate-y-0.5`
      }`}
      style={{
        backgroundColor: isSelected ? category.color : `${category.color}20`,
        color: isSelected ? 'white' : category.color,
      }}
    >
      {category.name}
    </button>
  );
};