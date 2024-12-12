import { supabase } from '../lib/supabase';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

export const categoryService = {
  async createCategory(category: Omit<Category, 'id'>) {
    const { data, error } = await supabase
      .from('categories')
      .insert([category])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getCategories() {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name');

    if (error) throw error;
    return data;
  },

  async getCategoryBySlug(slug: string) {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) throw error;
    return data;
  },

  async getPostsByCategory(categoryId: string) {
    const { data, error } = await supabase
      .from('posts')
      .select('*, categories(*)')
      .contains('category_ids', [categoryId]);

    if (error) throw error;
    return data;
  }
};
