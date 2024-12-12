import { useState, useEffect } from 'react';
import { Post } from '../types/Post';
import { postService } from '../services/posts';

export const usePost = (id: string) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await postService.getPostById(id);
        if (data) {
          setPost(data);
          setError(null);
        } else {
          setError('Post no encontrado');
        }
      } catch (err) {
        // Solo establecemos el error si realmente hay un problema
        if (err instanceof Error && err.message !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [id]);

  return { 
    post, 
    isLoading: loading,
    // Solo retornamos error si no estamos cargando y hay un error
    error: !loading ? error : null 
  };
};
