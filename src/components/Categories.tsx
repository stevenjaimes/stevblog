import { useCategories } from '../hooks/useCategories';
import { Link } from 'react-router-dom';

export const Categories = () => {
  const { categories, loading, error } = useCategories();

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-10 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error al cargar las categorías</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">Explorar por Categoría</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/blog/categoria/${category.slug}`}
            className="group"
          >
            <div
              className="p-4 rounded-lg transition-all duration-200 ease-in-out"
              style={{
                backgroundColor: `${category.color}15`,
                borderColor: category.color,
              }}
            >
              <span
                className="font-medium transition-colors duration-200"
                style={{ color: category.color }}
              >
                {category.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
