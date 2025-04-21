import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const adminService = {
  // Blog Posts
  async saveBlogPost(post: any) {
    const { data, error } = await supabase
      .from('blog_posts')
      .upsert(post)
      .select();

    if (error) throw error;
    return data;
  },

  async deleteBlogPost(id: string) {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  // Services
  async saveService(service: any) {
    const { data, error } = await supabase
      .from('services')
      .upsert(service)
      .select();

    if (error) throw error;
    return data;
  },

  async deleteService(id: string) {
    const { error } = await supabase
      .from('services')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  // Portfolio
  async savePortfolioItem(item: any) {
    const { data, error } = await supabase
      .from('portfolio')
      .upsert(item)
      .select();

    if (error) throw error;
    return data;
  },

  async deletePortfolioItem(id: string) {
    const { error } = await supabase
      .from('portfolio')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};