import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';

interface Comment {
  id: string;
  content: string;
  created_at: string;
  author_email: string;
  user_id: string;
  parent_id: string | null;
  replies_count: number;
}

interface CommentProps {
  comment: Comment;
  onDelete: (id: string) => Promise<void>;
  onReply: (parentId: string) => void;
  postId: string;
}

const CommentItem = ({ comment, onDelete, onReply, postId }: CommentProps) => {
  const { user } = useAuth();
  const [replies, setReplies] = useState<Comment[]>([]);
  const [showReplies, setShowReplies] = useState(false);

  const loadReplies = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', postId)
        .eq('parent_id', comment.id)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setReplies(data || []);
    } catch (err) {
      console.error('Error al cargar respuestas:', err);
    }
  };

  // Función para manejar la eliminación de respuestas
  const handleReplyDelete = async (replyId: string) => {
    try {
      await onDelete(replyId);
      // Actualizar el estado local de las respuestas
      setReplies(prevReplies => prevReplies.filter(reply => reply.id !== replyId));
    } catch (err) {
      console.error('Error al eliminar respuesta:', err);
    }
  };

  useEffect(() => {
    if (showReplies) {
      loadReplies();
    }
  }, [showReplies, comment.id]);

  // Suscribirse a cambios en las respuestas
  useEffect(() => {
    const repliesSubscription = supabase
      .channel(`comment_replies_${comment.id}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'comments',
          filter: `parent_id=eq.${comment.id}`,
        },
        (payload) => {
          if (showReplies) {
            if (payload.eventType === 'DELETE') {
              const deletedId = payload.old.id;
              setReplies(prevReplies => prevReplies.filter(reply => reply.id !== deletedId));
            } else {
              loadReplies();
            }
          }
        }
      )
      .subscribe();

    return () => {
      repliesSubscription.unsubscribe();
    };
  }, [comment.id, showReplies]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="border-l-2 border-purple-100 pl-4 mb-4">
      <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-semibold text-gray-900">{comment.author_email}</p>
            <p className="text-xs text-gray-500">{formatDate(comment.created_at)}</p>
          </div>
          {user?.id === comment.user_id && (
            <button
              onClick={() => comment.parent_id ? handleReplyDelete(comment.id) : onDelete(comment.id)}
              className="text-xs text-red-600 hover:text-red-500"
            >
              Eliminar
            </button>
          )}
        </div>
        <p className="mt-2 text-gray-700 text-base leading-relaxed">{comment.content}</p>
        <div className="mt-2 flex items-center space-x-4">
          {user && !comment.parent_id && (
            <button
              onClick={() => onReply(comment.id)}
              className="text-sm text-purple-600 hover:text-purple-500"
            >
              Responder
            </button>
          )}
          {!comment.parent_id && (
            <button
              onClick={() => {
                setShowReplies(!showReplies);
                if (!showReplies) loadReplies();
              }}
              className="text-sm text-gray-600 hover:text-gray-500 flex items-center space-x-1"
            >
              <svg
                className={`w-4 h-4 transition-transform ${showReplies ? 'transform rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={showReplies ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                />
              </svg>
              <span>
                {comment.replies_count > 0
                  ? `${comment.replies_count} ${
                      comment.replies_count === 1 ? 'respuesta' : 'respuestas'
                    }`
                  : 'Respuestas'}
              </span>
            </button>
          )}
        </div>
      </div>
      {showReplies && (
        <div className="mt-2 ml-8 space-y-4">
          {replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              onDelete={handleReplyDelete}
              onReply={onReply}
              postId={postId}
            />
          ))}
          {replies.length === 0 && (
            <p className="text-sm text-gray-500 italic">No hay respuestas aún</p>
          )}
        </div>
      )}
    </div>
  );
};

interface CommentsProps {
  postId: string;
}

