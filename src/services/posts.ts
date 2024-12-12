import { supabase } from '../lib/supabase';
import { Post } from '../types/Post';

export const postService = {
  async getAllPosts(): Promise<Post[]> {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      throw error;
    }

    return data || [];
  },

  async getPostById(id: string): Promise<Post | null> {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  },

  async getPostsByCategory(categorySlug: string): Promise<Post[]> {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('category_slug', categorySlug);

    if (error) {
      throw error;
    }

    return data || [];
  },

  async createPost(post: Omit<Post, 'id'>): Promise<Post> {
    const { data, error } = await supabase
      .from('posts')
      .insert([post])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updatePost(id: string, post: Partial<Post>): Promise<Post> {
    const { data, error } = await supabase
      .from('posts')
      .update(post)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deletePost(id: string): Promise<void> {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};
