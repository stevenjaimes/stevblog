import { useState, useEffect } from 'react';
import { Post } from '../types/Post';
import { postService } from '../services/posts';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await postService.getAllPosts(); // Asegúrate de que este método existe en tu servicio
      setPosts(data || []);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar los posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const mutate = async () => {
    // Recarga la lista de posts
    await loadPosts();
  };

  return { 
    posts, 
    loading, 
    error, 
    mutate // Incluimos mutate para actualizaciones manuales
  };
};