export const Comments = ({ postId }: CommentsProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const loadComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', postId)
        .is('parent_id', null)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (err) {
      console.error('Error al cargar comentarios:', err);
    }
  };

  useEffect(() => {
    loadComments();

    const commentsSubscription = supabase
      .channel('comments_channel')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'comments',
          filter: `post_id=eq.${postId}`,
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            const newComment = payload.new as Comment;
            if (!newComment.parent_id) {
              // Si es un comentario principal, actualizar la lista
              loadComments();
            } else {
              // Si es una respuesta, actualizar el contador del padre
              setComments((prev) =>
                prev.map((comment) =>
                  comment.id === newComment.parent_id
                    ? { ...comment, replies_count: (comment.replies_count || 0) + 1 }
                    : comment
                )
              );
            }
          } else if (payload.eventType === 'DELETE') {
            const deletedComment = payload.old as Comment;
            if (!deletedComment.parent_id) {
              // Si se elimina un comentario principal
              loadComments();
            } else {
              // Si se elimina una respuesta
              setComments((prev) =>
                prev.map((comment) =>
                  comment.id === deletedComment.parent_id
                    ? { ...comment, replies_count: Math.max(0, (comment.replies_count || 0) - 1) }
                    : comment
                )
              );
            }
          }
        }
      )
      .subscribe();

    return () => {
      commentsSubscription.unsubscribe();
    };
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsLoading(true);
    setError(null);

    try {
      const { data: newComment, error: commentError } = await supabase
        .from('comments')
        .insert([
          {
            post_id: postId,
            user_id: user.id,
            content: commentText,
            author_email: user.email,
            parent_id: replyTo,
          },
        ])
        .select()
        .single();

      if (commentError) throw commentError;

      // Si es una respuesta, actualizar el comentario padre
      if (replyTo) {
        const parentComment = comments.find((c) => c.id === replyTo);
        if (parentComment) {
          parentComment.replies_count = (parentComment.replies_count || 0) + 1;
          setComments([...comments]);
        }
      } else {
        // Si es un comentario principal, añadirlo al inicio de la lista
        setComments((prev) => [newComment, ...prev]);
      }

      setCommentText('');
      setReplyTo(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al publicar el comentario');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (commentId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('comments')
        .delete()
        .eq('id', commentId)
        .eq('user_id', user.id);

      if (error) throw error;

      // Actualizar el estado local
      setComments((prev) => {
        // Filtrar el comentario eliminado
        const updatedComments = prev.filter(comment => comment.id !== commentId);

        // Si el comentario eliminado es una respuesta, eliminarlo de la lista de respuestas
        return updatedComments.filter(comment => comment.parent_id !== commentId);
      });

      // Si el comentario eliminado es una respuesta, actualizar el contador del padre
      const parentComment = comments.find(comment => comment.id === replyTo);
      if (parentComment) {
        parentComment.replies_count = Math.max(0, (parentComment.replies_count || 0) - 1);
      }
    } catch (err) {
      console.error('Error al eliminar comentario:', err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Comentarios</h2>

      {/* Formulario de comentario */}
      {user ? (
        <form onSubmit={handleSubmit} className="mb-8">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-red-700">{error}</p>
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
              {replyTo ? 'Tu respuesta' : 'Tu comentario'}
            </label>
            {replyTo && (
              <div className="mt-1 mb-2">
                <span className="text-sm text-gray-500">
                  Respondiendo a un comentario •{' '}
                  <button
                    onClick={() => setReplyTo(null)}
                    className="text-purple-600 hover:text-purple-500"
                  >
                    Cancelar respuesta
                  </button>
                </span>
              </div>
            )}
            <textarea
              id="comment"
              rows={3}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              placeholder={replyTo ? 'Escribe tu respuesta aquí...' : 'Escribe tu comentario aquí...'}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`px-4 py-2 rounded-md text-white font-medium ${
              isLoading
                ? 'bg-purple-400 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700'
            }`}
          >
            {isLoading ? 'Publicando...' : replyTo ? 'Publicar respuesta' : 'Publicar comentario'}
          </button>
        </form>
      ) : (
        <div className="bg-gray-50 rounded-lg p-4 mb-8">
          <p className="text-gray-600">
            Debes{' '}
            <Link to="/login" className="text-purple-600 hover:text-purple-500 font-medium">
              iniciar sesión
            </Link>{' '}
            para comentar.
          </p>
        </div>
      )}

      {/* Lista de comentarios */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onDelete={handleDelete}
            onReply={(parentId) => setReplyTo(parentId)}
            postId={postId}
          />
        ))}
        {comments.length === 0 && (
          <p className="text-gray-500 text-center">No hay comentarios aún.</p>
        )}
      </div>
    </div>
  );
};
