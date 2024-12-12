import { useState } from 'react';
import { useCategories } from '../hooks/useCategories';
import { postService } from '../services/posts';

interface PostFormData {
  title: string;
  excerpt: string;
  content: string;
  image_url: string; // Ajustado para coincidir con el backend
  author: string;
  tags: string[];
  read_time: string;
  category_slug: string;
}

const initialFormData: PostFormData = {
  title: '',
  excerpt: '',
  content: '',
  image_url: '', // Ajustado para coincidir con el backend
  author: '',
  tags: [],
  read_time: '',
  category_slug: '', // Inicializamos como vacío
};

interface PostFormProps {
  onSubmitSuccess?: () => void;
}

export const PostForm = ({ onSubmitSuccess }: PostFormProps) => {
  const { categories, loading, error: categoryError } = useCategories(); // Usamos el hook para obtener las categorías
  const [formData, setFormData] = useState<PostFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(',').map(tag => tag.trim());
    setFormData(prev => ({
      ...prev,
      tags,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const newPost = {
        ...formData,
        date: new Date().toISOString(),
      };

      await postService.createPost(newPost);
      setFormData(initialFormData);
      onSubmitSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear el post');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <p>Cargando categorías...</p>; // Muestra un mensaje de carga
  if (categoryError) return <p>Error al cargar categorías: {categoryError}</p>; // Muestra el error

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {/* Título */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Título
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        />
      </div>

      {/* Extracto */}
      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
          Extracto
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          required
          rows={2}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        />
      </div>

      {/* Contenido */}
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          Contenido
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
          rows={6}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        />
      </div>

      {/* URL de la imagen */}
      <div>
        <label htmlFor="image_url" className="block text-sm font-medium text-gray-700">
          URL de la imagen
        </label>
        <input
          type="url"
          id="image_url"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        />
      </div>

      {/* Autor */}
      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700">
          Autor
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        />
      </div>

      {/* Tags */}
      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
          Tags (separados por coma)
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={formData.tags.join(', ')}
          onChange={handleTagsChange}
          placeholder="react, typescript, web"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        />
      </div>

      {/* Tiempo de lectura */}
      <div>
        <label htmlFor="read_time" className="block text-sm font-medium text-gray-700">
          Tiempo de lectura
        </label>
        <input
          type="text"
          id="read_time"
          name="read_time"
          value={formData.read_time}
          onChange={handleChange}
          placeholder="5 min"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        />
      </div>

      {/* Categoría */}
      <div>
        <label htmlFor="category_slug" className="block text-sm font-medium text-gray-700">
          Categoría
        </label>
        <select
          id="category_slug"
          name="category_slug"
          value={formData.category_slug}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        >
          <option value="">Selecciona una categoría</option>
          {categories.map(category => (
            <option key={category.id} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Botón de envío */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-2 rounded-md text-white font-medium ${
            isSubmitting ? 'bg-purple-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          {isSubmitting ? 'Creando...' : 'Crear Post'}
        </button>
      </div>
    </form>
  );
};
